import Component from "./core/Component.js";
import State from "./core/State.js";

export default class App extends Component {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this.render();
    }

    mounted() {
        // new MainActivity
    }

    template() {
        return `
            <div id = "#activity-main"></div>
        `;
    }
}
