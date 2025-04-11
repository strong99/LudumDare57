import { Show } from "solid-js";
import { GameController } from "../controllers/GameController";
import { SessionModel } from "../models/GameModel";
import styles from './menu.module.css';

export function Menu(props: {
    model: Readonly<SessionModel>;
    game: GameController;
}) {
    return (
        <div id="Menu" class={styles.background}>
            <audio src="menu.ogg" autoplay={true} loop={true} />
            <menu>
                <h1 class={styles.title}>Sunken treasure</h1>

                <div class={styles.tableArea}>

                    <div class={styles.newspaper}>
                        <div class={styles.titleNewspaper}>
                            <h1>The Sunrise Times</h1>
                        </div>

                        <div class={styles.articles}>
                            <div class={styles.leftSide}>
                                <div class={styles.mainStory}>
                                    <h2>SEARCH FOR THE ROSEMARY ENDED</h2>
                                    <p>Six weeks ago the ship Rosemary ran into some heavy weather and sunk into the Nameless Sea. The maritime police tried to relocate the ship, but can't seem to find it. So they gave up the search. The polices statet that there are no survivors. Also all private researches have ended their attempt, due to lacking the right equipment and strange sightings. The Rosemary will be taken care of by the sea.</p>
                                </div>
                                <div class={styles.add}>
                                    <h2>AD: NEED PLANE TICKET?</h2>
                                    <p>Book your flight tickets to any location with a final discount of 25%. Sale ends in tomorrow!</p>
                                </div>
                            </div>

                            <div class={styles.rightSide}>
                                <div class={styles.captainsLetter}>
                                    <h2>HELSMAN WANTED</h2>
                                    <p>Are you a brave helmsman that likes to dive into the Nameless Sea? There is one attempt left before winter comes to go on some treasure diving. When interested, visit me on my ship Starlight's runner. - Captain Crown</p>

                                </div>

                                <div class={styles.buttonsStyle}>
                                    <button class="primary" onclick={_ => props.game.startGame()}>Help captain Crown</button>
                                    <button class="primary" onclick={_ => props.game.credits()}>Show credits</button>
                                    <Show when={'player' in props.model}>
                                        <button class="primary" onclick={_ => props.game.continueGame()}>Continue</button>
                                    </Show>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </menu>
        </div>
    );
}