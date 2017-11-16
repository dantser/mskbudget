import $ from 'jquery';
import Swiper from 'swiper';

export default () => {

  $(document).ready(function(){

    $('.media-main__buttons-set').each(function() {
      $(this).find('.media-main__buttons-set-button').click(function() {
        $(this).addClass('active').siblings('.media-main__buttons-set-button').removeClass('active');
      })
    })

    $('.media-main__section_news .media-main__buttons-set-button').on('click', function(e){
      e.preventDefault();

      var nfilter = $(this).data('filter');
      if (nfilter === 'all') {
        $('.media-main__news-card').removeClass('active');
        $('.media-main__news-card').addClass('active');
      } else {
        $('.media-main__news-card').removeClass('active');
        $('.media-main__news-card[data-filter="'+nfilter+'"]').addClass('active');
      }
    });

    $('.media-main__section_mediamaterials .media-main__buttons-set-button').on('click', function(e){
      e.preventDefault();

      var mfilter = $(this).data('filter');
      $('.media-main__materials').removeClass('active');
      $('.media-main__materials[data-filter="'+mfilter+'"]').addClass('active');

      $('.media-main__page-link_slider').removeClass('active');
      $('.media-main__page-link_slider[data-filter="'+mfilter+'"]').addClass('active');
    });

    $('.media-main .swiper-container').each(function() {
      var newsSlider = new Swiper($(this)[0], {
        prevButton: $(this).parents('.media-main__card-wrapper_slider').find('.swiper-button-prev'),
        nextButton: $(this).parents('.media-main__card-wrapper_slider').find('.swiper-button-next'),
        slidesPerView: 1,
        spaceBetween: 46,
        // pagination: $(this).parents('.media-main__card-wrapper_slider').find('.swiper-pagination'),
        // paginationClickable: true,
        loop: true,
        observer: true,
        observeParents: true
      })

    })

    // if ($(".media-main__datepicker" ).length) {
		// $( ".media-main__datepicker" ).datepicker({
    //         changeMonth: true,
    //         changeYear: true,
		// 	closeText: 'Закрыть',
		// 	prevText: '&#x3c;Пред',
		// 	nextText: 'След&#x3e;',
		// 	currentText: 'Сегодня',
		// 	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		// 	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		// 	monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		// 	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		// 	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		// 	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		// 	dayNamesMin: ['вс','пн','вт','ср','чт','пт','сб'],
		// 	dateFormat: 'dd.mm.yy',
		// 	firstDay: 1,
		// 	isRTL: false,
    //         showOtherMonths: true
    //     });
    // }

  });
}
