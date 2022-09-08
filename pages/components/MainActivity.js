import Activity from "../core/Activity.js";
import Component from "../core/Component.js";
import State from "../core/State.js";

export default class MainActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this.render();
    }

    template() {
        return `
            <header>Main</header>
            <section>액티비티 입니다~</section>
            <footer>홈 / 채팅</footer>
        `;
    }
}
