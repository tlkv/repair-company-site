import '../styles/main.scss';
import { videoHandler } from './video';
import { sliderHandler } from './slider';
import { formHandler } from './form';

window.onload = () => {
	videoHandler();
	sliderHandler();
	formHandler();
};
