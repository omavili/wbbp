console.log('>> Common script is loaded.');

import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';


// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

//Header mobile navigation mode
$('.js-header-navigation-btn').on('click', function() {
    $('.header').toggleClass('mobile-navigation');
});


  //
// const page = $('.page');
// const header = $('.header');
// const main = $('.main');
// const headerHeight = $('.header').outerHeight();

// main.css('top', headerHeight + 'px');

// let lastScroll = 0;

// $(window).on('scroll', function() {
//   let currentScroll = $(this).scrollTop();

//   // console.log("current: ", currentScroll);
//   // console.log("last: ", lastScroll);

//   if (currentScroll - lastScroll > 0) {
//       // scrolled down -- header hide
//       page.addClass("scroll-down");
//       page.removeClass("scroll-up");
//   } else {
//       // scrolled up -- header show
//       page.addClass("scroll-up");
//       page.removeClass("scroll-down");
//   }

//   lastScroll = currentScroll;
// }); 


// let timeout = 0
// let previousScrollY = 0
// function scan() {
//   const sticky = document.querySelector('header')
//   let scrollY = window.scrollY
//   let scrollingDirection = scrollY - previousScrollY
//   if (scrollY > sticky.offsetHeight) {
//     if (scrollingDirection < 0) {
//       sticky.setAttribute('data-visible', 'sticky')
//     } else if (scrollingDirection > 0) {
//       sticky.setAttribute('data-visible', 'false')
//     }
//   } else {
//     sticky.setAttribute('data-visible', 'true')
//   }
//   previousScrollY = scrollY
// }
// window.onscroll = function() {
//   clearTimeout();
//   timeout = setTimeout(scan, 10)
// }

// https://github.com/yaplas/smart-sticky-header/tree/master
// $('header').smartStickyHeader();
//Html sample
// .sticky-header-rail .sticky-header-shadow {
//   display:none;
// }


// // Create a condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 768px)')

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     // Then log the following message to the console
//     console.log('Media Query Matched!')
//   }
// }

// // Register event listener
// mediaQuery.addListener(handleTabletChange)

// // Initial check
// handleTabletChange(mediaQuery);

// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
//   modules: [Navigation, Pagination],
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });