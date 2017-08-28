import $ from 'jquery';
import Swiper from 'swiper';

export default () => {

    var slider = new Swiper('.services-moscow-index__slider', {
      prevButton: '.services-moscow-index___slider-arrow_prev',
      nextButton: '.services-moscow-index__slider-arrow_next',
    });

    var table = new Swiper('.services-moscow-index__index', {
      slidesPerView: 5,
      prevButton: '.services-moscow-index___table-arrow_prev',
      nextButton: '.services-moscow-index___table-arrow_next',

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

    });

}