import { EventChannel, EventListener } from "../../utils/EventChannel";
import { Line, nearestPointOnLine, Point } from "../../utils/Line";
import { EventArgs, KeyboardArgs, PointerArgs, PropertyChangedArgs } from "../../utils/PropertyChangedArgs";

import Level from "../../data/Level.ts";
import { DefaultChannel, UserEventChannel } from "../../models/GlobalEventChannel";
import { Tool } from "./Tools";
import { BoundingBoxEdge } from "../../models/Types.ts";

export class LineTool implements Tool {
    public get startPoint() { return this._startPoint; }
    private _startPoint: Point | null = null;

    public get currentPoint() { return this._currentPoint; }
    private _currentPoint: Point | null = null;

    private readonly _eventChannel = new EventChannel<LineTool>();
    public listen(listener: EventListener<LineTool>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<LineTool>) { this._eventChannel.unsubscribe(listener); }

    private _eventListener = (_source: any, args: EventArgs): void => {
        if (args instanceof PointerArgs
            && args.type in this._eventListeners) {
            this._eventListeners[args.type](args);
        }
        else if (args instanceof KeyboardArgs
            && args.type in this._eventListeners) {
            this._eventListeners[args.type](args);
        }
    };
    private _eventListeners = {
        pointerdown: (e: PointerArgs) => {
            if (e.key === "left_mouse" || e.id > 0) {
                if (e.keys.includes("ctrl")) {
                    const pointer = new Point(e.positionInCanvas);
                    Level.boundingBox = Level.boundingBox.filter(x => nearestPointOnLine(new Line(x.a, x.b), pointer).distanceToSQ(pointer) > 8);
                    DefaultChannel.publish(Level, new PropertyChangedArgs('boundingBox', Level.boundingBox));
                }
                else {
                    const oldValue = this._startPoint;
                    const newValue = this._startPoint = new Point(e.positionInCanvas);
                    this._eventChannel.publish(this, new PropertyChangedArgs('startPoint', newValue, oldValue));
                }
            }
        },
        pointermove: (e: PointerArgs) => {
            if (e.key === "left_mouse" || e.id > 0) {
                const oldValue = this._currentPoint;
                const newValue = this._currentPoint = new Point(e.positionInCanvas);
                this._eventChannel.publish(this, new PropertyChangedArgs('currentPoint', newValue, oldValue));
            }
        },
        pointerup: (e: PointerArgs) => {
            if (e.key === "left_mouse" || e.id > 0) {
                const oldStartValue = this._startPoint;
                const oldEndValue = this._currentPoint;
                if (oldStartValue && oldEndValue && oldStartValue.distanceTo(oldEndValue) > 5) {
                    const ends = [
                        new Point(oldStartValue.x, oldStartValue.y),
                        new Point(oldEndValue.x, oldEndValue.y)
                    ];

                    const mergeRadiusSq = 25; //5 squared
                    const toRemove: BoundingBoxEdge[] = [];
                        let i = 0;
                    for (const edge of Level.boundingBox) {
                        let edited = false;
                        for (const end of ends) {
                            if (end.distanceToSQ(edge.a) < mergeRadiusSq) {
                                edge.a.x = end.x;
                                edge.a.y = end.y;
                                edited = true;
                            }
                            if (end.distanceToSQ(edge.b) < mergeRadiusSq) {
                                edge.b.x = end.x;
                                edge.b.y = end.y;
                                edited = true;
                            }
                        }

                        if (new Point(edge.a).distanceToSQ(edge.b) < mergeRadiusSq) {
                            toRemove.push(edge);
                        }
                        else if (edited) {
                            Level.boundingBox[i] = { ...edge };
                        }
                        ++i;
                    }
                    Level.boundingBox = Level.boundingBox.filter(x => !toRemove.includes(x));
                    Level.boundingBox.push({
                        a: {
                            x: oldStartValue.x,
                            y: oldStartValue.y
                        },
                        b: {
                            x: oldEndValue.x,
                            y: oldEndValue.y
                        }
                    });
                    DefaultChannel.publish(Level, new PropertyChangedArgs('boundingBox', Level.boundingBox, null));

                }

                this._currentPoint = null;
                this._startPoint = null;
                this._eventChannel.publish(this, new PropertyChangedArgs('startPoint', null, oldStartValue));
                this._eventChannel.publish(this, new PropertyChangedArgs('currentPoint', null, oldEndValue));
            }
        },
        keyup: (e: KeyboardArgs) => {
            if (e.key === 'Escape') {
                this._close();
            }
        }
    }
    private _close: () => void;
    public constructor(close: () => void) {
        this._close = close;
        UserEventChannel.subscribe(this._eventListener);
    }
    public destroy() {
        UserEventChannel.unsubscribe(this._eventListener);
    }
}