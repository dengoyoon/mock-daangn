import Component from "../../core/Component.js";

import "../../stylesheets/item-home-list.scss";

export default class HomeListItem extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
        this.setEvent();
    }

    render() {
        // this._target.innerHTML = this.template();
        this._target.insertAdjacentHTML("beforeend", this.template());
        this.mounted();
    }

    template() {
        return `
            <div class='home--list--item'>
                ${this._props}
            </div>
        `;
    }
}
