import Activity from "../core/Activity.js";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
    }

    template() {
        return `
            <header>Detail</header>
            <section>액티비티 입니다</section>
            <footer>디테일의 푸터입니다.</footer>
        `;
    }
}
