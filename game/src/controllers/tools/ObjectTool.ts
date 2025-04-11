import Level from "../../data/Level.ts";
import { DefaultChannel, UserEventChannel } from "../../models/GlobalEventChannel";
import { StaticObject } from "../../models/Types.ts";
import { EventChannel, EventListener } from "../../utils/EventChannel";
import { Point } from "../../utils/Line";
import { EventArgs, KeyboardArgs, PointerArgs, PropertyChangedArgs } from "../../utils/PropertyChangedArgs";

import { Tool } from "./Tools.ts";

export interface ObjectTemplate {
    id: string;
    image: string;
}

export type Layer = {
    id: "back" | "front" | "middle";
    visible: boolean;
}

export class ObjectTool implements Tool {
    private readonly _eventChannel = new EventChannel<ObjectTool>();
    public listen(listener: EventListener<ObjectTool>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<ObjectTool>) { this._eventChannel.unsubscribe(listener); }

    public template?: ObjectTemplate;
    private _pointerDown: { [key: string]: boolean } = {};

    public layers: Layer[] = [
        {
            id: 'front',
            visible: true
        },
        {
            id: 'middle',
            visible: true
        },
        {
            id: 'back',
            visible: true
        }
    ];
    public get layerId(): "front" | "middle" | "back" | undefined { return this._layerId; }
    public set layerId(newValue: "front" | "middle" | "back") {
        const oldValue = this._layerId;
        this._layerId = newValue;
        if (oldValue !== newValue) {
            this._eventChannel.publish(this, new PropertyChangedArgs('layerId', newValue, oldValue));
        }
    }
    private _layerId?: "front" | "middle" | "back";

    public elementId?: string;
    private _element?: StaticObject;

    private _offsetCursor?: Point;

    private _eventListener = (_source: any, args: EventArgs) => {
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
            if (e.key !== 'left_mouse'
                || this._pointerDown[`${e.key}-${e.id}`]) {
                return;
            }

            this._pointerDown[`${e.key}-${e.id}`] = true;

            if (e.keys.includes('ctrl') && this.template) {
                Level.objects.push({
                    ...this.template,
                    id: `${Date.now()}`,
                    layer: this.layerId ??= 'middle',
                    position: {
                        x: e.positionInCanvas.x,
                        y: e.positionInCanvas.y
                    }
                });
                DefaultChannel.publish(Level, new PropertyChangedArgs('objects', Level.objects));
            }
            else if (e.keys.includes('shift') && this.elementId) {
                this._element = Level.objects.find(x => x.id === this.elementId);
                if (this._element) {
                    this._offsetCursor = new Point(e.positionInCanvas).displacementTo(this._element.position);
                }
                else {
                    delete this.elementId;
                }
            }
        },
        pointermove: (e: PointerArgs) => {
            if (!this._pointerDown[`left_mouse-${e.id}`]
                || !e.keys.includes('shift')
                || !this._offsetCursor
                || !this._element
                || this._element.locked
            ) {
                return;
            }

            const position = this._offsetCursor.add(e.positionInCanvas);
            this._element.position = { x: position.x, y: position.y };

            DefaultChannel.publish(this._element, new PropertyChangedArgs('position', this._element.position));
        },
        pointerup: (e: PointerArgs) => {

            if (!this._pointerDown[`left_mouse-${e.id}`]
                || !e.keys.includes('shift')
                || !this._offsetCursor
                || !this._element
                || this._element.locked
            ) {
                this._pointerDown[`${e.key}-${e.id}`] = false;
                return;
            }
            this._pointerDown[`${e.key}-${e.id}`] = false;
            delete this.elementId;
            delete this._element;
        },
        keydown: (e: KeyboardEvent) => {
            if (e.key === 'escape') {
                this._close();
            }
            else if (e.key === 'Delete'
                && this.elementId
                && this._element
                && !this._element.locked
            ) {
                Level.objects = Level.objects.filter(o => o.id !== this.elementId);
                delete this._element;
                delete this.elementId;
                console.log("Deleted");
                DefaultChannel.publish(Level, new PropertyChangedArgs('objects', Level.objects));
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