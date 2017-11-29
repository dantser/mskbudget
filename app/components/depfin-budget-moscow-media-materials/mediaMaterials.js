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
        $(this).text((contentText.slice(0, size)).trim() + '...');
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


  const content = page.find('.depfin-budget-moscow-media-materials__materials');

  content.each(function() {
    var $this = $(this);
    $this.find('.depfin-budget-moscow-media-materials__more button').on('click', function(e) {
      var contentWrapper = $this.find('.depfin-budget-moscow-media-materials__wrapper');
      e.preventDefault();
      contentWrapper.animate({
        height: contentWrapper.find('.depfin-budget-moscow-media-materials__content').height()
      }, 1000, function(){
        contentWrapper.height('auto');
      });
    })
  })

  const slider = page.find('.depfin-budget-moscow-media-materials__content_slider .swiper-container');

 slider.each(function() {
    var newsSlider = new Swiper($(this)[0], {
      prevButton: $(this).parents('.depfin-budget-moscow-media-materials__content_slider').find('.swiper-button-prev'),
      nextButton: $(this).parents('.depfin-budget-moscow-media-materials__content_slider').find('.swiper-button-next'),
      slidesPerView: 1,
      spaceBetween: 46,
      // pagination: $(this).parents('.depfin-budget-moscow-media-materials__content_slider').find('.swiper-pagination'),
      // paginationClickable: true,
      loop: true,
      observer: true,
      observeParents: true
    })

  })

}
