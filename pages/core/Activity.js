import Component from "./Component.js";

const getActivityId = (selector) => selector.slice(1);

export default class Activity extends Component {
    // 화면 전환 효과
    // activityStack에 push / pop 조작
    // 직접적으로 필요한가 싶기도 한데 일단은 제작
    _activityId;
    _isDisplay;
    constructor(selector, props) {
        super(selector, props);
        this._activityId = getActivityId(selector);
        this._isDisplay = true;
    }

    getFrameHtml() {
        return `<div id=${this._activityId}></div>`;
    }
}
