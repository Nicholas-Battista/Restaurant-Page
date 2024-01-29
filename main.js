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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nfunction loadAbout() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  (0,___WEBPACK_IMPORTED_MODULE_0__.determineUnderline)();\r\n  const aboutBtn = document.querySelector(\".aboutBtn\");\r\n  aboutBtn.classList.toggle(\"is-active\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  (0,___WEBPACK_IMPORTED_MODULE_0__.determineUnderline)();\r\n  const homeBtn = document.querySelector(\".homeBtn\");\r\n  homeBtn.classList.toggle(\"is-active\");\r\n\r\n  const home = document.createElement(\"div\");\r\n  home.classList.add(\"home\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.src = \"images/pexels-ivan-samkov-8951149.jpg\";\r\n  img.alt = \"sushi chef\";\r\n\r\n  home.appendChild(createP(\"Welcome to Blessed Suhsi!\"));\r\n  home.appendChild(createP(\"The most fresh & most chill in town!\"));\r\n  home.appendChild(img);\r\n  home.appendChild(createP(\"Visit us, or Order Online!\"));\r\n\r\n  content.appendChild(home);\r\n}\r\n\r\nfunction createP(info) {\r\n  const pElement = document.createElement(\"p\");\r\n  pElement.textContent = info;\r\n  return pElement;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   determineUnderline: () => (/* binding */ determineUnderline)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst homeBtn = document.querySelector(\".homeBtn\");\r\nconst menuBtn = document.querySelector(\".menuBtn\");\r\nconst aboutBtn = document.querySelector(\".aboutBtn\");\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nhomeBtn.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nmenuBtn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\naboutBtn.addEventListener(\"click\", _about__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\nfunction determineUnderline() {\r\n  if (homeBtn.classList.contains(\"is-active\")) {\r\n    homeBtn.classList.toggle(\"is-active\");\r\n  }\r\n  if (menuBtn.classList.contains(\"is-active\")) {\r\n    menuBtn.classList.toggle(\"is-active\");\r\n  }\r\n  if (aboutBtn.classList.contains(\"is-active\")) {\r\n    aboutBtn.classList.toggle(\"is-active\");\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  (0,___WEBPACK_IMPORTED_MODULE_0__.determineUnderline)();\r\n  const menuBtn = document.querySelector(\".menuBtn\");\r\n  menuBtn.classList.toggle(\"is-active\");\r\n\r\n  const menu = document.createElement(\"div\");\r\n  menu.classList.add(\"menu\");\r\n\r\n  createMenuList(menu);\r\n\r\n  content.appendChild(menu);\r\n}\r\n\r\nfunction createMenuItem(name, info, src) {\r\n  const menuItem = document.createElement(\"div\");\r\n  menuItem.classList.add(\"menu-item\");\r\n\r\n  const itemName = document.createElement(\"h3\");\r\n  itemName.textContent = name;\r\n  itemName.classList.add(\"itemName\");\r\n\r\n  const itemImg = document.createElement(\"img\");\r\n  itemImg.src = src;\r\n\r\n  const itemInfo = document.createElement(\"p\");\r\n  itemInfo.textContent = info;\r\n  itemInfo.classList.add(\"itemInfo\");\r\n\r\n  menuItem.appendChild(itemName);\r\n  menuItem.appendChild(itemImg);\r\n  menuItem.appendChild(itemInfo);\r\n  return menuItem;\r\n}\r\n\r\nfunction createMenuList(menu) {\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Dragon Roll\",\r\n      \"A delectable fusion of shrimp tempura, avocado, and cucumber, topped with spicy mayo and eel sauce for a savory kick.\",\r\n      \"images/sushi/anthony-espinosa-InCMGusiAvA-unsplash.jpg\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Rainbow Roll\",\r\n      \"A colorful assortment of fresh sashimi slices, including tuna, salmon, and avocado, rolled with crab and cucumber for a burst of flavors.\",\r\n      \"images/sushi/luc-bercoth-4ykELaXgeOM-unsplash.jpg\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Spicy Tuna Roll\",\r\n      \"A zesty combination of spicy tuna, cucumber, and green onions, finished with a drizzle of spicy mayo for a bold and fiery taste.\",\r\n      \"images/sushi/roll2.jpg\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"California Roll\",\r\n      \"A classic roll featuring imitation crab, avocado, and cucumber, wrapped in seaweed and rice, perfect for those seeking a milder sushi experience.\",\r\n      \"images/sushi/suhi-roll.jpg\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Crispy Tempura Roll\",\r\n      \"A delightful mix of tempura shrimp, avocado, and cucumber, complemented by a crunchy tempura coating and a touch of eel sauce.\",\r\n      \"images/sushi/rainbow.jpg\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Mango Tango Roll\",\r\n      \"A tropical delight with shrimp tempura, mango slices, and cucumber, harmonized with a sweet mango sauce for a refreshing twist.\",\r\n      \"images/sushi/spicy.jpg\"\r\n    )\r\n  );\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;