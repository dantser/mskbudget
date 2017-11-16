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

  // скролл-ссылки
  const $scrollToLinks = $('.js-mediasm-page__scrollToLink');

  if ($scrollToLinks) {
    $scrollToLinks.on({
      click: function(event) {
        if ( $(this).attr('data-scrollto').length > 1 ) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $($(this).attr('data-scrollto')).offset().top - 95
          });
        }
      }
    });
  }

  const slider = page.find('.mediaSmFin__card-wrapper_slider .swiper-container');

  slider.each(function() {
    var newsSlider = new Swiper($(this)[0], {
      prevButton: $(this).parents('.mediaSmFin__card-wrapper_slider').find('.swiper-button-prev'),
      nextButton: $(this).parents('.mediaSmFin__card-wrapper_slider').find('.swiper-button-next'),
      slidesPerView: 1,
      spaceBetween: 46,
      // pagination: $(this).parents('.mediaSmFin__card-wrapper_slider').find('.swiper-pagination'),
      // paginationClickable: true,
      loop: true,
      observer: true,
      observeParents: true
    })

  })

}
