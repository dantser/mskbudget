import $ from 'jquery';

export default () => {
  const TABLINK = $('.lk-nav__item');

  TABLINK.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'lk-nav__item_active';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.toggleClass(ACTIVE_CLASS);
    })
  })
}
