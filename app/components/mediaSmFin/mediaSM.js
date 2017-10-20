import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  var page = $('.mediaSmFin');

  const content = page.find('.mediaSmFin__materials-group, .mediaSmFin__photos-group');

  content.each(function() {
    var $this = $(this);
    $this.find('.mediaSmFin__show-more').on('click', function(e) {
      var contentWrapper = $this.find('.mediaSmFin__outer');
      e.preventDefault();
      contentWrapper.animate({
        height: contentWrapper.find('.mediaSmFin__wrapper').height()
      }, 1000, function(){
        contentWrapper.height('auto');
      });
    })
  })
}
