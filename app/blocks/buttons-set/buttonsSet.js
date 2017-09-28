import $ from 'jquery';

export default () => {
    
  $(document).on('click', '.buttons-set .button-light', function(e){
    e.preventDefault();
    $(this).parents('.buttons-set').find('.button-light').removeClass('button-light--fill');
    $(this).addClass('button-light--fill');
  });
  
}