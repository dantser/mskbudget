import $ from 'jquery';

export default () => {
  
  if ($('.drop-table').length) {
    
    $('.drop-table__drop-content').hide();
    
    $('body').on('click','.drop-table__drop-text', function(e){
      e.preventDefault();
	  var $parentRow = $(this).parents('.drop-table__row');
	  if ($parentRow.find('.drop-table__value').text() == '') {
		  return false;
	  } else {  	  
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
	  }

    });
    
  }
  
}