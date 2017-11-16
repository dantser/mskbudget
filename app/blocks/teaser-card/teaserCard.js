import $ from 'jquery';

export default () => {
    // три точки при переполнении заголовков
    function overflowDotts(size, element) {
      var content = $(element);
      content.each(function () {
        var contentText = $(this).text();
        if(contentText.length > size){
          console.log($(this).text())
          $(this).text(contentText.slice(0, size) + ' ...');
        }
      });
    };

    if ($(document).width() > 400 && $(document).width() <= 580)
    	overflowDotts(100, '.teaser-card__title');
    else
    	overflowDotts(160, '.teaser-card__title');

}