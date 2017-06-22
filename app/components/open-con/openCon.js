import $ from 'jquery';

export default () => {
  const TABLINK = $('.open-con .button-light');

  TABLINK.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.toggleClass(ACTIVE_CLASS);
    })
  })
}
