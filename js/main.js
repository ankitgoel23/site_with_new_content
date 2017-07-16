$(document).ready(function() {
    // if ($(window).width() <= 767) {
    //     $("#slider img").each(function() {
    //         $(this).attr("src", $(this).attr("src").replace("website", "mobile"));
    //     });
    // }

    // change images on resizing breaks the slider.
    $(window).resize(function() {
        if ($(window).width() <= 767) {

            $("#slider .iis-slide").each(function() {
                $(this).css("background-image", 'url(' + $(this).attr("data-src").replace("website", "mobile") + ')');
                $(this).attr("data-src", $(this).attr("data-src").replace("website", "mobile"));
                console.log('777');
            })
        } else if ($(window).width() >= 768) {
            $("#slider .iis-slide").each(function() {
                // $(this).css("background-image", $(this).css("background-image").replace("mobile", "website"));
                $(this).css("background-image", 'url(' + $(this).attr("data-src").replace("mobile", "website") + ')');
                $(this).attr("data-src", $(this).attr("data-src").replace("mobile", "website"));
                console.log(888);
            })
        }
    });

    // Image Slider

    var slider = new IdealImageSlider.Slider({
        selector: '#slider',
        height: 'auto',
        maxHeight: 650,
        interval: 6000,
        onStart: function(argument) {
            console.log('start');
        },
        // Start slider if stopped 
        onStop: function() {
            console.log('stop');
            // slider.start();
        }
    });
    slider.addBulletNav();
    slider.start();

});
