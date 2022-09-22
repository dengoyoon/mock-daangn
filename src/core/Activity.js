import Component from "./Component.js";
import { activityStackObserver } from "./Observer.js";

const getPoppedArray = (array) => array.slice(0, array.length - 1);
const clearArray = (array) => (array.length = 0);

export default class Activity extends Component {
    _activityId;
    _intent;
    constructor(selector, props, intent) {
        super(selector, props);
        this._intent = intent;
    }

    get intent() {
        return this._intent;
    }

    clearEvents() {
        this._registedEvents.forEach((event) => {
            this._target.removeEventListener(event.type, event.eventListener);
        });
        clearArray(this._registedEvents);
    }

    pushActivity(activity) {
        activityStackObserver.update({
            activityStack: [...activityStackObserver.get().activityStack, activity],
        });
    }

    popActivity() {
        this.clearEvents();
        activityStackObserver.update({
            activityStack: [...getPoppedArray(activityStackObserver.get().activityStack)],
        });
    }
}
