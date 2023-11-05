import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.js-hero-banner-slider', {
  speed: 400,
  spaceBetween: 12,
  lazy: true,
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const wnwSwiper = new Swiper('.js-swiper-wnw', {
  slidesPerView: 2,
  spaceBetween: 12,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
  },
});

const booksSwiper = new Swiper('.js-swiper-cropped', {
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
      slidesPerView: 2.33,
    },
  },
});

const reviewsSwiper = new Swiper('.js-swiper-reviews', {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  modules: [Pagination, Autoplay],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
