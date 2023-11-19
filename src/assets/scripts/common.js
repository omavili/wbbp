'use strict';

import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;
import { Popover, Tooltip, Modal} from 'bootstrap';
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

$(window).on('load', function () {
  //Form Validation
  $('.needs-validation').on('submit', function (e) {
    if (!this.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    $(this).addClass('was-validated');
  });

  //Tooltips
  const tooltipList = [...$('[data-bs-toggle="tooltip"]')].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

  //Popovers
  const popoverList = [...$('[data-bs-toggle="popover"]')].map(popoverTriggerEl => new Popover(popoverTriggerEl));

  //Header mobile navigation mode
  $('.js-header-navigation-btn').on('click', function () {
    $('.header').toggleClass('mobile-navigation');
  });

  //Default Swiper
  const swiper = new Swiper('.js-swiper', {
    spaceBetween: 12,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const cookieModal = $('#cookieModal')[0];
  if(cookieModal) {
    const modal = new Modal(cookieModal, {backdrop: false});  

    cookieModal.addEventListener('show.bs.modal', (e) => { 
        $('body').addClass('modal-cookie');
    });

    cookieModal.addEventListener('hide.bs.modal', (e) => { 
      $('body').removeClass('modal-cookie');
    });

    modal.show();
  }

//   confirmModal.addEventListener('shown.bs.modal', (e) => { 
//     $(confirmModal).find('.js-btn-confirm').attr('href', $(e.relatedTarget).attr('href'));
// });


    // cookieModalElem.addEventListener('show.bs.modal', (e) => {
    //   alert('');
    //   $('body').addClass('modal-open-cookie');
    // });

    // $('#cookieModal').on('show', function () {
    //   alert('');
    // });
      




});

//

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
