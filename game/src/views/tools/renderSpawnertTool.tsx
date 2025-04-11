import { createSignal, For, onCleanup } from "solid-js";
import Level from "../../data/Level";
import { DefaultChannel } from "../../models/GlobalEventChannel";
import { P } from "@rex/solid-pixi";
import { EventArgs, PropertyChangedArgs } from "../../utils/PropertyChangedArgs";
import { SpawnerTool } from "../../controllers/tools/SpawnerTool";
import { ObjectSpawner } from "../../models/Types";
import { createSubscribedSignal } from "../../utils/SubscribedSignal";

export function RenderSpawnerTool(props: {
    tool: SpawnerTool
}) {
    const [spawners, setSpawners] = createSignal([...Level.spawners]);
    const [activeSpawnerId, setActiveSpawnerId] = createSignal<string | null>(null);

    createSubscribedSignal(DefaultChannel, (source, args) => {
        if (source === Level
            && args instanceof PropertyChangedArgs
            && args.property === 'spawners'
        ) {
            setSpawners([...Level.spawners]);
        }
    });

    const setActive = (spawnerId: string) => {
        props.tool.spawnerId = spawnerId;
        setActiveSpawnerId(spawnerId);
        console.log(spawnerId);
    };

    return (
        <For each={spawners()}>{(spawner) => (
            <Spawner spawner={spawner} active={activeSpawnerId() === spawner.id} setActive={setActive} />
        )}
        </For>
    );
}

function Spawner(props: {
    spawner: ObjectSpawner,
    active: boolean,
    setActive: (id: string) => void
}) {
    const [position, setPosition] = createSignal(props.spawner.position);
    console.log(props.spawner.position);

    createSubscribedSignal(DefaultChannel, (source: any, args: EventArgs) => {
        if (args instanceof PropertyChangedArgs
            && source && typeof source === 'object'
            && 'id' in source && source.id === props.spawner.id
            && args.property === "position"
        ) {
            setPosition(args.newValue);
        }
    });

    return (
        <P.Graphics interactive={true} ref={g => {
            g.clear();
            g.circle(position().x, position().y, 5);
            g.fill(props.active ? 0x00ff00 : 0x0000ff);
            g.stroke({ color: 0x0000ff, width: 1 });
        }} onmousedown={() => props.setActive(props.spawner.id)} />
    );
}