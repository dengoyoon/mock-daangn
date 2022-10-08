import Component from "../../core/Component.js";
import { scrollObserver } from "../../core/Observer.js";
import DetailInfo from "./DetailInfo.js";
import ImageCarousel from "./ImageCarousel.js";
import MoreProduct from "./MoreProduct.js";

export default class DetailBody extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
        this.setEvent();
    }

    template() {
        return `
            <div id='detail--carousel'></div>
            <div id='detail--info'></div>
            <div id='detail--moreproduct'></div>
        `;
    }

    mounted() {
        new ImageCarousel("#detail--carousel");
        new DetailInfo("#detail--info");
        new MoreProduct("#detail--moreproduct");
    }

    onScrollBody(event) {
        if (document.querySelector("#detail-body").scrollTop < 305) {
            scrollObserver.update({
                mode: "transparent",
            });
        } else {
            scrollObserver.update({
                mode: "normal",
            });
        }
    }

    setEvent() {
        this.addEvent("scroll", "#detail-body", this.onScrollBody.bind(this));
    }
}
