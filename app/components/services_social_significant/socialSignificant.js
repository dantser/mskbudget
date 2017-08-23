import $ from 'jquery';
import ymaps from 'ymaps'; 

export default () => {

	const TABLINK = $('.significant .button-light');
	const SEARCH = $('.significant__search');

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

      var myMap = new maps.Map("significant-map", {
          center: [55.753215, 37.622504],
          zoom: zoom,
          type: "yandex#map"

      });

      const PROJECT = $(".significant-list_map .significant-list__row-title");
      var prj_arr = [];
      var prj_cnt = 0;

      var getCoords = function(elem) {
        var coordinates = elem.attr("value");
        var coordinatesSplitter = coordinates.split(",");
        var prj_coords = {x: '', y: ''};

        prj_coords.x = parseFloat(coordinatesSplitter[0]);
        prj_coords.y = parseFloat(coordinatesSplitter[1]);

        return prj_coords;
      }

      PROJECT.each(function() {
        var elem = $(this);
        var parent = elem.parents('.significant-list__row');

        prj_arr[prj_cnt] = getCoords(elem);

        var elem_num = prj_cnt + 1;

        // Создание метки с круглой активной областью.
        var circleLayout = maps.templateLayoutFactory.createClass(
          '<div class="placemark-layout-container">' +
            '<div class="circle-layout" data-object="' + elem.data('target') + '">' + elem_num + '</div>' +
            '<div class="balloon-layout">' + 
              '<div class="balloon-layout__title">' + elem.text()  + '</div>' +
              '<div class="balloon-layout__text">' + parent.find('.significant-list__row-st').text() + '</div>' + 
              '<a href="#" class="balloon-layout__link">подробнее</div>' + 
            '</div>' +
          '</div>'
        );

        var myPlacemark = new maps.Placemark([getCoords(elem).x, getCoords(elem).y], {
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

        prj_cnt++;
      })


      $(".significant-list_map .significant-list__row-title").on("click", function(e) {

        if (zoom != 14) {
          zoom = 14;
          myMap.setZoom(zoom);
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
        myMap.panTo( [getCoords(elem).x, getCoords(elem).y], { flying: true } );

        return false;

      });
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));

}