jQuery(window).on('load', function () {

    // Header Sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
    if ($(this).scrollTop() > 20) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    // Mobile Menu
    $(".hamburger-menu").click(function () {
        $(".hamburger-menu").toggleClass("open");
        $("body").toggleClass("scroll");
    });
    $(".hamburger-menu").click(function () {
        $(".navbar-right").slideToggle("open");
    });
    $(window).resize(function () {
        if ($(window).width() < 991) {
            $('.hamburger-menu').removeClass('open');
            $("body").removeClass("scroll");
            $('.hamburger-menu, .navbar-right').removeAttr('style');
        }
    });

    // Review Slider
    $('.review-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // 		swipe:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //$('.review-slider').slick('slickPlay');

    // One Way Slider
    $('.one-way-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        // swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //$('.one-way-slider').slick('slickPlay');
    $('.one-way-slider, .review-slider').on('touchstart', function () {
        var isAutoplayPaused = $(this).slick('slickGetOption', 'autoplay');
        //alert(isAutoplayPaused)
        if (isAutoplayPaused === true) {
            $(this).slick('slickPlay');   // Restart if already paused
        }
    });

    //Match title height
    function MatchHeight() {
        $('.match').matchHeight({});
    }
    //Functions that run when all HTML is loaded
    $(document).ready(function () {
        MatchHeight();
    });

});