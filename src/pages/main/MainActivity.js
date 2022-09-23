import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import DetailActivity from "../detail/DetailActivity.js";
import HomeList from "./HomeList.js";
import BottomNavigation from "./BottomNavigation.js";
import CategoryActivity from "../category/CategoryActivity.js";

import ic_search from "../../img/ic_search.png";
import ic_category from "../../img/ic_category.png";
import ic_alarm from "../../img/ic_alarm.png";
import ic_plus_orange from "../../img/ic_plus_orange.png";

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
                <footer id="home-bottom-navigation" class='bottom-navigation'></footer>
                <button id='floating-button' type='button' class='floating-button'>
                    <img src='${ic_plus_orange}'/>
                </button>
            </div>
        `;
    }

    mounted() {
        new Toolbar(".toolbar", {
            id: "main-toolbar",
            title: "",
            leftComponent: {
                id: "toolbar--left--town",
                text: "행신 3동",
            },
            rightComponents: [
                {
                    id: "toolbar--right--search",
                    icon: ic_search,
                },
                {
                    id: "toolbar--right--category",
                    icon: ic_category,
                },
                {
                    id: "toolbar--right--alarm",
                    icon: ic_alarm,
                },
            ],
        });

        new HomeList(".list", {
            id: "home-list",
            itemList: [...dummyHome],
        });

        new BottomNavigation(".bottom-navigation", {
            id: "home-bottom-navigation",
        });
    }

    onClickTownName(event) {
        console.log("동네이름 클릭~");
    }

    onClickCategoryButton(event) {
        this.pushActivity(new CategoryActivity("#root"));
    }

    onClickList(event) {
        this.pushActivity(new DetailActivity("#root"));
    }

    onClickBottomNavigation(event) {
        console.log("CLICK BOTTOM NAVI");
    }

    onClickFloatingButton(event) {
        console.log("CLICK Floating BUtton");
    }

    setEvent() {
        this.addEvent("click", `#toolbar--left--town`, this.onClickTownName.bind(this));
        this.addEvent("click", `#toolbar--right--category`, this.onClickCategoryButton.bind(this));
        this.addEvent("click", `#home-list`, this.onClickList.bind(this));
        this.addEvent("click", "#floating-button", this.onClickFloatingButton.bind(this));
    }
}
