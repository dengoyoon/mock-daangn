import MainActivity from "./components/MainActivity.js";
import Component from "./core/Component.js";
import State from "./core/State.js";
import { activityStackObserver } from "./core/Observer.js";

const getArrayTop = (array) => array[array.length - 1];

export default class App extends Component {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State(activityStackObserver.get());
        activityStackObserver.subscribe(this.setState.bind(this));
        activityStackObserver.update({
            activityStack: [new MainActivity("#root")],
        });
    }

    template() {}

    mounted() {
        const activityTop = getArrayTop(this.state.activityStack);
        activityTop.render();
    }
}
