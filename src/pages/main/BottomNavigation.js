import Component from "../../core/Component.js";

import "../../stylesheets/bottom-navigation.scss";

import ic_home_filled from "../../img/ic_home_filled.png";
import ic_chat_empty from "../../img/ic_chat_empty.png";

export default class BottomNavigation extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <button type="button" class="bottom--button">
                <img class = "bottom--button--img" src='${ic_home_filled}'/>
                <div class = "bottom--button--text">홈</div>
            </button>
            <button type="button" class="bottom--button">
                <img class = "bottom--button--img" src='${ic_chat_empty}'/>
                <div class = "bottom--button--text">채팅</div>
            </button>
        `;
    }
}
