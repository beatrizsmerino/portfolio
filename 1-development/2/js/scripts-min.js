function isotope() {
    var e = $(".isotope-grid").isotope({
        itemSelector: ".isotope-grid-item",
        percentPosition: !0,
        masonry: {
            columnWidth: ".isotope-grid-item"
        }
    });
    $(".isotope-filter-button-group .c-button").on("click", function() {
        $(".isotope-filter-button-group .c-button").removeClass("active"), $(this).addClass("active");
        var t = $(this).attr("data-filter");
        e.isotope({
            filter: t
        });
    });
}

!function() {
    function e(e) {
        var i = $(document).scrollTop() + t;
        $("header nav a").each(function() {
            var e = $(this), t = $(e.attr("href"));
            t.position().top <= i && t.position().top + t.height() > i ? ($("header nav a").removeClass("active"), 
            e.addClass("active")) : e.removeClass("active");
        });
    }
    var t = $("header").outerHeight();
    $(document).on("load scroll", e), $('header nav a[href^="#"]').click(function(i) {
        i.preventDefault(), $(document).off("scroll"), $("a").each(function() {
            $(this).removeClass("active");
        }), $(this).addClass("active");
        var o = this.hash;
        $target = $(o), $("html, body").stop().animate({
            scrollTop: $target.offset().top + 2 - t
        }, 500, "swing", function() {
            window.location.hash = o, $(document).on("scroll", e);
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
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        },
        freeMode: !0,
        loop: !0
    });
}(), $(window).on("resize", function() {
    isotope();
}).trigger("resize");