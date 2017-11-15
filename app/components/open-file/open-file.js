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
	})

	$(document).on('click', '.open-file__link-about', function(e) {
		e.preventDefault();
		$('.open-file__content, .open-file__search-form').hide();
		$('.open-file__popup_about').show();
		scrollUp();
	})
	$(document).on('click', '.open-file__link-terms', function(e) {
		e.preventDefault();
		$('.open-file__content, .open-file__search-form').hide();
		$('.open-file__popup_terms').show();
		scrollUp();
	})
	$(document).on('click', '.open-file__get', function(e) {
		e.preventDefault();
		$('.open-file__content, .open-file__search-form').hide();
		$('.open-file__popup_request').show();
		scrollUp();
	})

	$(document).on('click', '.open-file__popup-close', function(e) {
		$('.open-file__popup').hide();
		$('.open-file__content, .open-file__search-form').show();
	})

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
				tablePos = TABLE.offset().top + TABLE.outerHeight() - 200;

	  if ($(document).width() <= 400) {
		  // плавающие стрелки
		  $(window).scroll(function() { 

			  var sT = $(document).scrollTop();

			  if (sT > arrPos && sT < tablePos)
			  	ARROWS.addClass(FLOATING)
			  else 
			  	ARROWS.removeClass(FLOATING);
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

      $('html, body').animate({
        scrollTop: $('#open-file__howto').offset().top - 200
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
	
	
	$('.open-file__row-title').each(function(){
      var el = this;
      var wordArray = el.innerHTML.split(' ');
      while(el.scrollHeight > el.offsetHeight) {
        wordArray.pop();
        el.innerHTML = wordArray.join(' ') + '...';
      }
	});
}