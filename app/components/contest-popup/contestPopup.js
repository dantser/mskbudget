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
    $('.contest-popup__participant').first().clone(true).insertBefore('.contest-popup .js-button-addparticipant').find('.contest-popup__fio').val('');
    checkParticipantIndex();
    inputMasks(); // в add.js
  });  

  window.openConFormValidation = function() {
    $('.open-con .tabs__tab.active .contest-popup form').submit(function(e) {
      
      e.preventDefault();

      const form = $(this);
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
        }, 3000);
      }
    })
  }

  openConFormValidation();
  
  
  
  // Прикрепить файл
  function checkAttachments() {
    $('.contest-popup__attachments').each(function(){
      var attachment = $(this).find('.contest-popup__attachment, .contest-popup__attachment-field').not('.hidden');
      if (!attachment.length) {
        $(this).parent().addClass('contest-popup__err');
        $('.contest-popup__submit').addClass('disabled');
      }
    });
  }
  
  function addAttachment(field) {
    if (field) {
      var attachment = $('.contest-popup__attachment-field.hidden').first();
    } else {
      var attachment = $('.contest-popup__attachment.hidden').first();
    }
    attachment.clone(true).appendTo('.contest-popup__attachments').removeClass('hidden');
  }
  
  checkAttachments();
  
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
    $('.contest-popup__submit').removeClass('disabled');
  });
  
  $('.contest-popup__delete-icon').click(function(e){
    $(this).parent().remove();
    checkAttachments();
  });
}