import $ from 'jquery';

export default () => {

  $(document).ready(function(){
    $(".gov-debt__analityc-widget .analityc-control-group._stage select.analityc-select").on("change", function () {
      var $this = $(this);
      var govdebt = $(".gov-debt__analityc-widget"),
          govdebtGraphics = govdebt.find($('.gov-debt__analityc-tab_govdebt .gov-debt__analityc-graphics')),
          govdebtGraphicsApproved = govdebt.find($('.analityc-graphics_approved')),
          govdebtGraphicsChanges = govdebt.find($('.analityc-graphics_changes')),
          govdebtGraphicsDate = govdebt.find($('.analityc-graphics_date'));

      govdebtGraphics.removeClass('active');

      if ($this.val() ===  "Закон о бюджете утвержденный") {
        govdebtGraphicsApproved.addClass('active');
        govdebtHead(1);
      } else if ($this.val() ===  "Закон о внесении изменений") {
        govdebtGraphicsChanges.addClass('active');
        govdebtHead(1);
      } else if ($this.val() ===  "Исполнение на дату") {
        govdebtGraphicsDate.addClass('active');
        govdebtHead(2);
      }

    });

    function govdebtHead(type) {
      var govdebtSwitcher = $('.gov-debt__analityc-widgethead .analityc-control-switcher'),
          govdebtDatepicker = $('.gov-debt__analityc-widget .analityc-control-group._dp');

      if (type === 1) {
        govdebtSwitcher.removeClass('active');
        govdebtDatepicker.removeClass('active');
      } else if (type === 2) {
        govdebtSwitcher.addClass('active');
        govdebtDatepicker.addClass('active');
      }
    }

    $('.gov-debt__analityc-tab-link').click(function(e){
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var govdebtTab = $(this).data('govdebt-tab');
      $('.gov-debt__analityc-tab').removeClass('active');
      $('.gov-debt__analityc-tab_'+govdebtTab+'').addClass('active');
    });

  });

  if ($( ".gov-debt__datepicker" ).length) {
    $( ".gov-debt__datepicker" ).datepicker();
    $.datepicker.regional['ru'] = {
    changeMonth: true,
    changeYear: true,
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    bbeforeShowDay: function (date) {

      if (date.getDate() == 1) {
          return [true, ''];
      }
      return [false, ''];
    }
    // beforeShow: function(input, inst) {
    //   convertToLists(inst);
    // },
    // onChangeMonthYear: function (year, month, inst) {
    //   convertToLists(inst);
    // }
    };
  }
}
