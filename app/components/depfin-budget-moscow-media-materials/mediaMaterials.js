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
