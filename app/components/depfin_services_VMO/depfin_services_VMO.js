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
  VMO.find('.svg-map path').hover(function(e) {
    
    var coordsX = $(this).offset().left,
        coordsY = $(this).offset().top,
        width = this.getBoundingClientRect().width,
        height = this.getBoundingClientRect().height;

    MAP_POPUP.addClass('active');
    MAP_POPUP.offset({top:coordsY + height, left:coordsX - width / 2});

  }, function() {
    MAP_POPUP.removeClass('active');
  })

  const SORT_BTN = VMO.find('.services-VMO__sort');

  SORT_BTN.click(function() {
    $(this).toggleClass('services-VMO__sort_desc services-VMO__sort_ask');
  })

}
