import $ from 'jquery';

export default () => {
  
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
  
  $('.profile__favorite .favor-list__remove').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var link = $(this).parent();
    var deletePopup = $(this).parents('.profile__favorite').next('.profile__delete-accept');
    deletePopup.fadeIn(250);
    
    deletePopup.find('[data-delete]').click(function(e){
      e.preventDefault();
      var del = $(this).data('delete');
      if (del === 'yes') {
        link.remove();
      }
      deletePopup.fadeOut(250);
    });
    
  });
  
  $('html').click(function(){
    $('.profile__delete-accept').fadeOut(250);
  });
  
}