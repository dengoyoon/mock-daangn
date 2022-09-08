import Activity from "../core/Activity.js";
import State from "../core/State.js";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this.render();
    }

    template() {
        return `
            <header>Detail</header>
            <section>액티비티 입니다</section>
            <footer>디테일의 푸터입니다.</footer>
        `;
    }
}
