import $ from 'jquery';
import 'jquery.scrollbar';

export default () => {
  const VMO = $('.services-VMO');
  const TABLINK = VMO.find('.services-VMO__tabs-control a');

  if(!VMO){
    return;
  };

  TABLINK.each(function () {
    $(this).on('click', function () {
      const $this = $(this);
      const ACTIVE_CLASS = 'active';
      $this.siblings().removeClass(ACTIVE_CLASS);
      $this.addClass(ACTIVE_CLASS);
    })
  });

  VMO.find('.services-VMO__table__wrapper').scrollbar();
}
