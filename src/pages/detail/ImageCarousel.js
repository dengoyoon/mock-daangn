import Component from "../../core/Component.js";

import "../../stylesheets/image-carousel.scss";

import dummy_bear1 from "../../img/dummy_bear1.jpeg";
import dummy_bear2 from "../../img/dummy_bear2.jpeg";
import dummy_bear3 from "../../img/dummy_bear3.jpeg";
import dummy_bear4 from "../../img/dummy_bear4.jpeg";

export default class ImageCarousel extends Component {
    _currentImageIndex;
    _carouselSlide;
    _carouselContents;
    _moveSize;

    constructor(selector, props) {
        super(selector, props);
        this._currentImageIndex = 0;
        this.render();

        this._carouselSlide = document.querySelector(".slide_list");
        this._carouselContents = document.querySelectorAll(".slide_item");
        this._moveSize = this._carouselContents[0].clientWidth;
        this.setEvent();
    }

    template() {
        return `
            <div class="slide_box">
                <div class="slide_list">
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear1}'/>
                    </div>
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear2}'/>
                    </div>
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear3}'/>
                    </div>
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear4}'/>
                    </div>
                </div>
            </div>
            <button class="prevBtn">prev</button>
            <button class="nextBtn">next</button>
        `;
    }

    onClickNext(event) {
        if (this._currentImageIndex >= this._carouselContents.length - 1) return;
        this._currentImageIndex++;
        this._carouselSlide.style.transform =
            "translateX(" + -this._moveSize * this._currentImageIndex + "px)";
    }

    onClickPrev(event) {
        if (this._currentImageIndex <= 0) return;
        this._currentImageIndex--;
        this._carouselSlide.style.transform =
            "translateX(" + -this._moveSize * this._currentImageIndex + "px)";
    }

    setEvent() {
        // 일단 ,,, 해봤다
        this.addEvent("click", ".nextBtn", this.onClickNext.bind(this));
        this.addEvent("click", ".prevBtn", this.onClickPrev.bind(this));
    }
}
