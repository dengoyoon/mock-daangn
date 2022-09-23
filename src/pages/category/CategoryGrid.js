import Component from "../../core/Component.js";

import "../../stylesheets/category-grid.scss";

import ic_popular from "../../img/ic_popular.png";
import ic_digital from "../../img/ic_digital.png";
import ic_appliance from "../../img/ic_appliance.png";
import ic_furniture from "../../img/ic_furniture.png";
import ic_kitchen from "../../img/ic_kitchen.png";
import ic_baby from "../../img/ic_baby.png";
import ic_kidbook from "../../img/ic_kidbook.png";
import ic_woman from "../../img/ic_woman.png";

export default class CategoryGrid extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_popular}/>
                <div class='grid--cell--text'>인기매물</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_digital}/>
                <div class='grid--cell--text'>디지털기기</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_appliance}/>
                <div class='grid--cell--text'>생활가전</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_furniture}/>
                <div class='grid--cell--text'>가구/인테리어</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_kitchen}/>
                <div class='grid--cell--text'>생활/주방</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_baby}/>
                <div class='grid--cell--text'>유아동</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_kidbook}/>
                <div class='grid--cell--text'>유아도서</div>
            </div>
            <div class='grid--cell'>
                <img class='grid--cell--img' src=${ic_woman}/>
                <div class='grid--cell--text'>여성의류</div>
            </div>
        `;
    }
}
