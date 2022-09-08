import Activity from "../core/Activity.js";
import State from "../core/State.js";

export default class MainActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._props = props;
        this.render();
    }

    template() {
        return `
            <header>Main</header>
            <section>액티비티 입니다~</section>
            <footer>홈 / 채팅</footer>
        `;
    }

    onClickAll(event) {
        // test code
        this._props.pushActivity("activity-detail");
    }

    setEvent() {
        this.addEvent("click", "#activity-main", this.onClickAll.bind(this));
    }
}
