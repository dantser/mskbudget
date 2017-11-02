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
      $('.significant__buttons-set').hide();
  		TABS.each(function() {
  			if ($(this).data('tab-target') == 'significantThree')
  				$(this).addClass('active');
  			else
  				$(this).removeClass('active');
  		})
      
      scrollUp();
  	})
  })

  if ( $('#significant-bigmap').length > 0 ) {
        
    ymaps.load().then(maps => {
      var bigMap = new maps.Map("significant-bigmap", {
        center: [55.751574, 37.573856],
        zoom: 10,
        behaviors: ['default', 'scrollZoom'],
        controls: []
      }, {
        suppressMapOpenBlock: true
      }),
          
      // Создадим кластеризатор, вызвав функцию-конструктор.
      clusterer = new maps.Clusterer({
        preset: 'islands#blueClusterIcons',
        groupByCoordinates: false
      }),
      
      // Функция возвращает объект, содержащий данные метки.
      getPointData = function (index) {
        var pointText = $('.significant-list_map .significant-list__row-title').eq(index).text(),
            pointHref = $('.significant-list_map .significant-list__row-title').eq(index).attr('href'),
            pointStreet = $('.significant-list_map .significant-list__row-st').eq(index).text(),
            pointDate = $('.significant-list_map .significant-list__row-date').eq(index).text();
        return {
          balloonContentBody: '<p>'+pointText+'</p><p>'+pointStreet+'</p><p>Предполагаемый срок ввода в эксплуатацию: '+pointDate+'</p>',
          balloonContentFooter: '<a href="'+pointHref+'">Подробнее</a>'
        };
      },
      
      // Функция возвращает объект, содержащий опции метки.
      getPointOptions = function () {
        return {
          preset: 'islands#blueIcon'
        };
      },
      
      points = [],
      geoObjects = [];
      
      $('.significant-list_map .significant-list__row-title').each(function(){
        var point = $(this).attr('value').split(','),
            pointArr = [],
            pointX = pointArr.push(parseFloat(point[0])),
            pointY = pointArr.push(parseFloat(point[1]));
        points.push(pointArr);
      });
      
      // Данные передаются вторым параметром в конструктор метки, опции - третьим.
      for(var i = 0, len = points.length; i < len; i++) {
        geoObjects[i] = new maps.Placemark(points[i], getPointData(i), getPointOptions());
      }
      
      // В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
      clusterer.add(geoObjects);
      bigMap.geoObjects.add(clusterer);
      
      $(".significant-list_map .significant-list__row-title").on("click", function(e) {
        
        bigMap.setZoom(15);
        
        var elem = $(this),
            elemIndex = $(this).parents('.significant-list__row').index();
        // таблица
        $('.significant-list__row').removeClass('significant-list__row_active');
        elem.parents('.significant-list__row').addClass('significant-list__row_active');        
        // переход
        var marks = clusterer.getGeoObjects(),
            currMark = marks[elemIndex],
            markCoords = currMark.geometry.getCoordinates();
        
        bigMap.panTo( markCoords, {
          flying: true
        }).then(function () {
          currMark.balloon.open();
        }, function (err) {
          console.log('Произошла ошибка ' + err);
        }, this);
        
        return false;
        
      });
      
      // карта во вкладке отдельного проекта
      smallMap = new maps.Map("significant-smallmap", {
          center: [55.753215, 37.622504],
          zoom: 14,
          type: "yandex#map",
          controls: []
      },
      {
        suppressMapOpenBlock: true
      });
      
      $(".significant-list_list .significant-list__row-title").on("click", function(e) {
        
        smallMap.geoObjects.removeAll();
        
        smallMap.setZoom(14);
        
        var elem = $(this),
            smallMapCoords = [getCoords(elem.attr('value')).x, getCoords(elem.attr('value')).y],
            elemText = elem.text(),
            elemStreet = elem.parents('.significant-list__row').find('.significant-list__row-st').text(),
            elemDate = elem.parents('.significant-list__row').find('.significant-list__row-date').text();
        
        // переход
        smallMap.panTo( smallMapCoords, { flying: true } );
        
        var smplacemark = new maps.Placemark(smallMapCoords, {
          balloonContentBody: '<p>'+elemText+'</p><p>'+elemStreet+'</p><p>Предполагаемый срок ввода в эксплуатацию: '+elemDate+'</p>'
        }, {
          preset: 'islands#blueIcon'
        });
        smallMap.geoObjects.add(smplacemark);
        
      });
  
      const mapOpen = $('.significant-about__map-open');
      
      mapOpen.click(function(e) {
        e.preventDefault();
        if ($(document).width() <= 1024) $("html,body").css("overflow-y","hidden");
        $('.significant').addClass('popupMode');
        smallMap.container.fitToViewport();
        
      });
      
      $('.significant-about__map-close, .significant__mask, .significant-about__back').click(function(e) {
        e.preventDefault();
        if ($(document).width() <= 1024) $("html,body").css("overflow-y","auto");
        $('.significant').removeClass('popupMode');
        smallMap.container.fitToViewport();
      });
      
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));
  }
  
  const BACKBTN = $('.significant-about__back');
  BACKBTN.click(function() {
    setTimeout(function(){
      const ACTIVE_CLASS = 'button-light--fill';
      TABLINK.removeClass(ACTIVE_CLASS);
      $('.significant .button-light[data-tab-target="significantOne"]').addClass(ACTIVE_CLASS);
      $('.significant .tabs__tab[data-tab="significantThree"]').hide();
      SEARCH.show();
      $('.significant__buttons-set').show();
      $('.significant .tabs__tab[data-tab="significantOne"]').show();
    }, 1);
  });
  
  function scrollUp() {
    setTimeout(function() {
      $("html,body").animate({
        scrollTop: 0
      }, 350);
    }, 25);
  }
  
  if ($('.significant').length && $(window).width() <= 750) {
    
    $(window).scroll(function(){
      
      if ($('.significant-list_list').is(':visible')) {
      
        var scrollDistance = $(window).scrollTop(),
            block = $('.significant-list_list'),
            blockTopDistance = block.offset().top - $(window).height() / 2 + 100,
            blockHeight = block.height(),
            blockBottomDistance = block.offset().top + blockHeight - $(window).height() / 2 - 100,
            arrows = $('.significant-list__slide-arrows');
        
        if (scrollDistance >= blockTopDistance && scrollDistance <= blockBottomDistance) {
          arrows.fadeIn();
        } else {
          arrows.fadeOut();
        }
        
      } else {
        $('.significant-list__slide-arrows').hide();
      }
      
    });
    
  }

}
