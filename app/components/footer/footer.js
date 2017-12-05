import $ from 'jquery';

export default () => {
  
  if ($(window).width() <= 1024) {
    var services = $('.footer__column_services'),
        targetCol = services.prev().prev();
    targetCol.before(services);
  }
  
}
