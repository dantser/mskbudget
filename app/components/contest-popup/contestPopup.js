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
  

  $('.open-con .tabs__tab.active .contest-popup form').submit(function(e) {

    const form = $(this);
    const fieldset = form.find('.js-opencon-question');

    form.find('.contest-popup__err').removeClass('contest-popup__err');

    fieldset.each(function() {
      var fieldset = $(this);
      fieldset.find('.js-opencon-field').each(function() {
        var input = $(this).find('input');
        var label = $(this).find('label');

        if (fieldset.data('type') === 'text' && input.val() === '')
          label.addClass('contest-popup__err');

        if ((fieldset.data('type') === 'radio' || fieldset.data('type') === 'checkbox') && !fieldset.find('input:checked').length)
          fieldset.find('.contest-popup__option-title').addClass('contest-popup__err');

      })
    })

    if (form.find('.contest-popup__err').length > 0) {
      return false;
    }

  })

}