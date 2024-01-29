/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  (0,___WEBPACK_IMPORTED_MODULE_0__.determineUnderline)();
  const aboutBtn = document.querySelector(".aboutBtn");
  aboutBtn.classList.toggle("is-active");

  const about = document.createElement("div");
  about.classList.add("about");

  const mapImg = document.createElement("img");
  mapImg.src = "images/map.png";

  about.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createP)("☎️: 123 - 456 - 7890"));
  about.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createP)("🏘️: 2323 Blessed Ave, Flagstaff AZ"));
  about.appendChild(mapImg);

  content.appendChild(about);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createP: () => (/* binding */ createP),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  (0,___WEBPACK_IMPORTED_MODULE_0__.determineUnderline)();
  const homeBtn = document.querySelector(".homeBtn");
  homeBtn.classList.toggle("is-active");

  const home = document.createElement("div");
  home.classList.add("home");

  const img = document.createElement("img");
  img.src = "images/cartoon.png";
  img.alt = "sushi chef cartoon";

  home.appendChild(createP("Welcome to Blessed Sushi!"));
  home.appendChild(createP("The most fresh & most chill in town!"));
  home.appendChild(img);
  home.appendChild(createP("Visit us, or Order Online!"));

  content.appendChild(home);
}

function createP(info) {
  const pElement = document.createElement("p");
  pElement.textContent = info;
  return pElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   determineUnderline: () => (/* binding */ determineUnderline)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

homeBtn.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
menuBtn.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
aboutBtn.addEventListener("click", _about__WEBPACK_IMPORTED_MODULE_2__["default"]);

function determineUnderline() {
  if (homeBtn.classList.contains("is-active")) {
    homeBtn.classList.toggle("is-active");
  }
  if (menuBtn.classList.contains("is-active")) {
    menuBtn.classList.toggle("is-active");
  }
  if (aboutBtn.classList.contains("is-active")) {
    aboutBtn.classList.toggle("is-active");
  }
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  (0,___WEBPACK_IMPORTED_MODULE_0__.determineUnderline)();
  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.classList.toggle("is-active");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  createMenuList(menu);

  content.appendChild(menu);
}

function createMenuItem(name, info, src) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("h3");
  itemName.textContent = name;
  itemName.classList.add("itemName");

  const itemImg = document.createElement("img");
  itemImg.src = src;

  const itemInfo = document.createElement("p");
  itemInfo.textContent = info;
  itemInfo.classList.add("itemInfo");

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemInfo);
  return menuItem;
}

function createMenuList(menu) {
  menu.appendChild(
    createMenuItem(
      "Dragon Roll",
      "A delectable fusion of shrimp tempura, avocado, and cucumber, topped with spicy mayo and eel sauce for a savory kick.",
      "images/sushi/anthony-espinosa-InCMGusiAvA-unsplash.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Rainbow Roll",
      "A colorful assortment of fresh sashimi slices, including tuna, salmon, and avocado, rolled with crab and cucumber for a burst of flavors.",
      "images/sushi/luc-bercoth-4ykELaXgeOM-unsplash.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Spicy Tuna Roll",
      "A zesty combination of spicy tuna, cucumber, and green onions, finished with a drizzle of spicy mayo for a bold and fiery taste.",
      "images/sushi/roll2.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "California Roll",
      "A classic roll featuring imitation crab, avocado, and cucumber, wrapped in seaweed and rice, perfect for those seeking a milder sushi experience.",
      "images/sushi/suhi-roll.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crispy Tempura Roll",
      "A delightful mix of tempura shrimp, avocado, and cucumber, complemented by a crunchy tempura coating and a touch of eel sauce.",
      "images/sushi/rainbow.jpg"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Mango Tango Roll",
      "A tropical delight with shrimp tempura, mango slices, and cucumber, harmonized with a sweet mango sauce for a refreshing twist.",
      "images/sushi/spicy.jpg"
    )
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBTztBQUMzQixvQkFBb0IsOENBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1c7QUFDQTtBQUNFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBUTtBQUNSO0FBQ0Esa0NBQWtDLDZDQUFRO0FBQzFDLGtDQUFrQyw2Q0FBUTtBQUMxQyxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNwRnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGV0ZXJtaW5lVW5kZXJsaW5lIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgY3JlYXRlUCB9IGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZGV0ZXJtaW5lVW5kZXJsaW5lKCk7XHJcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0QnRuXCIpO1xyXG4gIGFib3V0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XHJcblxyXG4gIGNvbnN0IG1hcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbWFwSW1nLnNyYyA9IFwiaW1hZ2VzL21hcC5wbmdcIjtcclxuXHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIuKYju+4jzogMTIzIC0gNDU2IC0gNzg5MFwiKSk7XHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIvCfj5jvuI86IDIzMjMgQmxlc3NlZCBBdmUsIEZsYWdzdGFmZiBBWlwiKSk7XHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQobWFwSW1nKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDtcclxuIiwiaW1wb3J0IHsgZGV0ZXJtaW5lVW5kZXJsaW5lIH0gZnJvbSBcIi5cIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBkZXRlcm1pbmVVbmRlcmxpbmUoKTtcclxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lQnRuXCIpO1xyXG4gIGhvbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc3JjID0gXCJpbWFnZXMvY2FydG9vbi5wbmdcIjtcclxuICBpbWcuYWx0ID0gXCJzdXNoaSBjaGVmIGNhcnRvb25cIjtcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiV2VsY29tZSB0byBCbGVzc2VkIFN1c2hpIVwiKSk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiVGhlIG1vc3QgZnJlc2ggJiBtb3N0IGNoaWxsIGluIHRvd24hXCIpKTtcclxuICBob21lLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiVmlzaXQgdXMsIG9yIE9yZGVyIE9ubGluZSFcIikpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQKGluZm8pIHtcclxuICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBFbGVtZW50LnRleHRDb250ZW50ID0gaW5mbztcclxuICByZXR1cm4gcEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xyXG5leHBvcnQgeyBjcmVhdGVQIH07XHJcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVCdG5cIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVCdG5cIik7XHJcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dEJ0blwiKTtcclxuXHJcbmxvYWRIb21lKCk7XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51KTtcclxuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBYm91dCk7XHJcblxyXG5mdW5jdGlvbiBkZXRlcm1pbmVVbmRlcmxpbmUoKSB7XHJcbiAgaWYgKGhvbWVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpKSB7XHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgfVxyXG4gIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSkge1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxuICBpZiAoYWJvdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpKSB7XHJcbiAgICBhYm91dEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZGV0ZXJtaW5lVW5kZXJsaW5lIH07XHJcbiIsImltcG9ydCB7IGRldGVybWluZVVuZGVybGluZSB9IGZyb20gXCIuXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZGV0ZXJtaW5lVW5kZXJsaW5lKCk7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ0blwiKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gIGNyZWF0ZU1lbnVMaXN0KG1lbnUpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBpbmZvLCBzcmMpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJpdGVtTmFtZVwiKTtcclxuXHJcbiAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaXRlbUltZy5zcmMgPSBzcmM7XHJcblxyXG4gIGNvbnN0IGl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaXRlbUluZm8udGV4dENvbnRlbnQgPSBpbmZvO1xyXG4gIGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJpdGVtSW5mb1wiKTtcclxuXHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcclxuICByZXR1cm4gbWVudUl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVMaXN0KG1lbnUpIHtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiRHJhZ29uIFJvbGxcIixcclxuICAgICAgXCJBIGRlbGVjdGFibGUgZnVzaW9uIG9mIHNocmltcCB0ZW1wdXJhLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIHRvcHBlZCB3aXRoIHNwaWN5IG1heW8gYW5kIGVlbCBzYXVjZSBmb3IgYSBzYXZvcnkga2ljay5cIixcclxuICAgICAgXCJpbWFnZXMvc3VzaGkvYW50aG9ueS1lc3Bpbm9zYS1JbkNNR3VzaUF2QS11bnNwbGFzaC5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlJhaW5ib3cgUm9sbFwiLFxyXG4gICAgICBcIkEgY29sb3JmdWwgYXNzb3J0bWVudCBvZiBmcmVzaCBzYXNoaW1pIHNsaWNlcywgaW5jbHVkaW5nIHR1bmEsIHNhbG1vbiwgYW5kIGF2b2NhZG8sIHJvbGxlZCB3aXRoIGNyYWIgYW5kIGN1Y3VtYmVyIGZvciBhIGJ1cnN0IG9mIGZsYXZvcnMuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL2x1Yy1iZXJjb3RoLTR5a0VMYVhnZU9NLXVuc3BsYXNoLmpwZ1wiXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU3BpY3kgVHVuYSBSb2xsXCIsXHJcbiAgICAgIFwiQSB6ZXN0eSBjb21iaW5hdGlvbiBvZiBzcGljeSB0dW5hLCBjdWN1bWJlciwgYW5kIGdyZWVuIG9uaW9ucywgZmluaXNoZWQgd2l0aCBhIGRyaXp6bGUgb2Ygc3BpY3kgbWF5byBmb3IgYSBib2xkIGFuZCBmaWVyeSB0YXN0ZS5cIixcclxuICAgICAgXCJpbWFnZXMvc3VzaGkvcm9sbDIuanBnXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJDYWxpZm9ybmlhIFJvbGxcIixcclxuICAgICAgXCJBIGNsYXNzaWMgcm9sbCBmZWF0dXJpbmcgaW1pdGF0aW9uIGNyYWIsIGF2b2NhZG8sIGFuZCBjdWN1bWJlciwgd3JhcHBlZCBpbiBzZWF3ZWVkIGFuZCByaWNlLCBwZXJmZWN0IGZvciB0aG9zZSBzZWVraW5nIGEgbWlsZGVyIHN1c2hpIGV4cGVyaWVuY2UuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL3N1aGktcm9sbC5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkNyaXNweSBUZW1wdXJhIFJvbGxcIixcclxuICAgICAgXCJBIGRlbGlnaHRmdWwgbWl4IG9mIHRlbXB1cmEgc2hyaW1wLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIGNvbXBsZW1lbnRlZCBieSBhIGNydW5jaHkgdGVtcHVyYSBjb2F0aW5nIGFuZCBhIHRvdWNoIG9mIGVlbCBzYXVjZS5cIixcclxuICAgICAgXCJpbWFnZXMvc3VzaGkvcmFpbmJvdy5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIk1hbmdvIFRhbmdvIFJvbGxcIixcclxuICAgICAgXCJBIHRyb3BpY2FsIGRlbGlnaHQgd2l0aCBzaHJpbXAgdGVtcHVyYSwgbWFuZ28gc2xpY2VzLCBhbmQgY3VjdW1iZXIsIGhhcm1vbml6ZWQgd2l0aCBhIHN3ZWV0IG1hbmdvIHNhdWNlIGZvciBhIHJlZnJlc2hpbmcgdHdpc3QuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL3NwaWN5LmpwZ1wiXHJcbiAgICApXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=