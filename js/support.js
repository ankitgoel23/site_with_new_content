$(document).ready(function() {

    $('.why-donate-header').click(function() {
        $('.donation-box').velocity("transition.slideUpBigOut");
        $('.why-donate-container').velocity("transition.slideUpBigIn", { display: "table" });
        $('.donation-box').removeClass('toggleTableCell');

    });
    // if (window.location.href.split('#')[1] === 'donate-now') {
    //  $('.why-donate-container').velocity("transition.slideUpBigOut");
    //     $('.donation-box').velocity("transition.slideUpBigIn");

    //     if ($(window).width() <= 767) {
    //         $('.donation-box').addClass('toggleTableCell');
    //     } else {
    //         $('.donation-box').removeClass('toggleTableCell');
    //     }
    //     $(window).resize(function() {
    //         if ($('.donation-box').is(':visible')) {
    //             if ($(window).width() <= 767) {
    //                 $('.donation-box').addClass('toggleTableCell');
    //             } else {
    //                 $('.donation-box').removeClass('toggleTableCell');
    //             }
    //         }
    //     });
    // }  
    // $('.why-donate-button, .donate-now, .donate-now-outside-header').click(function() {
    //     $('.why-donate-container').velocity("transition.slideUpBigOut");
    //     $('.donation-box').velocity("transition.slideUpBigIn");

    //     if ($(window).width() <= 767) {
    //         $('.donation-box').addClass('toggleTableCell');
    //     } else {
    //         $('.donation-box').removeClass('toggleTableCell');
    //     }
    //     $(window).resize(function() {
    //         if ($('.donation-box').is(':visible')) {
    //             if ($(window).width() <= 767) {
    //                 $('.donation-box').addClass('toggleTableCell');
    //             } else {
    //                 $('.donation-box').removeClass('toggleTableCell');
    //             }
    //         }
    //     });
    // });

    $('.header-lower-toggle-button').click(function() {
        if ($('.header-lower-arrow-down').hasClass('hided')) {
            $('.header-lower-arrow-up').addClass('hided');
            $('.header-lower-arrow-down').removeClass('hided');
        } else {
            $('.header-lower-arrow-down').addClass('hided');
            $('.header-lower-arrow-up').removeClass('hided');
        }
    });

    $('#menu a').click(function() {
        if ($(window).width() < 768) {
            $('.header-lower-toggle-button').click();
        }
    });

    $('.clickme').click(function() {
        $(this).css('color', 'grey');
        $(this).css('border-bottom', '2px dotted grey');

        // console.log($(this).attr('class').split(' ')[0] + '-popup');
        $('.' + $(this).attr('class').split(' ')[0] + '-popup').css('display', 'block');
    });

    $('body').click(function() {
        $('popup').css('display', 'none');
    });

    // Center align the list block.
    $('.popup').each(function() {
        if ($(window).width() > 767) {

            if ($(this).parent().width() <= $(this).width()) {
                $(this).css('left', -($(this).parent().width() / 2));
            } else {
                $(this).css('left', ($(this).parent().width() / 2 - $(this).width() / 2) / $(this).parent().width() * 100 + '%');
            }
        } else {
            $(this).css('left', $(window).width() / 2 - $(this).width() / 2);
        }
    });

    $(window).resize(function() {
        $('.popup').each(function() {
            if ($(window).width() > 767) {

                if ($(this).parent().width() <= $(this).width()) {
                    $(this).css('left', -($(this).parent().width() / 2));
                } else {
                    $(this).css('left', ($(this).parent().width() / 2 - $(this).width() / 2) / $(this).parent().width() * 100 + '%');
                }
            } else {
                $(this).css('left', $(window).width() / 2 - $(this).width() / 2);
            }
        });
    });
    // For multiple options in list pressed using ctrl or cmd key.
    var cntrlIsPressed = false;

    $(document).keydown(function(event) {
        if (event.which == "17" || event.which == "91")
            cntrlIsPressed = true;
    });

    $(document).keyup(function() {
        cntrlIsPressed = false;
    });

    // Change the text based on the list
    $('.popup li').click(function() {
        if (!cntrlIsPressed) {
            $(this).parent().parent().parent().find('.replaceText').text(($(this).text()));
        } else {
            $(this).parent().parent().parent().find('.replaceText').text('Multiple options');
        }
        var $popup = $(this).parent().parent().parent().find('.popup'),
            $popupParent = $(this).parent().parent().parent();

        if ($(window).width() > 767) {
            if ($popupParent.width() <= $popup.width()) {
                $popup.css('left', (($popupParent.width() - $popup.width())) / $popup.width() * 100 + '%');
            } else {
                $popup.css('left', ($popupParent.width() / 2 - $popup.width() / 2) / $popupParent.width() * 100 + '%');
            }

        } else {
            $popup.css('left', ($(window).width() / 2 - $popup.width() / 2) / $(window).width() * 100 + '%');
        }
    });
    $('.popup select').on('change', function() {
            $(this).parent().parent().find('.replace' + $(this).attr('class')).text(this.value);
        })
        // If user clicks outside the block.
    $(document).mouseup(function(e) {
        var container = $(".popup");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
            $('.clickme').css('color', 'white');
            $('.clickme').css('border-bottom', '2px dotted white');

        }
    });

    $('#cardNo1').keyup(function() {
        if ($('#cardNo1').val().length >= 2) {
            if ($('#cardNo1').val()[0] == 4) {
                $('.credit-card').css('display', 'none');
                $('.visa').css('display', 'block');
            } else if ($('#cardNo1').val()[0] == 5 && $('#cardNo1').val()[1] <= 5 && $('#cardNo1').val()[1] >= 1) {
                $('.credit-card').css('display', 'none');
                $('.mastercard').css('display', 'block')
            } else if ($('#cardNo1').val()[0] == 3 && ($('#cardNo1').val()[1] == 4 || $('#cardNo1').val()[1] == 7)) {
                $('.credit-card').css('display', 'none');
                $('.american_express').css('display', 'block')
            } else {
                $('.card-display').css('display', 'none');
                $('.credit-card').css('display', 'block');
            }
        } else {
            $('.card-display').css('display', 'none');
            $('.credit-card').css('display', 'block');
        }
    });

    // $('#cardNo1').keyup(function() {
    //     if ($('#cardNo1').val().length == 4 || $('#cardNo1').val().length == 9 || $('#cardNo1').val().length == 14) {
    //         $('#cardNo1').val($('#cardNo1').val() + ' ');
    //     } else {
    //         if ($('#cardNo1').val().slice(-1) == ' ') {
    //             $('#cardNo1').val($('#cardNo1').val().slice(0, -1));
    //         }
    //     }
    // });
    $('.amount-block').click(function() {
        $('.amount-block').removeClass('active-amount');
        $(this).addClass('active-amount');
        if ($('#other-amount').val()) {
            $('#other-amount').val('');
        }
    });
    $('#other-amount').keyup(function() {
        $('.amount-block').removeClass('active-amount');
    });

    // $('.cardNo input').keyup(function() {
    //     if ($(this).val().length >= 4) {
    //         $(this).blur();
    //         $(this).next().focus();
    //     }
    // });

});
