import $ from 'jquery';
import 'jquery-ui-bundle';
import noUiSlider from 'nouislider';
import '../../blocks/range/range';
import '../depfin-services-main/depfin-services-main';

export default () => {
  
  $(document).ready(function() {
    
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
    
    if ($('.wrapper_main').length) {
      
      if (isMobile.any()) {
        
        var windowHeight = $(window).height();
        $('.wrapper_main').css('height', windowHeight+'px');
        $('body').css('overflow', 'hidden');
        
      } else {
        
        $(window).resize(function() {
          location.reload();
        });
        
      }
    }

    if ($('.service__icon').length) {
      $('.service__icon').each(function() {
        $(this).on('click', (e) => {
          e.preventDefault();
          $(this).toggleClass('service__icon_active');
        })
      });
    }
      
    function initSpecDP() {
      $('.jq-spec-datepicker').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: true,
        changeYear: true,
        showOtherMonths: true,
        selectOtherMonths: false,
        firstDay: 1,
        monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
          'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
        ],
        monthNamesShort: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
          'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
        ],
        dayNamesMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        beforeShowDay: function(date) {
          return EnableSpecificDates(date, ["6-6-2017", "6-9-2017", "6-15-2017", "6-23-2017", "10-26-2017", "10-4-2017", "10-12-2017", "1-28-2018"]);
        },
        beforeShow: function(input, inst) {
          $('#ui-datepicker-div').removeClass(function() {
            return $('input').get(0).id;
          });
          $('#ui-datepicker-div').removeClass('datepicker__show');
          $('#ui-datepicker-div').addClass($(this).attr('class'));
        },
        onSelect: function() {
          var selecteddate = $(this).val();
          $(this).next().val(selecteddate);
        }
      });
    }
    
    function initSpecDPalt() {
      $('.jq-spec-datepicker-alt').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: true,
        changeYear: true,
        showOtherMonths: true,
        selectOtherMonths: false,
        firstDay: 1,
        monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
          'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
        ],
        monthNamesShort: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
          'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
        ],
        dayNamesMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        beforeShowDay: function(date) {

          if (date.getDate() == 1) {
            return [true, ''];
          }
          return [false, ''];
        },
        beforeShow: function(input, inst) {
          $('#ui-datepicker-div').removeClass(function() {
            return $('input').get(0).id;
          });
          $('#ui-datepicker-div').removeClass('datepicker__show');
          $('#ui-datepicker-div').addClass($(this).attr('class'));
        },
        onSelect: function() {
          var selecteddate = $(this).val();
          $(this).next().val(selecteddate);
        }
      });
    }

    function DisableSpecificDates(date) {
      var disableddates = ["6-6-2017", "6-9-2017", "6-15-2017", "6-23-2017", "10-26-2017", "10-4-2017", "10-12-2017", "1-28-2017"];
      var m = date.getMonth();
      var d = date.getDate();
      var y = date.getFullYear();
      var day = date.getDay();

      // First convert the date in to the mm-dd-yyyy format
      // Take note that we will increment the month count by 1
      var currentdate = (m + 1) + '-' + d + '-' + y;

      // We will now check if the date belongs to disableddates array
      for (var i = 0; i < disableddates.length; i++) {

        // Now check if the current date is in disabled dates array.
        if ($.inArray(currentdate, disableddates) != -1) {
          return [false];
        } else if (day == 1 || day == 0) {
          return [false];
        } else {
          return [true];
        }
      }
    }
    
    function EnableSpecificDates(date, dateset) {
      var enableddates = dateset;
      var m = date.getMonth();
      var d = date.getDate();
      var y = date.getFullYear();
      var day = date.getDay();

      // First convert the date in to the mm-dd-yyyy format
      // Take note that we will increment the month count by 1
      var currentdate = (m + 1) + '-' + d + '-' + y;

      // We will now check if the date belongs to enableddates array
      for (var i = 0; i < enableddates.length; i++) {

        // Now check if the current date is in enabled dates array.
        if ($.inArray(currentdate, enableddates) != -1) {
          return [true];
        } else {
          return [false];
        }
      }
    }
    
    
    // Инициализация календарей
   /* if ($(".jq-spec-datepicker").length > 0) {
      if ($('.wrapper_main').length) {
        setTimeout(function(){
          initSpecDP();
        },1000);
      }else {
        initSpecDP();
      }
    }
    
    if ($(".jq-spec-datepicker-alt").length > 0) {
      if ($('.wrapper_main').length) {
        setTimeout(function(){
          initSpecDPalt();
        },1000);
      } else {
        initSpecDPalt();
      }
    }*/

    $(document).on('click', function() {
      $('.jq-spec-datepicker').blur().removeClass('hasDatepicker');
    });
    
    $(document).on('click', function(e){
      if (!$(e.target).parents('.ui-datepicker, .ui-datepicker-prev, .ui-datepicker-next, .sections__datepicker .dp, .widget-card-gov-programs .widget-card__datepicker').length) {
        $('.jq-spec-datepicker').datepicker('hide');
      }
    });
    
    // Обрезание текста троеточием
    if ($('.wrapper_main').length) {
      
      function overflowDotts(size, element) {
        var content = $(element);
        content.each(function () {
          var contentText = $(this).text();
          if(contentText.length > size){
            $(this).text((contentText.slice(0, size)).trim() + '...');
          }
        });
      };
      
      overflowDotts(80, '.news__title'); 
    }
    
  });
}
