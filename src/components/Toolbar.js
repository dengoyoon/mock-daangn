import Component from "../core/Component.js";

export default class Toolbar extends Component {
    /* 
    - 왼쪽에 아이콘 붙이는 기능 (스택으로)
    - 오른쪽에 아이콘 붙이는 기능 (스택으로)
    - 가운데에 타이틀 적는 기능 (이건 무조건 글자만 들어가게)   
    */

    /*
    어려운 점
    - 툴바에 들어가는 요소들을 이미지 태그 혹은 그냥 div태그등 자유롭게 넣어야 하는데 어떻게 구성하는게 좋을지
    - 이 클래스만 가지고 각 액티비티에 마운트 했을때 각각 다른 툴바를 구현가능한지..?
    */

    /*
    원래 안드로이드의 방식은?
    - 액티비티 xml에 toolbar를 집어 넣는다
    - 액티비티 파일 안에서 toolbar의 id로 조작한다.
    - 조작으로 아이콘이랑 클릭 이벤트를 지정한다.
    */

    /*
    그렇다면 여기서는?
    - 각 액티비티 파일에서 Toolbar객체를 마운트한다.
    - 액티비티 파일에서 이 툴바 객체를 조작할 방법을 생각해낸다.
    - 툴바 객체를 마운트할때 id를 props로 보내면 좋을 것 같다!
    - 툴바의 인스턴스 메서드로 아이콘 부착 및 클릭 이벤트 (이건 콜백함수로?)를 마련하면 될듯..!!
    */

    constructor(selector, props) {
        super(selector, props);
    }

    template() {
        return ``;
    }
}
