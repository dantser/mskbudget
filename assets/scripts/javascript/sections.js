;(function(w) {

	$(document).ready(function() {

		var winW = $(w).width(),
		winH = $(w).height();

		if($('.sections_fs').length > 0){

			$('.sections_fs').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				draggable: false,
				vertical: true,
				swipe: false,
				sliderId: 'sections',
			});

			var elem = $('.wrapper')[0];

			if(elem != null){
				if (elem.addEventListener) {
					if ('onwheel' in document) {
						elem.addEventListener("wheel", onWheel, {passive: true});
					}
					else if ('onmousewheel' in document) {
						elem.addEventListener("mousewheel", onWheel, {passive: true});
					}
					else {
						elem.addEventListener("MozMousePixelScroll", onWheel, {passive: true});
					}
				}
				else {
					elem.attachEvent("onmousewheel", onWheel);
				}
			}

			var anim = false;

			var browser = {};
			browser.ie11 = /rv:11\.0/.test(navigator.userAgent.toLowerCase());
			browser.safari = /safari/.test(navigator.userAgent.toLowerCase()) && !/chrome/.test(navigator.userAgent.toLowerCase());


			function anFin() {
				anim = false;
			}

			function onWheel(e) {
				e = e || window.event;
				var delta = e.deltaY || e.detail || e.wheelDelta;

				if(browser.ie11 || browser.safari){
					delta = delta * -1;
				}


				if(delta > 0 && anim == false){

					anim = true;

					$('.sections_fs').slick('slickNext');

					$('.sections_fs').on('afterChange', function(){

						setTimeout(function() { anFin(); }, 500);

					});

				}else if(delta < 0 && anim == false){

					anim = true;

					$('.sections_fs').slick('slickPrev');

					$('.sections_fs').on('afterChange', function(){

						setTimeout(function() { anFin(); }, 500);

					});

				}
			}


	// $('.sections_fs').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	//console.log();

	// 	if( winW > 700 && slick.options.sliderId == 'sections'){

	// 		if( nextSlide > 0 ){
	// 			$('.header').addClass('header_short');
	// 			$('.guide').addClass('guide_short');
	// 		}else{
	// 			$('.header').removeClass('header_short');
	// 			$('.guide').removeClass('guide_short');
	// 		}
	// 	}

	// });

	$('.sections_fs').swipe({
		swipe: function(event, direction) {

			if (direction == "up") {

				this.slick('slickNext');

			} else if (direction == "down") {

				this.slick('slickPrev');

			}

		},
		excludedElements: '',
		threshold: 121,
	});



    $(document).keydown(function(e) {
    	   if(!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {


    	   	if (e.keyCode === 37) {

    	   		$('.slick-current .slider').slick('slickPrev');

    	   	} else if (e.keyCode === 38) {

    	   		$('.sections_fs').slick('slickPrev');

    	   	}  else if (e.keyCode === 39) {

    	   		$('.slick-current .slider').slick('slickNext');

    	   	} else if (e.keyCode === 40) {

    	   		$('.sections_fs').slick('slickNext');

    	   	}

        }
    });

}




	if ($('.slider, #services-slider').length > 0) {

		$('.slider').each(function() {

			var _ = $(this);

			if (winW > 1180 && _.attr('data-sides-1100')) {

				for (var i = 0; i < _.attr('data-sides-1100'); i++) {
					_.append('<div class="cube__side_new cube__side_new-'+ (i+1) +'" />');
				}

				_.parent().find('.cube-brick').each(function(i) {

					_.find('.cube__side_new-'+ $(this).attr('data-brick-1100')).append($(this).html());

				});
				_.parent().find('.cube-brick').remove();

				_.find('.grid-brick-3').wrapAll('<div class="grid grid_col-3"></div>');
				_.find('.grid-brick-2').wrapAll('<div class="grid grid_col-2"></div>');

				_.find('.cube__side_new').each(function() {
					var itemOb = $(this).find('.tile__item').wrapAll('<div class="tile"></div>');
				});

			} else if (winW > 900 && _.attr('data-sides-900')) {

				for (var i = 0; i < _.attr('data-sides-900'); i++) {
					_.append('<div class="cube__side_new cube__side_new-'+ (i+1) +'" />');
				}

				_.parent().find('.cube-brick').each(function(i) {

					_.find('.cube__side_new-'+ $(this).attr('data-brick-900')).append($(this).html());

				});
				_.parent().find('.cube-brick').remove();

				_.find('.grid-brick-3').wrapAll('<div class="grid grid_col-3"></div>');
				_.find('.grid-brick-2').wrapAll('<div class="grid grid_col-2"></div>');

				_.find('.cube__side_new').each(function() {
					var itemOb = $(this).find('.tile__item').wrapAll('<div class="tile"></div>');
				});

			} else if (winW > 700 && _.attr('data-sides-700')){

				for (var i = 0; i < _.attr('data-sides-700'); i++) {
					_.append('<div class="cube__side_new cube__side_new-'+ (i+1) +'" />');
				}

				_.parent().find('.cube-brick').each(function(i) {

					_.find('.cube__side_new-'+ $(this).attr('data-brick-700')).append($(this).html());

				});

				_.parent().find('.cube-brick').remove();

				_.find('.cube__side_new').each(function() {
					var itemOb = $(this).find('.tile__item').wrapAll('<div class="tile"></div>');
				});

			}

		});

	//slider
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		draggable: false,
		swipe: false,
		sliderId: 'one-section',
	});

	$('.slider').on('afterChange', function(event, slick, currentSlide) {
		if (winW < 900 && $(this).hasClass('slider_diagrams')) {
			switch(currentSlide){
				case 0:
				case 1:
				case 2:
				$('#diagrams-ahead-1').show();
				$('#diagrams-ahead-2').hide();
				break;

				case 3:
				case 4:
				$('#diagrams-ahead-2').show();
				$('#diagrams-ahead-1').hide();
				break;
			}
		}
	});

	$('.slider').swipe({
		swipe: function(event, direction) {
			if (direction == "left") {
				this.slick('slickNext');
			} else if (direction == "right") {
				this.slick('slickPrev');
			}
		},
		excludedElements: '',
		threshold: 121,

	});

}



});

})(window);
