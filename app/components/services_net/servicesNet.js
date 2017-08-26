import $ from 'jquery';
import Swiper from 'swiper';

export default () => {

	// Переключатели табов
	const TABLINK = $('.services-net .button-light');

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
    })
  })

	// Таб Сфера - фильтры на ховер
	const LIST_ITEM = $('.services-net-domain__list-item');
	var IMAGE = $('.services-net-domain__image');

	LIST_ITEM.hover(function() {
		IMAGE.addClass('services-net-domain__image_active');
		$('.services-net-domain__image_' + $(this).data('target')).removeClass('services-net-domain__image_active');
	}, function() {
		IMAGE.removeClass('services-net-domain__image_active');
	})

	// Таб Сфера - слайдер
  const sliderGallery = new Swiper('.services-net-domain-slider', {
    prevButton: '.services-net-domain-slider__arrow_prev',
    nextButton: '.services-net-domain-slider__arrow_next',
  });
}