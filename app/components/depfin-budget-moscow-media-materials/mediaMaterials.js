import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const galleryTop = new Swiper('.depfin-budget-moscow-media-materials__slider.gallery-top', {
    nextButton: '.depfin-budget-moscow-media-materials__slider-next',
    prevButton: '.depfin-budget-moscow-media-materials__slider-prev',
    spaceBetween: 20,
  });
  const galleryThumbs = new Swiper('.depfin-budget-moscow-media-materials__slider.gallery-thumbs', {
    spaceBetween: 35,
    slidesPerView: '4',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  });
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
}
