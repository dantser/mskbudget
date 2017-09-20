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

  if ($(window).width() < 769) {
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
    // var analitycGraphicsGD = new Swiper('.')
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

  // График analityc-multiline - попапы для коротких линий
  const MULTILINE_BAR = $('.analityc-multiline__line-bar');

  var MULTILINE_BAR_WIDTH = 80;

  $(window).on('load resize', function() {
    if ($(window).width() <= 900)
      MULTILINE_BAR_WIDTH = 150;
    else
      MULTILINE_BAR_WIDTH = 80;
  });

  MULTILINE_BAR.each(function() {
    if ($(this).outerWidth() > 80) {
      $(this).find('.analityc-multiline__line-abs').remove();
    } else {
      $(this).find('.analityc-multiline__line-value').text('');
    }
  })



  // Прогноз социально-экономического развития города Москвы (численность населения)
  if ($('.analityc-graphics-rate-columns').length) {

    rateLine('.analityc-graphics-rate-columns__growth-rate', 10, 100, true);

    // Тыс.чел
    $('.analityc-graphics-rate-columns__population').each(function(){
      $(this).find('.analityc-graphics-rate-columns__graphic-column').each(function(){
        var columnHeight = $(this).data('height');
        $(this).css('height', columnHeight);
      });
    });
  }

  // Прогноз социально-экономического развития города Москвы (индекс промышленного производства)
  if ($('.budget-forecast .analityc-graphics-broken-line').length) {
    rateLine('.analityc-graphics-broken-line__growth-rate', 5, 94.9);
  }

  // Темп роста
  function rateLine(el, coef, startrate, columns) {
    $(el).each(function(){

      var negRateDifference = 0;
      $(this).find('[data-rate-level]').each(function(){
        var rateLevel = parseFloat($(this).data('rate-level'));
        var rateDiffernece = startrate - rateLevel;
        if (rateDiffernece < negRateDifference) {
          negRateDifference = rateDiffernece;
        }
        $(this).css('top', rateDiffernece*coef+'px');
      });
      negRateDifference = Math.abs(negRateDifference);
      $(this).css('margin-top', negRateDifference*coef+'px');

      $(this).find('[data-rate-level]').children().each(function(){
        var rateCol = $(this).parent().parent();
        var startPoint = $(this).parent().css('top');
        var endPoint = rateCol.next().children().css('top');
        startPoint = parseInt(startPoint);
        endPoint = parseInt(endPoint);
        var pointDiff = endPoint - startPoint;
        var lineWidth = rateCol.next().offset().left - rateCol.offset().left;
        if (columns) {
          lineWidth -= rateCol.outerWidth();
        }
        var angle = Math.atan(pointDiff/lineWidth);
        angle = angle*180/Math.PI;
        $(this).css('transform', 'skewY('+angle+'deg)');
        $(this).css('width', lineWidth+'px');
      });
    });
  }

  // Аналитика - Государственный долг (уровень долговой нагрузки)
  if ($('.analytics-gov-debt .analityc-graphics-broken-line').length) {
    rateLine('.analityc-graphics-broken-line__growth-rate', 9, 8);
  }

  // Бюджет Москвы - Государственный долг (уровень долговой нагрузки)
  if ($('.gov-debt .analityc-graphics__growth-rate_level').length) {
    rateLine('.analityc-graphics__growth-rate_level', 40, 2.9, true);
  }
  // Бюджет Москвы - Государственный долг (предельный объем государственного долга)
  if ($('.gov-debt .analityc-graphics__growth-rate_limit').length) {
    rateLine('.analityc-graphics__growth-rate_limit', 1.5, 57.1, true);
  }

}
