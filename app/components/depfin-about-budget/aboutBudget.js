import $ from 'jquery';

export default () => {


	$(window).on('load resize', pageScale);

	$('.whatIsBudget-component, .whatIsBudget-expenditures__title-fake').click(function() {
		setTimeout(pageScale, 1);
	});

	$(".whatIsBudget-expenditures__title").click(function(){
		$(this).siblings().removeClass('_active');
	});

  // Custom scroll
  if ($('.depfin-about-budget').length)
    $('.whatIsBudget-publicDebt__inner').scrollbar();

	function pageScale() {
		if ($(window).width() < '640') {
			var maxWidth  = $('.js-resolution-320').width();
			var maxHeight = $('.js-resolution-320').height();

	    var $window = $(window);
	    var width = $window.width();
	    var height = $window.height();
	    var scale;

	    // early exit
	    if(width >= maxWidth && height >= maxHeight) {
	        // $('.js-resolution-320').css({'-webkit-transform': '', '-moz-transform': '', '-ms-transform': '', '-o-transform': '', 'transform': ''});
	        $('.js-resolution-320').attr('style', '-webkit-transform: ' + '' + '; -moz-transform: ' + '' + '; -ms-transform:' + '' + '; -o-transform:' + '' + '; transform:' + '' + ';');
	        $('.js-resolution-wrap').css({ width: '', height: '' });
	        return;
	    }

	    scale = width/maxWidth;

	    // $('.js-resolution-320').css({'-webkit-transform': 'scale(' + scale + ')', '-moz-transform': 'scale(' + scale + ')', '-ms-transform': 'scale(' + scale + ')', '-o-transform': 'scale(' + scale + ')', 'transform': 'scale(' + scale + ')'});
      $('.js-resolution-320').attr('style', '-webkit-transform: scale(' + scale + '); -moz-transform: scale(' + scale + '); -ms-transform: scale(' + scale + '); -o-transform:(' + scale + '); transform: scale(' + scale + ');');
	    $('.js-resolution-wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
		}
	}
}

// import $ from 'jquery';
//
// export default () => {
//   const DIVISIONS = $('.whatIsBudget-expenditures_divisions');
//   const TYPES = $('.whatIsBudget-expenditures_types');
//   const PROGRAMS = $('.whatIsBudget-expenditures_programs');
//   const CLASSIFY = $('.whatIsBudget-expenditures__classification');
//   const TITLE = $('.whatIsBudget-expenditures__titleWrapper');
//
//   if (TYPES.is(':visible')) {
//     CLASSIFY.css('transform', 'translateX(-29%)');
//   } else if (PROGRAMS.is(':visible')) {
//     CLASSIFY.css('transform', 'translateX(-55%)');
//     TITLE.css('transform', 'translateX(-55%)');
//   }
// }
