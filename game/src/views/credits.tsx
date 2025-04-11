import { Match, Switch } from "solid-js";
import { GameController } from "../controllers/GameController";
import { CreditStateModel, CreditStateModelState, SessionModel } from "../models/GameModel";
import styles from './credits.module.css';

export function Credits(props: {
    game: GameController;
    model: Readonly<SessionModel>
}) {

    const state = props.model.state as CreditStateModel;

    return (
        <div id="Credits" classList={{ ['view']: true, [styles.credits]: true }}>
            <article>
                <audio src="menu.ogg" autoplay={true} loop={true} />
                <Switch>
                    <Match when={state.state === CreditStateModelState.none}>
                        <h1>Credits</h1>
                    </Match>
                    <Match when={state.state === CreditStateModelState.won}>
                        <h1>Success</h1>
                    </Match>
                    <Match when={state.state === CreditStateModelState.lost}>
                        <h1>Try again</h1>
                    </Match>
                </Switch>
                <p><a href="https://ldjam.com/" target="_new">A game for the Ludum Dare #57 jam</a></p>
                <p>Build in 72 hour jam in a team of two, made from scratch in that time window. Which means all art, dialogs, sounds, music, physics and game rules are created. The game is build on-top of some basic frameworks, including:</p>
                <ul>
                    <li><a href="https://www.solidjs.com/">SolidJs</a> - DOM management</li>
                    <li><a href="https://pixijs.com/">PixiJs</a> - Web rendering library</li>
                </ul>
                <p>The jam's theme was: <span class={styles.focus}>Depths</span>.</p>
                <p>Game made by:</p>
                <ul>
                    <li><a href="https://ldjam.com/users/strong99" target="_new">Strong99</a></li>
                    <li>Moony - first timer</li>
                </ul>
                <button class="primary" onclick={_ => props.game.gotoMenu()}>Back to menu</button>
            </article>
        </div>
    );
}