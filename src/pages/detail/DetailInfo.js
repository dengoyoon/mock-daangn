import Component from "../../core/Component.js";

import ic_profile from "../../img/ic_profile.png";

export default class DetailInfo extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <div class='profile'>
                <img class='profile--img' src='${ic_profile}'/>
                <div class='profile--content'>
                    <div class='profile--content--name'>슈기</div>
                    <div class='profile--content--town'>행신1동</div>
                </div>
            </div>
            <div class='content'>
                <div class='content--title'>곰 인형 팝니다</div>
                <div class='content--category-time'>생활용품 9분 전</div>
                <div class='content--description'>
                    남자친구랑 헤어졌는데 계속 보고 있으니까 그 자식 얼굴이 생각나서 팝니다.
                    제가 화날 때마다 좀 때려서 약간 찌그러져 있구요.
                    그래도 싸고 큰 곰인형 구매 원하신다면 연락 주세요. 감사합니다.
                </div>
                <div class='content--hits'>
                    조회 107
                </div>
            </div>
        `;
    }
}
