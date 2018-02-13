import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  
  if ($('.moscow-sources').length) {
     
    // графики
    graphicInit();
    
    function graphicInit() {
      $('.graphic__data .linear-diagram__fill').each(function(){
        
        var posWidth = 0;
        var negWidth = 0;
        
        if ($(this).find('.linear-diagram__fill-pos').length) {
          var pos = $(this).find('.linear-diagram__fill-pos');
          posWidth = pos.data('width');
        }
        
        if ($(this).find('.linear-diagram__fill-neg').length) {
          var neg = $(this).find('.linear-diagram__fill-neg');
          negWidth = neg.data('width');
        }
        
        var diff = (posWidth - negWidth)/2;
        if ($(window).width() <= 550) {
          diff /= 1.7;
        }
        $(this).css('left', diff+'px');
        
        $(this).find('[data-width]').each(function(){
          var dwidth = $(this).data('width');
          if ($(window).width() <= 550) {
            dwidth /= 1.7;
          }
          $(this).width(dwidth);
        });
      });
    }
    
    function graphicArrowInit() {
      $('.graphic__data-arrow').each(function(){
        var parentRow = $(this).parents('.graphic__row'),
            totalRowsHeight = 0,
            dataRows = parentRow.nextAll().not('.graphic__total');
        
        dataRows.each(function(){
          var rowHeight = $(this).outerHeight(true);
          totalRowsHeight += rowHeight;
        });
        
        totalRowsHeight += 20;
        
        $(this).height(totalRowsHeight);
      });
    }
    
    function checkDateGraphics() {
      $('.analityc-widget-sources_date .linear-diagrams').each(function(){
        
        var cnt = 0,
            maxValue = 0;
        
        $(this).find('.linear-diagram').each(function(){
          var planValue = parseFloat($(this).find('.linear-diagram__value_out').text().replace(' ', '').replace(',', '.')),
              factValue = parseFloat($(this).find('.linear-diagram__fill .linear-diagram__value').text().replace(' ', '').replace(',', '.')),
              blockWidth,
              fillWidth;
          
          if (cnt === 0) {
            maxValue = planValue;
          }
          
          if (planValue === 0 && factValue > 0) {
            blockWidth = factValue / maxValue * 100;
          } else {
            blockWidth = planValue / maxValue * 100;
          }
          
          if (planValue === 0 && factValue === 0) {
            fillWidth = 0;
          } else if ((planValue === 0 && factValue > 0) || factValue < 0 || factValue > planValue) {
            fillWidth = 100;
          } else {
            fillWidth = factValue / planValue * 100;
          }
          
          $(this).find('.linear-diagram__block').css('width', blockWidth+'%');
          $(this).find('.linear-diagram__fill').css('width', fillWidth+'%');
          
          $(this).find('.linear-diagram__fill .linear-diagram__value').removeClass('linear-diagram__value_abs').appendTo($(this).find('.linear-diagram__fill'));
          $(this).find('.linear-diagram__fill .linear-diagram__fill-hover').remove();
          $(this).find('.linear-diagram__fill').removeClass('linear-diagram__fill_negative');
          
          var valueWidth = $(this).find('.linear-diagram__fill .linear-diagram__value').width() + 16,
              fillWidth = $(this).find('.linear-diagram__fill').width();          
          
          if (valueWidth > fillWidth) {
            $(this).find('.linear-diagram__fill .linear-diagram__value').addClass('linear-diagram__value_abs').wrap('<div class="linear-diagram__fill-abs"></div>');
            $(this).find('.linear-diagram__fill .linear-diagram__fill-abs').wrap('<div class="linear-diagram__fill-hover"></div>');
          }
          
          if (factValue < 0) {
            $(this).find('.linear-diagram__fill').addClass('linear-diagram__fill_negative');
          }
          
          cnt++;
        });
        
        var wrapperWidth = $(this).find('.linear-diagrams__wrapper').width();
        var titleWidth = $(this).find('.linear-diagram__sources').outerWidth(true);
        var maxlineWidth = 0;
        
        $(this).find('.linear-diagram').each(function(){
          var lineWidth = $(this).find('.linear-diagram__block').outerWidth() + $(this).find('.linear-diagram__value_out').outerWidth(true);
          if (lineWidth > maxlineWidth) maxlineWidth = lineWidth;
        });
        
        var totalWidth = titleWidth + maxlineWidth;
        var diagramPadding = parseInt($(this).find('.linear-diagram').css('padding-left'));
        totalWidth += diagramPadding;
        
        if (totalWidth <= wrapperWidth) {
          $(this).addClass('noscroll');
        } else {
          $(this).removeClass('noscroll');
        }
        
      });
    }
    
    checkDateGraphics();
    
    
    function checkGraphicVals() {
      $('.analityc-widget-sources_approved .linear-diagram__value, .analityc-widget-sources_done .linear-diagram__value').each(function(){
        var valueWidth = $(this).outerWidth(),
            fillWidth = $(this).parent().width();
        if ($(this).siblings('.linear-diagram__wave').length) {
          var waweWidth = $(this).siblings('.linear-diagram__wave').outerWidth(true);
          fillWidth -= waweWidth;
        }
        if (valueWidth > fillWidth) {
          $(this).addClass('linear-diagram__value_out');
        } else {
          $(this).removeClass('linear-diagram__value_out');
        }
      });
      
      $('.analityc-widget-sources_changes .linear-diagram__fill-pos > .linear-diagram__value, .analityc-widget-sources_changes .linear-diagram__fill-neg > .linear-diagram__value').each(function(){
        var valueWidth = $(this).outerWidth(),
            fillWidth = $(this).parent().width();
        if ($(this).siblings('.linear-diagram__wave').length) {
          var waweWidth = $(this).siblings('.linear-diagram__wave').outerWidth(true);
          fillWidth -= waweWidth;
        }
        if (valueWidth > fillWidth) {
          $(this).hide();
          $(this).next('.linear-diagram__fill-hover').addClass('active');
        } else {
          $(this).show();
          $(this).next('.linear-diagram__fill-hover').removeClass('active');
        }
      });
    }
    
    checkGraphicVals();
    
    
    // слайдер
    var approvedGraphSlider, changesGraphSlider;
    
    approvedSliderInit();
    changesSliderInit();
    
    graphicArrowInit();
    
    function approvedSliderInit() {
      if ($(window).width() <= 980) {
        approvedGraphSlider = new Swiper ('.swiper-container-approved', {
          prevButton: '.ar-left_approved',
          nextButton: '.ar-right_approved'
        });
        $('.swiper-container-approved').addClass('inited');
      }
    }
    
    function changesSliderInit() {
      if ($(window).width() <= 980) {
        changesGraphSlider = new Swiper ('.swiper-container-changes', {
          prevButton: '.ar-left_changes',
          nextButton: '.ar-right_changes'
        });
        $('.swiper-container-changes').addClass('inited');
      }
    }
    
    // переключение по селектам
    $('.moscow-sources .analityc-widget_sources .analityc-control-group select').on('change', function () {
      changeContent('select');
      if ($(window).width() <= 980) {
        approvedGraphSlider.update();
        changesGraphSlider.update();
      }
      graphicArrowInit();
      checkGraphicVals();
    });
    
    // переключение по кнопкам график/таблица
    $(document).on('click', '.moscow-sources .analityc-widget_sources .analityc-control-button', function(e) {
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      
      if ($(window).width() <= 900) {
        var target = $('.analityc-widgethead'),
            targetOffset = target.offset().top + target.outerHeight() - 100;
        $('html, body').animate({scrollTop: targetOffset}, 1000);
      }
      
      changeContent('button', $(this));
      if ($(window).width() <= 980) {
        approvedGraphSlider.update();
        changesGraphSlider.update();
      }
      graphicArrowInit();
      checkGraphicVals();
    });
    
    
    
    function changeContent(typeofchange, el) {
      var graphics = $('.analityc-widget-sources'),
          table = $('.analityc-table'),
          controls = $('.analityc-widgethead [data-control]'),
          stageSelect = $('.analityc-control-group._stage select'),
          levelSelect = $('.analityc-control-group._level select'),
          stageVal = stageSelect.val(),
          levelVal = levelSelect.val(),
          block;
      
      if (typeofchange == 'select') {
        var activeButton = $('.analityc-control-button.active'),
            typeVal = activeButton.data('type');
      } else {
        var typeVal = el.data('type');
      }
      
      graphics.removeClass('active');
      table.removeClass('active');
      controls.removeClass('active');
      
      if (typeVal == 'graphics') {
        block = graphics;
      } else {
        block = table;
      }
      
      changeBlock(block, stageVal);
      changeControl(controls, stageVal, levelVal, typeVal);
      
      positionValues();
      checkDateGraphics();
    }
    
    function changeBlock(el, stageVal) {
      el.each(function(){
        var stage = $(this).data('stage');
        if (stage && stage.length){
          if (stage == 'all' || stage.match(stageVal)) {
            $(this).addClass('active');
          }
        }
      });
    }
    
    function changeControl(el, stageVal, levelVal, typeVal) {
      el.each(function(){
        var stage = $(this).data('stage'),
            level = $(this).data('level'),
            type = $(this).data('type');
       if (stage && level && type && stage.length && level.length && type.length){
         if ((stage == 'all' || stage.match(stageVal)) && (level == 'all' || level.match(levelVal)) && (type == 'all' || type.match(typeVal))) {
          $(this).addClass('active');
        }
       }
      });
    }
    
  }
}
