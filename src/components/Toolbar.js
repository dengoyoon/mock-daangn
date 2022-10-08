import Component from "../core/Component.js";
import State from "../core/State.js";

const isIcon = (component) => component.icon !== undefined;

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
        this._state = new State({
            mode: props.mode,
        });
        this.render();
        this.setEvent();
    }

    isTransparentMode() {
        return this.state.mode === "transparent";
    }

    drawCurrentMode() {
        if (this.isTransparentMode()) {
            this._target.style.backgroundColor = "rgb(255, 255, 255, 0)";
            this._target.style.borderBottom = "0";
        } else {
            this._target.style.backgroundColor = "rgb(255, 255, 255)";
            this._target.style.borderBottom = "0.1px solid $divideLineColor";
        }
    }

    template() {
        this.drawCurrentMode();
        return `
            <div class="toolbar--left">${this.getLeftComponent()}</div>
            <div class="toolbar--title">${this._title}</div>
            <div class="toolbar--right">${this.getRightComponents()}</div>
        `;
    }

    getLeftComponent() {
        if (isIcon(this._leftComponent)) {
            return `
                <img
                    id='${this._leftComponent.id}' 
                    class="toolbar--left--item" 
                    src="${
                        this.isTransparentMode()
                            ? this._leftComponent.iconWhite
                            : this._leftComponent.icon
                    }"/>
            `;
        } else {
            return `<div id='${this._leftComponent.id}'>${this._leftComponent.text}</div>`;
        }
    }

    getRightComponents() {
        return this._rightComponents
            .map((component) => {
                return `
                    <img 
                        id='${component.id}' 
                        class="toolbar--right--item" 
                        src="${this.isTransparentMode() ? component.iconWhite : component.icon}"/>
                `;
            })
            .join("");
    }

    setEvent() {}

    setTitle(title) {
        this._title = title;
    }
}
