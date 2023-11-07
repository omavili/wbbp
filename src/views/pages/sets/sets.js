import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;

$(window).on('load', function() {

  $('.js-months-nav-link').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
        window.location.hash = this.hash;
    } 
  });

});