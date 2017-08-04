import $ from 'jquery';

export default () => {
	$(document).ready(function(){

		var maxWidth  = $('.js-resolution-320').width();
		var maxHeight = $('.js-resolution-320').height();

		$(window).resize(function(evt) {
		    var $window = $(window);
		    var width = $window.width();
		    var height = $window.height();
		    var scale;

		    // early exit
		    if(width >= maxWidth && height >= maxHeight) {
		        $('js-resolution-320').css({'-webkit-transform': ''});
		        $('.sections').css({ width: '', height: '' });
		        return;
		    }
		    
		    scale = Math.min(width/maxWidth, height/maxHeight);
		    
		    $('js-resolution-320').css({'-webkit-transform': 'scale(' + scale + ')'});
		    $('.sections').css({ width: maxWidth * scale, height: maxHeight * scale });
		});
	})
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