$(function() {

	// swiper start
	!(function() {

		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,

			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',

			scrollbar: '.swiper-scrollbar'
		})
	}());
});