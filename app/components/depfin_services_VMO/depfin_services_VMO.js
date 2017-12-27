import $ from 'jquery';
import 'jquery.scrollbar';
import 'jquery-ui-bundle';
import Swiper from 'swiper';

export default () => {
  const VMO = $('.services-VMO');
  const TABLINK = VMO.find('.services-VMO__tabs-control a');

  if(!VMO){
    return;
  };

  TABLINK.each(function () {
    $(this).on('click', function () {
      const $this = $(this);
      const ACTIVE_CLASS = 'active';
      $this.siblings().removeClass(ACTIVE_CLASS);
      $this.addClass(ACTIVE_CLASS);
    })
  });
  
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
  if (isMobile.any()) {
    
    VMO.find('.services-VMO__map-hover').click(function(e) {
      e.stopPropagation();
      
      if ($(this).hasClass('targeted')) {
        
        TABLINK.removeClass('active');
        VMO.find('.services-VMO__tabs-control a[data-tab-target="' + $(this).data('tab-target') + '"]').addClass('active').click();
        $('img[data-hover="' + $(this).data('hover-target') + '"]').hide();
        $(this).removeClass('targeted');
        
      } else {
        
        $('img[data-hover]').hide();
        $('.services-VMO__map-hover').removeClass('targeted');
        $('img[data-hover="' + $(this).data('hover-target') + '"]').show();
        $(this).addClass('targeted');
        
      }
    });
    
    $(document).on('click', function(){
      $('img[data-hover]').hide();
      $('.services-VMO__map-hover').removeClass('targeted');
    });
    
  } else {
    
    VMO.find('.services-VMO__map-hover').hover(function() {
      $('img[data-hover="' + $(this).data('hover-target') + '"]').show();
    }, function() {
      $('img[data-hover="' + $(this).data('hover-target') + '"]').hide();
    });
    
    VMO.find('.services-VMO__map-hover').click(function() {
      TABLINK.removeClass('active');
      VMO.find('.services-VMO__tabs-control a[data-tab-target="' + $(this).data('tab-target') + '"]').addClass('active');
    });
  }

  //VMO.find('.services-VMO__map-hover').hover(function() {
  //  $('img[data-hover="' + $(this).data('hover-target') + '"]').show();
  //}, function() {
  //  $('img[data-hover="' + $(this).data('hover-target') + '"]').hide();
  //})
  //
  //VMO.find('.services-VMO__map-hover').click(function() {
  //  TABLINK.removeClass('active');
  //  VMO.find('.services-VMO__tabs-control a[data-tab-target="' + $(this).data('tab-target') + '"]').addClass('active');
  //})

  // обновление графиков при отрисовке (массив window.grLineVert)
  VMO.find('.analityc-control-switcher-wrapper a').click(function() {
    setTimeout(function() {
      grLineVert.forEach(function(item, i, arr) {
        item.update();
      })
    }, 100)
  })

  // Тени при прокрутке табов
  VMO.find('.services-VMO__tabs-wrapper').scroll(function() {
    var lg = $(this).siblings('.services-VMO__lg');
    var lgLeft = $(this).siblings('.services-VMO__lg_left-lg');
    var lgRight = $(this).siblings('.services-VMO__lg_right-lg');

    var fullW = $(this).find('.services-VMO__tabs-control').outerWidth();
    var diff = fullW - $(this).outerWidth();

    if (diff != 0) {

      lg.addClass('active');

      if ($(this).scrollLeft() == 0) {
        lgLeft.removeClass('active');
      }
      if ($(this).scrollLeft() == diff) {
        lgRight.removeClass('active');
      }
    }
  })

  // Тени при прокрутке свитчеров
  VMO.find('.services-VMO__lg-container').scroll(function() {
    var parent = $(this).parents('.analityc-control-switcher')
    var lg = parent.find('.services-VMO__lg');
    var lgLeft = parent.find('.services-VMO__lg_left-lg');
    var lgRight = parent.find('.services-VMO__lg_right-lg');

    lg.removeClass('active');
    if ($(this).scrollLeft() > 0)
      lgLeft.addClass('active');
    else
      lgRight.addClass('active');

    console.log($(this).outerWidth())
  })


  // кастомный селект для "Муниципальных округов"
  $('.analityc-select_vmo').each(function () {
    $(this).selectmenu().selectmenu( "menuWidget" ).addClass( "ui-vmo" );
  });

  VMO.find('.ui-year').each(function () {
    $(this).on('click', function () {
      $('.analityc-select_vmo').selectmenu( "open" );
    });
  });

  $(document).on('click', function () {
    if ($('.ui-selectmenu-button').hasClass('ui-selectmenu-button-open')) {
      VMO.find('.ui-year svg').addClass('active');
    } else {
      VMO.find('.ui-year svg').removeClass('active');
    }
  });

// для таба муниципальные округи - "показать все полномочия"
  VMO.find('.js-rules .button').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      const LIST = $(this).siblings('.services-VMO__list');
      LIST.animate({
        height: LIST.find('.services-VMO__list-wrapper').height()
      }, 1000, function(){
        LIST.height('auto');
      });
      $(this).addClass('inactive');
    })
  });

// Custom scroll for "паспорта ВМО"
  VMO.find('.services-VMO__table__wrapper').scrollbar();

  // $(document).ready(function () {
  //
  //   setTimeout(function () {
  //     const activeTab = $('.tabs__tab.active');
  //     const table = activeTab.find('.services-VMO__table_passlist');
  //     const tableHeight = table.height();
  //     const tableHeadHeight = table.find('.services-VMO__table-head');
  //     const scrollbarHeight = tableHeight - tableHeadHeight;
  //     console.log(tableHeight);
  //
  //     VMO.find('.scroll-element.scroll-y').css('height', scrollbarHeight);
  //   }, 5000)
  //
  // });


// переключение таблица-график
  VMO.find(".analityc-control-button").on("click", function(e) {
   e.preventDefault();
   const $this = $(this);
   const vmo = $(".analityc-widget_VMO"),
         vmoGraphics = vmo.find($('.services-VMO__graphics')),
         vmoTable = vmo.find($('.services-VMO__table')),
         vmoGraphicsActive = vmo.find($('.services-VMO__graphics.active')),
         vmoTableActive = vmo.find($('.services-VMO__graphics.active')),
         vmoTableLabel = vmo.find('.services-VMO__label_table'),
         vmoGraphicsLabel = vmo.find('.services-VMO__label_graphics'),
         vmoGraphicsLegend = vmo.find('.legend');

   if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
     $this.siblings().removeClass('active');
     $this.addClass('active');
     vmoTable.removeClass('active');
     vmoGraphics.addClass('active');
     vmoTableLabel.hide();
     vmoGraphicsLabel.show();
     vmoGraphicsLegend.show();

   } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
     $this.siblings().removeClass('active');
     $this.addClass('active');
     vmoGraphics.removeClass('active');
     vmoTable.addClass('active');
     vmoTableLabel.css('display', 'inline-block');
     vmoGraphicsLabel.hide();
     vmoGraphicsLegend.hide();
   }
 });

  const MAP_POPUP = VMO.find('.services-VMO__map-popup');
  VMO.find('.svg-map path[data-active]').hover(function(e) {
    
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

  const SORT_BTN = VMO.find('.services-VMO__sort');

  SORT_BTN.click(function() {
    $(this).toggleClass('services-VMO__sort_desc services-VMO__sort_ask');
  })

  const GR_LINE = VMO.find('.analityc-graphics_line');

  GR_LINE.each(function() {
    var lines = $(this).find('.analityc-graphics__line')

    lines.each(function() {
      var val2 = parseFloat($(this).data('val2').replace(',', '.').replace(' ', '')),
          barval = parseFloat($(this).data('barval').replace(',', '.').replace(' ', '')),
          total = $(this).find('.analityc-graphics__line-total'),
          barline = $(this).find('.analityc-graphics__line-bar-value');

      if (val2 <= 0.5 && barval > 0) { //фикс отображения наименьшего значения
        if ($(document).width() > 400)
          val2 = 0.5;  
        else
          val2 = 1.0;
      }

      total.css('width', val2 + '%');
    
      if ($(this).index() != lines.last().index())
        barline.css('left', val2 + '%');
    })
  })

  const GR_LINE_VERT = VMO.find('.analityc-graphics-line-vertical_vmo');

  GR_LINE_VERT.each(function() {
    var items = $(this).find('.analityc-graphics-line-vertical__graphic'),
        absVal = 0; //макс значение, которое считаем за 100%

    items.each(function() {
      var val1 = parseFloat($(this).data('val1').replace(',', '.').replace(' ', ''));
      if (val1 >= absVal) absVal = val1;
    })

    items.each(function() {
      var lines = $(this).find('.analityc-graphics-line-vertical__line');

      var val1 = parseFloat($(this).data('val1').replace(',', '.').replace(' ', '')),
          val2 = parseFloat($(this).data('val2').replace(',', '.').replace(' ', ''));

      var val1perc = val1 / absVal * 100,  // процент от макс значения
          val2perc = val2 / absVal * 100;

      lines.find('.analityc-graphics-line-vertical__line-fill').eq(0).css('height', val1perc + '%');
      lines.find('.analityc-graphics-line-vertical__line-fill').eq(1).css('height', val2perc + '%');
    })
  })

}
