import "./style.css";
import "@phosphor-icons/web/bold";
import randomTheme from "./lib/random-theme";
import fadeIn from "./lib/fade-in";
import JSConfetti from "js-confetti";
import nextSlide from "./lib/next-slide";
import loadingSlide from "./slides/loading-slide";

const bodyEl = document.querySelector("body");
const jsConfetti = new JSConfetti();

// Button event listeners.
document
	.querySelector('[data-next-slide="loading"]')
	.addEventListener("click", () => {
		nextSlide("loading");
		loadingSlide();
	});

// Page intro sequence.
async function init() {
	await randomTheme(bodyEl);
	await fadeIn(bodyEl);
	await jsConfetti.addConfetti();
}
init();
