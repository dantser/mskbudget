import $ from 'jquery';

export default () => {
	$('.mrelations__switcher-text_link').click(function(e) {
		$(this).addClass('active').siblings().removeClass('active');
	})

  const GR_LINE = $('.mrelations-transfer .analityc-graphics_line');

  /*GR_LINE.each(function() {
	  var LINE_BAR = $(this).find('.analityc-graphics__line');

	  LINE_BAR.each(function() {
	  	var line = $(this).find('.analityc-graphics__line-total');
	  	var lineBar = $(this).find('.analityc-graphics__line-bar');
	  	var size = $(this).find('.analityc-graphics__line-fill').css('width');
	  	var isLong = line.outerWidth() > 60 ? true : false;
	  	var val = $(this).find('.analityc-graphics__line-bar-value');
	  	var abs = $(this).find('.analityc-graphics__line-abs');

	  	abs.css('left', 'calc(' + size + ' + ' + '5px');

	  	val.show();
	  	if (!isLong) {
	  		val.hide();
		  	lineBar.hover(function() {
		  			abs.show();
		  	}, function() {
						abs.hide();
		  	})
	  	}
	  })

  })*/
  
  // значения на графике Исполнение на дату
  function dateGraphicVal() {
    $(".mrelations-transfer .analityc-graphics__line").each(function(){
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
  
  // переключение по селектам
  $('.mrelations-transfer .analityc-widget_mrelations .analityc-control-group select').on('change', function () {
    changeContent('select');
  });
  
  // переключение по кнопкам график/таблица
  $(".mrelations-transfer .analityc-widget_mrelations .analityc-control-button").on("click", function(e) {
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
  
  
  
  function changeContent(typeofchange, el) {
    var graphics = $('.analityc-graphics'),
        table = $('.analityc-table'),
        controls = $('.analityc-widgethead [data-control]'),
        stageSelect = $('.analityc-control-group._stage select'),
        classSelect = $('.analityc-control-group._transfer select'),
        stageVal = stageSelect.val(),
        classVal = classSelect.val(),
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
    
    changeBlock(block, stageVal, classVal);
    changeControl(controls, stageVal, typeVal);
    
    positionValues();
    $(document).trigger('contentChanged');
    dateGraphicVal();
  }
  
  function changeBlock(el, stageVal, classVal) {
    el.each(function(){
      var stage = $(this).data('stage'),
          dclass = $(this).data('class');
      if ((stage == 'all' || stage.match(stageVal)) && (dclass == 'all' || dclass.match(classVal))) {
        $(this).addClass('active');
      }
    });
  }
  
  function changeControl(el, stageVal, typeVal) {
    el.each(function(){
      var stage = $(this).data('stage'),
          level = $(this).data('level'),
          type = $(this).data('type');
      if ((stage == 'all' || stage.match(stageVal)) && (type == 'all' || type.match(typeVal))) {
        $(this).addClass('active');
      }
    });
  }
}