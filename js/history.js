$(document).ready(function() {
    $root = $('html, body');
    $('.events li').hover(function() {
        if (!$(this).hasClass('selected')) {
            $(this).children('.circle-year').velocity({ width: 20, height: 20, "margin-top": -31, "box-shadow": "0px 0px 5px #000" }, 'easeInSine');
        }
        $(this).children('.circle-year').addClass('circle-hover');
    }, function() {
        if (!$(this).hasClass('selected')) {
            $(this).children('.circle-year').velocity({ width: 10, height: 10, "margin-top": -26, "box-shadow": "0px 0px 5px #000" }, 'easeInSine');
        }
        $(this).children('.circle-year').removeClass('circle-hover');
    });

    $('.selected li').css('display', 'none');
    $unsliderActive = $('.unslider-nav .unslider-active').text();
    $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');

    $('.events li').click(function() {
        if (!$(this).hasClass('selected')) {

            $('.circle-year').velocity({ width: 10, height: 10, "margin-top": -26, "box-shadow": "0px 0px 5px #000" }, { duration: 1 });

            $(this).children('.circle-year').velocity({ width: 10, height: 10, "margin-top": -26, "box-shadow": "0px 0px 5px #000" }, { duration: 1 });
            $('.events li').removeClass('selected');
            $('.circle-year').removeClass('circle-hover');

            $(this).addClass('selected').velocity('transition.fadeIn', { display: "inline-block" });;

            $year = $('.selected .year-text').text();
            $('.year-block').removeClass('selected');
            $('.y' + $year).addClass('selected');

            $('.unslider-nav li').removeClass('unslider-active');
            $('.unslider-nav li:nth-child(1)').addClass('unslider-active');

            $('.selected li').css('display', 'none');
            $('.selected li:nth-child(1)').css('display', 'block');

        }
    });

    $('.unslider-nav li').click(function() {
        if (!$(this).hasClass('unslider-active')) {
            $('.unslider-nav li').removeClass('unslider-active');
            $(this).addClass('unslider-active');
            $unsliderActive = $('.unslider-nav .unslider-active').text();
            $('.selected li').velocity("transition.slideUpOut");
            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active', { display: "none" });
            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideUpIn", { display: "block", delay: 200 });
            if ($unsliderActive > 1) {
                checkScrollBars();
                $('body').css('overflow-y', 'hidden');
            } else {
                $('body').css('overflow-y', 'auto');
                $('body').css('padding-right', '0px');
            }
        }
    });

    $('.unslider-arrow-up').click(function() {
        $unsliderActive = parseInt($('.unslider-nav .unslider-active').text()) - 1;
        if ($unsliderActive > 0) {
            $('.selected li').velocity("transition.slideDownOut", { display: "none" });
            $('.unslider-nav li').removeClass('unslider-active');
            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active');
            // $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');
            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideDownIn", { display: "block", delay: 200 });
        }
    });


    $('.unslider-arrow-down').click(function() {
        $unsliderActive = parseInt($('.unslider-nav .unslider-active').text()) + 1;
        if ($unsliderActive < 4) {
            // $('.selected li').css('display', 'none');
            $('.selected li').velocity("transition.slideUpOut");
            $('.unslider-nav li').removeClass('unslider-active');
            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active', { display: "none" });
            // $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');
            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideUpIn", { display: "block", delay: 200 });
            checkScrollBars();
            $('body').css('overflow-y', 'hidden');

        }
    });

    var runScrollLogic = true;
    //Firefox
    $('body').bind('DOMMouseScroll', function(e) {
        if ($(window).width() > 991) {

            if (e.originalEvent.wheelDelta < 0) {
                //scroll down
                if ($(window).scrollTop() + $(window).height() == $(document).height() && runScrollLogic == true) {
                    runScrollLogic = false;
                    setTimeout(function() {
                        $unsliderActive = parseInt($('.unslider-nav .unslider-active').text()) + 1;
                        if ($unsliderActive < 4) {
                            // $('.selected li').css('display', 'none');
                            $('.selected li').velocity("transition.slideUpOut");
                            $('.unslider-nav li').removeClass('unslider-active');
                            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active', { display: "none" });
                            // $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');
                            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideUpIn", { display: "block", delay: 200 });
                            checkScrollBars();
                            $('body').css('overflow-y', 'hidden');
                        }
                    }, 200);
                    setTimeout(function() {
                        runScrollLogic = true;
                    }, 1200);
                }
            } else if (e.originalEvent.wheelDelta > 0) {
                //scroll up
                if (runScrollLogic == true) {
                    runScrollLogic = false;
                    $unsliderActive = parseInt($('.unslider-nav .unslider-active').text()) - 1;
                    setTimeout(function() {
                        if ($unsliderActive > 0) {
                            // $('.selected li').css('display', 'none');
                            $('.selected li').velocity("transition.slideDownOut", { display: "none" });
                            $('.unslider-nav li').removeClass('unslider-active');
                            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active');
                            // $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');
                            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideDownIn", { display: "block", delay: 200 });
                        }
                    }, 200);
                    setTimeout(function() {
                        if ($unsliderActive <= 1) {
                            $('body').css('overflow-y', 'auto');
                            $('body').css('padding-right', '0px');
                        }
                        runScrollLogic = true;
                    }, 1200);
                }
            }
        }
    });

    var rotateArrow = function() {
        if ($(window).width() > 991) {

            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 80) {
                $('.learn-more h5').css('display', 'none');
                $('.learn-more a').attr('href', '#');
                $('.learn-more i').addClass('arrow-rotate-180');

            } else if ($('.learn-more i').hasClass('arrow-rotate-180')) {
                $('.learn-more a').attr('href', '#yblock');
                $('.learn-more h5').css('display', 'block');
                $('.learn-more i').removeClass('arrow-rotate-180');
                $('.learn-more i').addClass('arrow-rotate-360');
                setTimeout(function() {
                    $('.learn-more i').removeClass('arrow-rotate-360');
                }, 400);
            }
        } else {
            if ($('.learn-more').hasClass('affix')) {
                $('.learn-more h5').css('display', 'none');
                $('.learn-more a').attr('href', '#');
                $('.learn-more i').addClass('arrow-rotate-180');
            } else if ($('.learn-more i').hasClass('arrow-rotate-180')) {
                $('.learn-more a').attr('href', '#yblock');
                $('.learn-more h5').css('display', 'block');
                $('.learn-more i').removeClass('arrow-rotate-180');
                $('.learn-more i').addClass('arrow-rotate-360');
                setTimeout(function() {
                    $('.learn-more i').removeClass('arrow-rotate-360');
                }, 400);

            }
        }
    };
    setInterval(rotateArrow, 50);


    $('.learn-more').affix({
        offset: {
            top: $('.learn-more').offset().top
        }
    })
    $(function() {
        if ($(window).width() < 768) {
            if ($(window).scrollTop() >= $('.learn-more').offset().top) {
                $('.learn-more').css({ 'position': 'fixed', 'margin-left': '-37.5%', 'top': 0, 'left': '50%', 'width': '75%', 'z-index': 100 });
                $('.learn-more i').css({ 'margin-top': '20px' });
            }
        }
    });
    //IE, Opera, Safari, Chrome

    $('body').on('mousewheel', function(e) {
        if ($(window).width() > 991) {

            if (e.originalEvent.wheelDelta < 0) {
                //scroll down
                if ($(window).scrollTop() + $(window).height() == $(document).height() && runScrollLogic == true) {
                    runScrollLogic = false;
                    setTimeout(function() {
                        $unsliderActive = parseInt($('.unslider-nav .unslider-active').text()) + 1;
                        if ($unsliderActive < 4) {
                            // $('.selected li').css('display', 'none');
                            $('.selected li').velocity("transition.slideUpOut");
                            $('.unslider-nav li').removeClass('unslider-active');
                            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active', { display: "none" });
                            // $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');
                            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideUpIn", { display: "block", delay: 200 });
                            checkScrollBars();
                            $('body').css('overflow-y', 'hidden');

                        }
                    }, 200);
                    setTimeout(function() {
                        runScrollLogic = true;
                    }, 1200);
                }
            } else if (e.originalEvent.wheelDelta > 0) {
                //scroll up
                if (runScrollLogic == true) {
                    runScrollLogic = false;
                    $unsliderActive = parseInt($('.unslider-nav .unslider-active').text()) - 1;
                    setTimeout(function() {
                        if ($unsliderActive > 0) {
                            // $('.selected li').css('display', 'none');
                            $('.selected li').velocity("transition.slideDownOut", { display: "none" });
                            $('.unslider-nav li').removeClass('unslider-active');
                            $('.unslider-nav li:nth-child(' + $unsliderActive + ')').addClass('unslider-active');
                            // $('.selected li:nth-child(' + $unsliderActive + ')').css('display', 'block');
                            $('.selected li:nth-child(' + $unsliderActive + ')').velocity("transition.slideDownIn", { display: "block", delay: 200 });
                        }
                    }, 200);
                    setTimeout(function() {
                        if ($unsliderActive <= 1) {
                            $('body').css('overflow-y', 'auto');
                            $('body').css('padding-right', '0px');
                        }
                        runScrollLogic = true;
                    }, 1200);
                }
            }
        }
    });

    // To scroll when the arrow button is clicked.
    $('.learn-more a').click(function(event) {
        event.preventDefault();
        if (!$('.learn-more i').hasClass('arrow-rotate-180')) {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        } else {
            $root.animate({
                scrollTop: 0
            }, 500);
        }
        $('body').css('overflow-y', 'auto');
        $('body').css('padding-right', '0px');

    });
    // $('.main-container').on('mousewheel', function() {
    //     $('body').css('overflow-y', 'auto');
    // });

    // To change padding of body when scrollbars are hidden so that width of page is not changed.
    var checkScrollBars = function() {
        var b = $('body');
        var normalw = 0;
        var scrollw = 0;
        console.log('in loop');
        if (b.prop('scrollHeight') > b.height()) {
            normalw = window.innerWidth;
            scrollw = normalw - b.width();
            console.log(scrollw);
            $('body').css('padding-right', scrollw + 'px');
        }
    }
});
