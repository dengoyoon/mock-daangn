import Component from "../../core/Component.js";
import HomeListItem from "./HomeListItem.js";

export default class HomeList extends Component {
    _id;
    _itemList;

    constructor(selector, props) {
        super(selector, props);
        this._id = props.id;
        this._itemList = props.itemList;
        this.render();
        this.setEvent();
    }

    mounted() {
        this._itemList.forEach((item) => {
            new HomeListItem(".list", item);
        });
    }
}
