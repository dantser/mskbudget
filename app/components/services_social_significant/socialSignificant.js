import $ from 'jquery';
import ymaps from 'ymaps'; 

export default () => {

  var getCoords = function(coordinates) {
    var coordinatesSplitter = coordinates.split(",");
    var prj_coords = {x: '', y: ''};

    prj_coords.x = parseFloat(coordinatesSplitter[0]);
    prj_coords.y = parseFloat(coordinatesSplitter[1]);

    return prj_coords;
  }

  var drowMarker = function(maps, myMap, num, title, text, coords) {

        // Создание метки с круглой активной областью.
        var circleLayout = maps.templateLayoutFactory.createClass(
          '<div class="placemark-layout-container">' +
            '<div class="circle-layout" data-object="' + num + '">' + num + '</div>' +
            '<div class="balloon-layout">' + 
              '<div class="balloon-layout__title">' + title  + '</div>' +
              '<div class="balloon-layout__text">' + text + '</div>' + 
              '<a href="#" class="balloon-layout__link">подробнее</div>' + 
            '</div>' +
          '</div>'
        );

        var myPlacemark = new maps.Placemark([getCoords(coords).x, getCoords(coords).y], {
        //     balloonContent: 'Торговый зал в Алматы'
        // }, {
        //     iconImageHref: '/upload/map_marker.png', // картинка иконки
        //     iconImageSize: [44, 35], // размеры картинки
        //     iconImageOffset: [0, 0] // смещение картинки
        //   }
              balloonContent: 'Станция метро Хорвино'
          }, {
              iconLayout: circleLayout,
              iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
              }
          }
        );

        myMap.geoObjects.add(myPlacemark);
  }

	const TABLINK = $('.significant .button-light');
	const SEARCH = $('.significant__search');

  var smallMap;
  var smallCoord = '';

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
      SEARCH.show();
    })
  })

  const TABS = $('.significant .tabs__tab');
  const LISTLINK = $('.significant-list_list .significant-list__row-title');
  LISTLINK.each(function() {
  	$(this).click(function(e) {
  		e.preventDefault();

      smallMap.setCenter( [getCoords($(this).attr('value')).x, getCoords($(this).attr('value')).y], 14);
      smallCoord = $(this).attr('value');

  		SEARCH.hide();
  		TABS.each(function() {
  			if ($(this).data('tab-target') == 'significantThree')
  				$(this).addClass('active');
  			else
  				$(this).removeClass('active');
  		})
  	})
  })

  const BACKBTN = $('.significant-about__back');
  BACKBTN.click(function() {
  	const ACTIVE_CLASS = 'button-light--fill';
		TABLINK.removeClass(ACTIVE_CLASS);
		$('.significant .button-light[data-tab-target="significantOne"]').addClass(ACTIVE_CLASS);
		$('.significant .tabs__tab[data-tab="significantThree"]').hide();
		SEARCH.show();
		$('.significant .tabs__tab[data-tab="significantOne"]').show();
  })

  ymaps.load().then(maps => {

    var zoom = 12;

    var bigMap = new maps.Map("significant-bigmap", {
        center: [55.753215, 37.622504],
        zoom: zoom,
        type: "yandex#map",
        controls: []

    },
    {suppressMapOpenBlock: true}); // скрыть ссылку на карты

    const PROJECT = $(".significant-list_map .significant-list__row-title");
    var prj_arr = [];
    var prj_cnt = 0;

    PROJECT.each(function() {
      var elem = $(this);
      var parent = elem.parents('.significant-list__row');

      prj_arr[prj_cnt] = getCoords(elem.attr('value'));

      var elem_num = prj_cnt + 1;

      drowMarker(maps, bigMap, elem.data('target'), elem.text(), parent.find('.significant-list__row-st').text(), elem.attr('value'));

      prj_cnt++;
    })


    $(".significant-list_map .significant-list__row-title").on("click", function(e) {

      if (zoom != 14) {
        zoom = 14;
        bigMap.setZoom(zoom);
      }

      var elem = $(this);
      // таблица
      $('.significant-list__row').removeClass('significant-list__row_active');
      elem.parents('.significant-list__row').addClass('significant-list__row_active')
      // маркер
      var LAYOUT = $('.circle-layout');
      LAYOUT.removeClass('locate-layout');
      // смена маркера
      var target = $('.circle-layout[data-object="'+ elem.data('target') +'"]');
      target.addClass('locate-layout');
      // сообщение
      $('.balloon-layout').hide();
      target.siblings('.balloon-layout').show();

      // переход
      bigMap.panTo( [getCoords(elem.attr('value')).x, getCoords(elem.attr('value')).y], { flying: true } );

      return false;

    });


    // карта во вкладке отдельного проекта
    smallMap = new maps.Map("significant-smallmap", {
        center: [55.753215, 37.622504],
        zoom: 14,
        type: "yandex#map",
        controls: []

    },
    {suppressMapOpenBlock: true});

    const mapOpen = $('.significant-about__map-open');
    mapOpen.click(function(e) {
      e.preventDefault();
      $('.significant-about__map').addClass('significant-about__map_active');
      smallMap.container.fitToViewport();
      // не активируется
      drowMarker(maps, smallMap, '1', 'СТАНЦИЯ МЕТРО «ХОВРИНО»', 'Улица Дыбенко, вблизи строений 34-38', smallCoord);
      $('.significant-about__map-close').show();
    })
    $('.significant-about__map-close').click(function(e) {
      e.preventDefault();
      $('.significant-about__map-close').hide();
      $('.significant-about__map').removeClass('significant-about__map_active');
      smallMap.container.fitToViewport();
    })
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));

}