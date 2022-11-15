import '../styles/main.scss';
import { videoHandler } from './video';
import { sliderHandler } from './slider';

window.onload = () => {
	videoHandler();
	sliderHandler();
};
