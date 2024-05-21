import "./style.css";
import "@phosphor-icons/web/bold";
import randomTheme from "./lib/random-theme";
import fadeIn from "./lib/fade-in";
import JSConfetti from "js-confetti";
import nextSlide from "./lib/next-slide";
import loading from "./slides/loading";

const bodyEl = document.querySelector("body");
const jsConfetti = new JSConfetti();

// Button event listeners.
document
	.querySelector('[data-next-slide="loading"]')
	.addEventListener("click", () => {
		nextSlide("loading");
		loading();
	});

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
