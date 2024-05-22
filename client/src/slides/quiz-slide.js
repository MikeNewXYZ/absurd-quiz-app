import nextSlide from "../lib/next-slide";
import randomTheme from "../lib/random-theme";

const quizCardsEl = document.getElementById("quiz-cards");
const cardTemplate = document.querySelector('[data-template="quiz-card"]');
const answerTemplate = document.querySelector(
	'[data-template="quiz-card-answer"]',
);

window.userAnswers = [];

// I should of done this the easy way.
export default async function quizSlide() {
	window.quiz.forEach(({ question, answers }, questionIndex) => {
		const cardClone = cardTemplate.content.cloneNode(true);

		cardClone.querySelector("[data-quiz-card]").dataset.quizCard =
			questionIndex;
		cardClone.querySelector("[data-quiz-card-question]").innerText = question;

		answers.forEach(({ text }, answerIndex) => {
			const answerClone = answerTemplate.content.cloneNode(true);

			answerClone
				.querySelector("[data-quiz-answer-label]")
				.setAttribute("for", `${questionIndex}-${answerIndex}`);
			answerClone.querySelector("[data-quiz-answer-text]").innerText = text;
			answerClone
				.querySelector("[data-quiz-answer-input]")
				.setAttribute("id", `${questionIndex}-${answerIndex}`);
			answerClone
				.querySelector("[data-quiz-answer-input]")
				.setAttribute("name", questionIndex);
			answerClone
				.querySelector("[data-quiz-answer-input]")
				.setAttribute("value", answerIndex);

			if (answerIndex === 0) {
				answerClone
					.querySelector("[data-quiz-answer-input]")
					.setAttribute("checked", "");
			}

			cardClone
				.querySelector("[data-quiz-card-answers]")
				.appendChild(answerClone);
		});

		cardClone.querySelector("form").addEventListener("submit", (e) => {
			e.preventDefault();

			randomTheme(document.body);

			const data = new FormData(e.target);
			window.userAnswers.push([...data.entries()][0]);
			quizCardsEl.querySelector(`[data-quiz-card="${questionIndex}"]`).remove();

			if (window.userAnswers.length >= window.quiz.length) {
				nextSlide("summary");
			}
		});

		quizCardsEl.appendChild(cardClone);
	});
}
