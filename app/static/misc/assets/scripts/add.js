// Custom selects
$(document).on('click', '.selectbox li', function (e) {
  
  if ($(this).hasClass('locked')) {
    e.stopPropagation();
  } else if ($(this).find('a').length) {
    e.stopPropagation();
    $(this).parents('.selectbox').removeClass('active');
  } else {
    var newval = $(this).data('val');
    $(this).parents('.selectbox').find('select').val(newval).change();
    var inputval = $(this).parents('.selectbox').find('select option[value="'+newval+'"]').text();
    $(this).parents('.selectbox').find('select option').removeAttr('selected');
    $(this).parents('.selectbox').find('select option[value="'+newval+'"]').attr('selected', 'selected');
    $(this).parents('.selectbox').find('input').val(inputval);
    $(this).parents('.selectbox').find('.selectbox__val').text(inputval);
    
    //$(this).parent().removeClass('active');
    //setTimeout(function () {
    //  $('body').click();
    //},100)
  }
});

$(document).on('mousedown', '.selectbox select', function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.blur();
  window.focus();
  $(document).find('.selectbox').not($(this).parents('.selectbox')).removeClass('active');
  $(this).parents('.selectbox').toggleClass('active');
});

$(document).on('click', '.selectbox select', function (e) {
  e.stopPropagation();
});

$(document).on('click', '.selectbox', function (e) {
  if (!$(this).hasClass('selectbox_disabled')) {
    e.stopPropagation();
    $(document).find('.selectbox').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  }
});

$(document).on('click', '.selectbox > *', function (e) {
  if (!$(this).parents('.selectbox_disabled').length && !$(this).is('select')) {
    e.preventDefault();
    e.stopPropagation();
    $(document).find('.selectbox').not($(this).parents('.selectbox')).removeClass('active');
    $(this).parents('.selectbox').toggleClass('active');
  }
});

//$(document).on('click', '.selectbox ul', function () {
//  $(this).removeClass('active');
//  
//  setTimeout(function () {
//    $('body').click();
//  },100)
//});
//$('body, html').click(() => {
//  $(document).find('.selectbox').removeClass('active');
//});

$(document).on('click', 'html, body', function(){
  $('.selectbox').removeClass('active');
});


// Custom Selects jQuery UI
$(document).ready(function(){
  
  $('.select-element1').selectmenu({
    change: function(event, ui) {
      var val = $(this).val();
      $(this).find('option').removeAttr('selected');
      $(this).find('option').each(function(){
        if ($(this).val() == val) {
          $(this).attr('selected', 'selected');
        }
      });
      $(this).change();
    }
  }).selectmenu( "menuWidget" ).addClass( "ui-openreit" );
  
  $('.select-element2').selectmenu({
    change: function(event, ui) {
      var val = $(this).val();
      $(this).find('option').removeAttr('selected');
      $(this).find('option').each(function(){
        if ($(this).val() == val) {
          $(this).attr('selected', 'selected');
        }
      });
      $(this).change();
    }
  }).selectmenu( "menuWidget" ).addClass( "ui-openreit" );
});



// Inputmasks
$(document).ready(function(){
 
  window.inputMasks = function() {
    Inputmask({
      mask: '99.99.9999',
      clearMaskOnLostFocus: false,
      positionCaretOnClick: 'none',
      onincomplete: function(){
        $(this).siblings('.contest-popup__label').addClass('contest-popup__err')
      }
    }).mask('.contest-popup__fio#pi-birth');
    
    Inputmask({
      mask: '+7 (999) 999-9999',
      clearMaskOnLostFocus: false,
      positionCaretOnClick: 'none',
      onincomplete: function(){
        $(this).siblings('.contest-popup__label').addClass('contest-popup__err')
      }
    }).mask('.contest-popup__fio#pi-phone, .contest-popup__fio#pj-phone');
    
    //Inputmask({
    //  mask: "*{1,80}@i{1,20}.i{1,6}[.i{1,2}]",
    //  clearMaskOnLostFocus: false,
    //  positionCaretOnClick: 'none',
    //  greedy: false,
    //  onBeforePaste: function (pastedValue, opts) {
    //    pastedValue = pastedValue.toLowerCase();
    //    return pastedValue.replace("mailto:", "");
    //  },
    //  definitions: {
    //    '*': {
    //      validator: "[0-9A-Za-z._-]",
    //      cardinality: 1,
    //      casing: "lower"
    //    },
    //    'i': {
    //      validator: "[0-9A-Za-z_-]",
    //      cardinality: 1,
    //      casing: "lower"
    //    }
    //  }
    //}).mask('.contest-popup__fio#pi-email, .contest-popup__fio#pj-email');
    
    //Inputmask({
    //  mask: "*{1,80}",
    //  placeholder: "",
    //  clearMaskOnLostFocus: false,
    //  positionCaretOnClick: 'none',
    //  onBeforePaste: function (pastedValue, opts) {
    //    pastedValue = pastedValue.toLowerCase();
    //    return pastedValue.replace("mailto:", "");
    //  },
    //  definitions: {
    //    '*': {
    //      validator: "[0-9A-Za-z@._-]",
    //      cardinality: 1,
    //      casing: "lower"
    //    }
    //  }
    //}).mask('.contest-popup__fio#pi-email, .contest-popup__fio#pj-email');
  }
  
  inputMasks();
});