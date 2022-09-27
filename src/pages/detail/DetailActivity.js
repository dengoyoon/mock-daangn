import Activity from "../../core/Activity.js";
import State from "../../core/State.js";
import Toolbar from "../../components/Toolbar.js";
import DetailBody from "./DetailBody.js";

import "../../stylesheets/detail.scss";

import ic_share from "../../img/ic_share.png";
import ic_heart_empty from "../../img/ic_heart_empty.png";
import ic_more from "../../img/ic_more.png";
import ic_arrow_left from "../../img/ic_arrow_left.png";
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
                <header id='detail-toolbar' class='toolbar'></header>
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
                icon: ic_arrow_left,
            },
            rightComponents: [
                {
                    id: "detail--toolbar--right--share",
                    icon: ic_share,
                },
                {
                    id: "detail--toolbar--right--more",
                    icon: ic_more,
                },
            ],
        });

        new DetailBody(".body", {});
    }

    setEvent() {
        this.addEvent("click", `#detail--toolbar--left--back`, this.onClickBackButton.bind(this));
    }
}
