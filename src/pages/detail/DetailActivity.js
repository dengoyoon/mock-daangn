import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import DetailBody from "./DetailBody.js";

import "../../stylesheets/detail.scss";

import ic_share_white from "../../img/ic_share_white.png";
import ic_more_white from "../../img/ic_more_white.png";
import ic_arrow_left_white from "../../img/ic_arrow_left_white.png";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({
            scrollTop: 0,
        });
        this._activityId = "detail";
        this.setEvent();
        // 생성자에서 API 정보 받아오기 하자.
    }

    convertToolbar() {
        if (this.state._scrollTop < 305) {
            return "toolbar transparent";
        } else {
            return "toolbar";
        }
    }

    template() {
        return `
            <div id="${this._activityId}">
                <header id='detail-toolbar' class='toolbar transparent'></header>
                <section id='detail-body' class='body'></section>
                <footer id="detail-bottom" class='bottom-navigation'></footer>
            </div>
        `;
    }

    mounted() {
        new Toolbar(".toolbar", {
            id: "detail-toolbar",
            title: "",
            leftComponent: {
                id: "detail--toolbar--left--back",
                icon: ic_arrow_left_white,
            },
            rightComponents: [
                {
                    id: "detail--toolbar--right--share",
                    icon: ic_share_white,
                },
                {
                    id: "detail--toolbar--right--more",
                    icon: ic_more_white,
                },
            ],
        });

        new DetailBody(".body", {
            setScrollTop: this.setScrollTop.bind(this),
        });
    }

    setScrollTop(newScrollTop) {
        this.setState({
            scrollTop: newScrollTop,
        });
    }

    setEvent() {
        this.addEvent("click", `#detail--toolbar--left--back`, this.onClickBackButton.bind(this));
    }
}

/*
툴바 컴포넌트 안에 투명으로 만드는 함수를 추가하고 툴바의 상태가 변화했을때 툴바의 모습이 변해야 하는게 맞음
즉 지금 방법은 수정해야함..
*/
