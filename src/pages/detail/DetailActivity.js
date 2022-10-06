import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import DetailBody from "./DetailBody.js";

import "../../stylesheets/detail.scss";

import ic_share_white from "../../img/ic_share_white.png";
import ic_heart_empty from "../../img/ic_heart_empty.png";
import ic_more_white from "../../img/ic_more_white.png";
import ic_arrow_left_white from "../../img/ic_arrow_left_white.png";
import ic_profile from "../../img/ic_profile.png";

export default class DetailActivity extends Activity {
    constructor(selector, props) {
        super(selector, props);
        this._state = new State({});
        this._activityId = "detail";
        this.setEvent();
        // 생성자에서 API 정보 받아오기 하자.
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

        new DetailBody(".body", {});
    }

    setEvent() {
        this.addEvent("click", `#detail--toolbar--left--back`, this.onClickBackButton.bind(this));
    }
}
