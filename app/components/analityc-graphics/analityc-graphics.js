import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const LINE = $(' .analityc-js-line__line');
  const ACTIVE_CLASS = 'analityc-js-line__line_active';
  $('.analityc-js-line__line:nth-child(3)').addClass(ACTIVE_CLASS).find('.analityc-js-line__right-block').show();

  LINE.each( function () { // eslint-disable-line
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.siblings().removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
      $('.analityc-js-line__right-block').hide();
      EL.find('.analityc-js-line__right-block').fadeIn('fast');
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

  if ($(window).width() < 641) {
    var SliderSettings = {
      nextButton: '.analityc-graphics_round-next',
      prevButton: '.analityc-graphics_round-prev',
      slidesPerView: '1',
      centeredSlides: true,
      spaceBetween: 30,
      speed: 500,
      observer: true,
      observeParents: true
    };
    var analitycGraphicsRound = new Swiper('.round-graphics_slider', SliderSettings);

    var analitycGraphicsColumn = new Swiper('.column-graphics_slider', SliderSettings);

    // $('.analityc-select').on('change', function () {
    //   if (analitycGraphicsColumn.is(':visible')){
    //     analitycGraphicsColumn.update();
    //   } else if (analitycGraphicsRound.is(':visible')){
    //     analitycGraphicsRound.update();
    //   }
    //
    //
    // })
  }
}
