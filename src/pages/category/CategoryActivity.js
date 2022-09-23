import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import CategoryGrid from "./CategoryGrid.js";

import ic_filter from "../../img/ic_filter.png";
import ic_arrow_left from "../../img/ic_arrow_left.png";

import "../../stylesheets/category.scss";

export default class CategoryActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._activityId = "category";
        this.setEvent();
    }

    template() {
        return `
            <div id="${this._activityId}">
                <header id='category-toolbar' class='toolbar'></header>
                <section id='category-grid' class='grid'></section>
            </div>
        `;
    }

    mounted() {
        new Toolbar(".toolbar", {
            id: "category-toolbar",
            title: "중고거래 카테고리",
            leftComponent: {
                id: "toolbar--left--back",
                icon: ic_arrow_left,
            },
            rightComponents: [
                {
                    id: "toolbar--right--filter",
                    icon: ic_filter,
                },
            ],
        });

        new CategoryGrid(".grid", {
            id: "category-grid",
        });
    }

    onClickBackButton(event) {
        this.popActivity();
    }

    setEvent() {
        this.addEvent("click", `#toolbar--left--back`, this.onClickBackButton.bind(this));
    }
}
