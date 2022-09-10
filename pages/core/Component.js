export default class Component {
    _state;
    _target;
    _props;
    constructor(selector, props) {
        this._target = document.querySelector(selector);
        this._props = props;
    }

    get state() {
        return this._state.getState();
    }

    render() {
        this._target.innerHTML = this.template();
        this.mounted();
    }

    template() {
        return ``;
    }

    setEvent() {}

    addEvent(type, selector, callback) {
        const children = [...this._target.querySelectorAll(selector)];
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this._target.addEventListener(type, (event) => {
            if (!isTarget(event.target)) return false;
            callback(event);
        });
    }

    setState(newState) {
        this._state.setState(newState);
        this.render();
    }

    mounted() {}
}
