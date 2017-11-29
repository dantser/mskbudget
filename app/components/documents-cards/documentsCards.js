import $ from 'jquery';

export default function documentsCards() {
  
  if ($('.document').length || $('.directory').length) {
    
    var isAdded = '.document__is-added';
    
    // Добавить в избранное
    $(document).on('click', isAdded, function(e){
      e.preventDefault();
      $(this).find('.favor').toggleClass('favor_added favor_stroke-color-blue');
    });
    
    // добавляем три точки при переполнении заголовков
    function overflowDotts(size, element) {
      var content = $(element);
      content.each(function () {
        var contentText = $(this).text();
        if(contentText.length > size){
          console.log($(this).text())
          $(this).text((contentText.slice(0, size)).trim() + '...');
        }
      });
    };
    
    overflowDotts(60, '.document__title');
    overflowDotts(60, '.directory__title');
    overflowDotts(250, '.document__excerpt');
    
  }
  
}
