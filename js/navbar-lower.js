$(document).ready(function() {

    $(function() {
        $('.navbar-lower').affix({
            offset: { top: 45 }
        });
    });

    $('.hamburger').click(function() {
        if ($('.navbar-lower').hasClass('hided')) {
            setTimeout(function() {
                $('.navbar-lower').removeClass('hided');
            }, 350);
        } else {
            $('.navbar-lower').addClass('hided');
        }
    });
    $('#search-click').click(function() {
        // $('.navbar-lower').addClass('hide-show');
        $('.navbar-lower').velocity("transition.slideLeftOut", { stagger: 40, drag: true, backwards: true, display: "none" });
    });

    $('.close-for-desktop, .back').click(function() {
        // $('.navbar-lower').removeClass('hide-show');
        $('.navbar-lower').velocity("transition.slideRightIn", { display: "inline-block", stagger: 20, delay: 1500, drag: true });
    });
    // $('.search-box-dropdown').blur(function() {
    //     if ($(window).width() > 767) {
    //         if ($(this).val().length == 0) {
    //             $('.navbar-lower').fadeIn('fast').toggleClass('hide-show');
    //         }
    //     }
    // });

});
