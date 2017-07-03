import $ from 'jquery';

export default () => {
  
  $(document).ready(function(){
    
    $('.profile__options-link a').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.profile__dropdown').fadeOut(250);
      $(this).next().fadeIn(250);
    });
    
    $('.profile__dropdown_single li').on('click', function(e){
      e.stopPropagation();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      $(this).find('input').prop('checked', true);
      var value = $(this).find('span').text();
      $(this).parent().prev().text(value);
      $(this).parent().fadeOut(250);
    });
    
    $('.profile__dropdown_multiple li').on('click', function(e){
      e.stopPropagation();
      var activevalues = $(this).siblings('.active').length;
      if (activevalues > 0) {
        $(this).toggleClass('active');
        var check = $(this).find('input').prop('checked');
        if (check) {
          $(this).find('input').prop('checked', false);
        } else {
          $(this).find('input').prop('checked', true);
        }
      }
      var values = [];
      var value;
      $(this).parent().find('li.active').each(function(){
        value = $(this).find('span').text();
        values.push(value);
        for (var i = 1; i < values.length; i++) {
          values[i] = ' ' + values[i];
        }
      });
      $(this).parent().prev().text(values);
    });
    
    $('html').on('click', function(){
      $('.profile__dropdown').fadeOut(250);
    });
    
  });
  
}