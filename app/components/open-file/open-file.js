import $ from 'jquery';

export default () => {

	const ROWS = $('.open-file__row');
	const DESC_BTN = $('.open-file__row-description');
	const MORE_BTN = $('.open-file__show-more');
	const SORT = $('.open-file__sort-field');

	DESC_BTN.bind('click', function(e) {
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

	SORT.bind('click', function(e) {
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

	function scrollUp() {
    setTimeout(function() {
      $("html,body").animate({
        scrollTop: 0
      }, 350);
    }, 25);
	}

}