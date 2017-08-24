import $ from 'jquery';

export default () => {
  
  if ($('.budget-classify').length) {
    
    $('.budget-classify .button-light').on('click', function(e){
      e.preventDefault();
      var filter = $(this).data('filter');
      
      $(this).parents('.buttons-set').find('.button-light').removeClass('button-light--fill');
      $(this).addClass('button-light--fill');
      
      $(this).parents('.dropdown__content').find('.code-block').removeClass('active');
      $(this).parents('.dropdown__content').find('.code-block[data-filter="'+filter+'"]').addClass('active');
    });
    
    $('.code-desc__returnbutton').on('click', function(e){
      e.preventDefault();
      var blockDistance = $(this).parents('.code-block').offset().top - $('.header').outerHeight() - 20;
      $('html,body').animate({scrollTop:blockDistance}, 1200);
    });
    
  }
  
}