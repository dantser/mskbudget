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
  console.log(GRAPHICDONE);
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
}
