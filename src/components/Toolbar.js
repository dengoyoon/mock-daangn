import Component from "../core/Component.js";

const isIcon = (component) => typeof component === "object";

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
            <div class="toolbar--left">${this.getLeftComponent()}</div>
            <div class="toolbar--title">${this._title}</div>
            <div class="toolbar--right">${this.getRightComponents()}</div>
        `;
    }

    getLeftComponent() {
        if (isIcon(this._leftComponent)) {
            return `<img id='${this._leftComponent.id}' class="toolbar--left--item" src="${this._leftComponent.icon}"/>`;
        } else {
            return this._leftComponent;
        }
    }

    getRightComponents() {
        return this._rightComponents
            .map((component) => {
                return `<img id='${component.id}' class="toolbar--right--item" src="${component.icon}"/>`;
            })
            .join("");
    }

    setEvent() {}

    setTitle(title) {
        this._title = title;
    }
}
