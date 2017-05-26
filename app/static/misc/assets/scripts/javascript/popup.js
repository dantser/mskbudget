$(document).ready(function() {

	$('.open-popup').click(function () {
		var popId = $(this).attr('href');
		$('.popup-window').fadeOut(321);
		$('#popup-wrapper').fadeIn(321);
		$(popId).fadeIn(321);
		return false; 
	});

	$('.close-popup, #mask').click(function () {
		$('.popup-window, #popup-wrapper').fadeOut(321);
		return false;
	});

});