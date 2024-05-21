import randomTheme from "./random-theme";

const bodyEl = document.querySelector("body");

// Loop through all elements with data slide attribute
// if match with nextSlideId argument then show element
// and hide all others.
export default function nextSlide(nextSlideId) {
	[...document.querySelectorAll("[data-slide]")].forEach((el) => {
		const slideId = el.getAttribute("data-slide");

		if (slideId === nextSlideId) {
			el.style.display = "";
			randomTheme(bodyEl);
		} else {
			el.style.display = "none";
		}
	});
}
