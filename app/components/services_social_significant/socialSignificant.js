import $ from 'jquery';

export default () => {

	const TABLINK = $('.significant .button-light');
	const SEARCH = $('.significant__search');

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
      SEARCH.show();
    })
  })

  const TABS = $('.significant .tabs__tab');
  const LISTLINK = $('.significant-list__row-title');
  LISTLINK.each(function() {
  	$(this).click(function(e) {
  		e.preventDefault();
  		SEARCH.hide();
  		TABS.each(function() {
  			if ($(this).data('tab-target') == 'significantThree')
  				$(this).addClass('active');
  			else
  				$(this).removeClass('active');
  		})
  	})
  })

  const BACKBTN = $('.significant-about__back');
  BACKBTN.click(function() {
  	const ACTIVE_CLASS = 'button-light--fill';
		TABLINK.removeClass(ACTIVE_CLASS);
		$('.significant .button-light[data-tab-target="significantOne"]').addClass(ACTIVE_CLASS);
		$('.significant .tabs__tab[data-tab="significantThree"]').hide();
		SEARCH.show();
		$('.significant .tabs__tab[data-tab="significantOne"]').show();
  })
}