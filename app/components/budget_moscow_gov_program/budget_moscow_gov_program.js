import $ from 'jquery';

export default () => {

	if ($(window).width() < 900) {
		var GR_MIX_SLIDER = new Swiper('.analityc-widget-moscow-gov-program_structure-done .swiper-container', {
      nextButton: '.analityc-graphics_round-next',
      prevButton: '.analityc-graphics_round-prev',
      slidesPerView: '1',
      centeredSlides: true,
      spaceBetween: 30,
      speed: 500,
      observer: true,
      observeParents: true
		});
	}

	const TABLINK = $('.moscow-gov-program .js-button');

	TABLINK.each( function () { // eslint-disable-line
		const EL = $(this);
		const ACTIVE_CLASS = 'graphic__data_active';
		const GR_MIX = $('.analityc-widget-moscow-gov-program_structure-done .analityc-mix');
		EL.on('click', (e) => {
			e.preventDefault();
			EL.parent().siblings().removeClass(ACTIVE_CLASS);
			EL.parent().addClass(ACTIVE_CLASS);

			var year = parseInt(EL.parent().data('year'), 10);

			GR_MIX.removeClass('active');
			GR_MIX.find('path, .analityc-mix__lines').removeClass('active');
			GR_MIX.find('path').addClass('stroke-white')
			
			GR_MIX.eq(year).find('path').eq(0).removeClass('stroke-white');
			GR_MIX.eq(year).find('path').eq(0).addClass('active');
			GR_MIX.eq(year).addClass('active');
			GR_MIX.eq(year).find('.analityc-mix__lines_social-gp').addClass('active');
			GR_MIX.siblings().hide();
			GR_MIX.eq(year).show();

		})
	})

	const STAGE = $(".analityc-widget_moscow-gov-program .analityc-control-group._stage .analityc-select");

	const SWITCHER = $('.analityc-widget_moscow-gov-program .analityc-control-switcher_large');

	const GRAPHICDONE = $('.analityc-widget-moscow-gov-program_done');
	const GRAPHICCHANGES = $('.analityc-widget-moscow-gov-program_changes');
	const GRAPHICEXEC = $('.analityc-widget-moscow-gov-program_exec');

	const GRAPHICSTRUCTURE_DONE = $('.analityc-widget-moscow-gov-program_structure-done');
	const GRAPHICSTRUCTURE_EXEC = $('.analityc-widget-moscow-gov-program_structure-exec');

	SWITCHER.on('click', 'a', function(e) {
		e.preventDefault();

		SWITCHER.children('a').each(function(id, item) {
			$(item).removeClass('active');
		});

		$(this).addClass('active');

		if ($(this).attr('data-type') == 'gp') {
			if (STAGE.val() === "Закон о бюджете утвержденный")
				GRAPHICDONE.addClass('_active');
			else if (STAGE.val() === "Закон об исполнении")
				GRAPHICEXEC.addClass('_active');
			$('.analityc-widget-moscow-gov-program_structure').removeClass('_active');
		}
		if ($(this).attr('data-type') == 'structure') {
			GRAPHICDONE.removeClass('_active');
			GRAPHICEXEC.removeClass('_active');

			if (STAGE.val() === "Закон о бюджете утвержденный")
				GRAPHICSTRUCTURE_DONE.addClass('_active');
			else if (STAGE.val() === "Закон об исполнении")
				GRAPHICSTRUCTURE_EXEC.addClass('_active');
		}

		positionValues();
	});

	const SWITCHER_SUB = $('.analityc-widget_moscow-gov-program .analityc-control-switcher_sub');
	const UNITS = $('.analityc-widget_moscow-gov-program .analityc-control-switcher_units');
	const GRAPHICEXPENSES = $('.analityc-widget-moscow-gov-program_expenses');
	const GRAPHICEXPENSES_DONE = $('.analityc-widget-moscow-gov-program_expenses-done');
	const GRAPHICEXPENSES_CHANGES = $('.analityc-widget-moscow-gov-program_expenses-changes');
	const GRAPHICEXPENSES_EXEC = $('.analityc-widget-moscow-gov-program_expenses-exec');

	SWITCHER_SUB.on('click', 'a', function(e) {
		e.preventDefault();

		SWITCHER_SUB.children('a').each(function(id, item) {
			$(item).removeClass('active');
		});

		$(this).addClass('active');

		if ($(this).attr('data-type') == 'sub-gp') {
			GRAPHICEXPENSES.removeClass('_active');

			if (STAGE.val() === "Закон о бюджете утвержденный")
				GRAPHICDONE.addClass('_active');
			else if (STAGE.val() === "Закон о внесении изменений") {
				GRAPHICCHANGES.addClass('_active');
				UNITS.removeClass('active');
			}
			else if (STAGE.val() === "Закон об исполнении")
				GRAPHICEXEC.addClass('_active');
			else if (STAGE.val() === "Исполнение на дату")
				UNITS.removeClass('active');
		}
		if ($(this).attr('data-type') == 'expenses') {
			$('.analityc-widget_moscow-gov-program .analityc-widget-sources').removeClass('_active');
			
			if (STAGE.val() === "Закон о бюджете утвержденный")
				GRAPHICEXPENSES_DONE.addClass('_active');
			else if (STAGE.val() === "Закон о внесении изменений")
				GRAPHICEXPENSES_CHANGES.addClass('_active');
			else if (STAGE.val() === "Закон об исполнении")
				GRAPHICEXPENSES_EXEC.addClass('_active');

			UNITS.addClass('active');
		}

		positionValues();
	});


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
			else
				var sum = num + barNum;

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


	// Этап Закон о бюджете утвержденный - клик по диаграммам
	const GRAPHIC_MIX = $('.analityc-widget-moscow-gov-program_structure .analityc-mix');

	GRAPHIC_MIX.each(function() {
		var $this = $(this);
		var segmentLines = $this.find('.analityc-mix__lines');

		$this.find('path').click(function() {
			
			var segmentId = ($(this).attr('id')).split('-')[2];

			if ($(this).hasClass('active')) {

				$(this).removeClass('active');
				GRAPHIC_MIX.find('path').removeClass('stroke-white');
				segmentLines.removeClass('active');
				$this.removeClass('active');
				$this.siblings().show();

				$('.analityc-widget-moscow-gov-program__structure-wrapper').removeClass('active');
			} else {

				$this.siblings().hide();
				$this.addClass('active');
				$(this).siblings('path').removeClass('active');
				$(this).addClass('active');
				$(this).removeClass('stroke-white');
				$(this).siblings('path').addClass('stroke-white');

				segmentLines.removeClass('active');
				if (segmentId == '0')
					$this.find('.analityc-mix__lines_social-gp').addClass('active');
				else if (segmentId == '1')
					$this.find('.analityc-mix__lines_other-gp').addClass('active');

				$('.analityc-widget-moscow-gov-program__structure-wrapper').addClass('active');
			}


		})
	})

	// График analityc-line - попапы для коротких линий (вызов при отрисовке)
	function grLinePopup() {
	  
	  const GR_LINE = $('.analityc-widget_moscow-gov-program .analityc-line_line');

	  GR_LINE.each(function() {
		  var LINE_BAR = $(this).find('.analityc-line__line');

		  LINE_BAR.each(function() {
		  	var line = $(this).find('.analityc-line__line-wrap');
		  	var fillPers = $(this).find('.analityc-line__line-fill');
		  	var isLong = fillPers.outerWidth() > 30 ? true : false;
		  	var val = $(this).find('.analityc-line__line-value');
		  	var abs = $(this).find('.analityc-line__line-abs');

		  	val.show();
		  	if (!isLong) {
		  		val.hide();
			  	line.hover(function() {
			  			abs.show();
			  	}, function() {
							abs.hide();
			  	})
		  	}
		  })

	  })
	}

	$(document).ready(function(){ 
		grLinePopup(); 
	});
	$(document).on('change', '.analityc-widget_moscow-gov-program .analityc-control-group._stage .analityc-select', grLinePopup);
}
