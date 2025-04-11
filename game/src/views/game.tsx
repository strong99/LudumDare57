import { createEffect, createSignal, For, Match, onCleanup, onMount, Show, Suspense, Switch } from "solid-js";
import { GameController, depth as calcMaxDepth } from "../controllers/GameController";
import { CreatureModel, FishingCable, GameModel, PlayerModel, SceneDialogEntryModel, SceneEntryModel, SceneModel, UpgradesModel } from "../models/GameModel";
import { EventArgs, KeyboardArgs, PointerArgs, PropertyChangedArgs } from "../utils/PropertyChangedArgs";
import styles from "./game.module.css";
import { Application, P, render, Stage, useAsset, useAssets } from "@rex/solid-pixi";
import { Tool } from "../controllers/tools/Tools";
import { RenderObjectTool } from "./tools/renderObjectTool";
import { RenderLineTool } from "./tools/renderLineTool";

import Level from "../data/Level";
import { DefaultChannel, UserEventChannel } from "../models/GlobalEventChannel";
import { EventListener } from "../utils/EventChannel";
import { ContainerChild, Texture } from "pixi.js";
import { LineTool } from "../controllers/tools/LineTool";
import { Layer, ObjectTemplate, ObjectTool } from "../controllers/tools/ObjectTool";
import { ObjectSpawner, StaticObject } from "../models/Types";
import { ShopButton, ShopPanel } from "./widget/shopMenu";
import { SpawnerTool } from "../controllers/tools/SpawnerTool";
import { RenderSpawnerTool } from "./tools/renderSpawnertTool";
import items from "../data/Items";
import creatures from "../data/Creatures";
import { createSubscribedSignal } from "../utils/SubscribedSignal";

const availableObjects: ObjectTemplate[] = [
    {
        id: 'plant-bol-1',
        image: 'plant-bol-1.png'
    },
    {
        id: 'plant-lang-2',
        image: 'plant-lang-2.png'
    },
    {
        id: 'plant-lange-slierten',
        image: 'plant-lange-slierten.png'
    },
    {
        id: 'plant-klein',
        image: 'plant-klein.png'
    },
    {
        id: 'koraal1',
        image: 'koraal1.png'
    },
    {
        id: 'shipwreck-rechts',
        image: 'shipwreck-rechts.png'
    },
    {
        id: 'shipwreck-links',
        image: 'shipwreck-links.png'
    },
    {
        id: 'crate',
        image: 'crate.png'
    },
    {
        id: 'tentakel1',
        image: 'tentakel1.png'
    },
    {
        id: 'tentakel2',
        image: 'tentakel2.png'
    },
    {
        id: 'tentakel3',
        image: 'tentakel3.png'
    },
    {
        id: 'tentakel4',
        image: 'tentakel4.png'
    },
    {
        id: 'tentakel5',
        image: 'tentakel5.png'
    },
    {
        id: 'tentakel6',
        image: 'tentakel6.png'
    },
    {
        id: 'tentakel7',
        image: 'tentakel7.png'
    },
    {
        id: 'crateRosemary',
        image: 'crateRosemary.png'
    }

];

const availableSpawners: ObjectSpawner[] = [
    {
        id: 'tuna',
        creatureId: 'tuna',
        maxAmount: 5,
        respawnInterval: 1000,
        position: { x: 0, y: 0 },
        startAmount: 4
    },
    {
        id: 'clownfish',
        creatureId: 'clownfish',
        maxAmount: 8,
        respawnInterval: 500,
        position: { x: 0, y: 0 },
        startAmount: 4
    },
    {
        id: 'kwal-oranje',
        creatureId: 'kwal-oranje',
        maxAmount: 5,
        respawnInterval: 1000,
        position: { x: 0, y: 0 },
        startAmount: 2
    },
    {
        id: 'kwal-paars',
        creatureId: 'kwal-paars',
        maxAmount: 5,
        respawnInterval: 1000,
        position: { x: 0, y: 0 },
        startAmount: 2
    },
    {
        id: 'kwal-groen',
        creatureId: 'kwal-groen',
        maxAmount: 5,
        respawnInterval: 1000,
        position: { x: 0, y: 0 },
        startAmount: 2
    },
    {
        id: 'paarse-vis',
        creatureId: 'paarse-vis',
        maxAmount: 4,
        respawnInterval: 1000,
        position: { x: 0, y: 0 },
        startAmount: 2
    }
];

export function Game(props: {
    game: GameController;
    model: Readonly<GameModel>
}) {
    const [editor, setEditor] = createSignal(props.game.editorActive);
    const [tool, setTool] = createSignal<Tool | null>(null);
    const [loading, setLoading] = createSignal<boolean>(props.game.isPaused());
    const [showShop, setShowShop] = createSignal(false);
    let canvasRef: HTMLCanvasElement;
    useAssets([
        ...items.map(x => `${x.id}.png`),
        ...Level.objects.map(x => x.image)
    ].filter((val, ind, arr) => (
        arr.indexOf(val) === ind
    )));

    createSubscribedSignal(props.game, (source: GameController, args: EventArgs) => {
        if (source instanceof GameController === false
            || args instanceof PropertyChangedArgs === false) {
            return;
        }

        if (args.property === "editorActive") {
            setEditor(args.newValue);
        }
        else if (args.property === "tool") {
            setTool(args.newValue);
        }
        else if (args.property === "paused") {
            setLoading(args.newValue === 'loading');
        }
        else if (args.property === "resume") {
            setLoading(false);
        }
    });

    onCleanup(() => {
        props.game.pause();
    });

    const toggleEditor = () => setEditor(!editor());
    const toggleLineTool = () => props.game.tool = (props.game.tool instanceof LineTool ? null : new LineTool(() => props.game.tool = null));
    const toggleObjectTool = () => props.game.tool = (props.game.tool instanceof ObjectTool ? null : new ObjectTool(() => props.game.tool = null));
    const toggleSpawnerTool = () => props.game.tool = (props.game.tool instanceof SpawnerTool ? null : new SpawnerTool(() => props.game.tool = null));

    const selectObject = (template: ObjectTemplate) => {
        if (tool() instanceof ObjectTool === false) {
            toggleObjectTool();
        }
        const t = (tool() as ObjectTool);
        t.template = template;
    }

    onMount(() => {
        render(() => (
            <Application background="#113368" canvas={canvasRef!} resizeTo={canvasRef!.parentElement!}>
                <Stage>
                    <Suspense>
                        <GameCanvas game={props.game} canvas={canvasRef!} />
                    </Suspense>
                </Stage>
            </Application>
        ));
    });

    const toggleShop = () => {
        setShowShop(!showShop());

        props.game.requestScene("scene:earning");
    }

    return (
        <div id="Game" class="view">
            <audio src="background.ogg" autoplay={true} loop={true} />
            <canvas ref={canvasRef!} />
            <Show when={!loading()}>
                <button type="button" name="toggle-editor" title="Toggle the editor menu" classList={{ [styles.active]: editor() }} onclick={toggleEditor}><span>Editor</span></button>
                <Show when={editor()}>
                    <menu class={styles['editor-menu']}>
                        <button type="button" classList={{ [styles.active]: tool() instanceof LineTool }} name="line" onclick={toggleLineTool}>Line</button>
                        <button type="button" classList={{ [styles.active]: tool() instanceof ObjectTool }} name="object" onclick={toggleObjectTool}>Object</button>
                        <button type="button" classList={{ [styles.active]: tool() instanceof SpawnerTool }} name="spawner" onclick={toggleSpawnerTool}>Spawner</button>
                        <button type="button" name="save" onclick={() => navigator.clipboard.writeText(JSON.stringify(Level))}>Copy</button>
                    </menu>
                </Show>
                <Show when={tool() instanceof ObjectTool}>
                    <menu class={styles['object-menu']}>
                        <For each={(tool() as ObjectTool).layers}>{(layer) => (
                            <LayerToggle layer={layer} tool={tool() as ObjectTool} />
                        )}</For>
                        <For each={availableObjects}>{(obj) => (
                            <button type="button" onclick={() => selectObject(obj)}><img src={obj.image} /> <span>{obj.id}</span></button>
                        )}</For>
                    </menu>
                </Show>
                <Show when={tool() instanceof SpawnerTool}>
                    <menu class={styles['object-menu']}>
                        <SpawnerToolMenu tool={tool() as SpawnerTool} toggleSpawnerTool={toggleSpawnerTool} />
                    </menu>
                </Show>
                <DepthMeter model={props.model} />
                <button name="menu" onclick={() => props.game.gotoMenu()}><span>Menu</span></button>
                <menu class={styles.actionBar}>
                    <button type="button" title="Press F - Fish up fishing to sell" name="toggle-fishing" onclick={() => props.game.toggleFishing()}><span><span class={styles.press}>F</span>ish</span></button>
                    <ShopButton game={props.game} toggleShop={toggleShop} />
                </menu>
                <ShopPanel game={props.game} toggleShop={toggleShop} showShop={showShop()} />
                <MoneyCounter model={props.model} />
                <SceneSubtitle game={props.game} model={props.model} />
            </Show>
            <Show when={loading()}>
                <div class={styles.loader}>
                    <p>...gathering fish...</p>
                </div>
            </Show>
        </div>
    );
}
function Radar(props: {
    game: GameController;
    model: Readonly<GameModel>;
}) {
    const radarRadius = 750;
    const radarRadiusSQ = 750 * 750;
    const visualRadius = 250;
    const getInRadius = () => [...props.model.creatures.filter(c => {
        const distance = c.position.distanceToSQ(props.model.player.position);
        return distance < radarRadiusSQ * (1 + (props.model.upgrades.radarRadius - 1) / 10) && distance > visualRadius * visualRadius;
    }).map(c => {
        const direction = props.model.player.position.directionTo(c.position);
        const distance = props.model.player.position.distanceTo(c.position);
        const x = direction.x * visualRadius;
        const y = direction.y * visualRadius;
        return ({
            x,
            y,
            r: Math.atan2(y, x) + Math.PI / 4 * 3,
            d: distance,
            id: c.id
        })
    })];
    const [texture] = useAsset('marker-person-01.png');
    const [radar, setRadar] = createSignal(getInRadius());

    createSubscribedSignal(props.model.player, (_source: PlayerModel, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "position") {
            const updated = getInRadius();
            setRadar(updated);
        }
    });

    return (
        <P.Container>
            <For each={radar()}>{(item) => (
                <P.Sprite position={item} texture={texture()} anchor={{ x: 0.5, y: 0.5 }} scale={{ x: 0.5, y: 0.5 }} rotation={item.r} alpha={1 - (item.d - visualRadius) / (radarRadius - visualRadius)} />
            )}</For>
        </P.Container>
    );
}

function SceneSubtitle(props: {
    game: GameController;
    model: Readonly<GameModel>;
}) {
    const createText = (entry?: SceneEntryModel | null) => {
        if (!entry
            || entry.type !== 'dialog'
            || !entry.text
        ) {
            return null;
        }

        return {
            text: entry.text,
            actor: entry.actor ?? null
        };
    };
    const [text, setText] = createSignal<{ text: string; actor: string } | null>(createText(props.model.scene?.entry));

    function playAudio() {
        const audio = new Audio("messageReceived.ogg");
        audio.play();
    }

    if (text()) {
        playAudio();
    }

    const updateTitle = (input?: SceneEntryModel) => {
        if (input instanceof SceneDialogEntryModel === false) {
            setText(null);
            return;
        }

        setText(createText(input));

        if (input?.text) {
            playAudio();
        }
    };

    createSubscribedSignal<Readonly<GameModel>>(props.model, (_source, args) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "scene"
        ) {
            args.oldValue?.unlisten(sceneListener);
            args.newValue?.listen(sceneListener);
            updateTitle(props.model.scene?.entry);
        }
    });
    const sceneListener = (_source: SceneModel, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "entry"
        ) {
            updateTitle(args.newValue);
        }
    }
    props.model.scene?.listen(sceneListener);
    onCleanup(() => {
        props.model.scene?.unlisten(sceneListener);
    });

    return (
        <Show when={text()}>
            <div classList={{ [styles.subTitle]: true, [styles[text()!.actor]]: true }}>
                <p>{text()!.text}</p>
            </div>
        </Show>
    );
}

function DepthMeter(props: {
    model: Readonly<GameModel>
}) {
    const [depth, setDepth] = createSignal(props.model.player.position.y);
    const [maxDepth, setMaxDepth] = createSignal(props.model.upgrades.maxDepth);

    createSubscribedSignal(props.model.player, (_source: PlayerModel, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs === false) {
            return;
        }
        if (args.property === "position") {
            setDepth(args.newValue.y);
        }
    });

    createSubscribedSignal(props.model.upgrades, (_source: UpgradesModel, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs === false) {
            return;
        }
        if (args.property === "maxDepth") {
            setMaxDepth(args.newValue);
        }
    });

    return (
        <div class={styles.depthMeter}>
            <p>Your depth: <span class={styles.focus}>{Math.floor((depth() - 170) / 50)}</span> meters</p>
            <p>You can dive up to <span class={styles.focus}>{(calcMaxDepth(maxDepth()) - 170) / 50}</span> meters</p>
        </div>
    )
}
function MoneyCounter(props: {
    model: Readonly<GameModel>
}) {
    const [money, setMoney] = createSignal(props.model.money);

    createSubscribedSignal<Readonly<GameModel>>(props.model, (_source, args) => {
        if (args instanceof PropertyChangedArgs === false) {
            return;
        }
        if (args.property === 'money') {
            setMoney(args.newValue);
        };
    });

    return (
        <div class={styles.moneyBar}>
            <p>Your cash: <span class={styles.focus}>{money()}</span> </p>
        </div>
    )
}
function SpawnerToolMenu(props: {
    tool: SpawnerTool;
    toggleSpawnerTool: () => void
}) {
    const [spawner, setSpawner] = createSignal<ObjectSpawner | null>(null);

    createSubscribedSignal(props.tool, (_source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "spawnerId") {
            setSpawner(Level.spawners.find(x => x.id === args.newValue) ?? null);
        }
    });

    const selectSpawner = (template: ObjectSpawner) => {
        if (props.tool instanceof SpawnerTool === false) {
            props.toggleSpawnerTool();
        }
        props.tool.template = template;
    }

    return (<>
        <For each={props.tool.layers}>{(layer) => (
            <LayerToggle layer={layer} tool={props.tool} />
        )}</For>
        <For each={availableSpawners}>{(obj) => (
            <button type="button" onclick={() => selectSpawner(obj)}><img src={`${obj.id}.png`} /> <span>{obj.id}</span></button>
        )}</For>
        <Show when={spawner()}>
            <div class={styles.form}>
                <SpawnerToolSpawnEditor tool={props.tool} spawner={spawner()!} />
            </div>
        </Show>
    </>);
}
function SpawnerToolSpawnEditor(props: {
    tool: SpawnerTool;
    spawner: ObjectSpawner;
}) {
    const [start, setStart] = createSignal(props.spawner.startAmount);
    const [max, setMax] = createSignal(props.spawner.maxAmount);
    const [interval, setInterval] = createSignal(props.spawner.respawnInterval);
    const [creature, setCreature] = createSignal(props.spawner.creatureId);

    const updateStart = (e: Event) => {
        props.spawner.startAmount = Number((e.target as HTMLInputElement).value);
        setStart(props.spawner.startAmount);
    };

    const updateMax = (e: Event) => {
        props.spawner.maxAmount = Number((e.target as HTMLInputElement).value);
        setMax(props.spawner.maxAmount);
    };

    const updateInterval = (e: Event) => {
        props.spawner.respawnInterval = Number((e.target as HTMLInputElement).value);
        setInterval(props.spawner.respawnInterval);
    };

    const updateCreature = (e: Event) => {
        props.spawner.creatureId = (e.target as HTMLSelectElement).value;
        setCreature(props.spawner.creatureId);
    };

    createEffect(() => {
        setStart(props.spawner.startAmount);
        setMax(props.spawner.maxAmount);
        setInterval(props.spawner.respawnInterval);
        setCreature(props.spawner.creatureId);
    }, [props.spawner]);

    return (<>
        <p>Selected: {props.spawner.id}</p>
        <div>
            <label>Creature</label>
            <select onchange={updateCreature}>
                <For each={creatures}>{creatureRef => (
                    <option value={creatureRef.id} selected={creature() === creatureRef.id} >{creatureRef.id}</option>
                )}</For>
            </select>
        </div>
        <div>
            <label for="inpStart">Start</label>
            <input id="inpStart" type="number" min="0" max="10" onchange={updateStart} value={start()} />
        </div>
        <div>
            <label for="inpMax">Max</label>
            <input id="inpMax" type="number" min="0" max="10" onchange={updateMax} value={max()} />
        </div>
        <div>
            <label for="inpInterval">Interval</label>
            <input id="inpInterval" type="number" min="0" max="10000" onchange={updateInterval} value={interval()} />
        </div>
    </>);
}
type LayeredTool = {
    layerId?: string;
    listen(callback: EventListener<LayeredTool>): void;
    unlisten(callback: EventListener<LayeredTool>): void
}
function LayerToggle(props: {
    layer: Layer,
    tool: LayeredTool
}) {
    const [isSelected, setIsSelected] = createSignal(props.tool.layerId === props.layer.id);

    createSubscribedSignal(props.tool, (_source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === 'layerId') {
            setIsSelected(args.newValue === props.layer.id);
        }
    });

    return (
        <div classList={{ [styles.layer]: true, [styles.active]: isSelected() }}>
            <input type="checkbox" title="visible" checked={props.layer.visible} onclick={() => props.layer.visible = !props.layer.visible} />
            <button type="button" onclick={() => props.tool.layerId = props.layer.id}><span>{props.layer.id}</span></button>
        </div>
    );
}
function GameCanvas(props: {
    game: GameController;
    canvas: HTMLCanvasElement;
}) {
    const model = props.game.model as GameModel;
    const [tool, setTool] = createSignal<Tool | null>(null);
    const [boundingBox, setBoundingBox] = createSignal([...Level.boundingBox]);
    const [objects, setObjects] = createSignal([...Level.objects]);
    const [creatures, setCreatures] = createSignal([...model.creatures]);
    const [cameraPosition, setCameraPosition] = createSignal({ x: -model.player.position.x + 640, y: -model.player.position.y + 360 });
    let containerRef: ContainerChild;

    const [backgroundSky] = useAsset('background-lucht.png');
    const [backgroundSea] = useAsset('background-zee.png');
    const [backgroundSeaEdge] = useAsset('background-zee-front.png');

    createSubscribedSignal(DefaultChannel, (source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs === false
            || source !== Level
        ) {
            return;
        }

        if (args.property === 'boundingBox') {
            setBoundingBox([...args.newValue]);
        }
        else if (args.property === 'objects') {
            setObjects([...args.newValue]);
        }
    });
    createSubscribedSignal(props.game, (_source: GameController, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs === false) {
            return;
        }

        if (args.property === "tool") {
            setTool(args.newValue);
        }
        else if (args.property === "creatures") {
            setCreatures([...model.creatures]);
        }
    });
    createSubscribedSignal((props.game.model as GameModel).player, (_source: PlayerModel, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs === false) {
            return;
        }

        if (args.property === "position") {
            setCameraPosition({
                x: (cameraPosition().x * 15 + (-args.newValue.x + 640)) / 16,
                y: (cameraPosition().y * 15 + (-args.newValue.y + 360)) / 16
            });
        }
    });

    const pointerEvent = (e: PointerEvent) => {
        const canvas = props.canvas as HTMLCanvasElement;
        const key = e.button === 0 ? 'left_mouse' : e.button === 1 ? 'middle_mouse' : e.button === 2 ? 'right_mouse' : 'unknown';

        const bb = canvas.getBoundingClientRect();

        UserEventChannel.publish(containerRef!, new PointerArgs(e.type, e.pointerId, {
            x: e.pageX,
            y: e.pageY
        }, {
            x: e.pageX - bb.left,
            y: e.pageY - bb.top
        }, containerRef!.toLocal({
            x: e.pageX - bb.left,
            y: e.pageY - bb.top
        }), key,
            [key, e.altKey ? 'alt' : null, e.ctrlKey ? 'ctrl' : null, e.shiftKey ? 'shift' : null].filter(x => x) as string[])
        );
        e.preventDefault();
    };
    const keyEvent = (e: KeyboardEvent) => {
        if (e.key === 'F5' || (e.key === 'r' && e.ctrlKey)) {
            return;
        }
        UserEventChannel.publish(containerRef!, new KeyboardArgs(e.type, e.key,
            [e.key, e.altKey ? 'alt' : null, e.ctrlKey ? 'ctrl' : null, e.shiftKey ? 'shift' : null].filter(x => x) as string[])
        );
        e.preventDefault();
    };

    onMount(() => {
        props.canvas.addEventListener('pointerdown', pointerEvent);
        props.canvas.addEventListener('pointermove', pointerEvent);
        props.canvas.addEventListener('pointerup', pointerEvent);
        window.addEventListener('keydown', keyEvent);
        window.addEventListener('keyup', keyEvent);
        window.addEventListener('keypress', keyEvent);
        props.game.resume();
    });
    onCleanup(() => {
        props.canvas.removeEventListener('pointerdown', pointerEvent);
        props.canvas.removeEventListener('pointermove', pointerEvent);
        props.canvas.removeEventListener('pointerup', pointerEvent);
        window.removeEventListener('keydown', keyEvent);
        window.removeEventListener('keyup', keyEvent);
        window.removeEventListener('keypress', keyEvent);
        props.game.pause();
    });

    return (
        <P.Container ref={containerRef!} x={cameraPosition().x} y={cameraPosition().y}>
            <P.TilingSprite texture={backgroundSky()} y={-200} tilePosition={{ x: 0, y: -1 }} scale={{ x: 8, y: 2 }} width={3072} height={256} />
            <P.TilingSprite texture={backgroundSea()} y={120} tilePosition={{ x: 0, y: -1 }} scale={{ x: 8, y: 2 }} width={3072} height={527} />
            <P.Container>
                <For each={objects().filter(o => o.layer === 'back')}>
                    {(obj) => (
                        <Image obj={obj} game={props.game} />
                    )}
                </For>
            </P.Container>
            <P.Container>
                <For each={objects().filter(o => o.layer === 'middle')}>
                    {(obj) => (
                        <Image obj={obj} game={props.game} />
                    )}
                </For>
                <MotherShip game={props.game} />
                <P.TilingSprite texture={backgroundSeaEdge()} y={120} tilePosition={{ x: 0, y: -1 }} scale={{ x: 8, y: 2 }} width={3072} height={60} alpha={0.5} />                <For each={creatures()}>
                    {(obj) => (
                        <Creature obj={obj} game={props.game} />
                    )}
                </For>
                <PlayerSubmarine game={props.game} />
            </P.Container>
            <P.Container>
                <For each={objects().filter(o => o.layer === 'front')}>
                    {(obj) => (
                        <Image obj={obj} game={props.game} />
                    )}
                </For>
            </P.Container>
            <P.Container>
                <Switch>
                    <Match when={tool() instanceof LineTool}>
                        <For each={boundingBox()}>
                            {(box) => (
                                <P.Graphics ref={g => {
                                    g.clear();
                                    g.moveTo(box.a.x, box.a.y);
                                    g.lineTo(box.b.x, box.b.y);
                                    g.stroke({ width: 1, color: 0xffffff });
                                }} />
                            )}
                        </For>
                        <RenderLineTool tool={tool() as LineTool} />
                    </Match>
                    <Match when={tool() instanceof ObjectTool}>
                        <RenderObjectTool tool={tool() as ObjectTool} />
                    </Match>
                    <Match when={tool() instanceof SpawnerTool}>
                        <RenderSpawnerTool tool={tool() as SpawnerTool} />
                    </Match>
                </Switch>
            </P.Container>
        </P.Container>
    );
}

const MotherShipSlowness = 200;
function MotherShip(props: { game: GameController }) {
    const player = (props.game.model as GameModel).player;

    const [position, setPosition] = createSignal<{ x: number; y: number }>({ x: player.position.x, y: 200 });
    const [flip, setFlip] = createSignal(false);
    const [texture] = useAsset('mothership.png');

    createSubscribedSignal(player, (_source, data) => {
        if (data instanceof PropertyChangedArgs
            && data.property === 'position'
        ) {
            const p = position();
            const x = (p.x * MotherShipSlowness + data.newValue.x) / (MotherShipSlowness + 1);
            setPosition({
                x,
                y: p.y
            });
            setFlip(data.newValue.x > x);
        }
    });

    return (
        <P.Container scale={{ x: flip() ? -1 : 1, y: 1 }} position={{ x: position().x, y: position().y }}>
            <P.Sprite texture={texture()} anchor={{ x: 0.5, y: 0.9 }} />
        </P.Container>
    );
}
function PlayerSubmarine(props: { game: GameController }) {
    const model = props.game.model as GameModel;
    const player = model.player;

    const [outer, setOuter] = createSignal<{ x: number, y: number }[]>([]);
    const [hits, setHits] = createSignal<{ x: number, y: number }[]>([]);
    const [position, setPosition] = createSignal<{ x: number; y: number }>(player.position);
    const [flip, setFlip] = createSignal(false);
    const [fishingCable, setFishingCable] = createSignal(player.fishingCable);
    const [texture] = useAsset('submarine.png');

    createSubscribedSignal(player, (_source, data) => {
        if (data instanceof PropertyChangedArgs === false) {
            return;
        }

        if (data.property === 'position') {
            setPosition(data.newValue);
            setFlip(player.direction.x < 0);
        }
        else if (data.property === 'fishingCable') {
            setFishingCable(data.newValue);
        }
    });

    createSubscribedSignal(DefaultChannel, (_source, args) => {
        if (args instanceof PropertyChangedArgs === false) {
            return;
        }

        if (args.property === "intersection") {
            const arr = hits();
            if (arr.length > 40) {
                arr.shift();
            }
            setHits([...arr, { x: args.newValue.x, y: args.newValue.y }])
        } else if (args.property === "outer") {
            const arr = outer();
            if (arr.length > 40) {
                arr.shift();
            }
            setOuter([...arr, { x: args.newValue.x, y: args.newValue.y }])
        }
    });

    const debug = false;

    return (
        <P.Container x={position().x} y={position().y}>
            <Radar game={props.game} model={model} />
            <Show when={fishingCable()}>
                <FishingCableWidget model={player} fishingCable={fishingCable()!} />
            </Show>
            <P.Sprite anchor={{ x: 0.5, y: 0.5 }} scale={{ x: flip() ? -1 : 1, y: 1 }} texture={texture()} />
            <Show when={debug}>
                <P.Graphics ref={g => {
                    g.clear();
                    g.ellipse(0, 0, 180, 60);
                    g.stroke({ width: 1, color: 0x00ffff });
                }} x={position().x + 10} y={position().y + 40} />
                <For each={hits()}>{hit => (
                    <P.Graphics ref={g => {
                        g.clear();
                        g.moveTo(position().x, position().y);
                        g.lineTo(hit.x, hit.y);
                        g.stroke({ width: 1, color: 0x00ffff });
                        g.ellipse(hit.x, hit.y, 5, 5);
                        g.fill(0x00ffff);
                    }} />
                )}</For>
                <For each={outer()}>{hit => (
                    <P.Graphics ref={g => {
                        g.clear();
                        g.moveTo(position().x, position().y);
                        g.lineTo(hit.x, hit.y);
                        g.stroke({ width: 1, color: 0xff00ff });
                        g.ellipse(hit.x, hit.y, 5, 5);
                        g.fill(0xff00ff);
                    }} />
                )}</For>
            </Show>
        </P.Container>
    );
}

function FishingCableWidget(props: { model: PlayerModel; fishingCable: FishingCable }) {
    const [position, setPosition] = createSignal(props.fishingCable.position);

    createSubscribedSignal(props.fishingCable, (_source, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "position"
        ) {
            setPosition(args.newValue);
        }
    });

    return (<P.Graphics ref={g => {
        g.clear();
        g.moveTo(0, 60);
        g.lineTo(position().x, position().y + 60);
        g.stroke({ width: 2, color: 0x000000 });
    }} />);
}

function Image(props: { game: GameController; obj: StaticObject }) {
    const isInteractive = () => props.game.tool instanceof ObjectTool && props.game.tool.layerId === props.obj.layer;
    const [texture] = useAsset(props.obj.image);
    const [position, setPosition] = createSignal({ x: props.obj.position.x, y: props.obj.position.y });
    const [interactive, setInteractive] = createSignal(isInteractive());
    const [hover, setHover] = createSignal(false);

    let tool: ObjectTool | null = null;
    createSubscribedSignal(DefaultChannel, (source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && source && typeof source === 'object'
            && 'id' in source && source.id === props.obj.id
            && args.property === "position"
        ) {
            setPosition(args.newValue);
        }
    });

    const toolListener = (_source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "layerId"
        ) {
            setInteractive(args.newValue === props.obj.layer);
        }
    };
    createSubscribedSignal(props.game, (_source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "tool"
        ) {
            if (args.newValue instanceof ObjectTool) {
                tool = args.newValue;
                tool.listen(toolListener);
                setInteractive(isInteractive());
            }
            else if (tool) {
                tool.unlisten(toolListener);
                setInteractive(false);
                tool = null;
            }
        }
    });

    onCleanup(() => {
        tool?.unlisten(toolListener);
    });

    const toggleObject = () => {
        if (props.game.tool instanceof ObjectTool) {
            props.game.tool.elementId = props.obj.id;
        }
    };

    return (
        <P.Sprite interactive={interactive()} onpointerover={() => setHover(true)} onpointerout={() => setHover(false)} tint={interactive() && hover() ? 0x44ffff : 0xffffff} x={position().x} y={position().y} texture={texture()} onpointerdown={toggleObject} />
    );
}
function Creature(props: {
    game: GameController;
    obj: CreatureModel;
}) {
    const [texture] = useAsset(`${props.obj.type}.png`);
    const [nTexture, setNTexture] = createSignal<Texture>();
    const [position, setPosition] = createSignal({ x: props.obj.position.x, y: props.obj.position.y });
    const [flip, setFlip] = createSignal(1);

    createSubscribedSignal(props.obj, (_source, args) => {
        if (args instanceof PropertyChangedArgs) {
            if (args.property === "position") {
                setPosition({ x: args.newValue.x, y: args.newValue.y });
            }
            else if (args.property === "direction") {
                const next = args.newValue.x < 0 ? -1 : 1;
                if (flip() !== next) {
                    setFlip(next);
                }
            }
        }
    });

    createEffect(() => {
        setNTexture(texture());
    });

    return (
        <P.Sprite position={position()} scale={{ x: flip(), y: 1 }} texture={nTexture()} anchor={{ x: 0.5, y: 0.5 }} />
    );
}