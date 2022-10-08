import Component from "../../core/Component.js";
import MoreProductGridItem from "./MoreProductGridItem.js";
import { dummyMoreProducts } from "../../utils/dummyData.js";

export default class MoreProductGrid extends Component {
    _itemList;
    constructor(selector, props) {
        super(selector, props);
        this._itemList = [...dummyMoreProducts];
        this.render();
    }

    mounted() {
        this._itemList.forEach((item) => {
            new MoreProductGridItem(".product-grid", {
                item: item,
            });
        });
    }
}
