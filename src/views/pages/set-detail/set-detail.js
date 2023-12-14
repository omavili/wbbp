import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;
import Swiper from 'swiper';
import { Navigation, Thumbs, Zoom, Pagination } from 'swiper/modules';

const swiperThumbs = new Swiper('.js-swiper-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      direction: 'vertical',
    },
  },
});

const swiperImage = new Swiper('.js-swiper-big-image', {
  lazy: true,
  allowTouchMove: true,
  modules: [Thumbs, Zoom],
  zoom: {
    maxRatio: 2.2,
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

const recommendationsSwiper = new Swiper('.js-swiper-recommendations', {
  slidesPerView: 1.33,
  spaceBetween: 12,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 24,
      slidesPerView: 3,
    },
  },
});
