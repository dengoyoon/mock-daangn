class Observer {
    _state;
    _subscribers;
    constructor(initialValue) {
        this._state = { ...initialValue };
        this._subscribers = new Set();
    }

    get() {
        return this._state;
    }

    update(newState) {
        this._state = { ...newState };
        this._notify();
    }

    updateWithKey(key, newState) {
        this._state[key] = newState;
        this._notify();
    }

    _notify() {
        const state = this._state;
        this._subscribers.forEach((callback) => {
            callback(state);
        });
    }

    subscribe(callback) {
        this._subscribers.add(callback);
    }
}

export const activityStackObserver = new Observer({ activityStack: [] });
export const detailScrollObserver = new Observer({ scrollTop: 0 });
