import Component from "../../core/Component.js";

export default class DetailBody extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <div>Carousel</div>
            <div>Detail Info</div>
            <div>More Product</div>
        `;
    }
}
