import $ from 'jquery';

export default () => {

  function overflowDotts(size, element) {
    var content = $(element);
    content.each(function () {
      var contentText = $(this).text();
      if(contentText.length > size){
        $(this).text((contentText.slice(0, size)).trim() + '...');
      }
    });
  };
  
  if ($(document).width() < 900)
  	overflowDotts(50, '.depfin-budget-moscow-open__text'); 
  else
  	overflowDotts(70, '.depfin-budget-moscow-open__text'); 
}