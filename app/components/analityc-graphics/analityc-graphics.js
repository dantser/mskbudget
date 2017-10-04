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

  MULTILINE_BAR.each(function() {
    var MULTILINE_BAR_WIDTH = 80;
    
    if ($(document).width() <= 900 && $(document).width() > 580)
      MULTILINE_BAR_WIDTH = 200;

    if ($(this).outerWidth() > MULTILINE_BAR_WIDTH) {
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
  
  
  
  // Графики колонки со сдвигом 
  $(document).on('contentChanged', function() {
    if ($('.analityc-graphics__graphic_column').length) {
      columnAreaHeight();
    }
  });
  
  function columnAreaHeight() {
    
    $('.analityc-graphics__graphic_column').each(function(){ 
      var graphic = $(this),
          column = graphic.find('.column'),
          firstColumn = column.first(),
          lastColumn = column.last(),
          subcolumn = graphic.find('.subcolumn'),
          columnArea = $('.column-area'),
          columnAreaLength = subcolumn.find('.column-area').length;
      
      column.each(function(){
        var curColumnArea = $(this).find(columnArea);
        for (var i = (columnAreaLength - 1); i >= 0; i--) {
          var cheight = curColumnArea.eq(i).data('height');
          curColumnArea.eq(i).height(cheight);
        }
      });
      
      subcolumn.each(function(){
        var firstColumnArea = firstColumn.find(columnArea),
            lastColumnArea = lastColumn.find(columnArea),
            subColumnArea = $(this).find($('.subcolumn-area'));
        
        var tranPoint = 0;
        
        for (var i = (columnAreaLength - 1); i >= 0; i--) {
          var firstHeight = firstColumnArea.eq(i).data('height'),
              lastHeight = lastColumnArea.eq(i).data('height'),
              maxHeight;
          
          if (lastHeight >= firstHeight) {
            maxHeight = lastHeight;
          } else {
            maxHeight = firstHeight;
          }
          
          subColumnArea.eq(i).find(columnArea).height(maxHeight);
          
          var startPoint = firstColumnArea.eq(i).position().top,
              endPoint = lastColumnArea.eq(i).position().top,
              pointDiff = endPoint - startPoint,
              heightDiff = Math.abs(lastHeight - firstHeight),
              areaWidth = subColumnArea.width(),
              angle = Math.atan(pointDiff/areaWidth);
          
          if (pointDiff > 0) {
            tranPoint = tranPoint + heightDiff;
          }
          
          angle = angle*180/Math.PI;
          subColumnArea.eq(i).css('transform', 'translateY('+tranPoint+'px)');
          subColumnArea.eq(i).find(columnArea).css('transform', 'skewY('+angle+'deg)');
          subColumnArea.eq(i).find(columnArea).next().css('top', (pointDiff * -1) / 1.3+'px');
        }
      });
    });
  }

}
