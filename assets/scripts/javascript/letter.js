var letter;

(function() {

	function Letter(element, settings) {

		var _ = this;

		_.defaults = {
			box: $(element),
		}

		_.opt = $.extend({}, _.defaults, settings);

		_.line = _.opt.box.find('.letter__line');
		_.slider = _.opt.box.find('.letter__slider');
		_.track = _.opt.box.find('.letter__track');
		_.item = _.slider.find('.letter__item');

		_.sliderWidth = _.slider.width();
		_.itemWidth = _.item.innerWidth();

		_.Init();
		_.Handler();

	};

	Letter.prototype.getParam = function() {
		
		var _ = this;

		_.offsetLeft =	+_.track.attr('data-offset-left');

		if ((_.offsetLeft - _.sliderWidth * 0.05) > 0) {
			_.visibleItemsCount = Math.floor( (_.sliderWidth - _.startLeft) / _.itemWidth );
			_.itemFirst = 0;

		} else {
			_.visibleItemsCount = Math.floor( (_.sliderWidth - _.sliderWidth * 0.1) / _.itemWidth );
			_.itemFirst =  Math.round( (Math.abs(_.offsetLeft) + _.sliderWidth * 0.1)  / _.itemWidth );
		}

		if(_.offsetLeft > 0){
			_.itemAligned = Math.round( ( _.startLeft - _.offsetLeft )  / _.itemWidth );
		} else {
			_.itemAligned = Math.round( (Math.abs(_.offsetLeft) + _.startLeft )  / _.itemWidth );
			
		}
		
	};

	Letter.prototype.Line = function(init) {
		
		var _ = this, init;

		if (init) {

			var item = _.line.find('.letter__line-item');
			_.itemL = item.length;

			for (var i = 0; i < _.itemL; i++) {

				$(item[i]).attr('data-index', i);

				if (i == 0) {
					$(item[i]).addClass('letter__line-item_first');
				} else if (i == (_.itemL-1)) {
					$(item[i]).addClass('letter__line-item_last');
				}

			}

		}
		
		_.getParam();

		_.line.find('.letter__line-item').removeClass('letter__line-item_active letter__line-item_current');

		for (var i = _.itemFirst + _.visibleItemsCount - 1; i >= _.itemFirst; i--) {
			_.line.find('.letter__line-item[data-index="'+ i +'"]').addClass('letter__line-item_active');
		}

		_.line.find('.letter__line-item[data-index="'+ _.itemAligned +'"]').addClass('letter__line-item_current');

	};

	Letter.prototype.setCss = function(position) {
		
		var _ = this;

		_.track.css('left', position).attr('data-offset-left', position);

	};
	

	Letter.prototype.Handler = function() {

		var _ = this, index, position, change = false, int;

		function handler(direct) {

			if (direct == 'left') {

				if (_.itemAligned > 0) {
					index = _.itemAligned - 1;
					change = true;
				}

			} else if(direct == 'right') {
				
				if ((_.itemL-1) > _.itemAligned) {
					index = _.itemAligned + 1;
					change = true;
				}
				
			}

			if (change) {

				change = false;

				if (index == 0) {
					position = _.startLeft;
				} else {
					position = -(_.itemWidth * index) + _.startLeft;
				}
				_.setCss(position);
				_.Line();

			}

		}

		_.line.find('.letter__btn').click(function() {
			
			var index = $(this).parent().attr('data-index');

			if (index == 0) {
				position = _.startLeft;
			} else {
				position = -(_.itemWidth * index) + _.startLeft; 
			}

			_.setCss(position);
			_.Line();

		});

		_.line.find('.arrow').click(function() {
			

			var direct = $(this).attr('data-arrow');

			if (direct == 'left') {
					
				handler('left');

			} else if(direct == 'right') {
				
				handler('right');
				
			}

		});

		_.slider.swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == 'right') {

					handler('left');
					
				} else if(direction == 'left') {

					handler('right');

				}
			},
         triggerOnTouchEnd:false,
         excludedElements: '',
			threshold: 0,
		});

		_.slider.find('.letter__hover').mouseenter(function() {

			var direct = $(this).attr('data-direct');

			int = setInterval(function() {

				if (direct == 'left') {
					
					handler('left');

				} else if(direct == 'right') {

					handler('right');

				}

			}, 321);

		});

		_.slider.find('.letter__hover').mouseleave(function() {
			clearInterval(int);
		});

	};

	Letter.prototype.Init = function() {

		var _ = this;

		_.itemCount = _.slider.find('.letter__item').length;
		_.startLeft = ($(window).width() - _.line.width()) / 2;
		_.track.width(_.itemWidth * _.itemCount).css('left', _.startLeft).attr('data-offset-left', _.startLeft);

		_.Line(true);

	};

	letter = function(element, settings) {
		new Letter(element, settings);
	};

}());