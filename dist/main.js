(()=>{"use strict";var t={332:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(81),i=r.n(n),s=r(645),a=r.n(s)()(i());a.push([t.id,"body{margin:0;background-color:#fff}",""]);const o=a},679:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(81),i=r.n(n),s=r(645),a=r.n(s)()(i());a.push([t.id,".toolbar{display:grid;background-color:#fff;border-bottom:.1px solid #c7c7c7;margin:0;height:50px;line-height:50px;grid-template-columns:1fr 100px 1fr;font-size:16px;font-weight:600}.toolbar--left{display:flex;margin-left:20px}.toolbar--title{text-align:center}.toolbar--right{display:flex;margin-left:auto;margin-right:20px}.toolbar--item{margin-left:10px}",""]);const o=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var s={},a=[],o=0;o<t.length;o++){var c=t[o],l=n.base?c[0]+n.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=r(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var v=i(h,n);n.byIndex=o,e.splice(o,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function i(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,i){var s=n(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var o=r(s[a]);e[o].references--}for(var c=n(t,i),l=0;l<s.length;l++){var d=r(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={id:n,exports:{}};return t[n](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.nc=void 0,(()=>{class t{_state;_target;_props;_registedEvents;constructor(t,e){this._target=document.querySelector(t),this._props=e,this._registedEvents=[]}get state(){return this._state.getState()}render(){this._target.innerHTML=this.template(),this.mounted()}template(){return""}setEvent(){}_getRegistedEventTop(){return(t=this._registedEvents)[t.length-1];var t}addEvent(t,e,r){const n=[...this._target.querySelectorAll(e)];this._registedEvents.push({type:t,eventListener:t=>{if(i=t.target,!n.includes(i)&&!i.closest(e))return!1;var i;r(t)}}),this._target.addEventListener(t,this._getRegistedEventTop().eventListener)}setState(t){this._state.setState(t),this.render()}mounted(){}}const e=new class{_state;_subscribers;constructor(t){this._state={...t},this._subscribers=new Set}get(){return this._state}update(t){this._state={...t},this._notify()}updateWithKey(t,e){this._state[t]=e,this._notify()}_notify(){const t=this._state;this._subscribers.forEach((e=>{e(t)}))}subscribe(t){this._subscribers.add(t)}}({activityStack:[]});class n extends t{_activityId;constructor(t,e){super(t,e)}clearEvents(){this._registedEvents.forEach((t=>{this._target.removeEventListener(t.type,t.eventListener)})),this._registedEvents.length=0}pushActivity(t){e.update({activityStack:[...e.get().activityStack,t]})}popActivity(){var t;this.clearEvents(),e.update({activityStack:[...(t=e.get().activityStack,t.slice(0,t.length-1))]})}}class i{_state;constructor(t){this._state=t}getState(){return this._state}setState(t){this._state={...this._state,...t}}get(t){return this._state[t]}}class s extends n{constructor(t,e){super(t,e),this._state=new i({}),this._activityId="detail",this.setEvent()}template(){return`\n            <div id=${this._activityId}>\n                <header>Detail</header>\n                <section>디테일 입니다~</section>\n                <footer>롸롸뢀</footer>\n            </div>\n        `}onClickAll(t){this.popActivity()}setEvent(){this.addEvent("click",`#${this._activityId}`,this.onClickAll.bind(this))}}r.p;class a extends t{_title;_id;_leftComponents;_rightComponents;constructor(t,e){super(t,e),this._id=e.id,this._title=e.title,this._leftComponent=e._leftComponent,this._rightComponents=e._rightComponents,this.render()}template(){return`\n            <div class="toolbar--left">행신 3동</div>\n            <div class="toolbar--title">${this._title}</div>\n            <div class="toolbar--right"><img class="toolbar-item" src="../img/ic_search.png"/></div>\n        `}setTitle(t){this._title=t}}var o=r(379),c=r.n(o),l=r(795),d=r.n(l),u=r(569),p=r.n(u),h=r(565),v=r.n(h),f=r(216),g=r.n(f),m=r(589),y=r.n(m),_=r(679),b={};b.styleTagTransform=y(),b.setAttributes=v(),b.insert=p().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=g(),c()(_.Z,b),_.Z&&_.Z.locals&&_.Z.locals;class x extends n{constructor(t,e){super(t,e),this._state=new i({}),this._activityId="main",this.setEvent()}template(){return`\n            <div id="${this._activityId}">\n                <header class='toolbar'></header>\n                <section class='list'>액티비티 입니다</section>\n                <footer class='bottom-navigation'>홈 / 채팅</footer>\n            </div>\n        `}mounted(){new a(".toolbar",{id:"main-toolbar",title:"",leftComponent:[],rightComponents:[]})}onClickAll(t){this.pushActivity(new s("#root"))}setEvent(){this.addEvent("click",`#${this._activityId}`,this.onClickAll.bind(this))}}var E=r(332),S={};S.styleTagTransform=y(),S.setAttributes=v(),S.insert=p().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=g(),c()(E.Z,S),E.Z&&E.Z.locals&&E.Z.locals,new class extends t{constructor(t,r){super(t,r),this._state=new i(e.get()),e.subscribe(this.setState.bind(this)),e.update({activityStack:[new x("#root")]})}template(){}mounted(){var t;(t=this.state.activityStack,t[t.length-1]).render()}}("#root")})()})();