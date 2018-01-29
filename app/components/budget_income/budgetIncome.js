import $ from 'jquery';

export default () => {
  
  if ($('.budget-income').length) {
  
    // переключение по селектам
    $('.budget-income .analityc-widget_income .analityc-control-group select').on('change', function () {
      changeContent('select');
    });
    
    // переключение по кнопкам график/таблица
    $(".budget-income .analityc-widget_income .analityc-control-button").on("click", function(e) {
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      changeContent('button', $(this));
      
      if ($(window).width() <= 900) {
        var target = $('.analityc-graphics.active').length ? $('.analityc-graphics.active') : $('.analityc-table.active'),
            targetOffset = target.offset().top - 100;
        $('html, body').animate({scrollTop: targetOffset}, 1000);
      }
    });
    
    // переключение ко второму графику в исполнении на дату
    $(".budget-income .analityc-widget_income .analityc-control-group._dp input").on("change", function() {
      var graphics = $('.analityc-graphics'),
          activeButton = $('.analityc-control-button.active'),
          typeVal = activeButton.data('type');
      
      if (typeVal == 'graphics') {
        graphics.removeClass('active');
        graphics.has('[data-stage="dtwo"]').addClass('active');
      }
    });
    
    // значения на графике Исполнение на дату
    function dateGraphicVal() {
      $(".budget-income .analityc-graphics__line").each(function(){
        var valWidth = $(this).find('.analityc-graphics__line-bar-value').outerWidth(true),
            lineWidth = $(this).find('.analityc-graphics__line-total').width(),
            fillWidth = $(this).find('.analityc-graphics__line-fill').width();
        
        if (valWidth > lineWidth) {
          $(this).addClass('analityc-graphics__line_short');
          $(this).find('.analityc-graphics__line-abs').css('left', fillWidth+'px');
        } else {
          $(this).removeClass('analityc-graphics__line_short');
          $(this).find('.analityc-graphics__line-abs').css('left', '');
        }
      });
    }
    
    
    function changeContent(typeofchange, el) {
      console.log("Changing content");
      
      var graphics = $('.analityc-graphics'),
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
      console.log("Changing controls");
      changeControl(controls, stageVal, levelVal, typeVal);
      
      positionValues();
      $(document).trigger('contentChanged');
      dateGraphicVal();
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
        console.log("Changing control: " + stageVal + ", " + levelVal + ", " + typeVal);
        var stage = $(this).data('stage'),
            level = $(this).data('level'),
            type = $(this).data('type');
		console.log("Found control: " + stage + ", " + level + ", " + type);
        if ((stage == 'all' || stage.match(stageVal)) && (level == 'all' || level.match(levelVal)) && (type == 'all' || type.match(typeVal))) {
			console.log("Adding active");
          $(this).addClass('active');
        }
      });
    }
    
    changeContent('select');
    
  }
}
