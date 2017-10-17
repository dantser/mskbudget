//import $ from 'jquery';
import Swiper from 'swiper';
import fancybox from '@fancyapps/fancybox'

const $ = window.$;

export default () => {
  
  const galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 20,
    breakpoints: {
      992: {
        spaceBetween: 17,
      },
      640: {
        spaceBetween: 15,
      },
      500: {
        spaceBetween: 7
      }
    },
    onInit: function(swiper) {
      $('.gallery-top .swiper-slide').each(function(){
        var slideIndex = $(this).index() + 1;
        $(this).find('.open-slider__num-current').text(slideIndex);
      });
      var slidesLength = swiper.slides.length;
      $('.gallery-top').find('.open-slider__num-total').text(slidesLength);
    }
  });
  
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 35,
    slidesPerView: '4',
    touchRatio: 0.2,
    centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      1024: {
        spaceBetween: 28
      }
    },
    roundLengths: true,
    onInit: function(swiper) {
      $('.gallery-thumbs .swiper-slide').each(function(){
        var slideIndex = $(this).index() + 1;
        $(this).find('.open-slider__num-current').text(slideIndex);
      });
      var slidesLength = swiper.slides.length;
      $('.gallery-thumbs').find('.open-slider__num-total').text(slidesLength);
    }
  });
  
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
  
  // fancybox
  $('.open-slider [data-fancybox]').fancybox({
    animationEffect: "fade",
    clickContent: false,
    buttons: ['close']
  });
}
