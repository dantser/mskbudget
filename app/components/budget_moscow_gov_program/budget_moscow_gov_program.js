import $ from 'jquery';

export default () => {

	if ($(window).width() < 900) {
		var GR_MIX_SLIDER = new Swiper('.analityc-widget-moscow-gov-program_structure-done .swiper-container', {
      nextButton: '.analityc-graphics_round-next',
      prevButton: '.analityc-graphics_round-prev',
      slidesPerView: '1',
      centeredSlides: true,
      spaceBetween: 40,
      speed: 500,
      observer: true,
      observeParents: true,
      onSlideChangeEnd: function(swiper) {
				$('.analityc-widget-moscow-gov-program_structure').find('.graphic__data').removeClass('graphic__data_active');
				$('.analityc-widget-moscow-gov-program_structure').find('.graphic__data[data-year="' + swiper.activeIndex + '"]').addClass('graphic__data_active');
			},
		});
	}

	const TABLINK_DONE = $('.moscow-gov-program .js-button-done');

	TABLINK_DONE.each( function () { // eslint-disable-line
		const EL = $(this);
		const ACTIVE_CLASS = 'graphic__data_active';
		const GR_MIX = $('.analityc-widget-moscow-gov-program_structure-done .analityc-mix');
		EL.on('click', function(e) {
			e.preventDefault();
			EL.parent().siblings().removeClass(ACTIVE_CLASS);
			EL.parent().addClass(ACTIVE_CLASS);

			var year = parseInt(EL.parent().data('year'), 10);
			var grId = GR_MIX.eq(year).index();
			
			if ($(document).width() >= 900) {
				GR_MIX.removeClass('active');
				// GR_MIX.find('path, .analityc-mix__lines').removeClass('active');
				// GR_MIX.find('path').addClass('stroke-white')
				
				// GR_MIX.eq(year).find('path').eq(0).removeClass('stroke-white');
				// GR_MIX.eq(year).find('path').eq(0).addClass('active');

				GR_MIX.eq(year).addClass('active');
				GR_MIX.siblings().hide();

				// GR_MIX.eq(year).find('.analityc-mix__lines_social-gp').addClass('active');
				GR_MIX.eq(year).show();
			} else {
				GR_MIX_SLIDER.slideTo(grId);
			}

			positionValues();
			grLinePopup();
		})
	})

	const TABLINK_CHANGES = $('.moscow-gov-program .js-button-changes');

	TABLINK_CHANGES.each( function () { // eslint-disable-line
		const EL = $(this);
		const ACTIVE_CLASS = 'graphic__data_active';
		EL.on('click', function(e) {
			e.preventDefault();
			EL.parent().siblings().removeClass(ACTIVE_CLASS);
			EL.parent().addClass(ACTIVE_CLASS);

			positionValues();
			grLinePopup();
		})
	})

	// Формирование графика Закон о бюджете утв. - гп
	const GRAPHIC_DONE = $('.analityc-widget-moscow-gov-program_done');
	const LINE_DONE = GRAPHIC_DONE.find('.analityc-multiline__line');
	var full = 0;
	var cnt = 0;


	LINE_DONE.each(function() {
		const PARTS = $(this).find('.analityc-multiline__line-total');
		var sum = 0.0;
		var numsArr = [0.0, 0.0, 0.0];
		var persArr = [0.0, 0.0, 0.0];
		var linePers = 0.0;

		PARTS.each(function() {
			numsArr[$(this).index()] = parseFloat(($(this).find('.analityc-multiline__line-value').text()).replace(',', '.'));
			sum += numsArr[$(this).index()];
		})

		if (cnt == 0) {
			full = sum; // максимум за 100%
		}

		if (cnt == 0)
			linePers = 100.0;
		else
			linePers = sum * 100.0 / full; // процент от макс. числа

		PARTS.each(function() {
			persArr[$(this).index()] = numsArr[$(this).index()] * 100 / sum;
			$(this).css('width', persArr[$(this).index()] + '%');
		});


		$(this).find('.analityc-multiline__line-bar').css('width', linePers + '%');

		cnt++;
	})

	// Формирование графика Закон о бюджете утв. - структура
	const GRAPHIC_STR = $('.analityc-widget-moscow-gov-program_structure');
	const GRAPHIC_STR_TAB = GRAPHIC_STR.find('.analityc-mix');
	
	GRAPHIC_STR_TAB.each(function() {
		const LINE_STR = $(this).find('.analityc-mix__line');

		LINE_STR.each(function() {
			var linePers = parseFloat(($(this).find('.analityc-mix__js-grmix-val').text()).replace(',', '.'));
			$(this).find('.analityc-mix__line-bar').css('width', linePers + '%');
		})

	})

	// Формирование графика Закон о внесении изменений, Закон об исполнении, Исполнение на дату

	function grChanges() {
		const GRAPHIC_CHANGES = $('.analityc-widget-moscow-gov-program_changes, .analityc-widget-moscow-gov-program_exec, .analityc-widget-moscow-gov-program_date');

		GRAPHIC_CHANGES.each(function() {
			var $this = $(this);
			const LINE_STR = $(this).find('.analityc-line__line');
			var full = 0;
			var cnt = 0;

			LINE_STR.each(function() {
				var linePers = 0.0;
				var fillPers = 0.0;
				var num = parseFloat(($(this).find('.analityc-line__line-value').text()).replace(',', '.'));
				var barNum = parseFloat(($(this).find('.analityc-line__line-bar-value').text()).replace(',', '.'));

				// отрицательное значение (Закон о внесении изменений)
				if (barNum < 0) {
					var sum = num + barNum*(-1);
					if ($this.hasClass('analityc-widget-moscow-gov-program_changes'))
						$(this).find('.analityc-line__line-total').addClass('analityc-line__line-total_negative');
				}
				else {
					if ($this.hasClass('.analityc-widget-moscow-gov-program_date'))
						var sum = barNum;
					else
						var sum = num + barNum;
				}

				if (cnt == 0) {
					full = sum;
				}

				if (cnt == 0)
					linePers = 100.0;
				else
					linePers = sum * 100.0 / full; // процент от макс. числа

				$(this).find('.analityc-line__line-bar').css('width', linePers + '%');

				fillPers = num * 100.0 / sum; // процент заливки

				$(this).find('.analityc-line__line-fill').css('width', fillPers + '%');

				cnt++;
			})
		})
	}

	// Этап Закон о бюджете утвержденный - клик по диаграммам
	// stage - Раздел ('.analityc-widget-moscow-gov-program_structure-done' или '.analityc-widget-moscow-gov-program_structure-exec')
	function grMix(stage) {
		const GRAPHIC_MIX = $(stage + ' .analityc-mix');

		GRAPHIC_MIX.each(function() {
			var $this = $(this);

			$this.find('path').click(function() {
				
				var segmentId = ($(this).attr('id')).split('-')[2];

				if ($(this).hasClass('active')) {

					GRAPHIC_MIX.find('path').removeClass('active').removeClass('stroke-white');
					GRAPHIC_MIX.find('.analityc-mix__lines').removeClass('active');
					$this.removeClass('active');
					$this.siblings().show();

					$(stage + ' .analityc-widget-moscow-gov-program__structure-wrapper').removeClass('active');
				} else {
					if ($(document).width() >= 900) {
						$this.siblings('.analityc-mix').hide();
					}
					
					$this.addClass('active');

					GRAPHIC_MIX.find('path').removeClass('active').addClass('stroke-white');

					GRAPHIC_MIX.each(function() {
						var id = $(this).find('.segment-diagram').attr('id');
						$(this).find('path#' + id + '-' + segmentId).addClass('active').removeClass('stroke-white');
						console.log($(this).find('path#' + id + '-' + segmentId))
					});

					GRAPHIC_MIX.find('.analityc-mix__lines').removeClass('active');
					if (segmentId == '0')
						GRAPHIC_MIX.find('.analityc-mix__lines_social-gp').addClass('active');
					else if (segmentId == '1')
						GRAPHIC_MIX.find('.analityc-mix__lines_other-gp').addClass('active');

					$(stage).find('.graphic__data').removeClass('graphic__data_active');
					$(stage).find('.graphic__data[data-year="' + $this.index() + '"]').addClass('graphic__data_active');
					$(stage + ' .analityc-widget-moscow-gov-program__structure-wrapper').addClass('active');
				}

				positionValues();
			})
		})
	}





		grMix('.analityc-widget-moscow-gov-program_structure-done');
		grMix('.analityc-widget-moscow-gov-program_structure-exec');
		grChanges();
		grLinePopup(); 
  // переключение по селектам
  $('.moscow-gov-program .analityc-widget_moscow-gov-program .analityc-control-group select').on('change', function () {
    changeContent('select');
    grChanges();
    grLinePopup();

    if ($('.analityc-js-line').length) 
	  	grJsLine($('.analityc-js-line__wrapper'), $('.analityc-js-line__line_outer.analityc-js-line__line_active'));

  });
  
  // переключение по кнопкам график/таблица
  $(".moscow-gov-program .analityc-widget_moscow-gov-program .analityc-control-button").on("click", function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    changeContent('button', $(this));
    grLinePopup();

    if ($('.analityc-js-line').length) 
	  	grJsLine($('.analityc-js-line__wrapper'), $('.analityc-js-line__line_outer.analityc-js-line__line_active'));
    
    if ($(window).width() <= 900) {
      var target = $('.analityc-widget-sources.active').length ? $('.analityc-widget-sources.active') : $('.analityc-table.active'),
          targetOffset = target.offset().top - 100;
      $('html, body').animate({scrollTop: targetOffset}, 1000);
    }
  });
  
  // переключение по свитчеру гп/структура
  $(".moscow-gov-program .analityc-widget_moscow-gov-program .analityc-control-switcher_large a").on("click", function(e) {
    changeContent('switcher', $(this));
    grChanges();
    grLinePopup();
  });
  
  // переключение по свитчеру подпрограммы/виды расходов
  $(".moscow-gov-program .analityc-widget_moscow-gov-program .analityc-control-switcher_sub a").on("click", function(e) {
    changeContent('switcher', $(this));
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
          activeSwitcher = $('.analityc-control-switcher_large a.active, .analityc-control-switcher_sub a.active'),
          typeVal = activeButton.data('type'),
          catVal = activeSwitcher.data('category');
    } else if (typeofchange == 'button') {
      var typeVal = el.data('type'),
          activeSwitcher = $('.analityc-control-switcher_large a.active, .analityc-control-switcher_sub a.active'),
          catVal = activeSwitcher.data('category');
    } else {
      var activeButton = $('.analityc-control-button.active'),
          typeVal = activeButton.data('type'),
          catVal = el.data('category');
    }
    
    graphics.removeClass('active');
    table.removeClass('active');
    controls.removeClass('active');
    
    if (typeVal == 'graphics') {
      block = graphics;
    } else {
      block = table;
    }
    
    changeBlock(block, stageVal, catVal);
    changeControl(controls, stageVal, levelVal, typeVal);
    
    positionValues();
    $(document).trigger('contentChanged');
  }
  
  function changeBlock(el, stageVal, catVal) {
    el.each(function(){
      var stage = $(this).data('stage'),
          category = $(this).data('category');
      if ((stage == 'all' || stage.match(stageVal)) && (category == 'all' || category.match(catVal))) {
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
