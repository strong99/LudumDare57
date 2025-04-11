import { Assets } from "pixi.js";
import Level from "../data/Level";
import Scenes from "../data/Scenes";
import { EventChannel, EventListener } from "../utils/EventChannel";
import { Point } from "../utils/Line";
import { PropertyChangedArgs } from "../utils/PropertyChangedArgs";
import { SceneEntry } from "./Types";

export interface StateModel {

}

export class MenuStateModel implements StateModel {

}

export class GameStateModel implements StateModel {

}

export enum CreditStateModelState {
    none,
    won,
    lost
}

export class CreditStateModel implements StateModel {
    public readonly state: CreditStateModelState;
    public constructor(state: CreditStateModelState) { 
        this.state = state;
    }
}

export class CreatureModel {
    public readonly id: string;
    public readonly type: string;

    public get position(): Point { return this._position; }
    public set position(newValue: Point) {
        const oldValue = this._position;
        this._position = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('position', newValue, oldValue));
    }
    private _position: Point;

    public get direction(): Point { return this._direction; }
    public set direction(newValue: Point) {
        const oldValue = this._direction;
        this._direction = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('direction', newValue, oldValue));
    }
    private _direction: Point;

    public readonly spawnerId?: string | Point;

    public constructor(id: string, type: string, position: Point, direction: Point, spawnerId?: string) {
        this.id = id;
        this.type = type;
        this._position = position;
        this._direction = direction;
        this.spawnerId = spawnerId ?? new Point(this._position);
    }

    private _eventChannel = new EventChannel<CreatureModel>();
    public listen(listener: EventListener<CreatureModel>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<CreatureModel>) { this._eventChannel.unsubscribe(listener); }
}

export enum FishingCableState {
    starting,
    active,
    ending,
    idle
};

export class FishingCable {
    public readonly maxLength: number = 100;

    public get position(): Point { return this._position; }
    public set position(newValue: Point) {
        const oldValue = this._position;
        this._position = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('position', newValue, oldValue));
    }
    private _position: Point = new Point();

    public get state(): FishingCableState { return this._state; }
    public set state(newValue: FishingCableState) {
        const oldValue = this._state;
        this._state = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('state', newValue, oldValue));
    }
    private _state: FishingCableState = FishingCableState.starting;

    public get fishId() { return this._fishId; }
    public set fishId(newValue) {
        const oldValue = this._fishId;
        this._fishId = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('fishId', newValue, oldValue));
    }
    private _fishId?: string;

    private _eventChannel = new EventChannel<FishingCable>();
    public listen(listener: EventListener<FishingCable>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<FishingCable>) { this._eventChannel.unsubscribe(listener); }
}

export class PlayerModel {
    public get position(): Readonly<Point> { return this._position; };
    public set position(newPosition: Point) {
        this._position = newPosition;
        this._eventChannel.publish(this, new PropertyChangedArgs('position', newPosition, this._position));
    };
    private _position: Readonly<Point> = new Point(1000, 200);

    public get direction(): Readonly<Point> { return this._direction; }
    public set direction(newDirection: Point) {
        this._direction = newDirection;
        this._eventChannel.publish(this, new PropertyChangedArgs('direction', newDirection, this._direction));
    }
    private _direction: Readonly<Point> = new Point();

    public get fishingCable(): FishingCable | null { return this._fishingCable; }
    public set fishingCable(newValue: FishingCable | null) {
        const oldValue = this._fishingCable;
        this._fishingCable = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('fishingCable', newValue, oldValue));
    }
    private _fishingCable: FishingCable | null = null;

    private _eventChannel = new EventChannel<PlayerModel>();
    public listen(listener: EventListener<PlayerModel>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<PlayerModel>) { this._eventChannel.unsubscribe(listener); }
}

export type ObjectiveModel = {

}

export interface SessionModel {
    state: StateModel;

    listen(listener: EventListener<SessionModel>): void;
    unlisten(listener: EventListener<SessionModel>): void;
}

export class PreGameModel implements SessionModel {
    public state: StateModel = new MenuStateModel();

    private _eventChannel = new EventChannel<PreGameModel>();
    public listen(listener: EventListener<PreGameModel>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<PreGameModel>) { this._eventChannel.unsubscribe(listener); }
}

export class UpgradesModel {
    public get lightStrength(): number { return this._lightStrength; }
    public set lightStrength(newValue: number) {
        const oldValue = this._lightStrength;
        this._lightStrength = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('lightStrength', newValue, oldValue));
    }
    private _lightStrength: number = 1;

    public get radarRadius(): number { return this._radarRadius; }
    public set radarRadius(newValue: number) {
        const oldValue = this._radarRadius;
        this._radarRadius = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('radarRadius', newValue, oldValue));
    }
    private _radarRadius: number = 1;

    public get maxDepth(): number { return this._maxDepth; }
    public set maxDepth(newValue: number) {
        const oldValue = this._maxDepth;
        this._maxDepth = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('maxDepth', newValue, oldValue));
    }
    private _maxDepth: number = 1;

    public get maxSpeed(): number { return this._maxSpeed; }
    public set maxSpeed(newValue: number) {
        const oldValue = this._maxSpeed;
        this._maxSpeed = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('maxSpeed', newValue, oldValue));
    }
    private _maxSpeed: number = 1;

    private _eventChannel = new EventChannel<UpgradesModel>();
    public listen(listener: EventListener<UpgradesModel>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<UpgradesModel>) { this._eventChannel.unsubscribe(listener); }
}

export class SceneModel {
    public readonly id: string;

    public get entry(): SceneEntryModel { return this._entry; }
    public set entry(newValue: SceneEntryModel) {
        const oldValue = this._entry;
        this._entry = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('entry', newValue, oldValue));
    }
    private _entry: SceneEntryModel;

    public constructor(sceneId: string, entryIdx: number, entry: SceneEntry) {
        this.id = sceneId;
        this._entry = SceneEntryModelFactory(entryIdx, entry);
    }

    private _eventChannel = new EventChannel<SceneModel>();
    public listen(listener: EventListener<SceneModel>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<SceneModel>) { this._eventChannel.unsubscribe(listener); }
}

export type SceneEntryModel = SceneDialogEntryModel | SceneCreditsEntryModel;
export function SceneEntryModelFactory(idx: number, input: SceneEntry): SceneEntryModel {
    if (input.type === "credits") {
        return new SceneCreditsEntryModel(idx, input);
    }
    else {
        return new SceneDialogEntryModel(idx, input);
    }
}
export class SceneDialogEntryModel {
    public readonly idx: number;
    public readonly type = "dialog";
    public readonly actor: string;
    public readonly text: string;
    public duration: number;

    public constructor(idx: number, entry: SceneEntry & { type: 'dialog' }) {
        this.idx = idx;
        this.type = entry.type;
        this.actor = entry.actor;
        this.text = entry.text;
        this.duration = entry.duration;
    }
}

export class SceneCreditsEntryModel {
    public readonly idx: number;
    public readonly type = "credits";
    public constructor(idx: number, entry: SceneEntry & { type: 'credits' }) {
        this.idx = idx;
        this.type = entry.type;
    }
}

export class GameModel implements SessionModel {
    public get state(): StateModel { return this._state; }
    public set state(value: StateModel) {
        const oldValue = this._state;
        const newValue = this._state = value;
        this._eventChannel.publish(this, new PropertyChangedArgs('state', newValue, oldValue));
    }
    private _state: StateModel = new GameStateModel();

    public readonly upgrades: UpgradesModel = new UpgradesModel();

    public spawners: { [id: string]: number } = {};

    public tags: string[] = [];

    public get creatures(): CreatureModel[] {
        return this._creatures;
    }
    public set creatures(newValue: CreatureModel[]) {
        const oldValue = this._creatures;
        this._creatures = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('creatures', newValue, oldValue));
    }
    private _creatures: CreatureModel[] = [];

    public readonly player: PlayerModel = new PlayerModel();

    public get scene(): SceneModel | null { return this._scene; }
    public set scene(newValue: SceneModel | null) {
        const oldValue = this._scene;
        this._scene = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('scene', newValue, oldValue));
    }
    private _scene: SceneModel | null = new SceneModel("intro", 0, Scenes.find(s => s.id === "intro")!.events[0]);

    public get items(): string[] { return this._items; }
    public set items(newValue: string[]) {
        const oldValue = this._items;
        this._items = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('items', newValue, oldValue));
    }
    private _items: string[] = [];

    public get money(): number { return this._money; }
    public set money(newValue: number) {
        const oldValue = this._money;
        this._money = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('money', newValue, oldValue));
    }
    private _money: number = 25;

    public get objectives(): ObjectiveModel[] { return this._objectives; }
    public set objectives(newValue: ObjectiveModel[]) {
        const oldValue = this._objectives;
        this._objectives = newValue;
        this._eventChannel.publish(this, new PropertyChangedArgs('objectives', newValue, oldValue));
    }
    private _objectives: ObjectiveModel[] = [];

    public constructor() {
        // Transform static level by replacing certain static
        // objects to dynamic ones, like spawners
        (async () => {
            const x = ['crate', 'kist', 'chest'];
            const crates = Level.objects.filter(o => x.some(t => o.image.includes(t)));
            for (const entry of crates) {
                Level.objects = Level.objects.filter(x => x !== entry);
                const asset = await Assets.load(entry.image);
                Level.spawners.push({
                    id: entry.id,
                    creatureId: entry.image.replace('.png', ''),
                    maxAmount: 0,
                    startAmount: 1,
                    position: new Point(entry.position.x + asset.width / 2, entry.position.y + asset.height / 2),
                    respawnInterval: 0
                });
            }

            // Start up spawners
            for (const spawner of Level.spawners) {
                for (let i = 0; i < spawner.startAmount; i++) {
                    const creature = new CreatureModel(`${spawner.id}:${i}`, spawner.creatureId, new Point(spawner.position), new Point(0, 0), spawner.id);
                    this._creatures.push(creature);
                }
            }
        })();
    }

    private _eventChannel = new EventChannel<GameModel>();
    public listen(listener: EventListener<GameModel>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<GameModel>) { this._eventChannel.unsubscribe(listener); }
}
