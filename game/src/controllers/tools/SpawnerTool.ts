import Level from "../../data/Level";
import { DefaultChannel, UserEventChannel } from "../../models/GlobalEventChannel";
import { ObjectSpawner } from "../../models/Types";
import { EventChannel, EventListener } from "../../utils/EventChannel";
import { Point } from "../../utils/Line";
import { EventArgs, KeyboardArgs, PointerArgs, PropertyChangedArgs } from "../../utils/PropertyChangedArgs";

import { Tool } from "./Tools";

export interface ObjectTemplate {
    id: string;
    image: string;
}

export type Layer = {
    id: "back"|"front"|"middle";
    visible: boolean;
}

export class SpawnerTool implements Tool {
    private readonly _eventChannel = new EventChannel<SpawnerTool>();
    public listen(listener: EventListener<SpawnerTool>) { this._eventChannel.subscribe(listener); }
    public unlisten(listener: EventListener<SpawnerTool>) { this._eventChannel.unsubscribe(listener); }

    public template?: ObjectSpawner;
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
    private _layerId?: "front"|"middle"|"back";

    public get spawnerId(): string | undefined { return this._spawnerId; }
    public set spawnerId(newValue: string | undefined) {
        const oldValue = this._spawnerId;
        this._spawnerId = newValue;
        if (oldValue !== newValue) {
            this._eventChannel.publish(this, new PropertyChangedArgs('spawnerId', newValue, oldValue));
        }
    }
    private _spawnerId?: string;

    private _spawner?: ObjectSpawner;

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
                Level.spawners.push({
                    ...this.template,
                    id: `spawner:${Date.now()}`,
                    position: {
                        x: e.positionInCanvas.x,
                        y: e.positionInCanvas.y
                    }
                });
                DefaultChannel.publish(Level, new PropertyChangedArgs('spawners', Level.objects));
            }
            else if (e.keys.includes('shift') && this.spawnerId) {
                this._spawner = Level.spawners.find(x => x.id === this.spawnerId);
                if (this._spawner) {
                    this._offsetCursor = new Point(e.positionInCanvas).displacementTo(this._spawner.position);
                }
                else {
                    delete this.spawnerId;
                }
            }
        },
        pointermove: (e: PointerArgs) => {
            if (!this._pointerDown[`left_mouse-${e.id}`]
                || !e.keys.includes('shift')
                || !this._offsetCursor
                || !this._spawner
            ) {
                return;
            }

            const position = this._offsetCursor.add(e.positionInCanvas);
            this._spawner.position = { x: position.x, y: position.y };

            DefaultChannel.publish(this._spawner, new PropertyChangedArgs('position', this._spawner.position));
        },
        pointerup: (e: PointerArgs) => {

            if (!this._pointerDown[`left_mouse-${e.id}`]
                || !e.keys.includes('shift')
                || !this._offsetCursor
                || !this._spawner
            ) {
                this._pointerDown[`${e.key}-${e.id}`] = false;
                return;
            }
            this._pointerDown[`${e.key}-${e.id}`] = false;
            delete this.spawnerId;
            delete this._spawner;
        },
        keydown: (e: KeyboardEvent) => {
            if (e.key === 'escape') {
                this._close();
            }
            else if (e.key === 'Delete' && this.spawnerId) {
                Level.spawners = Level.spawners.filter(o => o.id !== this.spawnerId);
                delete this._spawner;
                delete this.spawnerId;
                console.log("Deleted");
                DefaultChannel.publish(Level, new PropertyChangedArgs('spawners', Level.objects));
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