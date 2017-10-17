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
    // Тыс.чел
    $('.analityc-graphics-rate-columns__population').each(function(){
      $(this).find('.analityc-graphics-rate-columns__graphic-column').each(function(){
        var columnHeight = $(this).data('height');
        $(this).css('height', columnHeight);
      });
    });
  }

  // Темп роста
  function rateLine(el, coef, startrate) {
    
    if ($(el).length) {
      
      $(el).each(function(){
        
        var graphic = $(this);
        var negRateDifference = 0;
        var isColumns = false;
        if (graphic.hasClass('growth-rate_columns')) isColumns = true;
        
        graphic.find('.growth-rate__level').each(function(){
          var rateLevel = parseFloat($(this).data('rate-level'));
          var rateDifference = startrate - rateLevel;
          if (rateDifference < negRateDifference) {
            negRateDifference = rateDifference;
          }
          $(this).css('top', rateDifference*coef+'px');
        });
        
        negRateDifference = Math.abs(negRateDifference);
        graphic.css('margin-top', negRateDifference*coef+'px');
  
        graphic.find('.growth-rate__line').each(function(){
          var rateCol = $(this).parents('.growth-rate__col');
          var startPoint = $(this).parent().css('top');
          var endPoint = rateCol.next().children().css('top');
          startPoint = parseInt(startPoint);
          endPoint = parseInt(endPoint);
          var pointDiffX = rateCol.next().offset().left - rateCol.offset().left;
          var pointDiffY = endPoint - startPoint;
          if (isColumns) {
            pointDiffX -= rateCol.width();
          }
          var lineWidth = Math.sqrt(pointDiffX * pointDiffX + pointDiffY * pointDiffY);
          var angle = Math.atan(pointDiffY/pointDiffX);
          angle = angle*180/Math.PI;
          $(this).css('width', lineWidth+'px');
          $(this).css('transform', 'rotate('+angle+'deg)');
        });
      });
    }
  }

  // Бюджет Москвы - Государственный долг (уровень долговой нагрузки)
  rateLine('.gov-debt .analityc-graphics__growth-rate_level', 40, 2.9);
  
  // Бюджет Москвы - Государственный долг (предельный объем государственного долга)
  rateLine('.gov-debt .analityc-graphics__growth-rate_limit', 1.5, 57.1);
  
  // Бюджет Москвы - Социально-экономическое развитие (численность населения)
  rateLine('.budget-forecast .analityc-graphics-rate-columns__growth-rate', 10, 100);
  
  // Бюджет Москвы - Социально-экономическое развитие (индекс промышленного производства)
  rateLine('.budget-forecast .analityc-graphics-broken-line__growth-rate', 5, 94.9);
  
  // Аналитика - Государственный долг (уровень долговой нагрузки)
  rateLine('.analytics-gov-debt .analityc-graphics-broken-line', 9, 8);
  
  
  
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
  
  
  // Графики analityc-graphics-bars
  window.graphicBars = function() {
    $('.analityc-graphics-bars').each(function(){
      
      if ($(this).find('[data-checkbox]:visible').siblings('[data-checkbox]:visible').length < 1) {
        $(this).addClass('analityc-graphics-bars_singlebar');
      } else {
        $(this).removeClass('analityc-graphics-bars_singlebar');
      }
      
      var line = $(this).find('.analityc-graphics-bars__line'),
          fill = $(this).find('.analityc-graphics-bars__line-fill'),
          rateLine = $(this).find('.analityc-graphics-bars__rate-line'),
          barVal = $(this).find('.analityc-graphics-bars__val'),
          changes = $(this).find('.analityc-graphics-bars__changes');
      
      $(this).find('.analityc-graphics-bars__line-fill-area').parent().addClass('analityc-graphics-bars__line_area');
      
      var fillAreaLine = $(this).find('.analityc-graphics-bars__line_area');
      
      fill.each(function(){
        var dheight = $(this).data('height');
        if ($(this).parents('.analityc-graphics-bars').hasClass('analityc-graphics-bars_singlebar')) {
          dheight *= 2;
        }
        $(this).height(dheight);
      });
      
      rateLine.each(function(){
        var barGraphic = '.analityc-graphics-bars__graphic',
            lineFill = '.analityc-graphics-bars__line-fill',
            curLineFill = $(this).parents(lineFill),
            curLineFillName = curLineFill.data('checkbox'),
            nextLineFill = $(this).parents(barGraphic).next().find(lineFill+'[data-checkbox="'+curLineFillName+'"]'),
            startPoint = curLineFill.offset().top,
            endPoint = nextLineFill.offset().top;
            
        startPoint = parseInt(startPoint);
        endPoint = parseInt(endPoint);
        
        var pointDiffX = nextLineFill.offset().left - curLineFill.offset().left;
        var pointDiffY = endPoint - startPoint;
        
        pointDiffX -= curLineFill.width();
        
        var lineWidth = Math.sqrt(pointDiffX * pointDiffX + pointDiffY * pointDiffY);
        var angle = Math.atan(pointDiffY/pointDiffX);
        angle = angle*180/Math.PI;
        $(this).css('width', lineWidth+'px');
        $(this).css('transform', 'rotate('+angle+'deg)');
      });
      
      fillAreaLine.each(function(){
        
        var fillArea = $(this).find('.analityc-graphics-bars__line-fill-area:visible'),
            tranPoint = 0;
        
        for (var i = (fillArea.length - 1); i >= 0; i--) {
        
          var barGraphic = '.analityc-graphics-bars__graphic',
              lineFill = '.analityc-graphics-bars__line-fill',
              fillAreaName = fillArea.eq(i).data('checkbox'),
              prevLineFill = $(this).parents(barGraphic).prev().find(lineFill+'[data-checkbox="'+fillAreaName+'"]'),
              nextLineFill = $(this).parents(barGraphic).next().find(lineFill+'[data-checkbox="'+fillAreaName+'"]'),
              prevLineFillHeight = prevLineFill.height(),
              nextLineFillHeight = nextLineFill.height(),
              maxLineFillHeight;
          
          if (nextLineFillHeight >= prevLineFillHeight) {
            maxLineFillHeight = nextLineFillHeight;
          } else {
            maxLineFillHeight = prevLineFillHeight;
          }
          
          fillArea.eq(i).height(maxLineFillHeight);
          
          var startPoint = prevLineFill.offset().top,
              endPoint = nextLineFill.offset().top,
              pointDiff = endPoint - startPoint,
              heightDiff = nextLineFillHeight - prevLineFillHeight,
              areaWidth = $(this).width(),
              angle = Math.atan(pointDiff/areaWidth);
          
          if (heightDiff < 0) {
            tranPoint += heightDiff * -1;
          }
          
          angle = angle*180/Math.PI;
          fillArea.eq(i).css('transform', 'translateY('+tranPoint+'px)');
          fillArea.eq(i).find(lineFill).css('transform', 'skewY('+angle+'deg)');
          fillArea.eq(i).find(lineFill).next().css('transform', 'translateY('+(pointDiff/2 * -1)+'px)');
        }
      });
      
      line.each(function(){
        var lineHeight = $(this).height();
        $(this).parent().height(lineHeight);
      });
      
      barVal.each(function(){
        $(this).removeClass('analityc-graphics-bars__val_out');
        var barValHeight = $(this).outerHeight(),
            barHeight = $(this).parent().height();
        if (barValHeight >= barHeight) $(this).addClass('analityc-graphics-bars__val_out');
      });
      
      changes.each(function(){
        var graphic = $(this).parents('.analityc-graphics-bars__graphic'),
            firstLineHeight = graphic.find('.analityc-graphics-bars__lines').height(),
            lastLineHeight = graphic.next().find('.analityc-graphics-bars__lines').height(),
            averageLineHeight;
        
        if (lastLineHeight >= firstLineHeight) {
          averageLineHeight = (lastLineHeight - firstLineHeight) / 2 + firstLineHeight;
        } else {
          averageLineHeight = (firstLineHeight - lastLineHeight) / 2 + lastLineHeight;
        }
        
        if ($(this).parents('.analityc-graphics-bars').hasClass('analityc-graphics-bars_singlebar')) {
          averageLineHeight += 20;
        }
        
        $(this).css('bottom', averageLineHeight+'px');
      });
    });
  }
  
  if ($('.analityc-graphics-bars').length) {
    graphicBars();
  }
  
  
  
  // Функция, позиционирующая числовые подписи в графиках
  //////////////////////////////
  window.positionValues = function() {
    $(document).find('.segment-diagram__val').each(function(){
      // Задаем базовое позиционирование
      $(this).css({
        left: 0,
        top: 0
      });
      
      var indexOffset = $(this).parent().find('.segment-diagram__value-num').length > 0 ? -1 : 0,
          index = $(this).index() + indexOffset,
          id = $(this).parents('.segment-diagram').attr('id'),
          diagram = $(this).parents('.segment-diagram').find('#' + id + '-' + index);
      
      if (typeof diagram[0] !== "undefined") {
        
        var thisOffsL = $(this).offset().left,
            thisOffsT = $(this).offset().top,
            elW = $(this).width(),
            elH = $(this).height();
        
        // Вся диаграмма
        var d = $(this).parents('.segment-diagram').get(0),
            defW = 270, // стандартная ширина диаграммы
            defSW = 45, // стандартная толщина линии в диаграмме
            curW = $(d).width(), // текущая ширина диаграммы
            dcoef = curW / defW, // коэффициент (зависит от текущей и стандартной ширины)
            curSW = defSW * dcoef, // текущая толщина линии в диаграмме
            dxcenter = $(d).width() / 2,
            dycenter = $(d).height() / 2,
            dR = dycenter - curSW / 2, // curSW / 2 - это половина толщины линии в диаграмме
            
        // Ищем соответствующий кусок диаграммы
        diagram = diagram.get(0);
        
        //var diagOffsL = diagram.getBBox().x * dcoef,
        //    diagOffsT = diagram.getBBox().y * dcoef,
        //    dW = diagram.getBBox().width * dcoef,
        //    dH = diagram.getBBox().height * dcoef,
        //    diagelemcenterx = diagOffsL + (dW / 2),
        //    diagelemcentery = diagOffsT + (dH / 2);
        //
        //// Расчеты
        //var x1 = dxcenter,
        //    x2 = diagelemcenterx,
        //    x = x1 - x2, // катет1
        //    y1 = dycenter,
        //    y2 = diagelemcentery,
        //    y = y1 - y2, // катет2
        //    r = Math.sqrt(x*x + y*y), // гипотенуза
        //    delta = dR / r, // коэффициент
        //    xnew = x * delta, // новый отступ от центра x
        //    ynew = y * delta; // новый отступ от центра y
        //
        //$(this).css({
        //  left: dxcenter - xnew,
        //  top: dycenter - ynew
        //});
        
        var diagPath = $(diagram).attr('d').split(' '),
            diagLong = diagPath[7],
            diagXa = diagPath[1] * dcoef, // X начальной точки (A)
            diagYa = diagPath[2] * dcoef, // Y начальной точки (A)
            diagXb = diagPath[9] * dcoef, // X конечной точки (B)
            diagYb = diagPath[10] * dcoef, // Y конечной точки (B)
            OA = {x: diagXa - dxcenter, y: diagYa - dycenter}, // вектор OA (O - центр диаграммы)
            OB = {x: diagXb - dxcenter, y: diagYb - dycenter}, // вектор OB (O - центр диаграммы)
            scalar = OA.x * OB.x + OA.y * OB.y, // скалярное произведение векторов
            OALength = Math.sqrt(OA.x * OA.x + OA.y * OA.y), // длина вектора ОА
            OBLength = Math.sqrt(OB.x * OB.x + OB.y * OB.y), // длина вектора OB
            angleCos = scalar / (OALength * OBLength); // косинус угла между векторами
        
        if (angleCos < -1) angleCos = -1;
        if (angleCos > 1) angleCos = 1;
        
        var halfAngle = Math.acos(angleCos) / 2; // половина угла между векторами
        
        if (diagLong == 1) halfAngle = Math.PI - halfAngle; // если угол сегмента больше 180
        
        var diagXc = dxcenter + OA.x * Math.cos(halfAngle) - OA.y * Math.sin(halfAngle),
            diagYc = dycenter + OA.x * Math.sin(halfAngle) + OA.y * Math.cos(halfAngle);
        
        $(this).css({
          left: diagXc,
          top: diagYc
        });
        
      }
    });
    
    // Определяем сегмент диаграммы с маленьким значением
    // ###############################
    $('.segment-diagram').each(function () {
      var vals = $(this).find('.segment-diagram__val');
      
      // Ищем сумму
      var summ = 0;
      
      vals.each(function () {
        summ += +parseInt($(this).text());
      });
      
      // Ищем маленькое значение
      vals.each(function () {
        var val = +parseInt($(this).text()),
            parent = '.segment-diagram__value';
        
        if (val/summ < 0.03) {
          // Добавляем маленький класс
          $(this).addClass('segment-diagram__val_small');
          
          // Определяем позицию и добавляем модификатор позиции
          var left = $(this).position(parent).left,
              top = $(this).position(parent).top,
              wdth = $(this).outerWidth(),
              hght = $(this).outerHeight(),
              classHor, classVert;
          
          left < ($(this).parents(parent).outerWidth() - left - wdth) ? classHor = 'l' : classHor = 'r';
          top < ($(this).parents(parent).outerHeight() - top - hght) ? classVert = 't' : classVert = 'b';
          
          var totalClass = 'segment-diagram__val_small_' + classHor + classVert,
              text = $(this).text();
          
          $(this)
            .removeClass('segment-diagram__val_small_lt segment-diagram__val_small_rt segment-diagram__val_small_lb segment-diagram__val_small_rb')
            .addClass(totalClass)
            .html('<span>' + text + '</span>');
        }
      });
    });
  }
  
  // Инициализация графиков analityc-graphics-line-vertical_slider
  window.grLineVert = [];

  $('.analityc-graphics-line-vertical_slider').each(function() {
    grLineVert.push(new Swiper($(this), {

      nextButton: $(this).siblings('.analityc-graphics-line-vertical__next'),
      prevButton: $(this).siblings('.analityc-graphics-line-vertical__prev'),
      slidesPerView: 'auto',
      spaceBetween: 30

    })
    );
  })

  positionValues();
  
  
  
  // Графики analityc-graphics-line-vertical-alt
  if ($('.analityc-graphics-line-vertical_alt').length) {
    graphicLineVertAlt();
  }
  
  function graphicLineVertAlt() {
    $('.analityc-graphics-line-vertical_alt').each(function(){
      var line = $(this).find('.analityc-graphics-line-vertical__line');
      line.each(function(){
        var barValue = $(this).find('.analityc-graphics-line-vertical__line-bar-value'),
            lineFill = $(this).find('.analityc-graphics-line-vertical__line-fill'),
            value = parseFloat(barValue.text().replace(',','.'));
        barValue.css('bottom', value + '%');
        lineFill.css('height', value + '%');
      });
    });
  }
  
  
  // Отображение графиков по чекбоксам
  function checkLegendBoxes() {
    $('.legend_checkbox .checkbox').each(function(){
      var checkBox = $(this).find('.checkbox__control'),
          checkStatus = checkBox.is(':checked'),
          name = checkBox.attr('name'),
          graphic = $(this).parent().siblings('.analityc-graphics-container');
      
      if (checkStatus == true) {
        graphic.find('[data-checkbox="'+name+'"]').show();
      } else {
        graphic.find('[data-checkbox="'+name+'"]').hide();
      }
      
    });
  }
  
  if ($('.legend_checkbox').length) {
    checkLegendBoxes();
    $(document).on('change', '.legend_checkbox .checkbox__control', function(){
      checkLegendBoxes();
      graphicBars();
    });
  }
  
  $(document).on('click', '.legend_basket .legend__remove', function(){
    if ($(this).parents('.legend__item').siblings(':visible').length) {
      var name = $(this).data('name'),
          graphic = $(this).parents('.legend').siblings('.analityc-graphics-container');
      graphic.find('[data-checkbox="'+name+'"]').hide();    
      $(this).parents('.legend__item').hide();
      graphicBars();
    }
  });
}
