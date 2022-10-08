import Component from "../../core/Component.js";
import MoreProductGrid from "./MoreProductGrid.js";

import "../../stylesheets/more-product.scss";

import ic_arrow_right_mini from "../../img/ic_arrow_right_mini.png";

export default class MoreProduct extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <div class='more-product'>
                <div class='more-product--name'>슈기님의 판매 상품</div>
                <img class='more-product--next' src='${ic_arrow_right_mini}'/>
            </div>
            <div class='product-grid'></div>
        `;
    }

    mounted() {
        new MoreProductGrid(".product-grid");
    }
}
