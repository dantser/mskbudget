import $ from 'jquery';

export default () => {

  // три точки при переполнении заголовков
  function overflowDotts(size, element) {
    var content = $(element);
    content.each(function () {
      var contentText = $(this).text();
      if(contentText.length > size){
        $(this).text((contentText.slice(0, size)).trim() + '...');
      }
    });
  };
  
  overflowDotts(90, '.d-si__quiz_head');
  
}
