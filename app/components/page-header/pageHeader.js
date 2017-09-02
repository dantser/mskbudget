import $ from 'jquery';

export default () => {

  $(document).ready(function(){
    $('.page-header .favor').on('click', function(){
      $(this).toggleClass('active');
    });

    // if ($(window).width() > 1024 ) {
		// 	$(".page-header .d-si__icons_item").hover(function() {
		// 	  $(this).find('.page-header__panel').addClass('page-header__panel_active');
		// 	}, function(){
		// 	  $(this).find('.page-header__panel').removeClass('page-header__panel_active');
		// 	});
    // }
    // } else {
			// $(".page-header .d-si__icons_item").on('', function(e) {
			// 	$(this).siblings().find('.page-header__panel').removeClass('page-header__panel_active');
		  // 	$(this).find('.page-header__panel').toggleClass('page-header__panel_active');
		  // 	e.stopPropagation();
			// });

      //$(".page-header .d-si__icons_item").on('click', function(e) {
      //  $(this).siblings().find('.page-header__panel').removeClass('page-header__panel_active');
      //  $(this).find('.page-header__panel').toggleClass('page-header__panel_active');
      //  e.stopPropagation();
      //});
    //
      //$('html').click(function() {
      //  $('.page-header__panel').removeClass('page-header__panel_active');
      //});
    // }

  });

}
