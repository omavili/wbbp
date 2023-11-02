import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.js-hero-banner-slider', {
  speed: 400,
  spaceBetween: 10,
  lazy: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
