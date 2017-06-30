import $ from 'jquery';

export default () => {
  const LINE = $('.analityc-js-line__left .analityc-js-line__line');
  const ACTIVE_CLASS = 'analityc-js-line__line_active';
  $('.analityc-js-line__line:eq(2)').addClass(ACTIVE_CLASS);

  LINE.each( function () { // eslint-disable-line
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.siblings().removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
    })
  })
}
