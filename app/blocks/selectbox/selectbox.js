import $ from 'jquery';

export default function selectbox() {
  $(document).ready(function(){
    $('.selectbox__val').click(function(){
      var selectbox = $(this).parent();
      var ownHeight = $(this).outerHeight();
      if (selectbox.hasClass('active')) {
        selectbox.height(ownHeight);
        selectbox.removeClass('active');
      } else {
        var height = selectbox.find('.selectbox__list').outerHeight();
        height += ownHeight;
        selectbox.height(height);
        selectbox.addClass('active');
      }
    });
    $('.selectbox__list-item').click(function(){
      var selectbox = $(this).parents('.selectbox');
      var ownHeight = selectbox.find('.selectbox__val').outerHeight();
      var val = $(this).text();
      selectbox.find('.selectbox__val').text(val);
      selectbox.height(ownHeight);
      selectbox.removeClass('active');
    });
  });
}
