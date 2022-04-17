// SWIPER
// slider-aside
// ------------------




(function () {

	var swiper = new Swiper('.c-slider .swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: 6000,
		autoplayDisableOnInteraction: false
	});


	var swiper = new Swiper('aside .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 0,
		grabCursor: true,
		autoplay: 6000,
		autoplayDisableOnInteraction: false,
		breakpoints: {
			1024: {
				slidesPerView: 4
			},
			768: {
				slidesPerView: 3
			},
			640: {
				slidesPerView: 2
			},
			400: {
				slidesPerView: 1
			}
		},
		freeMode: true,
		loop: true
	});

}());
