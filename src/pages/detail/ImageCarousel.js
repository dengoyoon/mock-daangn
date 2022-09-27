import Component from "../../core/Component.js";

import "../../stylesheets/image-carousel.scss";

import dummy_bear1 from "../../img/dummy_bear1.jpeg";
import dummy_bear2 from "../../img/dummy_bear2.jpeg";
import dummy_bear3 from "../../img/dummy_bear3.jpeg";
import dummy_bear4 from "../../img/dummy_bear4.jpeg";

export default class ImageCarousel extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
        this.setEvent();
    }

    template() {
        return `
            <div class="slide_box">
                <div class="slide_list">
                    <div id="lastClone" class="slide_item">5</div>
                    <div class="slide_item">1</div>
                    <div class="slide_item">2</div>
                    <div class="slide_item">3</div>
                    <div class="slide_item">4</div>
                    <div class="slide_item">5</div>
                    <div id="firstClone" class="slide_item">1</div>
                </div>
            </div>
            <button class="prevBtn">prev</button>
            <button class="nextBtn">next</button>
        `;
    }

    setEvent() {
        // 일단 ,,, 해봤다
        const carouselSlide = document.querySelector(".slide_list");
        const carouselContents = document.querySelectorAll(".slide_item");

        const prevBtn = document.querySelector(".prevBtn");
        const nextBtn = document.querySelector(".nextBtn");

        //counter
        let counter = 1;
        const size = carouselContents[0].clientWidth;

        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

        nextBtn.addEventListener("click", () => {
            if (counter >= carouselContents.length - 1) return;
            carouselSlide.style.transition = "transform 0.3s ease-in-out";
            counter++;
            carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
        });

        prevBtn.addEventListener("click", () => {
            if (counter <= 0) return;
            carouselSlide.style.transition = "transform 0.3s ease-in-out";
            counter--;
            carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
        });
        console.log(carouselContents.length);
    }
}
