import creatures from "../data/Creatures";
import Items from "../data/Items";
import Level from "../data/Level";
import Scenes from "../data/Scenes";
import Upgrades from "../data/Upgrades";
import { CreatureModel, CreditStateModel, CreditStateModelState, FishingCable, FishingCableState, GameModel, GameStateModel, MenuStateModel, PreGameModel, SceneCreditsEntryModel, SceneDialogEntryModel, SceneEntryModelFactory, SceneModel, SessionModel } from "../models/GameModel";
import { DefaultChannel, UserEventChannel } from "../models/GlobalEventChannel";
import { ObjectSpawner } from "../models/Types";
import { EventChannel, EventListener } from "../utils/EventChannel";
import { intersectEllipse, Line, Point } from "../utils/Line";
import { EventArgs, KeyboardArgs, PropertyChangedArgs } from "../utils/PropertyChangedArgs";
import { Tool } from "./tools/Tools";

const keyToActionKeys = {
    "ArrowLeft": "left",
    "ArrowRight": "right",
    "ArrowUp": "up",
    "ArrowDown": "down",
    "a": "left",
    "d": "right",
    "w": "up",
    "s": "down"
};

export function depth(level: number) {
    return level * 1800 + 170 + 250;
}

export class GameController {
    public get model(): Readonly<SessionModel> { return this._model; }
    private _model: SessionModel = new PreGameModel();

    private _eventChannel = new EventChannel<GameController>();
    public listen(listener: EventListener<GameController>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<GameController>) { this._eventChannel.unsubscribe(listener); }

    public editorActive: boolean = false;

    public constructor() {
        requestAnimationFrame(timestamp => this.update(timestamp));

        UserEventChannel.subscribe((_source: any, args: EventArgs) => {
            if (args instanceof KeyboardArgs === false) {
                return;
            }

            const key = keyToActionKeys[args.key] ?? args.key;
            if (args.type === 'keydown') {
                const org = this._buttons[key];

                if (!org) {
                    if (key === " " || key === "f" || key === "F") {
                        this.toggleFishing();
                    }
                }

                this._buttons[key] = true;
            }
            else if (args.type === 'keyup') {
                this._buttons[key] = false;
            }
        });
    }

    private _paused: string | null = "loading";
    public isPaused() { return !!this._paused; }
    public pause(reason?: string) {
        const oldValue = this._paused;
        const newValue = this._paused = reason ?? "paused";
        this._eventChannel.publish(this, new PropertyChangedArgs('paused', newValue, oldValue));
    }

    public resume() {
        const oldValue = this._paused;
        const newValue = this._paused = null;
        this._eventChannel.publish(this, new PropertyChangedArgs('resume', newValue, oldValue));
    }

    public move(direction: Point) {
        if (this._model.state instanceof GameModel) {
            this._model.state.player.direction.set(direction);
        }
    }

    public toggleFishing() {
        const model = (this.model as GameModel);
        let cable = model.player.fishingCable;
        if (cable) {
            cable.state = FishingCableState.ending;
        }
        else if (!cable) {
            cable = new FishingCable();
            cable.state = FishingCableState.starting;
            model.player.fishingCable = cable;
        }
    }

    public continueGame() {
        const oldValue = this._model;
        const newValue = this._model.state = new GameStateModel();
        this._eventChannel.publish(this, new PropertyChangedArgs('model', newValue, oldValue));
    }

    public credits() {
        const oldValue = this._model;
        const newValue = this._model.state = new CreditStateModel(CreditStateModelState.none);
        this._eventChannel.publish(this, new PropertyChangedArgs('model', newValue, oldValue));
    }

    public startGame() {
        const oldValue = this._model;
        const newValue = this._model = new GameModel();
        this._eventChannel.publish(this, new PropertyChangedArgs('model', newValue, oldValue));
    }

    public gotoMenu() {
        const oldValue = this._model;
        const newValue = this._model.state = new MenuStateModel();
        this._eventChannel.publish(this, new PropertyChangedArgs('model', newValue, oldValue));
    }

    public get tool(): Tool | null { return this._tool; }
    public set tool(newTool: Tool | null) {
        const oldTool = this._tool;
        this._tool = newTool;

        if (oldTool !== newTool) {
            oldTool?.destroy();
            this._eventChannel.publish(this, new PropertyChangedArgs('tool', newTool, oldTool));
        }
    }
    private _tool: Tool | null = null;

    private lastTimestamp = 0;
    private update(timestamp: number) {
        const delta = timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;

        if (!this._paused
            && this.model instanceof GameModel
            && this.model.state instanceof GameStateModel
        ) {
            this.updatePlayer(delta);
            this.updateSpawners(delta);
            this.updateCreatures(delta);
            this.updateScene(delta);
        }

        requestAnimationFrame(timestamp => this.update(timestamp));
    }

    public updateScene(delta: number) {
        const model = this.model as GameModel;
        if (model.scene?.entry instanceof SceneCreditsEntryModel) {
            model.state = new CreditStateModel(CreditStateModelState.won);
        }
        else if (model.scene?.entry instanceof SceneDialogEntryModel) {
            model.scene.entry.duration -= delta;
            if (model.scene.entry.duration < 0) {
                const scene = Scenes.find(s => s.id === model.scene?.id);
                const nextIdx = model.scene.entry.idx + 1;
                const entry = scene?.events[nextIdx];
                if (!entry) {
                    model.scene = null;
                }
                else {
                    model.scene.entry = SceneEntryModelFactory(nextIdx, entry);
                }
            }
        }
    }

    public sell(itemId: string) {
        const item = Items.find(x => x.id === itemId);
        if (!item) {
            throw new Error("Did not find item");
        }

        const model = this.model as GameModel;
        model.money += item.cost;
        model.items.splice(model.items.indexOf(itemId), 1);
        model.items = [...model.items];

        if (itemId === 'crateRosemary'
            && !model.tags.includes('sold:crateRosemary')
        ) {
            model.tags.push('sold:crateRosemary');

            const upgradeScene = Scenes.find(s => s.id === 'treasureRetrieved')!;
            model.scene = new SceneModel(upgradeScene.id, 0, upgradeScene.events[0]);
            model.tags.push('scene:treasureRetrieved');
        }

        this._eventChannel.publish(this, new PropertyChangedArgs('items', model.items));
    }

    public upgrade(upgradeId: string) {
        const item = Upgrades.find(x => x.id === upgradeId);
        if (!item) {
            throw new Error(`Did not find item ${upgradeId}`);
        }

        const model = this.model as GameModel;
        const level = model.upgrades[item.improves] - 1;
        const cost = item.cost[level];
        if (cost < 0 || !cost) {
            console.warn(`No cost available for upgrade`);
            return;
        }
        else if (model.money < cost) {
            console.warn(`not enough money ${cost} / ${model.money}`);
            return;
        }
        model.money -= cost;
        model.upgrades[item.improves]++;
    }

    private _buttons: { [key: string]: boolean } = {};
    private _timePassed = 0;
    private updatePlayer(delta: number) {
        this._timePassed += delta;
        const model = (this.model as GameModel);
        const player = model.player;
        const speedMultiplier = model.upgrades.maxSpeed * 0.15 + 1;
        const newPosition = player.position.add(player.direction.multiply(delta / 3 + speedMultiplier));

        const maxDepth = depth(model.upgrades.maxDepth);

        const newDirection = player.direction.multiply(0.95);

        let x = newDirection.x;
        let y = newDirection.y;
        if (this._buttons['left']) {
            x = -1;
        }
        else if (this._buttons['right']) {
            x = 1;
        }

        if (this._buttons['up']) {
            y = -1;
        }
        else if (this._buttons['down']) {
            y = 1;
        }

        if (x < 0 && player.position.x < 700) {
            x = 0;
        }
        else if (x > 0 && player.position.x > 24576 - 700) {
            x = 0;
        }

        player.direction = new Point(x, y);

        const size = new Point(130, 60);
        let force = new Point();

        for (const edge of Level.boundingBox) {
            const pa = new Point(edge.a);
            if (pa.distanceToSQ(player.position) > 1024 * 1024) {
                continue;
            }

            const result = intersectEllipse(new Line(pa, new Point(edge.b)), newPosition, size);
            if (!result) {
                continue;
            }

            const sy = size.x / size.y;

            const inner = new Point(result.x, result.y * sy);
            const innerDisplacement = new Point(newPosition.x, newPosition.y * sy).displacementTo(inner);
            const innerDistance = innerDisplacement.length();

            const direction = innerDisplacement.normalize();

            const outerDisplacement = direction.multiply(size.x);
            const outerDistance = outerDisplacement.length();
            const outer = newPosition.add(outerDisplacement);

            if (outerDistance > size.x) {
                continue;
            }

            const rescaledOuter = new Point(outer.x, outer.y / sy);

            const inwardDirection = outerDisplacement.directionTo(innerDisplacement);
            const inwardDisplacement = inwardDirection.multiply(outerDistance - innerDistance);

            force = force.add(inwardDisplacement.multiply(1.01));

            DefaultChannel.publish(this, new PropertyChangedArgs('intersection', inner));
            DefaultChannel.publish(this, new PropertyChangedArgs('outer', rescaledOuter));
        }

        const oldPosition = player.position;

        player.position = new Point({
            x: newPosition.x + force.x,
            y: Math.min(maxDepth, Math.max(170, newPosition.y + force.y + Math.sin(this._timePassed / 500) * Math.max(1 - (newPosition.y + force.y - 170) / 170, 0)))
        });

        const finalPosition = player.position;

        const upgradesThreshold = 2000;
        const tooDeepThreshold = 3000;
        if (finalPosition.y > upgradesThreshold
            && oldPosition.y < upgradesThreshold
            && model.upgrades.maxDepth === 1
            && (!model.scene || model.scene.id !== 'upgrades')
        ) {
            const upgradeScene = Scenes.find(s => s.id === 'upgrades')!;
            model.scene = new SceneModel(upgradeScene.id, 0, upgradeScene.events[0]);
            model.tags.push('scene:upgrades');
        }
        else if (finalPosition.y > tooDeepThreshold
            && oldPosition.y < tooDeepThreshold
            && !model.tags.includes('scene:tooDeep')
        ) {
            const upgradeScene = Scenes.find(s => s.id === 'tooDeep')!;
            model.scene = new SceneModel(upgradeScene.id, 0, upgradeScene.events[0]);
            model.tags.push('scene:tooDeep');
        }
        else if (finalPosition.y < tooDeepThreshold
            && oldPosition.y > tooDeepThreshold
        ) {
            if (model.items.includes('crateRosemary')) {
                const upgradeScene = Scenes.find(s => s.id === 'treasureRetrieving')!;
                model.scene = new SceneModel(upgradeScene.id, 0, upgradeScene.events[0]);
                model.tags.push('scene:treasureRetrieving');
            } else {
                const upgradeScene = Scenes.find(s => s.id === 'backFromTheDeep')!;
                model.scene = new SceneModel(upgradeScene.id, 0, upgradeScene.events[0]);
                model.tags.push('scene:backFromTheDeep');
            }
        }

        const fishingCable = model.player.fishingCable;
        if (fishingCable) {
            let x = fishingCable.position.x;
            let y = fishingCable.position.y;
            if (fishingCable.state === FishingCableState.ending) {
                y = Math.max(0, y - delta / 4);

                const fishingEndingPosition = model.player.position.add({ x: x, y: 60 + y });
                const creature = model.creatures.find(c => c.id === fishingCable.fishId);
                if (creature) {
                    creature.position = new Point(fishingEndingPosition);
                }

                if (y == 0) {
                    fishingCable.state = FishingCableState.idle;
                    model.player.fishingCable = null;

                    if (creature) {
                        model.creatures = model.creatures.filter(c => c !== creature);
                        model.items.push(creature.type);

                        this._eventChannel.publish(this, new PropertyChangedArgs('creatures', model.creatures));
                    }
                }
            }
            else if (fishingCable.state === FishingCableState.starting) {
                y = Math.min(fishingCable.maxLength, y + delta / 4);
                if (y == fishingCable.maxLength) {
                    fishingCable.state = FishingCableState.active;
                }
            }

            if (fishingCable.state != FishingCableState.idle) {
                const length = y / fishingCable.maxLength;
                const dx = (oldPosition.x + finalPosition.x) / 2 - finalPosition.x;
                x = Math.min(50, x + dx) * 0.95 * length;
                fishingCable.position = new Point(x, y);
            }
        }
    }

    private updateCreatures(delta: number) {
        const model = this.model as GameModel;
        const fishingCableEndpoint = model.player.fishingCable && Math.abs(model.player.fishingCable.position.x) < 2 ? model.player.fishingCable.position.add(model.player.position).add({ x: 0, y: 60 }) : undefined;
        for (const creature of model.creatures) {
            this.updateCreature(creature, model, delta, fishingCableEndpoint);
        }
    }

    private static readonly activeDistance = 1300 * 1300;
    private static readonly startFleeDistance = 300 * 300;
    private updateCreature(creature: CreatureModel, model: GameModel, delta: number, fishingCableEndpoint?: Point) {
        const distanceToPlayer = creature.position.distanceToSQ(model.player.position);
        if (distanceToPlayer > GameController.activeDistance) {
            return;
        }
        const maxRadius = 256;
        const spawner = typeof creature.spawnerId === 'string' ? Level.spawners.find(s => s.id === creature.spawnerId) ?? null : null;
        const template = creatures.find(c => c.id === creature.type)!;
        const center = typeof creature.spawnerId === 'string' ? spawner!.position : creature.spawnerId as Point;
        const distanceToCenter = creature.position.distanceTo(center);
        const distanceToFishingCableEnd = model.player.fishingCable
            && (
                (
                    model.player.fishingCable.state === FishingCableState.active
                    && !model.player.fishingCable.fishId
                )
                || model.player.fishingCable.fishId === creature.id
            )
            && (fishingCableEndpoint?.distanceToSQ(creature.position) ?? Number.MAX_SAFE_INTEGER) < maxRadius * maxRadius;
        const nextDistanceToCenter = creature.position.add(creature.direction).distanceTo(center);
        if (distanceToPlayer < GameController.startFleeDistance
            && model.player.direction.length() > 0.25
        ) {
            creature.direction = model.player.position.directionTo(creature.position).normalize();
        }
        else if (distanceToFishingCableEnd) {
            creature.direction = creature.position.directionTo(fishingCableEndpoint!);
        }
        else if (template.range !== 0 && (
            (nextDistanceToCenter > distanceToCenter && distanceToCenter > template.range)
            || creature.direction.x + creature.direction.y === 0
            || creature.position.add(creature.direction).y < 180
        )) {
            creature.direction = template.range === 0 ? new Point() : new Point(
                (Math.random() - .5),
                (Math.random() - .5) / 3
            ).normalize();
        }

        if (creature.direction.x !== 0 && creature.direction.y !== 0
            && (fishingCableEndpoint?.distanceToSQ(creature.position) ?? Number.MAX_SAFE_INTEGER) > 9
        ) {
            const newDisplacement = creature.direction.multiply(delta / 25 * template.speed);
            const newPosition = creature.position.add(newDisplacement);
            newPosition.set(
                newPosition.x,
                Math.max(180, newPosition.y)
            );
            creature.position = newPosition;

            if (model.player.fishingCable
                && (fishingCableEndpoint?.distanceToSQ(creature.position) ?? Number.MAX_SAFE_INTEGER) <= 9) {
                model.player.fishingCable.fishId = creature.id;
            }
        }
    }

    private updateSpawners(delta: number) {
        const model = (this.model as GameModel);
        for (const spawner of Level.spawners) {
            const children = model.creatures.filter(c => c.spawnerId === spawner.id);
            if (children.length < spawner.maxAmount) {
                if (spawner.id in model.spawners === false
                    || isNaN(model.spawners[spawner.id])) {
                    model.spawners[spawner.id] = 0;
                }

                model.spawners[spawner.id] -= delta;

                const timeToNextspawn = model.spawners[spawner.id];

                if (timeToNextspawn < 0) {
                    this.spawnCreature(spawner, model);
                }
            }
        }
    }

    private spawnCreature(spawner: ObjectSpawner, model: GameModel) {
        const creature = creatures.find(c => c.id === spawner.creatureId)!;
        const creatureModel = new CreatureModel(
            `${Date.now()}`,
            creature.id,
            new Point(spawner.position),
            new Point(0, 0),
            spawner.id
        );
        model.creatures.push(creatureModel);
        model.spawners[spawner.id] = spawner.respawnInterval;

        this._eventChannel.publish(this, new PropertyChangedArgs('creatures', model.creatures));
    }

    public requestScene(id: string) {
        const model = this.model;
        if (model instanceof GameModel
            && !model.tags.includes(id)
        ) {
            model.tags.push(id)
            const scene = Scenes.find(x => x.id === "earning")!;
            model.scene = new SceneModel(scene.id, 0, scene.events[0]);
        }
    }
}
