import Activity from "../core/Activity.js";

export default class MainActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
    }

    template() {
        return `
            <header>Main</header>
            <section>액티비티 입니다~</section>
            <footer>홈 / 채팅</footer>
        `;
    }
}
