$(document).ready(function() {

	var winW = $(window).width();

	// function closeSearchForm(b) {
	// 	if( winW < 700 || $('.header').hasClass('header_mob') ){

	// 		$('.header__search-form').animate({right: '50%'}, 321);
	// 		$('.header__link-for-blind').animate({left: '20px'},321);
	// 		$('.header__login').animate({right: '20px'},321);

	// 	} else if (winW > 900 || $('.header').hasClass('header_short')){
	// 		$('.header__menu').fadeIn(321);
	// 	} else {
	// 		$('.header__social').fadeIn(321);
	// 	}

	// 		$('.search-form__form').fadeOut(321);
	// 		$('.search-form__btn').removeClass('search-form__btn_act');
	// 		$('.search-form__text').blur();
	// 		$('.search-form__btn').fadeIn(321);
	// }


	// $('.search-form__btn').click(function() {

	// 	var _ = $(this);

	// 	if( !_.hasClass('search-form__btn_act') ){

	// 		if( winW < 700 || $('.header').hasClass('header_mob') ){

	// 			$('.header__search-form').animate({right: '28px'}, 321);
	// 			$('.header__link-for-blind').animate({left: '-31px'},321);
	// 			$('.header__login').animate({right: '-31px'},321);

	// 		}else if (winW > 900 || $('.header').hasClass('header_short')){
	// 			$('.header__menu').fadeOut(321);
	// 		} else {
	// 			$('.header__social').fadeOut(321);
	// 		}
	// 		_.addClass('search-form__btn_act');

	// 		$('.search-form__form').fadeIn(321, function() { $('.search-form__text').focus(); });
	// 		$('.search-form__submit').fadeOut(321);


	// 	}else{
	// 		closeSearchForm();
	// 	}

	// });

	$('.sections_fs').on('beforeChange', function(){
		closeSearchForm();
		$('input').blur();
		$('.ui-datepicker').hide();
		$('.jq-datepicker').blur().removeClass('hasDatepicker');
		initDp();
	});

	$(document).on('click', function(e) {
		if (!$(e.target).closest(".search-form").length) {
			closeSearchForm();
		}
	});

	$('.search-form__text').keyup(function() {
		if( $(this).val().length > 0 ){
			$('.search-form__submit').fadeIn(321);
			$('.search-form__btn').fadeOut(321);
		} else {
			$('.search-form__submit').fadeOut(321);
			$('.search-form__btn').fadeIn(321);
		}
	});

//Form select
$('.form__select-btn').click(function () {

	var _ = $(this);

	if(!_.hasClass('form__select-btn_act')){

		$('.form__select-drop').slideUp(321);
		$('.form__select-btn').removeClass('form__select-btn_act');

		_.addClass('form__select-btn_act').next().slideDown(321);

	}
	else{

		_.next().slideUp(321, function () {
			_.removeClass('form__select-btn_act');
		});

	}

	return false;
});

/*$('.form__select-a').click(function () {

	var _ = $(this);
	var parent = _.parent().parent().parent();

	parent.find('.form__select-btn').text( _.text() );
	parent.find('.form__select-input').val( _.text() );

	$('.form__select-drop').slideUp(321);
	$('.form__select-btn').removeClass('form__select-btn_act');

	return false;
});*/

$(document).on('click', function(e) {
	if (!$(e.target).closest(".form__select").length) {
		$('.form__select-drop').slideUp(321);
		$('.form__select-btn').removeClass('form__select-btn_act');
	}
});


});
