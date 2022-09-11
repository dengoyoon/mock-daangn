const getArrayTop = (array) => array[array.length - 1];

export default class Component {
    _state;
    _target;
    _props;
    _registedEvents;

    constructor(selector, props) {
        this._target = document.querySelector(selector);
        this._props = props;
        this._registedEvents = [];
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

    _getRegistedEventTop() {
        return getArrayTop(this._registedEvents);
    }

    addEvent(type, selector, callback) {
        const children = [...this._target.querySelectorAll(selector)];
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this._registedEvents.push({
            type: type,
            eventListener: (event) => {
                if (!isTarget(event.target)) return false;
                callback(event);
            },
        });

        this._target.addEventListener(type, this._getRegistedEventTop().eventListener);
    }

    setState(newState) {
        this._state.setState(newState);
        this.render();
    }

    mounted() {}
}
