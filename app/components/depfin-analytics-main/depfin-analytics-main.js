import $ from 'jquery';

export default() => {
	// const PARAMS = $('.analityc-widget_params');
	const SWITCHER = $('.analityc-widget_params .analityc-control-switcher');
	const GRAPHICLINE = $('.analityc-widget_params .analityc-graphics-line-vertical_params');
	const GRAPHICLINE_SLIDER = $('.analityc-widget_params .analityc-graphics-line-vertical_slider');
	const GRAPHICLINE_ARRNEXT = $('.analityc-widget_params .analityc-graphics-line-vertical__next');
	const GRAPHICLINE_ARRPREV = $('.analityc-widget_params .analityc-graphics-line-vertical__prev');
	const GRAPHICCLASSIC = $('.analityc-widget_params .analityc-table._gr-classic');
	const LEGEND = $('.analityc-widget_params .analityc-control-legend');

	const FRAME = $('.analityc-widget_params .analityc-control-frame_left');
	const frameStage = FRAME.children('.analityc-control-group').first().clone();
	const addStage = FRAME.children('.analityc-add-group');

	SWITCHER.on('click', 'a', function(e) {
		e.preventDefault();

		SWITCHER.children('a').each(function(id, item) {
			$(item).removeClass('active');
		});

		$(this).addClass('active');

		//$('.analityc-widget_params .analityc-graphics-line-vertical').hide();
		$('.analityc-widget_params .analityc-graphics').removeClass('active');

		if ($(this).attr('data-type') == 'line') {
			//if ($(document).width() <= 900) {
			//	GRAPHICLINE_SLIDER.show();
			//	GRAPHICLINE_ARRNEXT.removeClass('disable');
			//	GRAPHICLINE_ARRPREV.removeClass('disable');
			//}
			//else {
			//	GRAPHICLINE.show();
			//}
			//GRAPHICCLASSIC.hide();
			$('.analityc-widget_params .analityc-graphics[data-type="line"]').addClass('active');
			LEGEND.children('.legend__item_green').show();
		}
		if ($(this).attr('data-type') == 'classic') {
			//GRAPHICLINE_ARRNEXT.addClass('disable');
			//GRAPHICLINE_ARRPREV.addClass('disable');
			//GRAPHICCLASSIC.show();
			//grClassic();
			$('.analityc-widget_params .analityc-graphics[data-type="classic"]').addClass('active');
			LEGEND.children('.legend__item_green').hide();
		}
		grLineVertParams();
		grClassic();
        hideTableSubcol();
        changeTableWidth();

  	// обновление графиков при отрисовке (массив window.grLineVert)
    setTimeout(function() {
      grLineVert.forEach(function(item, i, arr) {
        item.update();
      })
    }, 100)

	});

	window.grClassic = function() {
		
		if ($('.analityc-graphics-classic').length == 0)
			return

		const gr = $('.analityc-graphics-classic');
		const wrapper = gr.find('.analityc-graphics-classic__wrapper');
		const clipper = gr.find('.analityc-graphics-classic__clipper');
		const lines = gr.find('.analityc-graphics-classic__part_lines');
		const linesH = lines.height();
		const items = lines.find('.analityc-graphics-classic__item:visible');	
		var itemsCnt = items.length;
		
		var visibleLineItem = gr.find('.analityc-graphics-classic__part_lines .analityc-graphics-classic__item:visible');
		var visibleCaptItem = gr.find('.analityc-graphics-classic__part_captions .analityc-graphics-classic__item:visible');
		var wrapperWidth = 204 * visibleLineItem.length;
		
		gr.css('min-width', wrapperWidth);
		
		if (gr.outerWidth() > gr.parent().width()) {
			gr.parents('.analityc-graphics-container').removeClass('no-arrows');
      	} else {
        	gr.parents('.analityc-graphics-container').addClass('no-arrows');
		}
		
		var lineW = wrapper.width() / (itemsCnt - 1.0);
		// высшая/низшая точка графика (для вычисления высоты графика)
		var grHigherPoint = gr.find('.analityc-graphics-classic__item-wrapper').eq(0); 
		var grLowerPoint = gr.find('.analityc-graphics-classic__item-wrapper').eq(0);
		
		visibleLineItem.removeClass('analityc-graphics-classic__item_first analityc-graphics-classic__item_last analityc-graphics-classic__item_single');
		visibleCaptItem.removeClass('analityc-graphics-classic__item_first analityc-graphics-classic__item_last analityc-graphics-classic__item_single');
		
		if (visibleCaptItem.length > 1 && visibleLineItem.length > 1) {
			visibleLineItem.first().addClass('analityc-graphics-classic__item_first');
			visibleCaptItem.first().addClass('analityc-graphics-classic__item_first');
			visibleLineItem.last().addClass('analityc-graphics-classic__item_last');
			visibleCaptItem.last().addClass('analityc-graphics-classic__item_last');
		} else {
			visibleLineItem.addClass('analityc-graphics-classic__item_single');
			visibleCaptItem.addClass('analityc-graphics-classic__item_single');
		}
		
		items.each(function() {
			var itemNext = $(this).nextAll(':visible').first(),
					val1next = itemNext.find('.analityc-graphics-classic__item-wrapper_income').data('val'),
					val2next = itemNext.find('.analityc-graphics-classic__item-wrapper_expenses').data('val');

			var item1 = $(this).find('.analityc-graphics-classic__item-wrapper_income'),
					item2 = $(this).find('.analityc-graphics-classic__item-wrapper_expenses'),
					val1 = item1.data('val'),
					val2 = item2.data('val'),
					line1 = item1.find('.analityc-graphics-classic__line'),
					line2 = item2.find('.analityc-graphics-classic__line'),
					cathetV1 = Math.abs(val1 - val1next) * linesH / 100.0,
					cathetV2 = Math.abs(val2 - val2next) * linesH / 100.0,
					hypotenuse1 = Math.sqrt(lineW*lineW + cathetV1*cathetV1),
					hypotenuse2 = Math.sqrt(lineW*lineW + cathetV2*cathetV2),
					angle1 = 180/Math.PI*Math.atan(cathetV1/lineW),
					angle2 = 180/Math.PI*Math.atan(cathetV2/lineW),
					d = 0.005;	// + величина для сглаживания стыков
			
			var docW = $(document).width();
			
			if (docW <= 1140 && docW > 900) 
				d = 0.006;
			else if(docW <= 900 && docW > 640) 
				d = 0.008;
			else if(docW <= 640) 
				d = 0.009;

			if (val1 < val1next) angle1 *= -1.0;
				
			if (val2 < val2next) angle2 *= -1.0;
				

			item1.height(val1 + '%');
			item2.height(val2 + '%');

			line1.width(hypotenuse1 + hypotenuse1 * d);
			line2.width(hypotenuse2 + hypotenuse2 * d);

			line1.css('transform', 'rotate('+angle1+'deg)');
			line2.css('transform', 'rotate('+angle2+'deg)');
			
			item1.find('.analityc-graphics-classic__val').removeClass('analityc-graphics-classic__val_pos analityc-graphics-classic__val_neg');
			item2.find('.analityc-graphics-classic__val').removeClass('analityc-graphics-classic__val_pos analityc-graphics-classic__val_neg');
			
			if (val1 > val2) {
				item1.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_pos');
				item2.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_neg');
			}	else if (val1 < val2) {
				item1.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_neg');
				item2.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_pos');
			} else {
				if (val1next > val2next)
					item1.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_pos');
				else
					item1.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_neg');
				
				if (val2next > val1next)
					item2.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_pos');
				else
					item2.find('.analityc-graphics-classic__val').addClass('analityc-graphics-classic__val_neg');
			}
			
			if (val1 > grHigherPoint.data('val')) grHigherPoint = item1;
			if (val2 > grHigherPoint.data('val')) grHigherPoint = item2;
			if (val1 < grLowerPoint.data('val')) grLowerPoint = item1;
			if (val2 < grLowerPoint.data('val')) grLowerPoint = item2;

		})

		if (grHigherPoint.position().top < 0)
			gr.css('padding-top', Math.abs(grHigherPoint.position().top) + 80 + 'px');

		clipper.css('height', Math.abs(grLowerPoint.position().top) + 80 + 'px');

	}

	$(window).on('load resize', grClassic);
}
