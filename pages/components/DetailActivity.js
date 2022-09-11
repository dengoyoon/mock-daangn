import Activity from "../core/Activity.js";
import State from "../core/State.js";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._activityId = "detail";
        this.setEvent();
    }

    template() {
        return `
            <div id=${this._activityId}>
                <header>Detail</header>
                <section>디테일 입니다~</section>
                <footer>롸롸뢀</footer>
            </div>
        `;
    }

    onClickAll(event) {
        // test code
        this.popActivity();
    }

    setEvent() {
        this.addEvent("click", `#${this._activityId}`, this.onClickAll.bind(this));
    }
}
