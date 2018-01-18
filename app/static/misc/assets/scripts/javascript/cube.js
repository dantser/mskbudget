(function() {

	$(document).ready(function() {
      
      var browser = {};
      browser.ie = /msie/.test(navigator.userAgent.toLowerCase());
      browser.ie11 = /rv:11\.0/.test(navigator.userAgent.toLowerCase());
  
      if (!browser.ie && !browser.ie11) {

			var winW = $(window).width(),
			sideQt;

			$('.cube').each(function() {

				var _ = $(this);
				sideQt = _.find('.cube__side').length;
				if (sideQt == 1) {
					_.find('.cube__arrow').hide();
				}

				//_.find('.cube__side:eq(0)').addClass('cube__side_current');

				//_.find('.cube__side:eq('+ (sideQt-1) +')').addClass('cube__side_left');
				//_.find('.cube__side:eq(1)').addClass('cube__side_right');

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
		
		function cubeClasses(dir, _) {
			var active = _.find('.cube__side_current');
			if (dir == 'left') {
				var Prev = (active.prev('.cube__side').length > 0) ? active.prev('.cube__side') : _.find('.cube__side:eq('+ (sideQt-1) +')');
				Prev.addClass('cube__side_left');
			} else if (dir == 'right') {
				var Next = (active.next('.cube__side').length > 0) ? active.next('.cube__side') : _.find('.cube__side:eq(0)');
				Next.addClass('cube__side_right');
			}
		}


		var cubeAn = false;
		 
		function cubeChange(dir, _) {

			if( !cubeAn ){

				cubeAn = true;

				var current = _.find('.cube__side_current'),
				next;

				if(dir == 'left'){
					
					var active = _.find('.cube__side_current');
					var Nextside = (active.next('.cube__side').length > 0) ? active.next('.cube__side') : _.find('.cube__side:eq(0)');
					Nextside.addClass('cube__side_right');
					

					setTimeout(function(){
						next =  (current.next('.cube__side').length > 0) ? current.next('.cube__side') : _.find('.cube__side:eq(0)');
	
						current.addClass('cube__side_left cube__side_animate').removeClass('cube__side_current');
						next.addClass('cube__side_current cube__side_animate');
					}, 1);
					
				}else if(dir == 'right'){
					
					var active = _.find('.cube__side_current');
					var Prevside = (active.prev('.cube__side').length > 0) ? active.prev('.cube__side') : _.find('.cube__side:eq('+ (sideQt-1) +')');
					Prevside.addClass('cube__side_left');

					setTimeout(function(){
						next =  (current.prev('.cube__side').length > 0) ? current.prev('.cube__side') : _.find('.cube__side:eq('+ (sideQt-1) +')');
 
						current.addClass('cube__side_right cube__side_animate').removeClass('cube__side_current');
						next.addClass('cube__side_current cube__side_animate');
					}, 1);

				}

				setTimeout(function() {

					_.find('.cube__side').removeClass('cube__side_animate cube__side_left cube__side_right');

					var active = _.find('.cube__side_current');
					var Prev = (active.prev('.cube__side').length > 0) ? active.prev('.cube__side') : _.find('.cube__side:eq('+ (sideQt-1) +')');
					var Next = (active.next('.cube__side').length > 0) ? active.next('.cube__side') : _.find('.cube__side:eq(0)');
					
					//Prev.addClass('cube__side_left');
					//Next.addClass('cube__side_right');

					cubeAn = false;

				}, 1500); 

			}

		}
        
      }

	});

})();