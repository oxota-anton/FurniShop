import getResources from "./getResources";
import Card from "./Card";

async function sliderProduct() {
	const data = await getResources(
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
				productsWindow.append(new Card(item).render());
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

export default sliderProduct;
