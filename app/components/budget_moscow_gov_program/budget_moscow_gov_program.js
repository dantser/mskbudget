import $ from 'jquery';

export default () => {
  const TABLINK = $('.moscow-gov-program .js-button');

  TABLINK.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'graphic__data_active';
    EL.on('click', (e) => {
      e.preventDefault();
      EL.parent().siblings().removeClass(ACTIVE_CLASS);
      EL.parent().addClass(ACTIVE_CLASS);
    })
  })
}
