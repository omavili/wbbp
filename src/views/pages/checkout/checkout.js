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