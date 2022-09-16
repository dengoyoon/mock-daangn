import MainActivity from "./pages/MainActivity.js";
import Component from "./core/Component.js";
import State from "./core/State.js";
import { activityStackObserver } from "./core/Observer.js";

import "./stylesheets/app.scss";

const getActivityTop = (array) => array[array.length - 1];

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
        getActivityTop(this.state.activityStack).render();
    }
}
