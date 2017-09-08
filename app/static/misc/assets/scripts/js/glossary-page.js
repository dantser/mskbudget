
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};


$(document).ready(function() {

	letter('#letters-slider');

	var activeLetter = "а",
	    activeLetters = visibleLettersCountGlobal; //$(document).find('.letter__line-item_active').length;

	// Определяем активную букву
	$('.letter__slider').scroll(function(e){
		var scrollPos = $(this).scrollLeft(),
		    leftMargin = parseFloat( $('.letter__track').css('margin-left') );

		$('.letter__item').each(function(){
			var currPos = $(this).offset().left - leftMargin + 50;

			if (currPos > 0) {
				activeLetter = $(this).find('.letter__char').text().toLowerCase();
				return false;
			}
		});

	});

	// Клик по активной букве
	function selectLetter() {
		activeLetters = visibleLettersCountGlobal; //$(document).find('.letter__line-item_active').length;

		$('.letter__btn').each(function(){
			if ( $(this).text().toLowerCase() === activeLetter ) {
				$(document).find('.letter__line-item').removeClass('letter__line-item_active').removeClass('letter__line-item_current');
				$(this).parents('.letter__line-item').addClass('letter__line-item_active').addClass('letter__line-item_current');

				for (var i = 1; i < activeLetters; i++) {
        	$(this).parents('.letter__line').find('.letter__line-item_active').next().addClass('letter__line-item_active');
    		}

				return false;
			}
		});
	}

	$(".letter__slider").scroll(function(){
    selectLetter();
	});

});
