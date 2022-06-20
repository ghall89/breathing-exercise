const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

let count = 5;

const countdown = num => {
	const instructEl = document.querySelector('#instruction');
	const countdownEl = document.querySelector('#countdown');
	const circleEl = document.querySelector('#circle');

	countdownEl.innerText = num;
	let nextNum;

	switch (num) {
		case 4:
			instructEl.innerText = 'Breathe in.';
			circleEl.className = 'inhale';
			nextNum = 7;
			break;
		case 7:
			instructEl.innerText = 'Hold.';
			circleEl.className = 'hold';
			nextNum = 8;
			break;
		case 8:
			instructEl.innerText = 'Breathe out.';
			circleEl.className = 'exhale';
			break;
	}

	const interval = setInterval(() => {
		num--;
		countdownEl.innerText = num;
		if (nextNum && num === 0) {
			clearInterval(interval);
			countdown(nextNum);
		} else if (!nextNum && num === 0 && count === 0) {
			stop();
		} else if (!nextNum && num === 0 && count > 0) {
			clearInterval(interval);
			count--;
			countdown(4);
		}
	}, 1000);
};

const exercise = () => {
	startBtn.style.display = 'none';
	stopBtn.style.display = 'inline';
	countdown(4);
};

const stop = () => {
	location.reload();
};
