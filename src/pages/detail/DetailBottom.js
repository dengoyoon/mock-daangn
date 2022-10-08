import Component from "../../core/Component.js";

import "../../stylesheets/detail-bottom.scss";

import ic_heart_empty from "../../img/ic_heart_empty.png";

export default class DetailBottom extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <img class='detail-bottom--heart' src='${ic_heart_empty}'/>
            <div class='detail-bottom--desc'>
                <div class='detail-bottom--desc--price'>${22000}원</div>
                <div class='detail-bottom--desc--suggestion'>가격 제안 불가</div>
            </div>
            <button type='button' class='detail-bottom--button'>채팅하기</button>
        `;
    }
}
