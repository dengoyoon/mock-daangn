import MainActivity from "./components/MainActivity.js";
import DetailActivity from "./components/DetailActivity.js";
import Component from "./core/Component.js";
import State from "./core/State.js";

export default class App extends Component {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({
            activityStack: [],
        });
        this.render();
    }

    mounted() {
        new MainActivity("#activity-main", {
            pushActivity: this.pushActivity.bind(this),
        });
    }

    template() {
        return `
            <div id="activity-main"></div>
        `;
    }

    pushActivity(activityId) {
        this._target().insertAdjacentHTML("beforeend", `<div id=$(activityId}></div>`);
        this._state.setState({
            activityStack: [...this.state.activityStack, new DetailActivity(`#$(activityId}`)],
        });
    }
}
