import $ from 'jquery';


export default () => {
  function slider(item) {
    const parent = $(item);
    const slideCnt = parent.find('.tile__item').length - parent.find('.tile__item.hidden').length;
    //const slideWidth = parent.find('.tile__item').outerWidth(true);
    var slideWidth;
    if ($(window).width() > 1170) {
      slideWidth = 1110 * 0.25;
    } else if ($(window).width() <= 1170 && $(window).width() > 880) {
      slideWidth = ($('.wrap').width() + 10) * 0.333;
    } else if ($(window).width() <= 880 && $(window).width() > 566) {
      slideWidth = ($('.wrap').width() + 10) * 0.5;
    } else {
      slideWidth = 273;
    }
    slideWidth = Math.floor(slideWidth);
    parent.find('.tile__item').attr('style', 'width: '+slideWidth+'px !important');
    const wrapperWidth = slideCnt * slideWidth;

    parent.find('.section-tabs__content').css('width', wrapperWidth+'px')
  }

  slider('.section-tabs_documents');
  slider('.section-tabs_news');
  slider('.section-tabs_services');

  // $('.btn-arrow--prev').each(function() {
  //   const EL = $(this);
  //   EL.on('click', () => {
  //     EL.parents('.section-tabs').find('.btn-arrow--next').removeClass('disabled');
  //     if(EL.parents('.section-tabs').find('.owl-prev').hasClass('disabled')) {
  //       $(this).addClass('disabled');
  //     } else {
  //       $(this).removeClass('disabled');
  //     }
  //   })
  // });
  //
  // $('.btn-arrow--next').each(function() {
  //   const EL = $(this);
  //   EL.on('click', () => {
  //     EL.parents('.section-tabs').find('.btn-arrow--prev').removeClass('disabled');
  //     if(EL.parents('.section-tabs').find('.owl-next').hasClass('disabled')) {
  //       $(this).addClass('disabled');
  //     } else {
  //       $(this).removeClass('disabled');
  //     }
  //   })
  // });

  // const docSlider = new Swiper('.docs-container', {
  //       spaceBetween: 10,
  //       slidesPerView: 4,
  //       nextButton: '.dropdown_docs .ar-next',
  //       prevButton: '.dropdown_docs .ar-prev',
  //       breakpoints: {
  //         1140: {
  //           slidesPerView: 3,
  //         },
  //         768: {
  //           slidesPerView: 2,
  //         },
  //         640: {
  //           slidesPerView: 1,
  //         }
  //   }});

  // const newSlider = new Swiper('.dropdown_news .wrapper', {
  //       spaceBetween: 6,
  //       slidesPerView: 3,
  //       nextButton: '.dropdown_news .ar-next',
  //       prevButton: '.dropdown_news .ar-prev',
  //       wrapperClass: 'dropdown__card-wrapper',
  //       slideClass: 'tile__item',
  //       breakpoints: {
  //         992: {
  //           slidesPerView: 2,
  //         },
  //         640: {
  //           slidesPerView: 1,
  //         }
  //   }});

  // const servicesSlider = new Swiper('.section-tabs_services .lk-services', {
  //       spaceBetween: 10,
  //       slidesPerView: 4,
  //       nextButton: '.section-tabs_services .ar-next',
  //       prevButton: '.section-tabs_services .ar-prev',
  //       breakpoints: {
  //         1140: {
  //           slidesPerView: 3,
  //         },
  //         940: {
  //           slidesPerView: 2,
  //         },
  //         640: {
  //           slidesPerView: 1,
  //         }
  //   }});
  //
  // $('.dropdown-trigger').on('click', function () {
  //   if ($(this).parents('.dropdown').hasClass('_open')) {
  //     $(this).parents('.dropdown').removeClass('_open');
  //     $(this).next('.dropdown-content').slideUp();
  //
  //   } else {
  //       $(this).parents('.dropdown').addClass('_open');
  //       $(this).next('.dropdown-content').slideDown();
  //   }
  //   updateSlider();
  // })
  //
  // function updateSlider () {
  //   // if ($('.dropdown_news .dropdown-content').is(':visible')) {
  //   //   newSlider.update();
  //   // }
  //   servicesSlider.update();
  //   // docSlider.update();
  // }
}
