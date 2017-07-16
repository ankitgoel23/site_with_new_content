$(document).ready(function() {
    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    if (is_touch_device()) { //check for touch device
        $('body').click(function(event) {
            if (!$(event.target).is('img')) { // to chech if clicked outside the figure.
                $('figure').removeClass('overlay');
                $('figure').removeClass('show-text');
            }
        });
        $('figure').click(function() {
            if ($(this).hasClass('show-text')) {
                $(this).removeClass('show-text');
                $('figure').removeClass('overlay');
            } else {
                $('figure').removeClass('show-text');
                $('figure').removeClass('overlay');
                $(this).addClass('show-text');
                $('figure').addClass('overlay');
                $(this).removeClass('overlay');
            }
        });
    } else {
        $('figure').hover(function() {
            $(this).addClass('show-text');
            $('figure').addClass('overlay');
            $(this).removeClass('overlay');
        }, function() {
            $(this).removeClass('show-text');
            $('figure').removeClass('overlay');
        });
    }
});
