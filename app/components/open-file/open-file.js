import $ from 'jquery';

export default () => {

	$(document).ready(function() {
		const ROWS = $('.open-file__row');
		const DESC_BTN = $('.open-file__row-description');

		DESC_BTN.bind('click', function(e) {
			if (!$(e.target))
				ROWS.removeClass('open-file__row_active');
			$(e.target).parents('.open-file__row').toggleClass('open-file__row_active');
		})

		const MORE_BTN = $('.open-file__show-more');

		MORE_BTN.click(function(e) {
			e.preventDefault();
			ROWS.show();
		})

		const LINK_ABOUT = $('.open-file__link-about');
		const LINK_TERMS = $('.open-file__link-terms');
		const GET = $('.open-file__get');
		const POPUP_CLOSE = $('.open-file__popup-close');

		LINK_ABOUT.click(function(e) {
			e.preventDefault();
			$('.open-file__content, .open-file__search-form').hide();
			$('.open-file__popup_about').show();
		})
		LINK_TERMS.click(function(e) {
			e.preventDefault();
			$('.open-file__content, .open-file__search-form').hide();
			$('.open-file__popup_terms').show();
		})
		GET.click(function(e) {
			e.preventDefault();
			$('.open-file__content, .open-file__search-form').hide();
			$('.open-file__popup_request').show();
		})

		POPUP_CLOSE.click(function() {
			$('.open-file__popup').hide();
			$('.open-file__content, .open-file__search-form').show();
		})

		const SORT = $('.open-file__sort-field');

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
	})
}