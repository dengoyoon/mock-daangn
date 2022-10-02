import Component from "../../core/Component.js";
import ImageCarousel from "./ImageCarousel.js";

export default class DetailBody extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
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
    }
}
