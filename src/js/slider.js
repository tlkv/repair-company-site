import { INACTIVE_SLIDE_OPACITY, SLIDE_INDENT } from './constants';

export const sliderHandler = () => {
	const slides = document.querySelectorAll('.slider-item');
	const nextSlide = document.querySelector('.slider-btn-next');
	const prevSlide = document.querySelector('.slider-btn-prev');

	if (!slides || !nextSlide || !prevSlide) return;

	const maxSlide = slides.length - 1;
	let currentSlide = Math.ceil(maxSlide / 2);

	const reorder = () => {
		slides.forEach((slide, ind) => {
			slide.style.transform = `translateX(calc(50vw - 55% + ${(ind - currentSlide) * 100}%))`;
			slide.style.opacity = ind === currentSlide ? 1 : INACTIVE_SLIDE_OPACITY;
			slide.style.marginLeft = ind > currentSlide ? SLIDE_INDENT : '0';
			const descr = slide.querySelector('.slider-item__descr');
			descr.style.opacity = ind === currentSlide ? 1 : 0;
		});
	};

	reorder();

	nextSlide.addEventListener('click', () => {
		currentSlide = currentSlide === maxSlide ? 0 : currentSlide + 1;
		reorder();
	});

	prevSlide.addEventListener('click', () => {
		currentSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
		reorder();
	});
};
