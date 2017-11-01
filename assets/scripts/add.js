// selectbox()

$(document).on('click', '.selectbox li', function (e) {
  
  if ($(this).hasClass('locked')) {
    e.stopPropagation();
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
