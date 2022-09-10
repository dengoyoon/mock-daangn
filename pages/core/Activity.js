import Component from "./Component.js";
import { activityStackObserver } from "./Observer.js";

const getActivityId = (selector) => selector.slice(1);
const getPoppedArray = (array) => array.slice(0, array.length - 1);

export default class Activity extends Component {
    // 화면 전환 효과
    // activityStack에 push / pop 조작
    // 직접적으로 필요한가 싶기도 한데 일단은 제작
    _activityId;
    constructor(selector, props) {
        super(selector, props);
    }

    pushActivity(activity) {
        activityStackObserver.update({
            activityStack: [...activityStackObserver.get().activityStack, activity],
        });
    }

    popActivity() {
        activityStackObserver.update({
            activityStack: [...getPoppedArray(activityStackObserver.get().activityStack)],
        });
    }
}
