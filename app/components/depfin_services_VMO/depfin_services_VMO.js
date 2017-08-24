import $ from 'jquery';
import 'jquery.scrollbar';

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

// Custom scroll for "паспорта ВМО"
  VMO.find('.services-VMO__table__wrapper').scrollbar();

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

}
