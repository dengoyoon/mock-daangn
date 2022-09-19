import Component from "../../core/Component.js";

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

    template() {
        return `
            <div class = 'list--item'>item1</div>
            <div class = 'list--item'>item2</div>
            <div class = 'list--item'>item3</div>
            <div class = 'list--item'>item4</div>
            <div class = 'list--item'>item5</div>
            <div class = 'list--item'>item1</div>
            <div class = 'list--item'>item2</div>
            <div class = 'list--item'>item3</div>
            <div class = 'list--item'>item4</div>
            <div class = 'list--item'>item5</div>
            <div class = 'list--item'>item1</div>
            <div class = 'list--item'>item2</div>
            <div class = 'list--item'>item3</div>
            <div class = 'list--item'>item4</div>
            <div class = 'list--item'>item5</div>
            <div class = 'list--item'>item1</div>
            <div class = 'list--item'>item2</div>
            <div class = 'list--item'>item3</div>
            <div class = 'list--item'>item4</div>
            <div class = 'list--item'>item5</div>
        `;
    }
}
