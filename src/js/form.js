import { FORM_SUBMIT_ZINDEX, TRANSITION_DELAY } from './constants';

export const formHandler = () => {
	const form = document.querySelector('.submission-form');
	const submissionSuccess = document.querySelector('.submission-success');

	if (!form || !submissionSuccess) return;

	form.onsubmit = (e) => {
		e.preventDefault();
		form.style.opacity = 0;
		setTimeout(() => {
			submissionSuccess.style.zIndex = FORM_SUBMIT_ZINDEX;
		}, TRANSITION_DELAY);
	};
};
