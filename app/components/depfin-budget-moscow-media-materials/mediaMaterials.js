import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  var page = $('.depfin-budget-moscow-media-materials');

  var video = $('.media-card_video');
  var popup = $('.popup-video');

  if (video.length)
    video.on('click', function(e) {
      e.preventDefault();
      $("#popup-wrapper").fadeIn(321);
      popup.fadeIn(321);
    });

  function overflowDotts(size, element) {
    var content = $(element);
    content.each(function () {
      var contentText = $(this).text();
      if(contentText.length > size){
        $(this).text(contentText.slice(0, size) + ' ...');
      }
    });
  };

  const containerWidth = $(document).width();

  if (containerWidth < 1140 && containerWidth >= 401)
    overflowDotts(42, '.media-card__text'); 
  else if (containerWidth < 400)
    overflowDotts(80, '.media-card__text'); 
  else
    overflowDotts(60, '.media-card__text'); 


  const moreBtn = page.find('.depfin-budget-moscow-media-materials__more button');
  const contentWrapper = page.find('.depfin-budget-moscow-media-materials__wrapper');

  moreBtn.on('click', function(e) {
    e.preventDefault();
    contentWrapper.animate({
      height: contentWrapper.find('.depfin-budget-moscow-media-materials__content').height()
    }, 1000, function(){
      contentWrapper.height('auto');
    });
  })
}
