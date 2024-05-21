export default function fadeIn(el) {
	return new Promise((resolve) => {
		let opacity = 0;

		const timer = setInterval(() => {
			if (opacity >= 1) {
				clearInterval(timer);
				resolve();
			} else {
				opacity = opacity + 0.01;
				el.style.opacity = opacity;
			}
		}, 10);
	});
}
