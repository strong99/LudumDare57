import { onCleanup } from "solid-js";
import { EventListener } from "./EventChannel";

export function createSubscribedSignal<TType>(model: TType & ({
    listen(callback: EventListener<TType>): void;
    unlisten(callback: EventListener<TType>): void;
} | {
    subscribe(callback: EventListener<TType>): void;
    unsubscribe(callback: EventListener<TType>): void;
}), callback: EventListener<TType>) {
    if ('subscribe' in model) {
        model.subscribe(callback);
        onCleanup(() => model.unsubscribe(callback));
    }
    else if ('listen' in model) {
        model.listen(callback);
        onCleanup(() => model.unlisten(callback));
    }
}