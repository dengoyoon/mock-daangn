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
        new MainActivity("#activity-main");
    }

    template() {
        return `
            <div id="activity-main"></div>
        `;
    }

    pushActivity(selectorName) {
        this._target().insertAdjacentHTML("beforeend", `<div id=${selectorName}></div>`);
        new DetailActivity(`#${selectorName}`);
    }
}
