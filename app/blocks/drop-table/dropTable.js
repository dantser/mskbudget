import $ from 'jquery';

export default () => {
  
  if ($('.drop-table').length) {
    
    $('.drop-table__drop-content').hide();
    
    $('.drop-table__drop-text').click(function(e){
      e.preventDefault();
      if ($(this).parents('.drop-table__row').hasClass('active')) {
        $(this).parents('.drop-table__row').removeClass('active');
        $(this).parents('.drop-table__row').siblings().removeClass('inactive');
        $(this).parent().siblings('.drop-table__drop-content').slideUp();
      } else {
        $(this).parents('.drop-table__row').siblings().not('.drop-table__row_head').addClass('inactive').removeClass('active');
        $(this).parents('.drop-table__row').siblings().find('.drop-table__drop-content').slideUp();
        $(this).parents('.drop-table__row').removeClass('inactive').addClass('active');
        $(this).parent().siblings('.drop-table__drop-content').slideDown();
      }
    });
    
  }
  
}