import Component from "../core/Component.js";

export default class Toolbar extends Component {
    _title;
    _id;
    _leftComponent;
    _rightComponents;

    constructor(selector, props) {
        super(selector, props);
        this._id = props.id;
        this._title = props.title;
        this._leftComponent = props.leftComponent;
        this._rightComponents = props.rightComponents;
        this.render();
        this.setEvent();
    }

    template() {
        return `
            <div class="toolbar--left">${this._leftComponent}</div>
            <div class="toolbar--title">${this._title}</div>
            <div class="toolbar--right">${this.getRightComponents()}</div>
        `;
    }

    getRightComponents() {
        return this._rightComponents
            .map((icon) => {
                return `<img class="toolbar--item" src="${icon}"/>`;
            })
            .join("");
    }

    setEvent() {}

    setTitle(title) {
        this._title = title;
    }
}
