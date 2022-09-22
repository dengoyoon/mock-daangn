import Component from "../../core/Component.js";

import "../../stylesheets/bottom-navigation.scss";

import ic_home_filled from "../../img/ic_home_filled.png";
import ic_chat_empty from "../../img/ic_chat_empty.png";

export default class BottomNavigation extends Component {
    _id;
    constructor(selector, props) {
        super(selector, props);
        this._id = props.id;
        this.render();
        this.setEvent();
    }

    template() {
        return `
            <button id="home-button" type="button" class="bottom--button">
                <img class = "bottom--button--img" src='${ic_home_filled}'/>
                <div class = "bottom--button--text">홈</div>
            </button>
            <button id="chat-button" type="button" class="bottom--button">
                <img class = "bottom--button--img" src='${ic_chat_empty}'/>
                <div class = "bottom--button--text">채팅</div>
            </button>
        `;
    }

    onClickHomeButton(event) {
        console.log("HOME!!");
    }

    onClickChatButton(event) {
        console.log("CHAT!!");
    }

    setEvent() {
        this.addEvent("click", "#home-button", this.onClickHomeButton.bind(this));
        this.addEvent("click", "#chat-button", this.onClickChatButton.bind(this));
    }
}
