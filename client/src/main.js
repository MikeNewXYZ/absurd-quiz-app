import "./style.css";
import "@phosphor-icons/web/bold";
import randomTheme from "./lib/random-theme";
import fadeIn from "./lib/fade-in";
import JSConfetti from "js-confetti";

const bodyEl = document.querySelector("body");
const jsConfetti = new JSConfetti();

// Page intro sequence.
async function init() {
	await randomTheme(bodyEl);
	await fadeIn(bodyEl);
	await jsConfetti.addConfetti();
}
init();

// When any button element is clicked run js confetti.
[...document.querySelectorAll("button")].forEach((el) => {
	el.addEventListener("click", () => jsConfetti.addConfetti());
});

// When button with "data-next-slide" attribute is clicked
// get its slide value, then hide all slides that don't
// match and show the one that does. Also change to
// a random theme.
[...document.querySelectorAll("[data-next-slide]")].forEach((el) => {
	el.addEventListener("click", () => {
		const nextSlideId = el.getAttribute("data-next-slide");

		[...document.querySelectorAll("[data-slide]")].forEach((el) => {
			const slideId = el.getAttribute("data-slide");

			if (slideId === nextSlideId) {
				el.style.display = "block";
				randomTheme(bodyEl);
			} else {
				el.style.display = "none";
			}
		});
	});
});
