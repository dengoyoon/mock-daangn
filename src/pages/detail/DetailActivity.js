import Activity from "../../core/Activity.js";
import State from "../../core/State.js";

import "../../stylesheets/category.scss";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._activityId = "detail";
        this.setEvent();
    }

    template() {
        return `
            <div id="${this._activityId}">
                <header id='detail-toolbar' class='toolbar'></header>
                <section id='detail-body' class='list'></section>
                <footer id="detail-bottom" class='bottom-navigation'></footer>
            </div>
        `;
    }

    mounted() {}
}
