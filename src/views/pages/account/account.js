import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;

$(window).on('load', function () {
    $('.js-account-back').on('click', function () {
      $('.js-account-menu').addClass('active');
    });

    $('.js-account-nav a').on('click', function (e) {
        e.preventDefault();

        const contentBlock = $(this).data('target');


        if($(contentBlock).length) {
            $('.js-account-menu').removeClass('active');
        } else {
            window.location = $(this).attr('href') || '#';
        }
    });
});
  