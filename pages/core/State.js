export default class State {
    _state;
    constructor(state) {
        this._state = state;
    }

    getState() {
        return this._state;
    }

    setState(newState) {
        this._state = { ...this._state, ...newState };
    }

    get(key) {
        return this._state[key];
    }
}
