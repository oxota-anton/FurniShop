import getResources from "./getResources";
import Review from "./Review";

export default async function sliderReview() {
	const data = await getResources(
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
			return new Review(item).createReviewElement();
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
