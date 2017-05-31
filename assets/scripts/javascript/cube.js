(function() {

	$(document).ready(function() {

			var winW = $(window).width(),
			sideQt;

			$('.cube').each(function() {

				var _ = $(this);
				sideQt = _.find('.cube__side').length;

				//_.find('.cube__side:eq(0)').addClass('cube__side_current');

				_.find('.cube__side:eq('+ (sideQt-1) +')').addClass('cube__side_left');
				_.find('.cube__side:eq(1)').addClass('cube__side_right');

			});
			
			$('.cube').swipe({
				swipe: function(event, direction, distance, duration, fingerCount) {
					if (direction == "left") {
						cubeChange('left', $(this));
					} else if (direction == "right") {
						cubeChange('right', $(this));
					}
				},
				excludedElements: '',
				threshold: 121,
			});

			$('.cube__arrow_prev').click(function() {
				cubeChange('left', $(this).closest('.cube'));
			});
			$('.cube__arrow_next').click(function() {
				cubeChange('right', $(this).closest('.cube'));
			});

			$(document).keydown(function(e) {
				if(!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {

					if (e.keyCode === 37) {

						cubeChange('right', $('.slick-current .cube'));

					}  else if (e.keyCode === 39) {

						cubeChange('left', $('.slick-current .cube'));

					}

				}
			});


		var cubeAn = false;
		 
		function cubeChange(dir, _) {

			if( !cubeAn ){

				cubeAn = true;

				var current = _.find('.cube__side_current'),
				next;

				if(dir == 'left'){

					next =  (current.next('.cube__side').length > 0) ? current.next('.cube__side') : _.find('.cube__side:eq(0)');

					current.addClass('cube__side_left cube__side_animate').removeClass('cube__side_current');
					next.addClass('cube__side_current cube__side_animate');
					
				}else if(dir == 'right'){

					next =  (current.prev('.cube__side').length > 0) ? current.prev('.cube__side') : _.find('.cube__side:eq('+ (sideQt-1) +')');
 
					current.addClass('cube__side_right cube__side_animate').removeClass('cube__side_current');
					next.addClass('cube__side_current cube__side_animate');

				}

				setTimeout(function() {

					_.find('.cube__side').removeClass('cube__side_animate cube__side_left cube__side_right');

					var active = _.find('.cube__side_current');
					var Prev = (active.prev('.cube__side').length > 0) ? active.prev('.cube__side') : _.find('.cube__side:eq('+ (sideQt-1) +')');
					var Next = (active.next('.cube__side').length > 0) ? active.next('.cube__side') : _.find('.cube__side:eq(0)');
					
					Prev.addClass('cube__side_left');
					Next.addClass('cube__side_right');

					cubeAn = false;

				}, 1500); 

			}

		}


	});

})();