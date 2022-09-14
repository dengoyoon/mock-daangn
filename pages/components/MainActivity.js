import Activity from "../core/Activity.js";
import State from "../core/State.js";
import DetailActivity from "./DetailActivity.js";

import "../stylesheets/main.scss";

export default class MainActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._activityId = "main";
        this.setEvent();
    }

    template() {
        return `
            <div id="${this._activityId}">
                <header>Main</header>
                <section>액티비티 입니다~</section>
                <footer>홈 / 채팅</footer>
            </div>
        `;
    }

    onClickAll(event) {
        // test code
        this.pushActivity(new DetailActivity("#root"));
    }

    setEvent() {
        this.addEvent("click", `#${this._activityId}`, this.onClickAll.bind(this));
    }
}
