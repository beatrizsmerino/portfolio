// NAV
// active-nav
// on-scroll-active-a
// ------------------




// Introducir el codigo js dentro de esta funcion auto invocada para proteger las variables
(function(){

  var headerHeight = $('header').outerHeight();



  // ON SCROLL - ACTIVE A
  // =================================================

  $(document).on("load scroll", onScroll);


  $('header nav a[href^="#"]').click(function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          menu = target,
          $target = $(target);

      $('html, body').stop().animate({ 'scrollTop': $target.offset().top+2-headerHeight }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });


  function onScroll(event){
      var scrollPos = $(document).scrollTop()+headerHeight;

      $('header nav a').each(function () {
          var currLink = $(this),
            refElement = $(currLink.attr("href"));

          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('header nav a').removeClass("active");
              currLink.addClass("active");
          } else{
              currLink.removeClass("active");
          }
      });
  }





  // ACTIVE NAV - MOVILE
  // =================================================

  $(".c-button--nav, header nav a").click(function(){
    $("header").toggleClass("active");
  });


}());
// Introducir el codigo js dentro de esta funcion auto invocada para proteger las variables
