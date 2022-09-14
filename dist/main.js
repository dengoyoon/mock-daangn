/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/app.js */ \"./pages/app.js\");\n\n\nconst app = new _pages_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#root\");\n\n\n//# sourceURL=webpack://mock-daangn/./index.js?");

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_MainActivity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MainActivity.js */ \"./pages/components/MainActivity.js\");\n/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Component.js */ \"./pages/core/Component.js\");\n/* harmony import */ var _core_State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/State.js */ \"./pages/core/State.js\");\n/* harmony import */ var _core_Observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Observer.js */ \"./pages/core/Observer.js\");\n\n\n\n\n\nconst getActivityTop = (array) => array[array.length - 1];\n\nclass App extends _core_Component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(selector, props) {\n        super(selector, props);\n        this._state = new _core_State_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_core_Observer_js__WEBPACK_IMPORTED_MODULE_3__.activityStackObserver.get());\n        _core_Observer_js__WEBPACK_IMPORTED_MODULE_3__.activityStackObserver.subscribe(this.setState.bind(this));\n        _core_Observer_js__WEBPACK_IMPORTED_MODULE_3__.activityStackObserver.update({\n            activityStack: [new _components_MainActivity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#root\")],\n        });\n    }\n\n    template() {}\n\n    mounted() {\n        getActivityTop(this.state.activityStack).render();\n    }\n}\n\n\n//# sourceURL=webpack://mock-daangn/./pages/app.js?");

/***/ }),

/***/ "./pages/components/DetailActivity.js":
/*!********************************************!*\
  !*** ./pages/components/DetailActivity.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DetailActivity)\n/* harmony export */ });\n/* harmony import */ var _core_Activity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Activity.js */ \"./pages/core/Activity.js\");\n/* harmony import */ var _core_State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/State.js */ \"./pages/core/State.js\");\n\n\n\nclass DetailActivity extends _core_Activity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(selector, props) {\n        super(selector, props);\n        this._state = new _core_State_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({});\n        this._activityId = \"detail\";\n        this.setEvent();\n    }\n\n    template() {\n        return `\n            <div id=${this._activityId}>\n                <header>Detail</header>\n                <section>디테일 입니다~</section>\n                <footer>롸롸뢀</footer>\n            </div>\n        `;\n    }\n\n    onClickAll(event) {\n        // test code\n        this.popActivity();\n    }\n\n    setEvent() {\n        this.addEvent(\"click\", `#${this._activityId}`, this.onClickAll.bind(this));\n    }\n}\n\n\n//# sourceURL=webpack://mock-daangn/./pages/components/DetailActivity.js?");

/***/ }),

/***/ "./pages/components/MainActivity.js":
/*!******************************************!*\
  !*** ./pages/components/MainActivity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainActivity)\n/* harmony export */ });\n/* harmony import */ var _core_Activity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Activity.js */ \"./pages/core/Activity.js\");\n/* harmony import */ var _core_State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/State.js */ \"./pages/core/State.js\");\n/* harmony import */ var _DetailActivity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailActivity.js */ \"./pages/components/DetailActivity.js\");\n\n\n\n\nclass MainActivity extends _core_Activity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(selector, props) {\n        super(selector, props);\n        this._state = new _core_State_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({});\n        this._activityId = \"main\";\n        this.setEvent();\n    }\n\n    template() {\n        return `\n            <div id=${this._activityId}>\n                <header>Main</header>\n                <section>액티비티 입니다~</section>\n                <footer>홈 / 채팅</footer>\n            </div>\n        `;\n    }\n\n    onClickAll(event) {\n        // test code\n        this.pushActivity(new _DetailActivity_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"#root\"));\n    }\n\n    setEvent() {\n        this.addEvent(\"click\", `#${this._activityId}`, this.onClickAll.bind(this));\n    }\n}\n\n\n//# sourceURL=webpack://mock-daangn/./pages/components/MainActivity.js?");

/***/ }),

/***/ "./pages/core/Activity.js":
/*!********************************!*\
  !*** ./pages/core/Activity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Activity)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./pages/core/Component.js\");\n/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer.js */ \"./pages/core/Observer.js\");\n\n\n\nconst getPoppedArray = (array) => array.slice(0, array.length - 1);\nconst clearArray = (array) => (array.length = 0);\n\nclass Activity extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    // 화면 전환 효과\n\n    _activityId;\n    constructor(selector, props) {\n        super(selector, props);\n    }\n\n    clearEvents() {\n        this._registedEvents.forEach((event) => {\n            this._target.removeEventListener(event.type, event.eventListener);\n        });\n        clearArray(this._registedEvents);\n    }\n\n    pushActivity(activity) {\n        // this.clearEvents();\n        _Observer_js__WEBPACK_IMPORTED_MODULE_1__.activityStackObserver.update({\n            activityStack: [..._Observer_js__WEBPACK_IMPORTED_MODULE_1__.activityStackObserver.get().activityStack, activity],\n        });\n    }\n\n    popActivity() {\n        this.clearEvents();\n        _Observer_js__WEBPACK_IMPORTED_MODULE_1__.activityStackObserver.update({\n            activityStack: [...getPoppedArray(_Observer_js__WEBPACK_IMPORTED_MODULE_1__.activityStackObserver.get().activityStack)],\n        });\n    }\n}\n\n\n//# sourceURL=webpack://mock-daangn/./pages/core/Activity.js?");

/***/ }),

/***/ "./pages/core/Component.js":
/*!*********************************!*\
  !*** ./pages/core/Component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nconst getArrayTop = (array) => array[array.length - 1];\n\nclass Component {\n    _state;\n    _target;\n    _props;\n    _registedEvents;\n\n    constructor(selector, props) {\n        this._target = document.querySelector(selector);\n        this._props = props;\n        this._registedEvents = [];\n    }\n\n    get state() {\n        return this._state.getState();\n    }\n\n    render() {\n        this._target.innerHTML = this.template();\n        this.mounted();\n    }\n\n    template() {\n        return ``;\n    }\n\n    setEvent() {}\n\n    _getRegistedEventTop() {\n        return getArrayTop(this._registedEvents);\n    }\n\n    addEvent(type, selector, callback) {\n        const children = [...this._target.querySelectorAll(selector)];\n        const isTarget = (target) => children.includes(target) || target.closest(selector);\n\n        this._registedEvents.push({\n            type: type,\n            eventListener: (event) => {\n                if (!isTarget(event.target)) return false;\n                callback(event);\n            },\n        });\n\n        this._target.addEventListener(type, this._getRegistedEventTop().eventListener);\n    }\n\n    setState(newState) {\n        this._state.setState(newState);\n        this.render();\n    }\n\n    mounted() {}\n}\n\n\n//# sourceURL=webpack://mock-daangn/./pages/core/Component.js?");

/***/ }),

/***/ "./pages/core/Observer.js":
/*!********************************!*\
  !*** ./pages/core/Observer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activityStackObserver\": () => (/* binding */ activityStackObserver)\n/* harmony export */ });\n/* harmony import */ var _components_MainActivity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MainActivity.js */ \"./pages/components/MainActivity.js\");\n\n\nclass Observer {\n    _state;\n    _subscribers;\n    constructor(initialValue) {\n        this._state = { ...initialValue };\n        this._subscribers = new Set();\n    }\n\n    get() {\n        return this._state;\n    }\n\n    update(newState) {\n        this._state = { ...newState };\n        this._notify();\n    }\n\n    updateWithKey(key, newState) {\n        this._state[key] = newState;\n        this._notify();\n    }\n\n    _notify() {\n        const state = this._state;\n        this._subscribers.forEach((callback) => {\n            callback(state);\n        });\n    }\n\n    subscribe(callback) {\n        this._subscribers.add(callback);\n    }\n}\n\nconst activityStackObserver = new Observer({ activityStack: [] });\n\n\n//# sourceURL=webpack://mock-daangn/./pages/core/Observer.js?");

/***/ }),

/***/ "./pages/core/State.js":
/*!*****************************!*\
  !*** ./pages/core/State.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ State)\n/* harmony export */ });\nclass State {\n    _state;\n    constructor(state) {\n        this._state = state;\n    }\n\n    getState() {\n        return this._state;\n    }\n\n    setState(newState) {\n        this._state = { ...this._state, ...newState };\n    }\n\n    get(key) {\n        return this._state[key];\n    }\n}\n\n\n//# sourceURL=webpack://mock-daangn/./pages/core/State.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;