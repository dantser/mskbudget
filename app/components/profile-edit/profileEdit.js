import $ from 'jquery';

export default () => {
  
  $(document).ready(function(){
    
    function checkFavorCount() {
      var favorCount = $('.profile__favorite .favor-list__item').length;
      $('.profile__favor-count span').text(favorCount);
    }
    
    if ($('.profile').length) {
      checkFavorCount();
      window.deleteLink = true;
    }
    
    $('.profile__favorite .favor-list__remove').on('click', function(e){
      e.preventDefault();
      deleteLink = $(this).parent().data('link');
    });
    
    $('.popup-delete-accept [data-delete]').on('click', function(e){
      e.preventDefault();
      var del = $(this).data('delete');
      if (del === 'yes') {
        $('.profile__favorite [data-link="'+deleteLink+'"]').remove();
        checkFavorCount();
      }
      $(".popup-window, #popup-wrapper").fadeOut(321);
    });
    
  });
  
}