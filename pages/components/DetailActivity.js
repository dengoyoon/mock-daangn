import Activity from "../core/Activity.js";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
    }

    template() {
        return `
            <header></header>
            <section></section>
            <footer></footer>
        `;
    }
}
