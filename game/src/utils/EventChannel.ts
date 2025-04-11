import { EventArgs } from "./PropertyChangedArgs";

export interface EventListener<TSource> {
    (source: TSource, data: EventArgs): void;
}

export interface EventChannelListener<TSource> {
    subscribe(listener: EventListener<TSource>): void;
    unsubscribe(listener: EventListener<TSource>): void;
}

export class EventChannel<TSource> implements EventChannel<TSource> {
    private _listeners: EventListener<TSource>[] = [];

    public subscribe(listener: EventListener<TSource>): void {
        this._listeners.push(listener);
    }

    public unsubscribe(listener: EventListener<TSource>): void {
        this._listeners = this._listeners.filter(l => l !== listener);
    }

    public publish(source: any, args: EventArgs): void {
        for (let i = 0; i < this._listeners.length; ++i) {
            this._listeners[i](source, args);
        }
    }
}

export class GenericEventChannel extends EventChannel<any> {}