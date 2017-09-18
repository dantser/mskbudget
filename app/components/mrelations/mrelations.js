import $ from 'jquery';

export default () => {
	$('.mrelations__switcher-text_link').click(function(e) {
		$(this).addClass('active').siblings().removeClass('active');
	})

  const GR_LINE = $('.mrelations-transfer .analityc-graphics_line');
  console.log(GR_LINE)

  GR_LINE.each(function() {
	  var LINE_BAR = $(this).find('.analityc-graphics__line');

	  LINE_BAR.each(function() {
	  	var line = $(this).find('.analityc-graphics__line-total');
	  	var lineBar = $(this).find('.analityc-graphics__line-bar');
	  	var size = $(this).find('.analityc-graphics__line-fill').css('width');
	  	var isLong = line.outerWidth() > 60 ? true : false;
	  	var val = $(this).find('.analityc-graphics__line-bar-value');
	  	var abs = $(this).find('.analityc-graphics__line-abs');

	  	abs.css('left', 'calc(' + size + ' + ' + '5px');

	  	val.show();
	  	if (!isLong) {
	  		val.hide();
		  	lineBar.hover(function() {
		  			abs.show();
		  	}, function() {
						abs.hide();
		  	})
	  	}
	  })

  })
}