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
    _touchStartX;
    _touchEndX;

    constructor(selector, props) {
        super(selector, props);
        this._currentImageIndex = 0;
        this.render();

        this._carouselSlide = document.querySelector(".slide_list");
        this._carouselContents = document.querySelectorAll(".slide_item");
        this._moveSize = this._carouselContents[0].clientWidth;
        this._touchStartX = 0;
        this._touchEndX = 0;
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
        `;
    }

    /*
    스타트 x 좌표를 저장한다
    move에서 계속 x좌표를 저장한다
    end에서 위의 두개를 뺀다.
    이 결과 값을 가지고 현재 페이지를 유지할 것 인지, 다음페이지 혹은 이전 페이지로 넘어갈 것 인지 정한다
    첫번째 페이지와 마지막 페이지에서는 이전, 다음으로 넘어가지 못하게 코드로 막는다

    첫번째 페이지 위치 : 인덱스(0),
    첫번째 페이지에서 터치 이벤트 발생할때 : (터치 움직이는시점 x - 터치 시작시점 x) + 인덱스(0)
    첫번째 페이지에서 터치 이벤트 끝났을때 : 
        (터치 끝난시점 x - 터치 시작시점 x) > 화면 절반크기 + 50? 이면 이전페이지 이동
        (터치 끝난시점 x - 터치 시작시점 x) < -(화면 절반크기 + 50)? 이면 다음페이지 이동
    두번째 페이지 위치 : 사진크기 * 인덱스(1)
    첫번째 페이지에서 터치 이벤트 발생할때 : (터치 움직이는시점 x - 터치 시작시점 x) + 사진크기 * 인덱스(1)
    세번째 페이지 위치 : 사진크기 * 인덱스(2)
    첫번째 페이지에서 터치 이벤트 발생할때 : (터치 움직이는시점 x - 터치 시작시점 x) + 사진크기 * 인덱스(2)
    */

    calcTouchEndToStart() {
        return this._touchEndX - this._touchStartX;
    }

    getCurrentImageX() {
        return -this._currentImageIndex * this._moveSize;
    }

    getSwipeFlagLength() {
        return (this._moveSize * 3) / 5;
    }

    translateCarousel(moveX) {
        this._carouselSlide.style.transform = `translateX(${moveX}px)`;
    }

    onHandleStart(event) {
        this._touchStartX = event.touches[0].clientX;
    }

    onHandleMove(event) {
        this._touchEndX = event.touches[0].clientX;
        this.translateCarousel(this.getCurrentImageX() + this.calcTouchEndToStart());
    }

    onHandleEnd(event) {
        if (this.calcTouchEndToStart() > this.getSwipeFlagLength()) {
            // 이전페이지
            if (this._currentImageIndex > 0) {
                this._currentImageIndex -= 1;
            }
        } else if (this.calcTouchEndToStart() < -this.getSwipeFlagLength()) {
            // 다음페이지
            if (this._currentImageIndex < this._carouselContents.length - 1) {
                this._currentImageIndex += 1;
            }
        }

        this.translateCarousel(this.getCurrentImageX());
    }

    setEvent() {
        this.addEvent("touchstart", ".slide_list", this.onHandleStart.bind(this));
        this.addEvent("touchmove", ".slide_list", this.onHandleMove.bind(this));
        this.addEvent("touchend", ".slide_list", this.onHandleEnd.bind(this));
    }
}
