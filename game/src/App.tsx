import { batch, createSignal, Match, onCleanup, Switch, type Component } from 'solid-js';
import { GameController } from "./controllers/GameController";
import { Menu } from "./views/menu";
import { Game } from "./views/game";
import { CreditStateModel, GameModel, GameStateModel, MenuStateModel, SessionModel, StateModel } from "./models/GameModel";
import { EventArgs, PropertyChangedArgs } from "./utils/PropertyChangedArgs";
import styles from './App.module.css'
import { Credits } from "./views/credits";

const App: Component = () => {
    const controller = new GameController();

    const [model, setModel] = createSignal<Readonly<SessionModel>>(controller.model);
    const [state, setState] = createSignal<Readonly<StateModel>>(controller.model.state);

    const modelListener = (source: SessionModel, args: EventArgs): void => {
        if (args instanceof PropertyChangedArgs === false ||
            args.property !== 'state') {
            return;
        }

        model().unlisten(modelListener);
        setState(source.state);
        model().listen(modelListener);
    };

    const controllerListener = (source: GameController, args: EventArgs): void => {
        if (args instanceof PropertyChangedArgs === false ||
            args.property !== 'model') {
            return;
        }

        model().unlisten(modelListener);

        batch(() => {
            setModel(source.model);
            setState(source.model.state);
        });

        model().listen(modelListener);
    };

    controller.listen(controllerListener);
    model().listen(modelListener);

    onCleanup(() => {
        controller.unlisten(controllerListener);
        model().unlisten(modelListener);
    });

    return (
        <div class={styles.view }>
            <Switch>
                <Match when={state() instanceof MenuStateModel}>
                    <Menu game={controller} model={model()} />
                </Match>
                <Match when={state() instanceof GameStateModel}>
                    <Game game={controller} model={model() as GameModel} />
                </Match>
                <Match when={state() instanceof CreditStateModel}>
                    <Credits game={controller} model={model()} />
                </Match>
            </Switch>
        </div>
    );
};

export default App;
