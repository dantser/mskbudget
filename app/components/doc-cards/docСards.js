import $ from 'jquery';

export default function docCards() {
  const DIR = $('.section-tabs__card_dir').parents('.owl-item');
  const TOP_BUTTON = $('.js-button-top');
  const NAV = $('.section-tabs__navigation');
  const FAVOR = $('.section-tabs__is-added');

  DIR.each( function () { // eslint-disable-line
    const EL = $(this);
    // const ACTIVE_CLASS = 'graphic__data_active';
    EL.on('click', (e) => {
      e.preventDefault();
      // EL.parent().siblings().removeClass(ACTIVE_CLASS);
      EL.hide();
      NAV.show();
    })
  })

  TOP_BUTTON.on('click', function(e) {
    e.preventDefault();
    NAV.hide();
    DIR.show();
  })

  FAVOR.each( function() {
    const EL = $(this);
    EL.on('click', (e)=> {
      e.preventDefault();
      EL.find('.favor').toggleClass('favor_added favor_stroke-color-blue');
    })
  })

  $('.document__star').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('document__star_cur');
  });
}
