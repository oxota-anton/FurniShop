/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/Card.js":
/*!***********************************!*\
  !*** ./src/js/components/Card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Card {
	constructor({ title, id }) {
		this.title = title.slice(0, 18) + "...";
		this.id = id;
	}

	render() {
		const card = document.createElement("div");
		card.classList.add("card");

		card.innerHTML = `
                        <div class="card__inner">
                            <img src="img/card/card__img5.png" alt="" class="card__img">
                            <button class="card__add">
                                <img src="img/card/plus.svg" alt="">
                            </button>
                        </div>
                        <div class="card__title">${this.title} ${this.id}</div>
                        <div class="card__price">
                            <div class="card__new-price">$75.00</div>
                            <div class="card__old-price">$82.00</div>
                        </div>
        
        `;

		return card;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./src/js/components/Review.js":
/*!*************************************!*\
  !*** ./src/js/components/Review.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Review)
/* harmony export */ });
class Review {
	constructor({name, company, id}) {
        this.name = name;
        this.companyName = company.name;
        this.id = id;
    }

    test() {
        console.log(this.companyName);
    }

	createReviewElement() {
		const reviewItem = document.createElement("div");
		reviewItem.classList.add("review-item");

		reviewItem.innerHTML = `
        <div class="user">
            <img src="img/review/user/user.png" alt="" class="user__img">
            <div>
                <div class="user__name">${this.name} ${this.id}</div>
                <div class="user__prof">${this.companyName}</div>
            </div>
        </div>
        <div class="text review-item__text">“They are have a perfect touch for make something so
            professional ,interest and useful for a lot of people .”</div>
        
        `;
        return reviewItem
	}
}


/***/ }),

/***/ "./src/js/components/addEmail.js":
/*!***************************************!*\
  !*** ./src/js/components/addEmail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEmail)
/* harmony export */ });
function addEmail() {
	const form = document.querySelector(".join__form"),
		  input = form.querySelector('input')

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		}).then(res => res.json()).then(data => console.log(data))
		form.reset();
	});
}


/***/ }),

/***/ "./src/js/components/getResources.js":
/*!*******************************************!*\
  !*** ./src/js/components/getResources.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

async function getResources(url) {
    const res = await fetch(url).then(response => response.json())
    return res
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResources);

/***/ }),

/***/ "./src/js/components/sliderProducts.js":
/*!*********************************************!*\
  !*** ./src/js/components/sliderProducts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getResources */ "./src/js/components/getResources.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/js/components/Card.js");



async function sliderProduct() {
	const data = await (0,_getResources__WEBPACK_IMPORTED_MODULE_0__["default"])(
		"https://jsonplaceholder.typicode.com/albums"
	);

	const slider = document.querySelector(".products .slider"),
		next = slider.querySelector(".slider__next"),
		prev = slider.querySelector(".slider__prev"),
		sliderLine = document.createElement("div"),
		totalSlides = Math.ceil(data.length / 8) - 1;

	let slideIndex = 0;

	const slideChangeTime = 500;

	/* createSliderLine */
	function createSliderLine(data) {
		for (let i = 0; i <= totalSlides; i++) {
			const items = data.splice(0, 8),
				productsWindow = document.createElement("div");
			productsWindow.classList.add("products__window");

			items.forEach((item) => {
				productsWindow.append(new _Card__WEBPACK_IMPORTED_MODULE_1__["default"](item).render());
			});
			sliderLine.append(productsWindow);
		}
		slider.append(sliderLine);
	}
	createSliderLine(data);

	const productsWindow = document.querySelectorAll(".products__window");

	/* Slider Line Settings */

	const slideWidth = setSlideWidth();
	function sliderLineSettings() {
		sliderLine.classList.add("slider__line");
		sliderLine.style.display = "flex";
		sliderLine.style.width = `${slideWidth * 3}px`;
	}
	sliderLineSettings();

	function setSlideWidth() {
		const productsWindows = document.querySelectorAll(".products__window");
		return productsWindows[0].clientWidth;
	}

	/* hideElements */
	function hideElements() {
		const elements = sliderLine.children;
		for (let index = 0; index < elements.length; index++) {
			elements[index].style.display = "none";
			elements[index].style.width = `${slideWidth}px`;
		}
	}

	hideElements();

	/* showSlide */
	function showSlide(index = 0) {
		sliderLine.innerHTML = ``;
		sliderLine.style.transition = ``;
		sliderLine.style.transform = `translateX(-${slideWidth}px)`;

		if (index == 0) {
			productsWindow[totalSlides].style.display = "flex";
			sliderLine.append(productsWindow[totalSlides]);

			productsWindow[index].style.display = "flex";
			sliderLine.append(productsWindow[index]);

			productsWindow[index + 1].style.display = "flex";
			sliderLine.append(productsWindow[index + 1]);
		} else if (index == totalSlides) {
			productsWindow[index - 1].style.display = "flex";
			sliderLine.append(productsWindow[index - 1]);

			productsWindow[index].style.display = "flex";
			sliderLine.append(productsWindow[index]);

			productsWindow[0].style.display = "flex";
			sliderLine.append(productsWindow[0]);
		} else {
			productsWindow[index - 1].style.display = "flex";
			sliderLine.append(productsWindow[index - 1]);

			productsWindow[index].style.display = "flex";
			sliderLine.append(productsWindow[index]);

			productsWindow[index + 1].style.display = "flex";
			sliderLine.append(productsWindow[index + 1]);
		}
	}
	showSlide();

	next.addEventListener("click", () => {
		if (slideIndex == totalSlides) {
			slideIndex = 0;
			showActiveDot(slideIndex);
			sliderLine.style.transition = `all ${slideChangeTime}ms`;
			sliderLine.style.transform = `translateX(-${slideWidth * 2}px)`;

			setTimeout(() => {
				showSlide(slideIndex);
			}, slideChangeTime);
		} else {
			slideIndex++;
			showActiveDot(slideIndex);
			sliderLine.style.transition = `all ${slideChangeTime}ms`;
			sliderLine.style.transform = `translateX(-${slideWidth * 2}px)`;

			setTimeout(() => {
				showSlide(slideIndex);
			}, slideChangeTime);
		}
	});

	prev.addEventListener("click", () => {
		if (slideIndex == 0) {
			slideIndex = totalSlides;
			showActiveDot(slideIndex);
			sliderLine.style.transition = `all ${slideChangeTime}ms`;
			sliderLine.style.transform = `translateX(${0}px)`;

			setTimeout(() => {
				showSlide(slideIndex);
			}, slideChangeTime);
		} else {
			slideIndex--;
			showActiveDot(slideIndex);
			sliderLine.style.transition = `all ${slideChangeTime}ms`;
			sliderLine.style.transform = `translateX(-${0}px)`;

			setTimeout(() => {
				showSlide(slideIndex);
			}, slideChangeTime);
		}
	});

	/* Dots */
	const sliderDots = slider.querySelector(".slider__dots");

	function createDots() {
		sliderDots.innerHTML = "";

		for (let i = 0; i <= totalSlides; i++) {
			const dot = document.createElement("div");
			dot.classList.add("dot");

			sliderDots.append(dot);
		}
	}
	createDots();

	function showActiveDot(index) {
		const dots = document.querySelectorAll(".dot");
		dots.forEach((dot) => {
			dot.classList.remove("dot--active");
		});
		dots[index].classList.add("dot--active");
	}

	showActiveDot(slideIndex);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderProduct);


/***/ }),

/***/ "./src/js/components/sliderReview.js":
/*!*******************************************!*\
  !*** ./src/js/components/sliderReview.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sliderReview)
/* harmony export */ });
/* harmony import */ var _getResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getResources */ "./src/js/components/getResources.js");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review */ "./src/js/components/Review.js");



async function sliderReview() {
	const data = await (0,_getResources__WEBPACK_IMPORTED_MODULE_0__["default"])(
		"https://jsonplaceholder.typicode.com/users"
	);

	const slider = document.querySelector(".review .slider"),
		next = slider.querySelector(".slider__next"),
		prev = slider.querySelector(".slider__prev");

	const reviews = createReviews();
	const slideChangeTime = 350,
		totalSlides = reviews.length - 1;
	let slideIndex = 0;

	function reviewsSettings() {
		reviews.forEach((item) => {
			item.style.transition = `all ${slideChangeTime}ms`;
		});
	}
	reviewsSettings();

	function createReviews() {
		const reviews = data.map((item) => {
			return new _Review__WEBPACK_IMPORTED_MODULE_1__["default"](item).createReviewElement();
		});
		return reviews;
	}

	function createElementsOnPage() {
		reviews.forEach((element) => {
			slider.insertAdjacentElement("afterbegin", element);
		});
	}
	createElementsOnPage();

	function hideAllReviews() {
		reviews.forEach((item) => {
			item.style.display = "none";
			item.style.opacity = "0";
		});
	}
	hideAllReviews();

	function hideReview(index) {
		reviews[index].style.opacity = "0";
		setTimeout(() => {
			reviews[index].style.display = "none";
		}, slideChangeTime);
	}

	function showReview(index = 0) {
		reviews[index].style.display = "block";
		setTimeout(() => {
			reviews[index].style.opacity = "1";
		}, slideChangeTime);
	}
	showReview();

	next.addEventListener("click", () => {
		if (slideIndex == totalSlides) {
			hideReview(slideIndex);
			slideIndex = 0;
			setTimeout(() => {
				showReview(slideIndex);
			}, slideChangeTime);
		} else {
			hideReview(slideIndex);
			slideIndex++;
			setTimeout(() => {
				showReview(slideIndex);
			}, slideChangeTime);
		}
	});

	prev.addEventListener('click', () => {
		if (slideIndex == 0) {
			hideReview(slideIndex);
			slideIndex = totalSlides;
			setTimeout(() => {
				showReview(slideIndex);
			}, slideChangeTime);
		} else {
			hideReview(slideIndex);
			slideIndex--;
			setTimeout(() => {
				showReview(slideIndex);
			}, slideChangeTime);
		}
	})
}


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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sliderProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sliderProducts */ "./src/js/components/sliderProducts.js");
/* harmony import */ var _components_sliderReview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sliderReview */ "./src/js/components/sliderReview.js");
/* harmony import */ var _components_addEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/addEmail */ "./src/js/components/addEmail.js");




window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	(0,_components_sliderProducts__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_components_sliderReview__WEBPACK_IMPORTED_MODULE_1__["default"])();
	(0,_components_addEmail__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map