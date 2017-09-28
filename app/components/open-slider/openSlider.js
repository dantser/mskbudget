import $ from 'jquery';
import Swiper from 'swiper';

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
    }
  });
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
}
