import $ from 'jquery';

export default () => {
  const TABLINK = $('.moscow-gov-program .js-button');

  TABLINK.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'graphic__data_active';
    EL.on('click', (e) => {
      e.preventDefault();
      EL.parent().siblings().removeClass(ACTIVE_CLASS);
      EL.parent().addClass(ACTIVE_CLASS);
    })
  })

  //switcher
  const SWITCHER = $('.analityc-widget_moscow-gov-program .analityc-control-switcher_large');
	const GRAPHICDONE = $('.analityc-widget_moscow-gov-program .analityc-widget-moscow-gov-program_done');
	const GRAPHICSTRUCTURE = $('.analityc-widget_moscow-gov-program .analityc-widget-moscow-gov-program_structure');
  SWITCHER.on('click', 'a', function(e) {
		e.preventDefault();

		SWITCHER.children('a').each(function(id, item) {
			$(item).removeClass('active');
		});

		$(this).addClass('active');

		if ($(this).attr('data-type') == 'gp') {
			GRAPHICDONE.addClass('_active');
			GRAPHICSTRUCTURE.removeClass('_active');
		}
		if ($(this).attr('data-type') == 'structure') {
			GRAPHICDONE.removeClass('_active');
			GRAPHICSTRUCTURE.addClass('_active');
		}
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
  const GRAPHIC_STR_TAB = GRAPHIC_STR.find('.tabs__tab');
  
  GRAPHIC_STR_TAB.each(function() {
    const LINE_STR = $(this).find('.analityc-mix__line');

    LINE_STR.each(function() {
      var linePers = parseFloat(($(this).find('.analityc-mix__js-grmix-val').text()).replace(',', '.'));
      $(this).find('.analityc-mix__line-bar').css('width', linePers + '%');
    })

  })

  // Формирование графика Закон о внесении изменений, Закон об исполнении

  const GRAPHIC_CHANGES = $('.analityc-widget-moscow-gov-program_changes, .analityc-widget-moscow-gov-program_exec');
  const GRAPHIC_CHANGES_TAB = GRAPHIC_CHANGES.find('.tabs__tab');

  GRAPHIC_CHANGES_TAB.each(function() {
    const LINE_STR = $(this).find('.analityc-line__line');
    var full = 0;
    var cnt = 0;

    LINE_STR.each(function() {
      var linePers = 0.0;
      var fillPers = 0.0;
      var num = parseFloat(($(this).find('.analityc-line__line-value').text()).replace(',', '.'));
      var barNum = parseFloat(($(this).find('.analityc-line__line-bar-value').text()).replace(',', '.'));

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
}
