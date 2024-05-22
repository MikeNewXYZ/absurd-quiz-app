import Typewriter from "typewriter-effect/dist/core";
import nextSlide from "../lib/next-slide";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

const summaryEl = document.querySelector(`[data-slide="summary"]`);
const terminalEl = summaryEl.querySelector("[data-summary-terminal]");

export default async function summarySlide() {
	const quizLength = window.quiz.length;
	let correct = 0;

	window.quiz.forEach(({ answers }, index) => {
		if (!answers[window.userAnswers[index]].correct) return;

		correct++;
	});

	const typewriter = new Typewriter(terminalEl, {
		autoStart: true,
		cursor: "🕺",
	});

	await typewriter
		.pauseFor(1000)
		.typeString(`<pre data-prefix="$"><code>npm i results</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>installing...</code></pre>`)
		.typeString(
			`<pre data-prefix=">"><code>Results: ${correct} out of ${quizLength} correct</code></pre>`,
		)
		.typeString(
			`<pre data-prefix=">"><code>Congratulation... ${correct >= quizLength - 1 ? "you cheated" : "you suck"}</code></pre>`,
		)
		.callFunction(() => jsConfetti.addConfetti())
		.typeString(`<pre data-prefix=">"><code>Back to home in:</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>3</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>2</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>543534</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>234</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>-134</code></pre>`)
		.typeString(`<pre data-prefix=">"><code>-423423423424</code></pre>`)
		.typeString(
			`<pre data-prefix=">"><code>sorry... back to home :)</code></pre>`,
		)
		.callFunction(() => jsConfetti.addConfetti({ emojis: ["🕺"] }))
		.pauseFor(1000)
		.callFunction(() => nextSlide("landing"))
		.start();
}
