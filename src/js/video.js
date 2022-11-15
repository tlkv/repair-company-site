import { DEFAULT_SOUND_LEVEL } from './constants';

export const videoHandler = () => {
	const videoContainer = document.querySelector('.video-container');
	const video = document.querySelector('.video-container__player');
	const videoButton = document.querySelector('.video-container__button');

	if (!video || !videoContainer || !videoButton) return;

	video.volume = DEFAULT_SOUND_LEVEL;

	videoContainer.addEventListener('click', () => {
		if (video.paused) {
			video.play();
			videoButton.style.opacity = 0;
		} else {
			video.pause();
			videoButton.style.opacity = 1;
		}
	});

	video.addEventListener('ended', () => {
		video.load();
		videoButton.style.opacity = 1;
	});
};
