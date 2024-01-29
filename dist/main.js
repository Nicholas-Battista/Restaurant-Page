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

  about.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createP)("☎️: 123 - 456 - 7890"));
  about.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createP)("🏘️: 2323 Blessed Ave, Flagstaff AZ"));

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
  img.alt = "sushi chef";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBTztBQUMzQixvQkFBb0IsOENBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENXO0FBQ0E7QUFDRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVE7QUFDUjtBQUNBLGtDQUFrQyw2Q0FBUTtBQUMxQyxrQ0FBa0MsNkNBQVE7QUFDMUMsbUNBQW1DLDhDQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDcEZ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRldGVybWluZVVuZGVybGluZSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVAgfSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGRldGVybWluZVVuZGVybGluZSgpO1xyXG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dEJ0blwiKTtcclxuICBhYm91dEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xyXG5cclxuICBhYm91dC5hcHBlbmRDaGlsZChjcmVhdGVQKFwi4piO77iPOiAxMjMgLSA0NTYgLSA3ODkwXCIpKTtcclxuICBhYm91dC5hcHBlbmRDaGlsZChjcmVhdGVQKFwi8J+PmO+4jzogMjMyMyBCbGVzc2VkIEF2ZSwgRmxhZ3N0YWZmIEFaXCIpKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDtcclxuIiwiaW1wb3J0IHsgZGV0ZXJtaW5lVW5kZXJsaW5lIH0gZnJvbSBcIi5cIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBkZXRlcm1pbmVVbmRlcmxpbmUoKTtcclxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lQnRuXCIpO1xyXG4gIGhvbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc3JjID0gXCJpbWFnZXMvY2FydG9vbi5wbmdcIjtcclxuICBpbWcuYWx0ID0gXCJzdXNoaSBjaGVmXCI7XHJcblxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIldlbGNvbWUgdG8gQmxlc3NlZCBTdXNoaSFcIikpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIlRoZSBtb3N0IGZyZXNoICYgbW9zdCBjaGlsbCBpbiB0b3duIVwiKSk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIlZpc2l0IHVzLCBvciBPcmRlciBPbmxpbmUhXCIpKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUChpbmZvKSB7XHJcbiAgY29uc3QgcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwRWxlbWVudC50ZXh0Q29udGVudCA9IGluZm87XHJcbiAgcmV0dXJuIHBFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcclxuZXhwb3J0IHsgY3JlYXRlUCB9O1xyXG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lQnRuXCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51QnRuXCIpO1xyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRCdG5cIik7XHJcblxyXG5sb2FkSG9tZSgpO1xyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWUpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQWJvdXQpO1xyXG5cclxuZnVuY3Rpb24gZGV0ZXJtaW5lVW5kZXJsaW5lKCkge1xyXG4gIGlmIChob21lQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSkge1xyXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxuICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1hY3RpdmVcIikpIHtcclxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICB9XHJcbiAgaWYgKGFib3V0QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSkge1xyXG4gICAgYWJvdXRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRldGVybWluZVVuZGVybGluZSB9O1xyXG4iLCJpbXBvcnQgeyBkZXRlcm1pbmVVbmRlcmxpbmUgfSBmcm9tIFwiLlwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGRldGVybWluZVVuZGVybGluZSgpO1xyXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVCdG5cIik7XHJcbiAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICBjcmVhdGVNZW51TGlzdChtZW51KTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgaW5mbywgc3JjKSB7XHJcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcblxyXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbU5hbWVcIik7XHJcblxyXG4gIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGl0ZW1JbWcuc3JjID0gc3JjO1xyXG5cclxuICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGl0ZW1JbmZvLnRleHRDb250ZW50ID0gaW5mbztcclxuICBpdGVtSW5mby5jbGFzc0xpc3QuYWRkKFwiaXRlbUluZm9cIik7XHJcblxyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcclxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW5mbyk7XHJcbiAgcmV0dXJuIG1lbnVJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdChtZW51KSB7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkRyYWdvbiBSb2xsXCIsXHJcbiAgICAgIFwiQSBkZWxlY3RhYmxlIGZ1c2lvbiBvZiBzaHJpbXAgdGVtcHVyYSwgYXZvY2FkbywgYW5kIGN1Y3VtYmVyLCB0b3BwZWQgd2l0aCBzcGljeSBtYXlvIGFuZCBlZWwgc2F1Y2UgZm9yIGEgc2F2b3J5IGtpY2suXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL2FudGhvbnktZXNwaW5vc2EtSW5DTUd1c2lBdkEtdW5zcGxhc2guanBnXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJSYWluYm93IFJvbGxcIixcclxuICAgICAgXCJBIGNvbG9yZnVsIGFzc29ydG1lbnQgb2YgZnJlc2ggc2FzaGltaSBzbGljZXMsIGluY2x1ZGluZyB0dW5hLCBzYWxtb24sIGFuZCBhdm9jYWRvLCByb2xsZWQgd2l0aCBjcmFiIGFuZCBjdWN1bWJlciBmb3IgYSBidXJzdCBvZiBmbGF2b3JzLlwiLFxyXG4gICAgICBcImltYWdlcy9zdXNoaS9sdWMtYmVyY290aC00eWtFTGFYZ2VPTS11bnNwbGFzaC5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlNwaWN5IFR1bmEgUm9sbFwiLFxyXG4gICAgICBcIkEgemVzdHkgY29tYmluYXRpb24gb2Ygc3BpY3kgdHVuYSwgY3VjdW1iZXIsIGFuZCBncmVlbiBvbmlvbnMsIGZpbmlzaGVkIHdpdGggYSBkcml6emxlIG9mIHNwaWN5IG1heW8gZm9yIGEgYm9sZCBhbmQgZmllcnkgdGFzdGUuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL3JvbGwyLmpwZ1wiXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiQ2FsaWZvcm5pYSBSb2xsXCIsXHJcbiAgICAgIFwiQSBjbGFzc2ljIHJvbGwgZmVhdHVyaW5nIGltaXRhdGlvbiBjcmFiLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIHdyYXBwZWQgaW4gc2Vhd2VlZCBhbmQgcmljZSwgcGVyZmVjdCBmb3IgdGhvc2Ugc2Vla2luZyBhIG1pbGRlciBzdXNoaSBleHBlcmllbmNlLlwiLFxyXG4gICAgICBcImltYWdlcy9zdXNoaS9zdWhpLXJvbGwuanBnXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJDcmlzcHkgVGVtcHVyYSBSb2xsXCIsXHJcbiAgICAgIFwiQSBkZWxpZ2h0ZnVsIG1peCBvZiB0ZW1wdXJhIHNocmltcCwgYXZvY2FkbywgYW5kIGN1Y3VtYmVyLCBjb21wbGVtZW50ZWQgYnkgYSBjcnVuY2h5IHRlbXB1cmEgY29hdGluZyBhbmQgYSB0b3VjaCBvZiBlZWwgc2F1Y2UuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL3JhaW5ib3cuanBnXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJNYW5nbyBUYW5nbyBSb2xsXCIsXHJcbiAgICAgIFwiQSB0cm9waWNhbCBkZWxpZ2h0IHdpdGggc2hyaW1wIHRlbXB1cmEsIG1hbmdvIHNsaWNlcywgYW5kIGN1Y3VtYmVyLCBoYXJtb25pemVkIHdpdGggYSBzd2VldCBtYW5nbyBzYXVjZSBmb3IgYSByZWZyZXNoaW5nIHR3aXN0LlwiLFxyXG4gICAgICBcImltYWdlcy9zdXNoaS9zcGljeS5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9