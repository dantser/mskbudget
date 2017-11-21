import $ from 'jquery';

export default () => {
  
  if ($('.contest-popup__participant').length) {
    checkParticipantIndex();
  }
  
  function checkParticipantIndex() {
    $(document).find('.contest-popup__participant').each(function(){
      var participantIndex = $(this).index() + 1;
      $(this).find('.contest-popup__js-participant-number').text(participantIndex);
    });
  }
  
  $(document).on('click', '.contest-popup__close', function(e) {
    e.preventDefault();
    $('.open-con__popup').hide();
    $('.open-con__con').show();
  });
  
  $(document).on('click', '.contest-popup__hide', function(e){
    e.preventDefault();
    $(this).parent().remove();
    checkParticipantIndex();
  });
  
  $(document).on('click', '.contest-popup .js-button-addparticipant', function(e){
    e.preventDefault();
    var participant = $(this).parents('.tabs__tab').find('.contest-popup__participant');
    participant.first().clone(true).insertBefore('.contest-popup .js-button-addparticipant').find('.contest-popup__fio').val('');
    checkParticipantIndex();
    inputMasks(); // в add.js
  });  

  window.openConFormValidation = function() {
    $(document).on('click', '.open-con .tabs__tab.active .contest-popup__submit', function(e) {
      
      e.preventDefault();

      const form = $(this).parents('.contest-popup__application');
      const fieldset = form.find('.js-opencon-question');
      const attfield = form.find('.contest-popup__attachment-field').not('.hidden');

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
      });
      
      attfield.each(function(){
        var input = $(this).find('input'),
            text = $(this).find('.contest-popup__attachment-text');
        if (input.val() == '') text.addClass('contest-popup__err');
      });

      if (form.find('.contest-popup__err').length > 0) {
        $('html, body').animate({
          scrollTop: $('#contest-page__howto').offset().top - 200
        });
        return false;
      } else {
        $('#popup-wrapper, .popup-success').fadeIn(321);
        setTimeout(function(){
          $('#popup-wrapper, .popup-success').fadeOut(321);
          form.submit();
        }, 3000);
      }
    })
  }

  openConFormValidation();
  
  
  
  // Прикрепить файл  
  function checkAttachments() {
    $(document).find('.open-con .tabs__tab.active .contest-popup__attachments').each(function(){
      var attachment = $(this).find('.contest-popup__attachment, .contest-popup__attachment-field').not('.hidden');
      if (!attachment.length) {
        $(this).parent().addClass('contest-popup__err');
        $('.open-con .tabs__tab.active .contest-popup__submit').addClass('disabled');
      }
    });
  }
  
  function addAttachment(field) {
    if (field) {
      var attachment = $('.open-con .tabs__tab.active .contest-popup__attachment-field.hidden').first();
    } else {
      var attachment = $('.open-con .tabs__tab.active .contest-popup__attachment.hidden').first();
    }
    attachment.clone(true).appendTo('.open-con .tabs__tab.active .contest-popup__attachments').removeClass('hidden');
  }
  
  $(document).on('click', '.contest-popup .js-button-attachment', function(){
    $(this).parents('.contest-popup__extra').removeClass('contest-popup__err');
    
    // код только для демонстрации вариантов
    var field;
    var random = Math.random();
    if (random > 0.5) {
      field = true;
    } else {
      field = false;
    }
    // код только для демонстрации вариантов
    
    addAttachment(field);
    $('.open-con .tabs__tab.active .contest-popup__submit').removeClass('disabled');
  });
  
  $(document).on('click', '.contest-popup__delete-icon', function(e){
    $(this).parent().remove();
    checkAttachments();
  });
  
  
  //
  $(document).on('click', '.open-con .js-button-proposal', function() {
    checkParticipantIndex();
    checkAttachments();
  });
  
  $(document).on('click', '.open-con__popup .button-light', function() {
    checkParticipantIndex();
    checkAttachments();
  });
}