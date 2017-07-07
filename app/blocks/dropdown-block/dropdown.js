import $ from 'jquery';


export default () => {

  $('.btn-arrow--prev').each(function() {
    const EL = $(this);
    EL.on('click', () => {
      EL.parents('.section-tabs').find('.btn-arrow--next').removeClass('disabled');
      if(EL.parents('.section-tabs').find('.owl-prev').hasClass('disabled')) {
        $(this).addClass('disabled');
      } else {
        $(this).removeClass('disabled');
      }
    })
  });

  $('.btn-arrow--next').each(function() {
    const EL = $(this);
    EL.on('click', () => {
      EL.parents('.section-tabs').find('.btn-arrow--prev').removeClass('disabled');
      if(EL.parents('.section-tabs').find('.owl-next').hasClass('disabled')) {
        $(this).addClass('disabled');
      } else {
        $(this).removeClass('disabled');
      }
    })
  });

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
