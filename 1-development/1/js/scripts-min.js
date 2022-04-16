function muuri() {
    new Muuri(".muuri-grid");
}

!function() {
    function e(e) {
        var i = $(document).scrollTop() + a;
        $("header nav a").each(function() {
            var e = $(this), a = $(e.attr("href"));
            a.position().top <= i && a.position().top + a.height() > i ? ($("header nav a").removeClass("active"), 
            e.addClass("active")) : e.removeClass("active");
        });
    }
    var a = $("header").outerHeight();
    $(document).on("scroll", e), $('header nav a[href^="#"]').on("click", function(i) {
        i.preventDefault(), $(document).off("scroll"), $("a").each(function() {
            $(this).removeClass("active");
        }), $(this).addClass("active");
        var t = this.hash;
        $target = $(t), $("html, body").stop().animate({
            scrollTop: $target.offset().top - a
        }, 500, "swing", function() {
            window.location.hash = t, $(document).on("scroll", e);
        });
    }), $(".c-button--nav, header nav a").click(function() {
        $("header").toggleClass("active");
    });
}(), function() {
    new Swiper(".c-slider .swiper-container", {
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        spaceBetween: 0,
        centeredSlides: !0,
        autoplay: 6e3,
        autoplayDisableOnInteraction: !1
    }), new Swiper("aside .swiper-container", {
        slidesPerView: 5,
        spaceBetween: 0,
        grabCursor: !0,
        autoplay: 6e3,
        autoplayDisableOnInteraction: !1,
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
        freeMode: !0,
        loop: !0
    });
}(), $(window).on("resize", function() {
    muuri();
}).trigger("resize"), function() {
    $(".c-portfolio-nav li").click(function() {
        var e = $(".c-portfolio-nav li"), a = $(this).data("portfolio"), i = $(".c-portfolio-gallery article"), t = $(".c-portfolio-gallery article[data-portfolio=" + a + "]");
        e.removeClass("active"), $(this).addClass("active"), "all" == $(".c-portfolio-nav li.active").attr("data-portfolio") ? i.addClass("active") : (t.addClass("active"), 
        i.not(t).removeClass("active")), muuri();
    });
}();