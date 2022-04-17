// PORTFOLIO
// portfolio-gallery
// ------------------




(function () {

	// PORTFOLIO NAV AND GALLERY - ACTIVE
	// =================================================

	$(".c-portfolio-nav li").click(function () {
		var portfolioNav = $(".c-portfolio-nav li"),
			portfolioNavActive = $(this).data('portfolio'),
			portfolioGallery = $('.c-portfolio-gallery article'),
			portfolioGalleryActive = $('.c-portfolio-gallery article[data-portfolio=' + portfolioNavActive + ']');

		// NAV
		portfolioNav.removeClass('active');
		$(this).addClass('active');

		// GALLERY
		if ($(".c-portfolio-nav li.active").attr('data-portfolio') == 'all') {
			portfolioGallery.addClass('active');
		} else {
			portfolioGalleryActive.addClass('active');
			portfolioGallery.not(portfolioGalleryActive).removeClass('active');
		}



		muuri();
	});

}());
