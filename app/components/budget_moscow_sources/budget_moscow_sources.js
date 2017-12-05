import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  
  if ($('.moscow-sources').length) {
     
    // графики
    graphicInit();
    dateGraphicInit();
    
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
    
    function dateGraphicInit() {
      $('.analityc-widget-sources_date .linear-diagrams').each(function(){
        var area = $(this).attr('data-area'),
            diagram = $(this).find('.linear-diagram'),
            diagramsWidth = $(this).width();
        
        if ($(window).width() <= 550) {
          area = Math.floor(area / 1.5);
        }
        
        diagram.css('min-width', area+'px');
        
        $(this).find('[data-width]').each(function(){
          var dwidth = $(this).data('width');
          $(this).css('width', dwidth+'%');
        });
        
        if (area > diagramsWidth) {
          $(this).addClass('linear-diagrams_arrowed');
        } else {
          $(this).removeClass('linear-diagrams_arrowed');
        }
      });
    }
    
    
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
    });
    
    // переключение по кнопкам график/таблица
    $(".moscow-sources .analityc-widget_sources .analityc-control-button").on("click", function(e) {
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      changeContent('button', $(this));
      if ($(window).width() <= 980) {
        approvedGraphSlider.update();
        changesGraphSlider.update();
      }
      graphicArrowInit();
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
      dateGraphicInit();
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
