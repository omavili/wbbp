import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const swiper = new Swiper('.js-swiper', {
  spaceBetween: 12,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});