import $ from 'jquery';

export default () => {

	const ROWS = $('.open-file__row');
	const DESC_BTN = $('.open-file__row-description');
	const MORE_BTN = $('.open-file__show-more');
	const SORT = $('.open-file__sort-field');

	//DESC_BTN.bind('click', function(e) {
	$(document).on('click', '.open-file__row-description', function(e) {
		if (!$(e.target))
			ROWS.removeClass('open-file__row_active');
		$(e.target).parents('.open-file__row').toggleClass('open-file__row_active');
	})

	MORE_BTN.click(function(e) {
		e.preventDefault();
		ROWS.show();
		dotText();
		var arrPos = ARROWS.offset().top / 2,
			tablePos = TABLE.offset().top + TABLE.outerHeight() - 400;
		floatingArrows(arrPos, tablePos);
	})

	$(document).on('click', '.open-file__link-about', function(e) {
		e.preventDefault();
		//$('.open-file__content, .open-file__search-form').hide();
		//$('.open-file__popup_about').show();
		//scrollUp();
		$('html, body').css('overflow', 'hidden');
		$('.open-file__popups, .open-file__popup_about').show().scrollTop(0);
		if ($(window).width() <= 767) {
			$('.open-file').css('z-index', 'auto');
		}
	})
	$(document).on('click', '.open-file__link-terms', function(e) {
		e.preventDefault();
		//$('.open-file__content, .open-file__search-form').hide();
		//$('.open-file__popup_terms').show();
		//scrollUp();
		$('html, body').css('overflow', 'hidden');
		$('.open-file__popups, .open-file__popup_terms').show().scrollTop(0);
		if ($(window).width() <= 767) {
			$('.open-file').css('z-index', 'auto');
		}
	})
	$(document).on('click', '.open-file__get', function(e) {
		e.preventDefault();
		//$('.open-file__content, .open-file__search-form').hide();
		//$('.open-file__popup_request').show();
		//scrollUp();
		$('html, body').css('overflow', 'hidden');
		$('.open-file__popups, .open-file__popup_request').show().scrollTop(0);
		if ($(window).width() <= 767) {
			$('.open-file').css('z-index', 'auto');
		}
	})

	$(document).on('click', '.open-file__popups, .open-file__popup-close', function(e) {
		$('html, body').css('overflow', '');
		$('.open-file__popups, .open-file__popup').hide();
		if ($(window).width() <= 767) {
			$('.open-file').css('z-index', '');
		}
		//$('.open-file__content, .open-file__search-form').show();
	})
	
	$(document).on('click', '.open-file__popup', function(e) {
		e.stopPropagation();
	});

	//SORT.bind('click', function(e) {
	$(document).on('click', '.open-file__sort-field', function(e) {
		e.preventDefault();
		$(e.target).toggleClass(function() {
			if ($(this).hasClass('open-file__sort-field_dec')) {
				$(this).removeClass('open-file__sort-field_dec');
				return 'open-file__sort-field_asc';
			}
			else {
				$(this).removeClass('open-file__sort-field_asc');
				return 'open-file__sort-field_dec';
			}
		})
	})

	const ARROWS = $('.open-file__slide-arrows'),
		  FLOATING = 'open-file__slide-arrows_floating',
		  TABLE = $('.open-file__content .analityc-table');

	if (!ARROWS.length) {
		return;
	} else {
		var arrPos = ARROWS.offset().top / 2,
			tablePos = TABLE.offset().top + TABLE.outerHeight() - 400;
		floatingArrows(arrPos, tablePos);
	}
	
	function floatingArrows(arrPos, tablePos) {
		if ($(document).width() <= 400) {
			// плавающие стрелки
			$(window).scroll(function() {
				var sT = $(document).scrollTop();
				if (sT > arrPos && sT < tablePos) {
					ARROWS.addClass(FLOATING)
				} else {
					ARROWS.removeClass(FLOATING);
				}
			});
		}
	}
	

	if ($('.open-file__popup_request form').length) {

		$('.open-file__popup_request form').submit(function(e) {

			const form = $(this);
			const fieldset = form.find('fieldset');

			form.find('.open-file__err').removeClass('open-file__err');

			fieldset.each(function() {
				var fieldset = $(this);
				fieldset.find('.open-file__field').each(function() {
					var input = $(this).find('input');
					var label = $(this).find('label');

					if (fieldset.data('type') === 'text' && input.val() === '')
						label.addClass('open-file__err');

					if ((fieldset.data('type') === 'radio' || fieldset.data('type') === 'checkbox') && !fieldset.find('input:checked').length)
						fieldset.find('legend').addClass('open-file__err');

				})
			})

      //$('html, body').animate({
      //  scrollTop: $('#open-file__howto').offset().top - 200
      //});
          
      $('.open-file__popups').animate({
        scrollTop: 0
      });

			if (form.find('.open-file__err').length > 0) {
				return false;
			}

		})
	}

	function scrollUp() {
    setTimeout(function() {
      $("html,body").animate({
        scrollTop: 0
      }, 350);
    }, 25);
	}
	
	function dotText() {
      $('.open-file__row-title').each(function(){
        var textSpan = $(this).find('span'),
            wordArray = textSpan.text().split(' '),
            newText = '';
        
        for (var i = 0; i < wordArray.length; i++) {
          
          console.log(textSpan.text(newText+wordArray[i]).height());
          console.log($(this).height());
          
          if (textSpan.text(newText+wordArray[i]).height() <= $(this).height()) {
            newText += ' '+wordArray[i];
          } else if (textSpan.text(newText+'...').height() <= $(this).height()){
            newText += '...';
            i = wordArray.length;
          } else {
            newText = newText.substring(0, newText.lastIndexOf(' ')) + '...';
            i = wordArray.length;
          }
          
          textSpan.text(newText);
        }
	 });
    }
	
	dotText();
}