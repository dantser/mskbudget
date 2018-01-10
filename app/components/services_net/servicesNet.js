import $ from 'jquery';
import Swiper from 'swiper';
import ymaps from 'ymaps';

export default () => {

  const NET = $('.services-net');
  const MASK = $('.services-net__mask');

  const TAB_INNER = $('.services-net-inner');
  const TAB_INNER_ACTIVE = 'services-net-inner_active';

  const TAB_INNER_DOMAIN = $('.services-net-domain');
  const TAB_INNER_MUNICIPALITY = $('.services-net-municipality');
  const TAB_INNER_INSTITUTES = $('.services-net-institutes');
  const TAB_INNER_INSTITUTE = $('.services-net-institute');

  var map;
  // var coords;

  var getCoords = function(coordinates) {
    var coordinatesSplitter = coordinates.split(",");
    var prj_coords = {x: '', y: ''};

    prj_coords.x = parseFloat(coordinatesSplitter[0]);
    prj_coords.y = parseFloat(coordinatesSplitter[1]);

    return prj_coords;
  }

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

  // Слайдер
  var sliderGallery = new Swiper('.services-net-domain__banner', {
    prevButton: '.services-net-domain__arrow_prev',
    nextButton: '.services-net-domain__arrow_next',
    loop: true,
    centeredSlides: true,
    observer: true,
    observeParents: true
  });

  var currentSphere = $('.services-net-domain__banner').data('sphere');
  if (currentSphere) {
    sliderGallery.slideTo(currentSphere, 0);
  }

  // Клик по слайду -> таблица
  TAB_INNER_DOMAIN.find('.services-net-domain__banner-slide').click(function(e) {
    e.preventDefault();
    TAB_INNER_DOMAIN.find('.services-net-domain__info').addClass('active');
  })

  // Раскрытие фильтра
  const FILTER_LINK = $('.search_net .filter-link');
  const FILTER_CLOSE = $('.extra-search__close');

  FILTER_LINK.click(function() {
    if (!$(this).hasClass('active'))
      $(this).parents('.search_net').find('.search__filter').show();
    else
      $(this).parents('.search_net').find('.search__filter').hide();

    if ($(document).width() <= 900)
      MASK.addClass('active');
  })
  FILTER_CLOSE.click(function() {
    $(this).parents('.search_net').find('.search__filter').hide();
    $(this).parents('.search_net').find('.filter-link').removeClass('active');
    MASK.removeClass('active');
  })

  // Стандартный цвет шрифта при фокусе в форме
  NET.find('.d-si__search').focus(function() {
    $(this).addClass('d-si__search_focused');
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
  const TABLE_LINK = $('.services-net-institutes .services-net-table__row-one, .services-net-domain .services-net-table__row-one');

  TABLE_LINK.click(function() {
    $('.tabs__tab').removeClass('active');
    $('.tabs__tab[data-tab="netTwo"]').addClass('active');
    $('.tabs__tab[data-tab="netTwo"]').css('display', 'block');

    $('.buttons-set .button-light').removeClass('button-light--fill');
    $('.buttons-set .button-light[data-tab-target="netTwo"]').addClass('button-light--fill');

    TAB_INNER.removeClass(TAB_INNER_ACTIVE);
    TAB_INNER_INSTITUTE.addClass(TAB_INNER_ACTIVE);

    scrollUp();
  })

  // Переход из Описание гос. учреждения -> Таблицы гос. учреждений
  const LINK_BACK = $('.services-net-institute__back');

  LINK_BACK.click(function() {
    TAB_INNER.removeClass(TAB_INNER_ACTIVE);
    TAB_INNER_INSTITUTES.addClass(TAB_INNER_ACTIVE);
  });

  if ( $('#net-map').length > 0 ) {

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
      map = new maps.Map("net-map", {
          center: [55.755814, 37.617635],
          zoom: 14,
          type: "yandex#map",
          controls: []
      },
      {suppressMapOpenBlock: true});

      var placemark = new maps.Placemark([55.755814, 37.617635]);
      map.geoObjects.add(placemark);

      // Установка новой метки
      TABLE_LINK.click(function() {

        map.setCenter( [getCoords($(this).attr('value')).x, getCoords($(this).attr('value')).y], 14);

        map.geoObjects.removeAll();
        
        map.setZoom(14);

        var elem = $(this),
            mapCoords = [getCoords(elem.attr('value')).x, getCoords(elem.attr('value')).y],
            elemText = elem.text(),
            elemStreet = elem.data('address');
        
        // переход к новой метке
        map.panTo( mapCoords, { flying: true } );
        
        var mapPlacemark = new maps.Placemark(mapCoords, {

          balloonContentBody:
            '<h3>'+elemText+'</h3>' +
            '<p>'+elemStreet+'</p>'
        });

        map.geoObjects.add(mapPlacemark);
      })

    })

    const MAP_OPEN = $('.services-net-institute__address-map-open');
    const MAP_CLOSE = $('.services-net-institute__map-close');

    MAP_OPEN.click(function(e) {
      e.preventDefault();
      if ($(document).width() <= 900)
        $("html,body").css("overflow","hidden");  // запрет скролла страницы
      NET.addClass('services-net_popupMode');
      MASK.addClass('active');
      map.container.fitToViewport();
    })
    MAP_CLOSE.click(function(e) {
      e.preventDefault();
      $("html,body").css("overflow","auto");
      NET.removeClass('services-net_popupMode');
      MASK.removeClass('active');
      map.container.fitToViewport();
    })
  }

  MASK.click(function(e) {
    e.preventDefault();
    $("html,body").css("overflow","auto");
    $(this).removeClass('active');
    NET.removeClass('services-net_popupMode');
    map.container.fitToViewport();
  })

  // Показать еще
  $('.services-net-table__show-more').on('click', function (e) {
    e.preventDefault();
    const TABLE = $(this).parents('.services-net-inner');
    const CONTAINER = TABLE.find('.services-net-table__main');
    CONTAINER.animate({
      height: CONTAINER.find('.services-net-table__tile').height()
    }, 1000, function(){
      CONTAINER.height('auto');
    });
  });

  $(document).on({
    mouseenter: function () {
      $('img[data-hover="' + $(this).data('hover-target') + '"]').show();
    },
    mouseleave: function () {
      $('img[data-hover="' + $(this).data('hover-target') + '"]').hide();
    }
  }, '.services-net-municipality__map-hover');

  NET.find('.services-net-municipality__map-hover').click(function(e) {
    e.preventDefault();
    $('.services-net-municipality__map-full').hide();
    $('.services-net-municipality__back').addClass('active');
  })

  NET.find('.services-net-municipality__back').click(function(e) {
    e.preventDefault();
    $(this).removeClass('active');
    $('.services-net-municipality__map-full').show();
    $('.services-net-municipality__map-part').hide();
  })

  const MAP_POPUP = NET.find('.services-net__map-popup');
  NET.find('.svg-map path[data-active]').hover(function(e) {
    
    var coordsX = $(this).offset().left,
        coordsY = $(this).offset().top,
        width = this.getBoundingClientRect().width,
        height = this.getBoundingClientRect().height,
        data = $(this).data('name');

    MAP_POPUP.addClass('active');
    MAP_POPUP.offset({top:coordsY + height, left:coordsX - width / 2});
    MAP_POPUP.text(data);

  }, function() {
    MAP_POPUP.removeClass('active');
  })

  function scrollUp() {
    setTimeout(function() {
      $("html,body").animate({
        scrollTop: 0
      }, 350);
    }, 25);
  }
}
