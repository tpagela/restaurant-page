/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'home');
    homePage.setAttribute('class', 'tabcontent');


}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadPage() {

    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.setAttribute('id', 'header',);

    const backgroundImage = document.createElement("div");
    backgroundImage.setAttribute('id', 'background');
    
    const item1 = document.createElement('ul');
    item1.innerHTML = ("Home")
    item1.setAttribute('class', 'tablinks');


    const item2 = document.createElement('ul');
    item2.innerHTML = ("Menu")
    item2.setAttribute('class', 'tablinks');
    
    const item3 = document.createElement('ul');
    item3.innerHTML = ("About Us")
    item3.setAttribute('class', 'tablinks');

    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'backgroundText');
    mainText.innerHTML = ("HOT CHICK SWEET CHICK MAIN CHICK");
    
    const subText = document.createElement('div');
    subText.setAttribute('id', 'subText');
    subText.innerHTML = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate sodales arcu nec commodo. ");

    content.appendChild(header);
    content.appendChild(backgroundImage)
    header.appendChild(item1)
    header.appendChild(item2)
    header.appendChild(item3)
    backgroundImage.appendChild(mainText);
    backgroundImage.appendChild(subText);
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ "./src/modules/load.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");





function init() {
    (0,_modules_load__WEBPACK_IMPORTED_MODULE_0__["default"])();

}

init();





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNWdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQztBQUN4Qjs7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051QztBQUNGO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZVBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XHJcbiAgICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYmNvbnRlbnQnKTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicsKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFja2dyb3VuZCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBpdGVtMS5pbm5lckhUTUwgPSAoXCJIb21lXCIpXHJcbiAgICBpdGVtMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYmxpbmtzJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGl0ZW0yLmlubmVySFRNTCA9IChcIk1lbnVcIilcclxuICAgIGl0ZW0yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFibGlua3MnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgaXRlbTMuaW5uZXJIVE1MID0gKFwiQWJvdXQgVXNcIilcclxuICAgIGl0ZW0zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFibGlua3MnKTtcclxuXHJcbiAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpblRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrZ3JvdW5kVGV4dCcpO1xyXG4gICAgbWFpblRleHQuaW5uZXJIVE1MID0gKFwiSE9UIENISUNLIFNXRUVUIENISUNLIE1BSU4gQ0hJQ0tcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1YlRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJUZXh0Jyk7XHJcbiAgICBzdWJUZXh0LmlubmVySFRNTCA9IChcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIHZ1bHB1dGF0ZSBzb2RhbGVzIGFyY3UgbmVjIGNvbW1vZG8uIFwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSlcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChpdGVtMSlcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChpdGVtMilcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChpdGVtMylcclxuICAgIGJhY2tncm91bmRJbWFnZS5hcHBlbmRDaGlsZChtYWluVGV4dCk7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuYXBwZW5kQ2hpbGQoc3ViVGV4dCk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSAgZnJvbSBcIi4vbW9kdWxlcy9sb2FkXCI7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbG9hZFBhZ2UoKTtcclxuXHJcbn1cclxuXHJcbmluaXQoKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==