import $ from 'jquery';

export default () => {

  // @qluqua FIX <iframe>-футера ДИТа
  // что бы он не ломал верстку полноэкранных слайдов
  // Шаманим только на главной странице
  if ($('body').hasClass('home')) {
    var timerTick = null;
    var timerInner = function() {
      if ($('.footer-frame-wrp').length) {
        clearTimeout(timerTick);
        $('.footer-frame-wrp').appendTo($('#footer .footer__common'));
      } else {
        timerTick = setTimeout(timerInner, 100);
      }
    }
    timerTick = setTimeout(timerInner, 500);
  };

  // полноэкранные слайды на главной странице
  var winW = $(window).width(),
    winH = $(window).height();

  if ($('.sections_fs').length > 0) {

    $('.sections_fs').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      draggable: false,
      vertical: true,
      swipe: false,
      sliderId: 'sections',
    });

    var elem = $('.wrapper')[0];

    if (elem != null) {
      if (elem.addEventListener) {
        if ('onwheel' in document) {
          elem.addEventListener("wheel", onWheel, { passive: true });
        } else if ('onmousewheel' in document) {
          elem.addEventListener("mousewheel", onWheel, { passive: true });
        } else {
          elem.addEventListener("MozMousePixelScroll", onWheel, { passive: true });
        }
      } else {
        elem.attachEvent("onmousewheel", onWheel);
      }
    }

    var anim = false;

    var browser = {};
    browser.ie11 = /rv:11\.0/.test(navigator.userAgent.toLowerCase());
    browser.safari = /safari/.test(navigator.userAgent.toLowerCase()) && !/chrome/.test(navigator.userAgent.toLowerCase());


    function anFin() {
      anim = false;
    }

    function onWheel(e) {
      e = e || window.event;
      var delta = e.deltaY || e.detail || e.wheelDelta;

      if (browser.ie11 || browser.safari) {
        delta = delta * -1;
      }


      if (delta > 0 && anim == false) {

        anim = true;

        $('.sections_fs').slick('slickNext');

        $('.sections_fs').on('afterChange', function() {

          setTimeout(function() { anFin(); }, 500);

        });

      } else if (delta < 0 && anim == false) {

        anim = true;

        $('.sections_fs').slick('slickPrev');

        $('.sections_fs').on('afterChange', function() {

          setTimeout(function() { anFin(); }, 500);

        });

      }
    }


    // $('.sections_fs').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //  //console.log();

    //  if( winW > 700 && slick.options.sliderId == 'sections'){

    //    if( nextSlide > 0 ){
    //      $('.header').addClass('header_short');
    //      $('.guide').addClass('guide_short');
    //    }else{
    //      $('.header').removeClass('header_short');
    //      $('.guide').removeClass('guide_short');
    //    }
    //  }

    // });

    $('.sections_fs').swipe({
      swipe: function(event, direction) {

        if (direction == "up") {

          this.slick('slickNext');

        } else if (direction == "down") {

          this.slick('slickPrev');

        }

      },
      excludedElements: '',
      threshold: 121,
    });



    $(document).keydown(function(e) {
      if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {


        if (e.keyCode === 37) {

          $('.slick-current .slider').slick('slickPrev');

        } else if (e.keyCode === 38) {

          $('.sections_fs').slick('slickPrev');

        } else if (e.keyCode === 39) {

          $('.slick-current .slider').slick('slickNext');

        } else if (e.keyCode === 40) {

          $('.sections_fs').slick('slickNext');

        }

      }
    });

  }


  if ($('.wrapper_main').length) {
    $(window).resize(function() {
      location.reload();
    });
  }

  $('.service__icon').each(function() {
    $(this).on('click', (e) => {
      e.preventDefault();
      $(this).toggleClass('service__icon_active');
    })
  })


  $(document).ready(function() {

    if ($(".jq-spec-datepicker-alt").length > 0) {
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
        }
      });
    }

    if ($(".jq-spec-datepicker").length > 0) {
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
        beforeShowDay: DisableSpecificDates,
        beforeShow: function(input, inst) {
          $('#ui-datepicker-div').removeClass(function() {
            return $('input').get(0).id;
          });
          $('#ui-datepicker-div').removeClass('datepicker__show');
          $('#ui-datepicker-div').addClass($(this).attr('class'));
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

    $(document).on('click', function() {
      $('.jq-spec-datepicker').blur().removeClass('hasDatepicker');
    });

  });

}
