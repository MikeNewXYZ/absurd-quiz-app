import "./style.css";
import randomTheme from "./lib/random-theme";
import fadeIn from "./lib/fade-in";
import JSConfetti from "js-confetti";

const bodyEl = document.querySelector("body");
const jsConfetti = new JSConfetti();

// Page intro sequence
async function init() {
	await randomTheme(bodyEl);
	await fadeIn(bodyEl);
	await jsConfetti.addConfetti();
}
init();

// When any button element is clicked run js confetti
[...document.querySelectorAll("button")].forEach((el) => {
	el.addEventListener("click", () => jsConfetti.addConfetti());
});
