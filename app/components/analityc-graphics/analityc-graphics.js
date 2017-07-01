import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const LINE = $('.analityc-js-line__left .analityc-js-line__line');
  const ACTIVE_CLASS = 'analityc-js-line__line_active';
  $('.analityc-js-line__line:eq(2)').addClass(ACTIVE_CLASS);

  LINE.each( function () { // eslint-disable-line
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.siblings().removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
    })
  })

  const graphicLineVertical = new Swiper('.analityc-graphics-line-vertical_slider', {

    nextButton: '.analityc-graphics-line-vertical__next',
    prevButton: '.analityc-graphics-line-vertical__prev',
    slidesPerView: 'auto',
    centeredSlides: true,
    freeMode: true,
    spaceBetween: 30

  });
}
