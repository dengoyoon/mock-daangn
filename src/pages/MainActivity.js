import Activity from "../core/Activity.js";
import State from "../core/State.js";
import DetailActivity from "./DetailActivity.js";
import Toolbar from "../components/Toolbar.js";

import ic_search from "../img/ic_search.png";
import ic_category from "../img/ic_category.png";
import ic_alarm from "../img/ic_alarm.png";

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
                <header class='toolbar'></header>
                <section class='list'>액티비티 입니다</section>
                <footer class='bottom-navigation'>홈 / 채팅</footer>
            </div>
        `;
    }

    mounted() {
        new Toolbar(".toolbar", {
            id: "main-toolbar",
            title: "",
            leftComponent: "행신 3동",
            rightComponents: [ic_search, ic_category, ic_alarm],
        });
    }

    onClickAll(event) {
        // test code
        this.pushActivity(new DetailActivity("#root"));
    }

    setEvent() {
        this.addEvent("click", `#${this._activityId}`, this.onClickAll.bind(this));
    }
}
