import $ from 'jquery';

export default () => {
const LABEL = $('.checkbox');

  LABEL.each( function (e) {
    const EL = $(this);
    const ACTIVECLASS = 'checkbox_active';
    EL.find('.checkbox__control').on('change', function() {
      if (this.checked) {
        EL.addClass(ACTIVECLASS);
      } else {
        EL.removeClass(ACTIVECLASS);
      }
    });
  })
}
