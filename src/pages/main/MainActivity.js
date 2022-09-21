import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import DetailActivity from "../detail/DetailActivity.js";
import HomeList from "./HomeList.js";
import BottomNavigation from "./BottomNavigation.js";

import ic_search from "../../img/ic_search.png";
import ic_category from "../../img/ic_category.png";
import ic_alarm from "../../img/ic_alarm.png";

import { dummyHome } from "../../utils/dummyData.js";

import "../../stylesheets/main.scss";

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
                <header id='main-toolbar' class='toolbar'></header>
                <section id='home-list' class='list'></section>
                <footer class='bottom-navigation'></footer>
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

        new HomeList(".list", {
            id: "home-list",
            itemList: [...dummyHome],
        });

        new BottomNavigation(".bottom-navigation");
    }

    onClickAll(event) {
        // test code
        this.pushActivity(new DetailActivity("#root"));
    }

    setEvent() {
        this.addEvent("click", `#${this._activityId}`, this.onClickAll.bind(this));
    }
}
