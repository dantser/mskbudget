import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const DIR = $('.doc-cards__card_dir');
  const TOP_BUTTON = $('.js-button-top');
  const NAV = $('.doc-cards__nav');

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

  TOP_BUTTON.on('click', (e)=> {
    e.preventDefault();
    NAV.hide();
    DIR.show();
  })
}
