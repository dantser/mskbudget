import $ from 'jquery';

export default () => {
  
  $(document).ready(function(){
    
    function checkFavorCount() {
      var favorCount = $('.profile__favorite .favor-list__item').length;
      favorCount = favorCount / $('.profile__favorite .favor-list__list').length;
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
    
    $('.profile_edit .profile__field .text-field__change-field').on('click', function(){
      if ($(this).parents('.profile__field_pass').length > 0) {
        $('.profile__field_pass').removeClass('disabled');
      } else {
        $(this).parents('.profile__field').removeClass('disabled');
      }
    });

  });
  
}