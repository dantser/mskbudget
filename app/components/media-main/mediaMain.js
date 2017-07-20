import $ from 'jquery';

export default () => {

  $(document).ready(function(){

    $('.media-main__section_news .media-main__buttons-set a').on('click', function(e){
      e.preventDefault();
      $(this).parent().siblings().find('a').removeClass('button-light--fill');
      $(this).addClass('button-light--fill');
      var nfilter = $(this).data('filter');
      if (nfilter === 'all') {
        $('.media-main__news-card').removeClass('active');
        $('.media-main__news-card').addClass('active');
      } else {
        $('.media-main__news-card').removeClass('active');
        $('.media-main__news-card[data-filter="'+nfilter+'"]').addClass('active');
      }
    });

    $('.media-main__section_mediamaterials .media-main__buttons-set a').on('click', function(e){
      e.preventDefault();
      $(this).parent().siblings().find('a').removeClass('button-light--fill');
      $(this).addClass('button-light--fill');
      var mfilter = $(this).data('filter');
      $('.media-main__materials').removeClass('active');
      $('.media-main__materials[data-filter="'+mfilter+'"]').addClass('active');
    });

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
