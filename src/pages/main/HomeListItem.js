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
            <div class='home--list--item'>
                
            </div>
        `;
    }
}
