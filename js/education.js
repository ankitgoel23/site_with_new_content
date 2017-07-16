$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ["educational-approach", "curriculum", "classroom", "real-world-application", "digital-tools", "continuous-innovations"],
        navigation: true,
        sectionSelector: '.section-fullpagejs',
        sectionsColor: ['#ff4d4d', '#ffc849', '#56bc8a', '#173657', '#2fafbf', '#c969da'],
        autoScrolling: false,
        fitToSection: false
    });

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
});
