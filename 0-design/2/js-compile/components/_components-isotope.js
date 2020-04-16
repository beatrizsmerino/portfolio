// SWIPER
// isotope
// ------------------




$(window).on('resize',function(){
  isotope();
}).trigger('resize');





function isotope(){
  var $grid = $('.isotope-grid').isotope({
    itemSelector: '.isotope-grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.isotope-grid-item'
    }
  });


  // FILTER
  // =================================================
  // filter items on button click
  $('.isotope-filter-button-group .c-button').on( 'click', function() {
    $('.isotope-filter-button-group .c-button').removeClass('active');
    $(this).addClass('active');
    
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
}
