import Component from "../../core/Component.js";

import "../../stylesheets/image-carousel.scss";

import dummy_bear1 from "../../img/dummy_bear1.jpeg";
import dummy_bear2 from "../../img/dummy_bear2.jpeg";
import dummy_bear3 from "../../img/dummy_bear3.jpeg";

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
                <div class='slide_list'>
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear1}'/>
                    </div>
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear2}'/>
                    </div>
                    <div class="slide_item">
                        <img  class='slide_item--img' src='${dummy_bear3}'/>
                    </div>
                </div>
            </div>
            <button class="prevBtn">prev</button>
            <button class="nextBtn">next</button>
        `;
    }

    /*
    스타트 x 좌표를 저장한다
    move에서 계속 x좌표를 저장한다
    end에서 위의 두개를 뺀다.
    이 결과 값을 가지고 현재 페이지를 유지할 것 인지, 다음페이지 혹은 이전 페이지로 넘어갈 것 인지 정한다
    첫번째 페이지와 마지막 페이지에서는 이전, 다음으로 넘어가지 못하게 코드로 막는다
    */

    onClickNext(event) {
        // if (this._currentImageIndex >= this._carouselContents.length - 1) return;
        this._currentImageIndex++;
        this._carouselSlide.style.transform = "translateX(" + -this._currentImageIndex + "px)";
        // this._carouselSlide.style.transform =
        //     "translateX(" + -this._moveSize * this._currentImageIndex + "px)";
    }

    onClickPrev(event) {
        // if (this._currentImageIndex <= 0) return;
        this._currentImageIndex--;
        this._carouselSlide.style.transform = "translateX(" + -this._currentImageIndex + "px)";
    }

    onHandleStart(event) {
        // console.log(event.touches[0].clientX);
        this._carouselSlide.style.transform = "translateX(" + -this._currentImageIndex + "px)";
    }

    onHandleMove(event) {
        // console.log(event.touches[0].clientX);
        this._carouselSlide.style.transform = "translateX(" + -event.touches[0].clientX + "px)";
    }

    onHandleEnd(event) {
        console.log(event.touches);
    }

    setEvent() {
        // 일단 ,,, 해봤다
        this.addEvent("click", ".nextBtn", this.onClickNext.bind(this));
        this.addEvent("click", ".prevBtn", this.onClickPrev.bind(this));

        this.addEvent("touchstart", ".slide_list", this.onHandleStart.bind(this));
        this.addEvent("touchmove", ".slide_list", this.onHandleMove.bind(this));
        this.addEvent("touchend", ".slide_list", this.onHandleEnd.bind(this));
    }
}
