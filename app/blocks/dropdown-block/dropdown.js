import $ from 'jquery';
import Swiper from 'swiper';

export default () => {

  const docSlider = new Swiper('.docs-container', {
        spaceBetween: 10,
        slidesPerView: 4,
        nextButton: '.docs-container .ar-next',
        prevButton: '.docs-container .ar-prev',
        breakpoints: {
          992: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1,
          }
    }});

  const newsSlider = new Swiper('.dropdown_news .wrapper', {
        spaceBetween: 10,
        slidesPerView: 3,
        wrapperClass: 'dropdown__card-wrapper',
        slideClass: 'tile__item',
        nextButton: '.dropdown_news .ar-next',
        prevButton: '.dropdown_news .ar-prev',
        breakpoints: {
          992: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          }
    }});

    const servicesSlider = new Swiper('.dropdown_services .lk-services', {
          spaceBetween: 10,
          slidesPerView: 4,
          wrapperClass: 'lk-services__widget-cards',
          slideClass: 'lk-services__widget-card',
          nextButton: '.dropdown_services .ar-next',
          prevButton: '.dropdown_services .ar-prev',
          breakpoints: {
            992: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            }
      }});
}
