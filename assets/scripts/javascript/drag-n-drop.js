;(function() {
	$(document).ready(function() {

		var winW = $(window).width();


console.log('1');
setTimeout(function() {

	var dragIndex, prevDropIndex,
	slidesCount = $('#services-slider').find('.slick-slide').not('.slick-cloned').length;

	$('#services-slider').find('.slick-slide').not('.slick-cloned').each(function(i) {
		$(this).addClass('slick-original').addClass('slick-original-'+ (i+1))
		.attr('data-original-index', (i+1));
	});

	$( '.js_dropable' ).each(function(i) {
		$(this).addClass('js_dropable-'+ i).attr('data-index', i).attr('data-index-drag', i);
	});

	$( '.js_draggable' ).each(function(i) {
		$(this).css('width', $(this).innerWidth()).addClass('js_draggable-'+ i)
		.attr('data-index', i)
		.attr('data-index-drop', i);
		console.log('draggable');
	});


	function moveVidgets(dropObj) {
		console.log('move');

		var incestor = dropObj.closest('.slick-slide');

		var dropIndex = dropObj.attr('data-index'),
		dragInDropIndex = dropObj.attr('data-index-drag'),
		dropOffsetsLeft = dropObj.offset().left;


		var prevObj = incestor.find('.js_dropable-'+ prevDropIndex);
		var prevOffsetsLeft = prevObj.offset().left;


		var dragInDropObj = incestor.find('.js_draggable-'+ dragInDropIndex),
		dragInDropOffsetLeft = incestor.find('.js_dropable-'+ dragInDropIndex).offset().left;

		dragInDropObj.css('left', prevOffsetsLeft - dragInDropOffsetLeft + 7)
		.attr('data-index-drop', prevDropIndex);


		dropObj.attr('data-index-drag', dragIndex);
		prevObj.attr('data-index-drag', dragInDropIndex);


		incestor.find('.js_draggable-'+ dragIndex).attr('data-index-drop', dropIndex);

		prevDropIndex = dropIndex;

	}

	function dropVidgets(dragObj) {

		var incestor = dragObj.closest('.slick-slide'),
		dropIndex = dragObj.attr('data-index-drop'),
		dropObj = incestor.find('.js_dropable-'+ dropIndex);

		var dropOffsetsLeft = dropObj.offset().left,
		dragElemOffsetLeft = incestor.find('.js_dropable-'+ dragIndex).offset().left;

		dragObj.css('left', dropOffsetsLeft - dragElemOffsetLeft + 7);

	}

	function replaceVidgets(direct,replXObj) {
		console.log('replaceVidgets');


		var replX = replXObj.html(),
		curSlideIndex = +replXObj.closest('.slick-slide').attr('data-original-index');

		if (direct == 'next') {
			if(slidesCount > curSlideIndex){
				var nextSlideIndex = curSlideIndex + 1;
			} else {
				var nextSlideIndex = 1;
			}

			var replYInd = $('#services-slider').find('.slick-original-'+ nextSlideIndex).find('.js_dropable').attr('data-index-drag');
		} else if (direct == 'prev') {
			if(curSlideIndex > 1){
				var nextSlideIndex = curSlideIndex - 1;
			} else {
				var nextSlideIndex = slidesCount;
			}

			var replYInd = $('#services-slider').find('.slick-original-'+ nextSlideIndex).find('.js_dropable').last().attr('data-index-drag');
		}


		var replYObj = $('.js_draggable-'+ replYInd),
		replY = replYObj.html();

		replXObj.html(replY);

		replYObj.html(replX);

	}

	//Drop
	$( ".js_dropable" ).droppable({
		over: function( event, ui ) {
			moveVidgets($(this));
		}
	});

	//Drag
	var j = true;
	$( ".js_draggable" ).draggable({
		//revert: "invalid",
		start: function() {

			$('#services-slider').swipe("disable");
			dragIndex = $(this).attr('data-index');
			prevDropIndex = $(this).attr('data-index-drop');
			console.log('start');
		},
		stop: function() {
			$('#services-slider').swipe("enable");
			console.log('stop');
			dropVidgets($(this));

			for (var i = 0; i < slidesCount; i++) {
				$(this).closest('.slick-track').find('.cube__side_new-'+ (i+1) +'.slick-cloned')
				.html( $(this).closest('.slick-track').find('.cube__side_new-'+ (i+1)).not('.slick-cloned').html() );
			}

			j = true;
		},
		drag: function(e) {
			var X = e.pageX;
			if (X > (winW-75)) {
				if (j) {
					replaceVidgets('next',$(this));
					$('#services-slider').slick('slickNext');
				}
				j = false;
			} else if (X < 75) {
				if (j) {
					replaceVidgets('prev',$(this));
					$('#services-slider').slick('slickPrev');
				}
				j = false;
			}
		}
	});

},1500);




	});
}());
