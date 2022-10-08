import Component from "../../core/Component.js";

import "../../stylesheets/item-more-product-grid.scss";

export default class MoreProductGridItem extends Component {
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
            <div class='more-item'>
                <img class='more-item--img' src='${this._item.productImageUrl}'/>
                <div class='more-item--name'>${this._item.productName}</div>
                <div class='more-item--price'>${this._item.price.toLocaleString()}원</div>
            </div>
        `;
    }
}
