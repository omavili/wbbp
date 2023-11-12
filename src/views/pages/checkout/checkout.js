import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const productTileSwiper = new Swiper('.js-product-tile-swiper', {
  spaceBetween: 12,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(window).on('load', function () {
  $('.js-payment-type-select').on('click', function () {
    $('.js-payment-type').removeClass('selected');
    $(this).closest('.js-payment-type').addClass('selected');
  });

  $('.js-same-address').on('change', function () {
    if($(this).is(':checked')) {
      $('.js-billing-address').addClass('d-none');
    } else {
      $('.js-billing-address').removeClass('d-none');
    }
  });
});

