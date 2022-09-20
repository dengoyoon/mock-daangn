import Component from "../../core/Component.js";

import "../../stylesheets/item-home-list.scss";

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

    template() {
        return `
            <div class='home--item'>
                <img class='home--item--img' src='${this._item.productImageUrl}'/>
                <div class='home--item--content'>
                    <div>${this._item.productName}</div>
                    <div>${this._item.locationName}</div>
                    <div>${this._item.price}원</div>
                </div>
            </div>
        `;
    }
}
