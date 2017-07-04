import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  var page = '.depfin-budget-moscow-media-materials';

  const photo = new Swiper(page+ '__materials_photo ' +page+ '__container', {
    pagination: page+ '__paginate-bullets',
    paginationClickable: true
  });
  const present = new Swiper(page+ '__materials_present '+page+ '__container', {
    nextButton: page+ '__next',
    prevButton: page+ '__prev',
  });

  console.log(page+ '_slider ' +page+ '__slider-gallery');
  const sliderGallery = new Swiper(page+ '__materials_slider ' +page+ '__slider-gallery', {
    nextButton: page+ '__slider-next',
    prevButton: page+ '__slider-prev',
  });
  const sliderPagination = new Swiper(page+ '__materials_slider ' +page+ '__slider-pagination', {
    spaceBetween: 35,
    slidesPerView: '4',
    // centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
  });
  sliderGallery.params.control = sliderPagination;
  sliderPagination.params.control = sliderGallery;

  // var video = $(page + '__item');
  // var popup = $('.popup-video');
  // video.on('click', function(e) {
  //   e.preventDefault();
  //   popup.fadeIn(321);
  // });


}
