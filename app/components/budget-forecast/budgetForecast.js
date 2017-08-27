import $ from 'jquery';

export default () => {
  
  if ($('.budget-forecast').length) {
    
    if ($(window).width() <= 768) {
      $(window).scroll(function(){
        var scrollDistance = $(window).scrollTop() + $(window).height() / 2;
        var blockHeight = $('.analityc-table-forecast').outerHeight();
        var topArrowsDistance = $('.analityc-table-forecast').offset().top + 150;
        var bottomArrowsDistance = $('.analityc-table-forecast').offset().top + blockHeight - 150;
        if (scrollDistance >= topArrowsDistance && scrollDistance <= bottomArrowsDistance) {
          $('.budget-forecast__slide-arrows').addClass('fixed');
        } else {
          $('.budget-forecast__slide-arrows').removeClass('fixed');
        }
        if (scrollDistance >= bottomArrowsDistance) {
          $('.budget-forecast__slide-arrows').addClass('bottom');
        } else {
          $('.budget-forecast__slide-arrows').removeClass('bottom');
        }
      });
    }
    
  }
  
}