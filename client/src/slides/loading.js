import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

export default async function loading() {
	jsConfetti.addConfetti({ emojis: ["💫"] });
}
