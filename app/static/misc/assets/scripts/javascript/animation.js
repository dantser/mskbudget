;(function() {

	$(document).ready(function() {

		var winH = $(window).height();

		//hover animation
		/*$('.hov-an').mouseenter(function(e) {

			var _ = $(this),
			ofsT = _.offset().top,
			ofsL = _.offset().left,
			X = e.pageX,
			Y = e.pageY,
			wdt = _.width(),
			hgt = _.height();


			if( Y > (ofsT+2) && Y < (ofsT+hgt-2) ){

				if( X > (ofsL+wdt-5) ){
					
					_.addClass('hov-an_l');
				}else if(  X > (ofsL-5) ){
					
					_.addClass('hov-an_r');
					
				}

			}

			
			if( X > (ofsL+2) && X < (ofsL+wdt-2) ){

				if( Y > (ofsT+hgt-5) ){
					_.addClass('hov-an_t');
				}else if(  Y > (ofsT-5) ){
					_.addClass('hov-an_b');
				}

			}
			


		});

		
		$('.hov-an').mouseleave(function(e) {

			var _ = $(this),
			ofsT = _.offset().top,
			ofsL = _.offset().left,
			X = e.pageX,
			Y = e.pageY,
			wdt = _.width(),
			hgt = _.height();

			if( Y > (ofsT+2) && Y < (ofsT+hgt-2) ){
				
				if( X < (ofsL+5) ){
					_.addClass('hov-an_l0');
				}else{
					_.addClass('hov-an_r0');
				}
			}

			if( X > (ofsL+2) && X < (ofsL+wdt-2) ){
				
				if( Y < (ofsT+5) ){
					_.addClass('hov-an_b0');
				}else{
					_.addClass('hov-an_t0');
				}
			}
			
			setTimeout(function() {
				_.removeClass('hov-an_l0 hov-an_r0 hov-an_t0 hov-an_b0 hov-an_l hov-an_r hov-an_t hov-an_b');
			},500);


		});*/


		$('.guide').hover(function() {
			$(this).removeClass('guide_short');
		}, function() {
			$(this).addClass('guide_short');
		});


		

		function startAnimation(dom) {


			$('.slick-current .anim-left').each(function() {

				var _ = $(this);

				setTimeout( function() {
					_.addClass('anim-left_on');
				}, _.attr('data-delay') );

			});


			$('.slider_diagrams '+ dom +' .anim-value').each(function() {

				var _ = $(this);

				if( !_.hasClass('anim-value_off') ){

					_.html(0);

					var value = _.attr('data-value').split(',')[0];
					var Val = Math.abs(value);

					var delt = Math.round( value/75 );

					function anim() {

						var cur = +(_.html());

						if( Val > Math.abs(cur) ){

							cur = cur + delt;

							_.html(cur);

							setTimeout(function() { anim(); }, 1);

						}else{

							_.text( _.attr('data-value') ).addClass('anim-value_off');

						}
					}
					anim();
				}

			});

		}


		if( $('.sections_fs').length > 0 ){

			$('.sections_fs').on('afterChange', function(event, slick) {
				if( slick.options.sliderId == 'sections'){

					$('.slick-current .anim-fade-top').each(function() {

						$(this).addClass('anim-fade-top_on');

					});

					startAnimation('div[data-slick-index="0"]');
				}
			});

		} else {

			$(window).scroll(function() {

				var scr = $(this).scrollTop();

				if( $('.anim-fade-top').length > 0 ){

					$('.anim-fade-top').each(function() {
						if( scr > ($(this).offset().top - winH + 121) ){
							$(this).addClass('anim-fade-top_on');
						}	
					});

				}

			});

		}
		

		$('.slider_diagrams').on('afterChange', function(cube, id) {
			startAnimation('.slick-current');
		});


		$('.load-anim-fade').each(function() {

			var _ = $(this);

			setTimeout( function() {
				_.addClass('load-anim-fade_on')
			}, _.attr('data-delay') );

		});


		if($('.anim-fade-top').length > 0){

			$('.anim-fade-top').each(function() {
				if( $(this).offset().top < winH ) {
					$(this).addClass('anim-fade-top_on');
				}	
			});

		}
		


		$('.header').stop().animate({top: 0}, 800);


	});

})();