import $ from 'jquery';

export default() => {
	// const PARAMS = $('.analityc-widget_params');
	const SWITCHER = $('.analityc-widget_params .analityc-control-switcher');
	const GRAPHICLINE = $('.analityc-widget_params .analityc-graphics-line-vertical');
	const GRAPHICCLASSIC = $('.analityc-widget_params .analityc-graphics-classic');
	const LEGEND = $('.analityc-widget_params .analityc-control-legend');

	const FRAME = $('.analityc-widget_params .analityc-control-frame_left');
	const frameStage = FRAME.children('.analityc-control-group').first().clone();
	const addStage = FRAME.children('.analityc-add-group');

	console.log(addStage);

	SWITCHER.on('click', 'a', function(e) {
		e.preventDefault();

		SWITCHER.children('a').each(function(id, item) {
			$(item).removeClass('active');
		});

		$(this).addClass('active');

		if ($(this).attr('data-type') == 'line') {
			GRAPHICLINE.show();
			GRAPHICCLASSIC.hide();
			LEGEND.children('.legend__item_green').show();
		}
		if ($(this).attr('data-type') == 'classic') {
			GRAPHICCLASSIC.show();
			GRAPHICLINE.hide();
			LEGEND.children('.legend__item_green').hide();
		}
	});

	addStage.on('click', function(e) {
		e.preventDefault();
		frameStage.clone().insertBefore(addStage);
	});

	FRAME.on('click', '.analityc-remove-group', function(e) {
		e.preventDefault();
		if (FRAME.children('.analityc-control-group').length > 1) {
			$(this).parent('.analityc-control-group').remove();
		}
	});
}