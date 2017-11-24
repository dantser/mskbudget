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
          $(this).find('.error').remove();

          if (fieldset.data('type') === 'text' && input.val() === '')
            label.addClass('contest-popup__err');
          
          if (fieldset.data('type') === 'text' && input.is('[name="pi-email"], [name="pj-email"]')) {
            
            var email = /^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([A-Za-z\.]{2,6})$/.test(input.val()); // с поддержкой иерархических доменов: user@mail.ru.com
            var email = /^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_-]+)\.([A-Za-z]{2,6})$/.test(input.val()); // без поддержки иерархических доменов: user@mail.ru
            
            if (!email) {
              input.after('<div class="error"><i></i><span>Проверьте правильность e-mail</span></div>');
              label.addClass('contest-popup__err');
            }
          }

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
  
  $(document).on('keypress keyup', '.js-opencon-field', function() {
    $(this).find('.error').remove();
  });

  openConFormValidation();


  
  // Прикрепить файл  
  function checkAttachments() {
    $(document).find('.open-con .tabs__tab.active .contest-popup__attachments').each(function(){
      var attachment = $(this).find('.contest-popup__attachment').not('.hidden');
      if (!attachment.length) {
        $(this).parent().addClass('contest-popup__err');
        $('.open-con .tabs__tab.active .contest-popup__submit').addClass('disabled');
      }
    });
  }
  
  $(document).on('click', '.contest-popup .js-button-attachment', function(){
    var extra = $(this).parents('.contest-popup__extra'),
        buttons = extra.find('.contest-popup__attachment-buttons'),
        visibleAttachment = extra.find('.contest-popup__attachment:visible'),
        noteErr = extra.find('.contest-popup__attachment-note_err');
    
    extra.removeClass('contest-popup__err');
    visibleAttachment.remove();
    noteErr.hide();
    buttons.show();
    $('.open-con .tabs__tab.active .contest-popup__submit').addClass('disabled');
  });
  
  $(document).on('click', '.contest-popup .js-button-attfile', function(){
    var extra = $(this).parents('.contest-popup__extra'),
        buttons = extra.find('.contest-popup__attachment-buttons'),
        attachment = $('.open-con .tabs__tab.active .contest-popup__attachment_doc.hidden').first(),
        noteErr = extra.find('.contest-popup__attachment-note_err'),
        fileLength,
        fileSize;
    
    buttons.hide();
    
    //код только для демонстрации
    extra.attr('data-file', Math.floor(Math.random()*3+1));
    extra.attr('data-size', Math.random()*40);
    //код только для демонстрации
    
    fileLength = extra.attr('data-file');
    for (var i = 1; i <= fileLength; i++) {
      attachment.clone(true).appendTo('.open-con .tabs__tab.active .contest-popup__attachments').removeClass('hidden');
    }
    
    fileSize = extra.attr('data-size');
    if (fileSize > 20) {
      noteErr.show();
    } else {
      $('.open-con .tabs__tab.active .contest-popup__submit').removeClass('disabled');
    }
  });
  
  $(document).on('click', '.contest-popup .js-button-attlink', function(){
    var extra = $(this).parents('.contest-popup__extra'),
        buttons = extra.find('.contest-popup__attachment-buttons'),
        attachment = $('.open-con .tabs__tab.active .contest-popup__attachment_field.hidden').first();
    
    buttons.hide();
    attachment.clone(true).appendTo('.open-con .tabs__tab.active .contest-popup__attachments').removeClass('hidden');
  });
  
  $(document).on('input', '.contest-popup__attachment-input', function(){
    if ($(this).val()) {
      $('.open-con .tabs__tab.active .contest-popup__submit').removeClass('disabled');
    } else {
      $('.open-con .tabs__tab.active .contest-popup__submit').addClass('disabled');
    }
  });
  
  $(document).on('click', '.contest-popup__delete-icon', function(e){
    var extra = $(this).parents('.contest-popup__extra'),
        noteErr = extra.find('.contest-popup__attachment-note_err'),
        fileLength = extra.attr('data-file'),
        fileSize;
    
    $(this).parent().remove();
    fileLength -= 1;
    extra.attr('data-file', fileLength);
    
    //код только для демонстрации
    extra.attr('data-size', extra.attr('data-size')/1.5);
    if (fileLength == 0) extra.attr('data-size', 0);
    //код только для демонстрации
    
    fileSize = extra.attr('data-size');
    
    if (fileSize > 20) {
      noteErr.show();
    } else {
      noteErr.hide();
      $('.open-con .tabs__tab.active .contest-popup__submit').removeClass('disabled');
    }
    
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