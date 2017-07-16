$(document).ready(function() {

    // Navbar
    // Hamburger menu
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        // $('.navbar').toggleClass('full-height');
        if ($hamburger.hasClass('is-active')) {
            $('.full-height').velocity({
                height: "100%"
            }, {
                display: "block",
                duration: 1300,
                easing: "easeInOutQuint"
            });

        } else {
            $('.full-height').velocity({
                height: 0
            }, {
                display: "none",
                opacity: 0,
                duration: 1000,
                easing: "easeInOutQuint"
            });

        }
        $('body').toggleClass('body-hidden');
        $('#slider').addClass('no-margin');

        if ($hamburger.hasClass('active-search')) {

            $('.back-arrow').addClass('hide-navbar');
            $('.navbar-brand').removeClass('hide-navbar');

            $('#search-mobile').velocity("transition.slideUpBigOut", { display: "none" });
            $('.header-li').velocity("transition.slideUpBigIn", { display: "inline-block" });
            $('.hamburger').toggleClass('active-search');

            $('.search-dropdown-desktop').toggleClass('search-active-desktop');
            $('.close-for-desktop').click();
        }
        if ($hamburger.hasClass('is-active')) {
            $('.navbar').addClass('fix-to-top');
        } else {
            setTimeout(function() {
                $('#slider').removeClass('no-margin');

                $('.navbar').removeClass('fix-to-top');
            }, 400);
        }
        setTimeout(function() {
            $hamburger.prop('disabled', true);
            // console.log('off');
        }, 50);
        // $hamburger.prop('disabled', true);
        setTimeout(function() {
            $hamburger.prop('disabled', false);
            // console.log('on');
        }, 500);
    });

    $.Velocity.mock = 0.4;

    $('#search-click').click(function() {
        if ($(window).width() > 767) {
            // main-li are the main headings for medium to large viewport (home, about etc).
            $('.main-li').velocity("transition.slideLeftOut", { stagger: 40, drag: true, backwards: true });
            // setTimeout(function() {
            $('.main-li-2').velocity("transition.slideRightIn", {
                stagger: 40,
                delay: 1400,
                complete: function() {
                    $('.search-box-dropdown').focus();
                }
            });

            $('#search-mobile').velocity({ opacity: 1 }, {
                display: "block"
            });
            $('.search-dropdown-desktop').addClass('search-active-desktop');
            $('.hamburger').addClass('active-search');
            $('.navbar-brand').addClass('hide-navbar');
            $('.back-arrow').removeClass('hide-navbar');
        } else {
            console.log('on');
            // header-li are the main headings for mobile viewport (home, about etc).

            $('.header-li').velocity("transition.slideUpBigOut", { stagger: 100, drag: true, display: "none" });
            $('#search-mobile').velocity('transition.slideDownBigIn', {
                stagger: 150,
                delay: 1500,
                drag: true,
                backwards: true,
                complete: function() {
                    $('.search-box-dropdown').focus();
                }
            });
            $('.main-li').velocity({ opacity: 0 }, {
                display: "none"
            });

            $('.main-li-2').velocity({ opacity: 1 }, {
                display: "block"
            });
            $('.hamburger').addClass('active-search');
            $('.search-dropdown-desktop').addClass('search-active-desktop');
            $('.navbar-brand').addClass('hide-navbar');
            $('.back-arrow').removeClass('hide-navbar');
        }
    });

    $('.close-for-desktop, .back').click(function() {
        if ($(window).width() > 767) {

            $('#search-mobile').velocity({ opacity: 0 }, {
                display: "none"
            });
            $('.main-li-2').velocity("transition.slideLeftOut", { display: "none", stagger: 20 });
            $('.main-li').velocity("transition.slideRightIn", { display: "inline-block", stagger: 20, delay: 1400, drag: true });
            $('.hamburger').removeClass('active-search');

            $('.search-dropdown-desktop').removeClass('search-active-desktop');
            $('.back-arrow').addClass('hide-navbar');
            $('.navbar-brand').removeClass('hide-navbar');

        } else {

            $('.main-li-2').velocity({ opacity: 0 }, {
                display: "none"
            });
            $('.user-container-li').velocity({ opacity: 1 }, {
                display: "inline-block"
            });
            $('#search-mobile').velocity("transition.slideUpBigOut", { stagger: 100, drag: true, display: "none" });
            $('.header-li').velocity("transition.slideUpBigIn", { display: "inline-block", stagger: 100, drag: true, delay: 1400 });

            $('.hamburger').removeClass('active-search');
            $('.search-dropdown-desktop').removeClass('search-active-desktop');
            $('.back-arrow').addClass('hide-navbar');
            $('.navbar-brand').removeClass('hide-navbar');

        }
    });

    // Navbar ends
});
