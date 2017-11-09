import $ from 'jquery';
import Inputmask from "inputmask";


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
    inputMasks();
  });
  
  $('.contest-popup__delete-icon').click(function(e){
    $(this).parent().remove();
    checkAttachments();
  });
  

  window.openConFormValidation = function() {
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

      $('html, body').animate({
        scrollTop: $('#contest-page__howto').offset().top - 200
      });

      if (form.find('.contest-popup__err').length > 0) {
        return false;
      }

    })
  }

  openConFormValidation();
  
  
  // маски инпутов
  function inputMasks() {
    Inputmask({
      mask: '99.99.9999',
      clearMaskOnLostFocus: false,
      positionCaretOnClick: 'none',
      onincomplete: function(){
        $(this).siblings('.contest-popup__label').addClass('contest-popup__err')
      }
    }).mask('.contest-popup__fio[name="pi-birth"]');
    
    Inputmask({
      mask: '+7 (999) 999-9999',
      clearMaskOnLostFocus: false,
      positionCaretOnClick: 'none',
      onincomplete: function(){
        $(this).siblings('.contest-popup__label').addClass('contest-popup__err')
      }
    }).mask('.contest-popup__fio[name="pi-phone"], .contest-popup__fio[name="pj-phone"]');
    
    Inputmask({
      mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
      clearMaskOnLostFocus: false,
      positionCaretOnClick: 'none',
      greedy: false,
      onBeforePaste: function (pastedValue, opts) {
        pastedValue = pastedValue.toLowerCase();
        return pastedValue.replace("mailto:", "");
      },
      definitions: {
        '*': {
          validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
          cardinality: 1,
          casing: "lower"
        }
      }
    }).mask('.contest-popup__fio[name="pi-email"], .contest-popup__fio[name="pj-email"]');
  }
  
  inputMasks();
  
  
  // Прикрепить файл
  function checkAttachments() {
    $('.contest-popup__attachments').each(function(){
      var attachment = $(this).find('.contest-popup__attachment').not('.contest-popup__attachment_hidden');
      if (!attachment.length) {
        $(this).parent().addClass('contest-popup__err');
        $('.contest-popup__submit').addClass('disabled');
      }
    });
  }
  
  checkAttachments();
  
  $(document).on('click', '.contest-popup .js-button-attachment', function(){
    $(this).parents('.contest-popup__extra').removeClass('contest-popup__err');
    var attachment = $('.contest-popup__attachment_hidden').first();
    attachment.clone(true).appendTo('.contest-popup__attachments').removeClass('contest-popup__attachment_hidden');
    $('.contest-popup__submit').removeClass('disabled');
  });


}