import Component from "./Component.js";
import { activityStackObserver } from "./Observer.js";

const getPoppedArray = (array) => array.slice(0, array.length - 1);
const clearArray = (array) => (array.length = 0);

export default class Activity extends Component {
    _activityId;
    constructor(selector, props) {
        super(selector, props);
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
