import JSConfetti from "js-confetti";
import nextSlide from "../lib/next-slide";
import wait from "wait";

const jsConfetti = new JSConfetti();

export default async function loading() {
	await wait(2000);
	jsConfetti.addConfetti({ emojis: ["💫"] });

	const response = await fetch("http://localhost:3000/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		const { quiz } = await response.json();

		window.quiz = quiz;

		nextSlide("quiz");
	} else {
		const error = await response.text();
		alert(error);
	}
}
