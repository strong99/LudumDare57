import { P } from "@rex/solid-pixi";
import { LineTool } from "../../controllers/tools/LineTool";
import { createSignal, Show } from "solid-js";
import { EventArgs, PropertyChangedArgs } from "../../utils/PropertyChangedArgs";
import { Point } from "../../utils/Line";
import { createSubscribedSignal } from "../../utils/SubscribedSignal";

export function RenderLineTool(props: {
    tool: LineTool
}) {
    const [startPosition, setStartPosition] = createSignal<Point | null>(null);
    const [endPosition, setEndPosition] = createSignal<Point | null>(null);

    createSubscribedSignal(props.tool, (source: LineTool, args: EventArgs) => {
        if (source instanceof LineTool === false
            || args instanceof PropertyChangedArgs === false) {
            return;
        }

        if (args.property === 'startPoint') {
            setStartPosition(args.newValue);
        }
        else if (args.property === 'currentPoint') {
            setEndPosition(args.newValue);
        }
    });

    return (
        <Show when={startPosition() && endPosition()}>
            <P.Graphics ref={g => {
                g.clear();
                g.moveTo(startPosition()?.x ?? 0, startPosition()?.y ?? 0);
                g.lineTo(endPosition()?.x ?? 0, endPosition()?.y ?? 0);
                g.stroke({ width: 2, color: 0xffffff });
            }} />
        </Show>
    );
}