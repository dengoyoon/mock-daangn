import Component from "../../core/Component.js";

import "../../stylesheets/item-home-list.scss";

import ic_chatroom from "../../img/ic_chatroom.png";
import ic_heart from "../../img/ic_heart.png";

export default class HomeListItem extends Component {
    _item;

    constructor(selector, props) {
        super(selector, props);
        this._item = props.item;
        this.render();
        this.setEvent();
    }

    render() {
        this._target.insertAdjacentHTML("beforeend", this.template());
        this.mounted();
    }

    showHeart() {
        return this._item.likeNum === undefined ? "hide" : "";
    }

    showChatroom() {
        return this._item.chatRoomNum === undefined ? "hide" : "";
    }

    template() {
        return `
            <div class='home--item'>
                <img class='item--img' src='${this._item.productImageUrl}'/>
                <div class='item--content'>
                    <div class='item--content--name'>${this._item.productName}</div>
                    <div class='item--content--location'>
                        ${this._item.locationName} · ${this._item.ago}</div>
                    <div class='item--content--price'>${this._item.price}원</div>
                    <div class='item--content--likeandchat'>
                        <div class='likeandchat--element ${this.showChatroom()}'>
                            <img class='likeandchat--element--icon' src='${ic_chatroom}'/>
                            <span class='likeandchat--element--text'>
                                ${this._item.chatRoomNum}
                            </span>
                        </div>
                        <div class='likeandchat--element ${this.showHeart()}'>
                            <img class='likeandchat--element--icon' src='${ic_heart}'/> 
                            <span class='likeandchat--element--text'>
                                ${this._item.likeNum}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
