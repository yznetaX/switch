/*global $*/
/*Resize Screen */
$(function (){
    $(".switch-header").on("resize", function (){
        var wid = $(window).width(),
            whi = $(window).height();
    });
    /*Full Screen */
    $('.switch-header').height($(window).height())
    /*Center element */
    $('.switch-description').css('paddingTop', $(window).height() - $('.switch-header').height() / 2 - 60);
    /*Links Contact */
    $('.switch-header .switch-nav ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*Scroll What We Do */
    $('.switch-header .scroll-down').click(function (){
        $('html, body').animate({
            scrollTop: $('.what-we-do').offset().top
        }, 1000);
    });

    /*Nice Scroll */
    $("body").niceScroll();

    /* Smoth Scroll*/
    $('.switch-header .switch-nav li a').click(function () {
        $('html , body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });

    $('.our-latest-work .our-suffle ul li').on('click', function (){
        $(this).addClass('selected').siblings().removeClass('selected');
        if($(this).data('link') === "photography") {
            $('.lates-img').css('opacity', 1);
        } else{
            $('.latest-img').css('opacity', '.09');
            $($(this).data('link')).css('opacity', 1);
        }
    });

    /*Slider Testimonials*/
    var leftArrow = $('.testimonials .testimonials-slider .i-left'),
        rightArrow = $('.testimonials .testimonials-slider .i-right');

        function checkEle() {
            $('.testimonials-slider .testimonials-q:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
            $('.testimonials-slider .testimonials-q:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        }
        checkEle();

        $('.testimonials-slider i').on('click', function (){
            if ($(this).hasClass('i-right')) {
                $('.testimonials-slider .testimonials-q.active').fadeOut(200, function () {
                    $(this).removeClass('active').next('.testimonials-q').addClass('active').fadeIn();
                    checkEle();
                });
            } else {
                $('.testimonials-q.active').fadeOut(200 , function (){
                    $(this).removeClass('active').prev('.testimonials-q').addClass('active').fadeIn();
                    checkEle();
                });
            }
        });
    /*End Testimonials*/
    /*Navbar Button */
    $('.dropdown-switch').on('click', function () {
        $('.ul-switch').slideToggle();
    });
});