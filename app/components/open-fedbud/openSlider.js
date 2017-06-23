import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 20,
  });
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 35,
    slidesPerView: '4',
    touchRatio: 0.2,
    slideToClickedSlide: true
  });
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
}
