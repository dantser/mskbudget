import $ from 'jquery';

export default () => {
  
  function checkFavorCount() {
    var favorCount = $('.profile__favorite .favor-list__item').length;
    $('.profile__favor-count span').text(favorCount);
  }
  
  $(document).ready(function(){
    if ($('.profile').length) {
      checkFavorCount();
    }
  });
  
  $('.profile_edit .profile__change').click(function(e){
    e.preventDefault();
    $(this).hide();
    $(this).next().show();
    $('.profile_edit .profile__field').removeClass('disabled');
  });
  
  $('.profile_edit .profile__submit, .profile_edit .profile__cancel').click(function(e){
    e.preventDefault();
    $('.profile_edit .profile__submit').hide();
    $('.profile_edit .profile__change').show();
    $('.profile_edit .profile__field').addClass('disabled');
  });
  
  $('.profile__favorite .favor-list__remove').on('click', function(e){
    e.preventDefault();
    var favorLink = $(this).parent().data('link');
    $('.popup-delete-accept').attr('data-link', favorLink);
  });
  
  $('.popup-delete-accept [data-delete]').on('click', function(e){
    e.preventDefault();
    var delLink = $(this).parents('.popup-delete-accept').data('link');
    var del = $(this).data('delete');
    if (del === 'yes') {
      $('.profile__favorite [data-link="'+delLink+'"]').remove();
      checkFavorCount();
    }
    $(".popup-window, #popup-wrapper").fadeOut(321);
  });
  
}