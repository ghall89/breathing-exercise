const instructEl = document.querySelector('#instruction');
const countdownEl = document.querySelector('#countdown');
const startBtn = document.querySelector('#start');

const countdown = num => {
	countdownEl.innerText = num;
	let nextNum;

	switch (num) {
		case 4:
			instructEl.innerText = 'Breathe in.';
			nextNum = 7;
			break;
		case 7:
			instructEl.innerText = 'Hold.';
			nextNum = 8;
			break;
		case 8:
			instructEl.innerText = 'Breathe out.';
			break;
	}

	const interval = setInterval(() => {
		num--;
		countdownEl.innerText = num;
		if (nextNum && num === 0) {
			clearInterval(interval);
			countdown(nextNum);
		} else if (!nextNum && num === 0) {
			clearInterval(interval);
			startBtn.disabled = false;
		}
	}, 1000);
};

const exercise = () => {
	startBtn.disabled = true;
	countdown(4);
};
