import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  
  if ($('.moscow-sources').length) {
    
    const SWITCH = 'arr-switchclass';
    const TABLE_ARROW = $('.table__arrow');
    const TABLE_SUBROW = $('.table__row_subrow');
    const ACTIVE_TABLE = $('._active').find('.table');
    
    
    if (ACTIVE_TABLE.length) {
      $('.section__ar').show();
    } else {
      $('.section__ar').hide();
    }
    
    // стрелочки внутри таблицы
    TABLE_ARROW.each( function () { // eslint-disable-line
      const EL = $(this);
      EL.on('click', (e) => {
        e.preventDefault();
        // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
        EL.parents('.table__row').toggleClass('table__row_opened');
        EL.parents('.table__row').nextAll('.table__row').each(function () {
          if ( !$(this).hasClass('table__row_hassub') ) {
            $('.table__row_subrow_tax').toggle();
          } else {
            return false;
          }
        })
      });
    })
    
    //стрелочки сколлящие таблицу
    $('.section__ar_right').on('click', function (e) {
      $('.analityc-table__wrapper').animate( { scrollLeft: '+=100' }, 300);
    });
    
    $('.section__ar_left').on('click', function (e) {
      $('.analityc-table__wrapper').animate( { scrollLeft: '-=100' }, 300);
    });
    
    function arrowActive(el) {
      var sL = el.scrollLeft(),
          leftArr = $('.section__ar_left'),
          rightArr = $('.section__ar_right');
      
      if (el.length > 0) {
        
        if (sL === 0) {
          leftArr.addClass('section__ar_disabled');
        } else if (sL === ( el.prop('scrollWidth') - el.width().toFixed(0) ) ) {
          rightArr.addClass('section__ar_disabled');
        } else {
          leftArr.removeClass('section__ar_disabled');
          rightArr.removeClass('section__ar_disabled');
        }
      }
    }
    
    $('.analityc-table__wrapper').each(function () {
      arrowActive($('.analityc-table__wrapper'));
    })
    
    $('.analityc-table__wrapper').scroll(function(){
      arrowActive($(this));
    });
    
    
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
      
      $('.analityc-widget-sources_date [data-width]').each(function(){
        var dwidth = $(this).data('width');
        $(this).css('width', dwidth+'%');
      });
    }
    
    
    // слайдер
    approvedSliderInit();
    
    $(".analityc-widget_sources .analityc-control-group._stage .analityc-select").on("change", function() {
      if ($(this).val() === "Закон о внесении изменений" && $('.analityc-widget-sources_changes').hasClass('active')) {
        changesSliderInit();
      }
    });
    
    function approvedSliderInit() {
      if ($(window).width() <= 980) {
        var approvedGraphSlider = new Swiper ('.analityc-widget-sources_approved .graphic', {
          prevButton: '.ar-left_approved',
          nextButton: '.ar-right_approved'
        });
      }
    }
    
    function changesSliderInit() {
      if ($(window).width() <= 980) {
        var changesGraphSlider = new Swiper ('.analityc-widget-sources_changes .graphic', {
          prevButton: '.ar-left_changes',
          nextButton: '.ar-right_changes'
        });
      }
    }
    
    
    
    // переключение по селектам
    $('.analityc-widget_sources .analityc-control-group select').on('change', function () {
      changeContent('select');
    });
    
    // переключение по кнопкам график/таблица
    $(".analityc-widget_sources .analityc-control-button").on("click", function(e) {
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      changeContent('button', $(this));
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
    }
    
    function changeBlock(el, stageVal) {
      el.each(function(){
        var stage = $(this).data('stage');
        if (stage == 'all' || stage.match(stageVal)) {
          $(this).addClass('active');
        }
      });
    }
    
    function changeControl(el, stageVal, levelVal, typeVal) {
      el.each(function(){
        var stage = $(this).data('stage'),
            level = $(this).data('level'),
            type = $(this).data('type');
        if ((stage == 'all' || stage.match(stageVal)) && (level == 'all' || level.match(levelVal)) && (type == 'all' || type.match(typeVal))) {
          $(this).addClass('active');
        }
      });
    }
    
  }
}
