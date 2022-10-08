import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import DetailBody from "./DetailBody.js";
import DetailBottom from "./DetailBottom.js";
import { scrollObserver } from "../../core/Observer.js";

import "../../stylesheets/detail.scss";

import ic_share from "../../img/ic_share.png";
import ic_more from "../../img/ic_more.png";
import ic_arrow_left from "../../img/ic_arrow_left.png";
import ic_share_white from "../../img/ic_share_white.png";
import ic_more_white from "../../img/ic_more_white.png";
import ic_arrow_left_white from "../../img/ic_arrow_left_white.png";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._activityId = "detail";
        scrollObserver.clearSubscribe();
        scrollObserver.update({
            mode: "transparent",
        });
        this._state = new State(scrollObserver.get());
        this.setEvent();
        // 생성자에서 API 정보 받아오기 하자.
    }

    template() {
        return `
            <div id="${this._activityId}">
                <header id='detail-toolbar' class='toolbar'></header>
                <section id='detail-body' class='body'></section>
                <footer id="detail-bottom" class='detail-bottom'></footer>
            </div>
        `;
    }

    mounted() {
        new Toolbar(".toolbar", {
            id: "detail-toolbar",
            title: "",
            mode: this.state.mode,
            leftComponent: {
                id: "detail--toolbar--left--back",
                icon: ic_arrow_left,
                iconWhite: ic_arrow_left_white,
            },
            rightComponents: [
                {
                    id: "detail--toolbar--right--share",
                    icon: ic_share,
                    iconWhite: ic_share_white,
                },
                {
                    id: "detail--toolbar--right--more",
                    icon: ic_more,
                    iconWhite: ic_more_white,
                },
            ],
        });

        new DetailBody(".body");

        new DetailBottom(".detail-bottom");
    }

    setEvent() {
        this.addEvent("click", `#detail--toolbar--left--back`, this.onClickBackButton.bind(this));
    }
}
