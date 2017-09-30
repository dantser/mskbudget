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

  const sliderGallery = new Swiper(page+ '__materials_slider ' +page+ '__slider-gallery', {
    nextButton: page+ '__slider-next',
    prevButton: page+ '__slider-prev',
    pagination: page+ '__paginate-bullets',
    paginationClickable: true
  });
  const sliderPagination = new Swiper(page+ '__materials_slider ' +page+ '__slider-pagination', {
    spaceBetween: 35,
    slidesPerView: '4',
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    breakpoints: {
      900: {
        slidesPerView: '2',
      }
    }
  });
  sliderGallery.params.control = sliderPagination;
  sliderPagination.params.control = sliderGallery;

  var video = $(page + '__materials_video ' +page+ '__item');
  var popup = $('.popup-video');
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
        $(this).text(contentText.slice(0, size) + ' ...');
      }
    });
  };

  const containerWidth = $(document).width();

  if (containerWidth < 1140 && containerWidth >= 401)
    overflowDotts(42, page + '__text'); 
  else if (containerWidth < 400)
    overflowDotts(80, page + '__text'); 
  else
    overflowDotts(60, page + '__text'); 


  const moreBtn = $(page + '__more button');
  const contentWrapper = $(page + '__wrapper');

  moreBtn.on('click', function(e) {
    e.preventDefault();
    contentWrapper.animate({
      height: contentWrapper.find(page + '__content').height()
    }, 1000, function(){
      contentWrapper.height('auto');
    });
  })
}
