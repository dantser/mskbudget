import $ from 'jquery';
import Swiper from 'swiper';
import ymaps from 'ymaps';

export default () => {

  const TAB_INNER = $('.services-net-inner');
  const TAB_INNER_ACTIVE = 'services-net-inner_active';

  const TAB_INNER_DOMAIN = $('.services-net-domain');
  const TAB_INNER_DOMAIN_SLIDER = $('.services-net-domain-slider');
  const TAB_INNER_MUNICIPALITY = $('.services-net-municipality');
  const TAB_INNER_INSTITUTES = $('.services-net-institutes');
  const TAB_INNER_INSTITUTE = $('.services-net-institute');

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

  // Клик по сфере
  var sliderGallery;
  var initialSlide = 0;

  LIST_ITEM.click(function(e) {
    e.preventDefault();
    TAB_INNER_DOMAIN.removeClass(TAB_INNER_ACTIVE);
    TAB_INNER_DOMAIN_SLIDER.addClass(TAB_INNER_ACTIVE);

    initialSlide = TAB_INNER_DOMAIN_SLIDER.find('.services-net-domain-slider__banner-slide[data-tab="' + $(this).data('target') + '"]').index();

    sliderGallery = new Swiper('.services-net-domain-slider__banner', {
      initialSlide: initialSlide,
      prevButton: '.services-net-domain-slider__arrow_prev',
      nextButton: '.services-net-domain-slider__arrow_next',
    });
  })

  // Раскрытие фильтра
  const FILTER_LINK = $('.search_net .filter-link');
  const FILTER_CLOSE = $('.extra-search__close');

  FILTER_LINK.click(function() {
    if ($(this).hasClass('active'))
      $('.extra-search.modal').show();
    else
      $('.extra-search.modal').hide();

  })
  FILTER_CLOSE.click(function() {
    $('.extra-search.modal').hide();
    FILTER_LINK.toggleClass('active');
  })


  // Переход на таб Муниц. образование -> Перечень гос. учреждений
  const MORE_LINK = $('.analityc-more');
  MORE_LINK.click(function(e) {
    e.preventDefault();

    $('.tabs__tab').removeClass('active');
    $('.tabs__tab[data-tab="netTwo"]').addClass('active');
    $('.tabs__tab[data-tab="netTwo"]').css('display', 'block');

    $('.buttons-set .button-light').removeClass('button-light--fill');
    $('.buttons-set .button-light[data-tab-target="netTwo"]').addClass('button-light--fill');

    TAB_INNER.removeClass(TAB_INNER_ACTIVE);
    TAB_INNER_INSTITUTES.addClass(TAB_INNER_ACTIVE);
  })

  // Переход из таблицы гос. учреждений -> Описание гос. учреждения
  const TABLE_LINK = $('.services-net-institutes .services-net-table__row-one, .services-net-domain-slider .services-net-table__row-one');

  TABLE_LINK.click(function() {
    $('.tabs__tab').removeClass('active');
    $('.tabs__tab[data-tab="netTwo"]').addClass('active');
    $('.tabs__tab[data-tab="netTwo"]').css('display', 'block');

    $('.buttons-set .button-light').removeClass('button-light--fill');
    $('.buttons-set .button-light[data-tab-target="netTwo"]').addClass('button-light--fill');

    TAB_INNER.removeClass(TAB_INNER_ACTIVE);
    TAB_INNER_INSTITUTE.addClass(TAB_INNER_ACTIVE);
  })

  // Переход из Описание гос. учреждения -> Таблицы гос. учреждений
  const LINK_BACK = $('.services-net-institute__back');

  LINK_BACK.click(function() {
    TAB_INNER.removeClass(TAB_INNER_ACTIVE);
    TAB_INNER_INSTITUTES.addClass(TAB_INNER_ACTIVE);
  });

if ( $('#net-map').length > 0 ) {


  var map;



  ymaps.load().then(maps => {
    map = new maps.Map("net-map", {
        center: [55.755814, 37.617635],
        zoom: 14,
        type: "yandex#map",
        controls: []

    },
    {suppressMapOpenBlock: true});

    var placemark = new maps.Placemark([55.755814, 37.617635]);
    map.geoObjects.add(placemark);
  })

  const MAP_OPEN = $('.services-net-institute__address-map-open');
  const MAP_CLOSE = $('.services-net-institute__map-close');

  MAP_OPEN.click(function(e) {
    e.preventDefault();
    $('.services-net-institute__address').addClass('services-net-institute__address_active');
    map.container.fitToViewport();
  })
  MAP_CLOSE.click(function() {
    $('.services-net-institute__address').removeClass('services-net-institute__address_active');
    map.container.fitToViewport();
  })
}

}
