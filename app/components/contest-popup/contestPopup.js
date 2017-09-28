import $ from 'jquery';

export default () => {
  
  if ($('.contest-popup__participant').length) {
    checkParticipantIndex();
  }
  
  function checkParticipantIndex() {
    $('.contest-popup__participant').each(function(){
      var participantIndex = $(this).index() + 1;
      $(this).find('.contest-popup__js-participant-number').text(participantIndex);
    });
  }
  
  $('.contest-popup__close').click(function(e) {
    e.preventDefault();
    $('.open-con__popup').hide();
    $('.open-con__con').show();
  });
  
  $('.contest-popup__hide').click(function(e){
    e.preventDefault();
    $(this).parent().remove();
    checkParticipantIndex();
  });
  
  $('.contest-popup .js-button-addparticipant').click(function(e){
    e.preventDefault();
    $('.contest-popup__participant').first().clone(true).insertBefore('.contest-popup .js-button-addparticipant');
    checkParticipantIndex();
  });
  
  $('.contest-popup__delete-icon').click(function(e){
    $(this).parent().remove();
  });
  
}