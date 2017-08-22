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
  
}