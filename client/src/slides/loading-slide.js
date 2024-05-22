import JSConfetti from "js-confetti";
import nextSlide from "../lib/next-slide";
import wait from "wait";
import quizSlide from "./quiz-slide";

const jsConfetti = new JSConfetti();

export default async function loadingSlide() {
	await wait(2000);
	jsConfetti.addConfetti({ emojis: ["💫"] });

	const response = await fetch(
		"https://server-production-aeb7.up.railway.app",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const { quiz } = await response.json();

		window.quiz = quiz;

		nextSlide("quiz");

		quizSlide();
	} else {
		const error = await response.text();
		alert(error);
	}
}
