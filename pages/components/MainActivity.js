import Activity from "../core/Activity.js";
import State from "../core/State.js";
import DetailActivity from "./DetailActivity.js";

export default class MainActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._props = props;
        this._activityId = "main";
        // this.render();
    }

    template() {
        return `
            <div id=${this._activityId}>
                <header>Main</header>
                <section>액티비티 입니다~</section>
                <footer>홈 / 채팅</footer>
            </div>
        `;
    }

    onClickAll(event) {
        // test code
        this._props.pushActivity(new DetailActivity(`#activity-frame`));
    }

    setEvent() {
        // this.addEvent("click", "#main", this.onClickAll.bind(this));
    }
}
