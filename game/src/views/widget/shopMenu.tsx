import { createEffect, createSignal, For, onCleanup, Show } from "solid-js";
import { GameController } from "../../controllers/GameController";
import { GameModel } from "../../models/GameModel";
import { PropertyChangedArgs } from "../../utils/PropertyChangedArgs";
import styles from "./shopMenu.module.css";

import Items from "../../data/Items.ts";
import Upgrades from "../../data/Upgrades.ts";
import { Item, UpgradeItem } from "../../models/Types.ts";
import { createSubscribedSignal } from "../../utils/SubscribedSignal.ts";

export function ShopButton(props: { game: GameController, toggleShop: () => void }) {
    const [isNear, setIsNear] = createSignal(false);

    let pressed = false;
    const openMenu = (e: KeyboardEvent) => {
        if (e.key === 'b' && !pressed) {
            props.toggleShop();
        }
    };
    const cancelKey = (e: KeyboardEvent) => {
        if (e.key === 'b' && pressed) {
            pressed = false;
        }
    };
    window.addEventListener('keydown', openMenu);
    window.addEventListener('keyup', cancelKey);

    createSubscribedSignal((props.game.model as GameModel).player, (_source, args) => {
        if (args instanceof PropertyChangedArgs
            && args.property === "position"
        ) {
            setIsNear(args.newValue.y < 250);
        }
    });

    onCleanup(() => {
        window.removeEventListener('keydown', openMenu);
        window.removeEventListener('keyup', cancelKey);
    });


    return (
        <Show when={isNear()}>
            <button class={styles.shopButton} title="Press B - Open the buy menu" onclick={props.toggleShop}><span><span class={styles.press}>B</span>uy</span></button>
        </Show>
    );
}

export function ShopPanel(props: { game: GameController, toggleShop: ()=>void, showShop: boolean }) {
    const model = props.game.model as GameModel;
    const [money, setMoney] = createSignal(model.money);

    createSubscribedSignal(model, (_source, args) => {
        if (args instanceof PropertyChangedArgs
            && args.property === 'money') {
            setMoney(args.newValue);
        }
    });

    return (
        <Show when={props.showShop}>

            <div class={styles.shopModal}>
                <div class={styles.closeButton}>
                    <button type="button" class={styles.close} onclick={props.toggleShop}> <span></span>Close</button>
                </div>

                <div class={styles.totalShop}>
                    <div class={styles.leftSide}>

                        <header>
                            <h1 class={styles.titleShop}>Sell</h1>
                        </header>

                        <div class={styles.sell}>
                            <For each={Items}>{(item) =>
                                <ItemCard item={item} game={props.game} model={model} />
                            }</For>
                        </div>
                    </div>

                    <div class={styles.rightSide}>

                        <header>
                            <h1 class={styles.titleShop}>Upgrade</h1>
                        </header>

                        <div class={styles.buy}>
                            <For each={Upgrades}>{(upgrade) =>
                                <UpgradeCard upgrade={upgrade} game={props.game} model={model} money={money()} />
                            }</For>
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    );
}

function UpgradeCard(props: {
    upgrade: UpgradeItem;
    game: GameController;
    model: GameModel;
    money: number;
}) {
    const [state, setState] = createSignal({
        level: props.model.upgrades[props.upgrade.improves],
        cost: props.upgrade.cost[props.model.upgrades[props.upgrade.improves] - 1]
    });


    createEffect(() => {
        createSubscribedSignal(props.model.upgrades, (_source, args) => {
            if (args instanceof PropertyChangedArgs
                && args.property === props.upgrade.improves) {
                setState({
                    level: args.newValue,
                    cost: props.upgrade.cost[args.newValue - 1]
                });
            }
        });
    });

    return (
        <div class={styles.item}>
            <div class={styles.info}>
                <div class={styles.imageTitleProduct}>
                    <img class={styles.productImage} src={`icons/${props.upgrade.id}.png`} />
                    <h2 class={styles.productHeader}>{props.upgrade.name}({state().level}) </h2>
                </div>
                <p class={styles.productText}> {props.upgrade.description} </p>
                <button class={styles.productButton} type="button"
                    disabled={props.money < state().cost || !state().cost}
                    onclick={() => props.game.upgrade(props.upgrade.id)}>
                    Buy for &euro; {state().cost}
                </button>
            </div>
        </div>
    );
}

function ItemCard(props: {
    item: Item;
    game: GameController;
    model: GameModel;
}) {
    const itemCount = () => props.model.items.filter(x => x === props.item.id).length;
    const [amount, setAmount] = createSignal(itemCount());

    createSubscribedSignal(props.model, (_source, args) => {
        if (args instanceof PropertyChangedArgs
            && args.property === 'items') {
            setAmount(itemCount());
        }
    });

    return (
        <div class={styles.item}>
            <div class={styles.info}>
                <div class={styles.imageTitleProduct}>
                    <img class={styles.productImage} src={`icons/${props.item.id}.png`} />
                    <h2 class={styles.productHeader}>{props.item.name} </h2>
                </div>
                <p class={styles.productText}> {props.item.description} </p>
                <div> <button class={styles.productButton} type="button" disabled={amount() === 0} onclick={() => props.game.sell(props.item.id)
                }> Sell for &euro; {props.item.cost} </button> of {amount()}</div>
            </div>
        </div>
    );
}