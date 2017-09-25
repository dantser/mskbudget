var budget = { modules: [] };
budget.extend = function(moduleName, moduleData) {
  if (!moduleName) {
    return;
  }
  if (!moduleData) {
    var moduleData = { elements: {}, init: function() { console.log("Empty init for module") } };
  }
  this[moduleName] = moduleData;
  this.modules.push(moduleData);
  return moduleData;
}
budget.init = function() {
  var totalModules = budget.modules.length;
  for (var k = 0; k < totalModules; k++) {
    budget.modules[k].init();
  }
}


//*******************************************
//
//    общее
//
//*******************************************
budget.extend("common", {

  init: function() {

    var self = this;

    $('.blackout').on('click', function() {
      $('#popup-wrapper').fadeOut();
      $(this).fadeOut();
    })
    $('.popup').on('click', function(e) {
      e.stopPropagation()
    })
    $('.popup').find('.close-popup').on('click', function() {
      $('#popup-wrapper').fadeOut();
      $('.blackout').fadeOut();
    })
    $('#blackout [data-answer]').on('click', function() {
      var answer = $(this).data('answer');
      if (answer === 'yes') {
        $('.d-study__lessons_item').removeClass('d-lesson__done');
      }
      $('#popup-wrapper').fadeOut();
      $('.blackout').fadeOut();
    })

    $('.d-study__clear-res').on('click', function(e) {
      e.preventDefault();
      $('#popup-wrapper').fadeIn();
      $('.blackout').fadeIn();
    })

    $('.edu-lesson-link').on('click', function() {
      window.location.href = $(this).attr('href');
      $('.edu-content').removeClass('_active');

      var id = $(this).attr('id');

      $('.edu-content[id="' + id + '"]').addClass('_active');

      $('.edu-lesson-link').removeClass('disable');

      $(this).addClass('disable');

      $('.close-lessons-burger').trigger('click');
    })

    $('.d-sq__head_next').on('click', function() {
      var $active = $('.edu-lesson-link.disable');

      if ($active.next('.edu-lesson-link').length) {
        $active.next('.edu-lesson-link').trigger('click');
      } else {
        $('.edu-lesson-link:first').trigger('click');
      }
    })
    $('.d-sq__head_prev').on('click', function() {
      var $active = $('.edu-lesson-link.disable');

      if ($active.prev('.edu-lesson-link').length) {
        $active.prev('.edu-lesson-link').trigger('click');
      } else {
        $('.edu-lesson-link:last').trigger('click');
      }
    })

    setTimeout(function() {

      self.current_slide = 1;
      self.slide_count = $('.carousel-3d-slide').length;


      $('#carousel').find('.ar-right').on('click', function() {
        var $current = $('.carousel-3d-slide.current');

        if ($current.next('.carousel-3d-slide').length) {
          $current.next('.carousel-3d-slide').click();
        } else {
          $('.carousel-3d-slide:first').click();
        }
      })
      $('#carousel').find('.ar-left').on('click', function() {
        var $current = $('.carousel-3d-slide.current');
        if ($current.prev('.carousel-3d-slide').length) {
          $current.prev('.carousel-3d-slide').click();
        } else {
          $('.carousel-3d-slide:last').click();
        }
      })
      //
      // $('.carousel-3d-slide').on('click', function() {
      //
      //     // self.current_slide = $(this).index('.carousel-3d-slide') + 1;
      //
      //     //$('.carousel-count').html(self.current_slide+'&nbsp;из&nbsp;'+self.slide_count);
      // })

      //$('.carousel-count').html('1&nbsp;из&nbsp;'+self.slide_count);

    }, 0);

    // function appendList(inst, className) {
    //     var $selectElement = inst.dpDiv.find('.' + className);
    //     var selected = $selectElement.find("option[selected]");
    //     var $listElement = $('<dl class="{0} dropdown"></dl>'.replace('{0}', className + '-list')).appendTo($selectElement.parent());
    //     $listElement.append('<dt><a href="#">' + selected.text() + '<span class="value">' + selected.val() + '</span></a></dt>');
    //     $listElement.append('<dd><ul class="dateListItem" ></ul></dd>');
    //     $selectElement.children('option').each(function () {
    //         var $listItem = $listElement.find(".dateListItem").append('<li><a href="#">' + $(this).text() + '<span class="value">' + $(this).val() + '</span></a></li>');
    //         $listItem.hide();
    //         $listItem.find('a').click(function (e) {
    //             e.preventDefault();
    //             $selectElement.val($(this).find('span').text());
    //             $selectElement.change();
    //         });
    //     });
    //     $listElement.find('dt a').click(function (e) {
    //         e.preventDefault();
    //         $(this).closest('dt')
    //           .siblings('dd')
    //           .find('.dateListItem')
    //           .toggle();
    //     });
    // }
    //
    // function convertToLists(inst) {
    //     var self = this;
    //     setTimeout(function () {
    //       inst.dpDiv.addClass('datePickerWithLists');
    //       appendList(inst, 'ui-datepicker-month');
    //       appendList(inst, 'ui-datepicker-year');
    //     }, 0);
    // };

    if ($(".datepicker").length) {
      $(document).find(".datepicker").datepicker();
      $.datepicker.regional['ru'] = {
        changeMonth: true,
        changeYear: true,
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        beforeShowDay: DisableSpecificDates,
        // beforeShow: function(input, inst) {
        //   convertToLists(inst);
        // },
        // onChangeMonthYear: function (year, month, inst) {
        //   convertToLists(inst);
        // }
        onSelect: function() {
          var selecteddate = $(this).val();
          if ($('.js-dp-output').length)
            $(document).find('.js-dp-output_others').text(selecteddate); // Бюджет Москвы - вывод даты в заголовке Исполнение на дату
        }

      };

      function DisableSpecificDates(date) {

        var disableddates = ["8-6-2017", "8-9-2017", "8-15-2017", "8-23-2017", "4-15-2017", "4-20-2017", "4-28-2017", "4-4-2017"];
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
      $.datepicker.setDefaults($.datepicker.regional['ru']);
    }


    $('.quiz-hint-trigger').on('click', function() {
      $(this).next('.quiz-hint').show();
      $(this).hide();
    })
    $('.quiz-hint-close').on('click', function() {
      var $parent = $(this).parents('.quiz-hint');

      $parent.prev().show();
      $parent.hide();

    })

    $('.d-sr__progress-descr_other').on('click', function() {

      if ($(this).hasClass('_active')) {
        //$(this).parents('.d-sr__stat-container').next('.other-info').hide();
        $(this).parents('.d-sr__progress_item').next('.other-info').slideUp();
        $(this).removeClass('_active')
      } else {
        //$(this).parents('.d-sr__stat-container').next('.other-info').show();
        $(this).parents('.d-sr__progress_item').next('.other-info').slideDown();
        $(this).addClass('_active');
      }
    })

    $('.d-question__head_menu').on('click', function() {
      $(this).parents('.d-study__question').find('.burger-lessons-menu').show();
    })

    $('.close-lessons-burger').on('click', function() {
      $(this).parents('.burger-lessons-menu').hide();
    })


    self.setRounds();

    $(window).on('resize', function() {
      self.setRounds();
      if ($('.sectored_round').length) {
        self.correctSectoredRounds();
      }
    })


    if ($(document).find('.sectored_round').length) {
      if ($('.wrapper_main').length) {
        setTimeout(function(){
          self.correctSectoredRounds();
        }, 1000);
      } else {
        self.correctSectoredRounds();
      }
    }

  },

  correctSectoredRounds: function() {

    var self = this;

    $(document).find('.sectored_round').each(function() {

      var count = parseInt($(this).attr('sector-count'));

      var datalist = [];

      for (var i = 0; i < count; i++) {
        datalist[i] = 1;
      }

      var fill_sectors = $(this).attr('fill-sectors');

      var fill = [];
      if (fill_sectors.length) {
        fill = fill_sectors.split(',');
      }

      $(this).attr('width', parseInt($(this).css('width')));
      $(this).attr('height', parseInt($(this).css('height')));

      var canvas = $(this).get(0);
      var ctx = canvas.getContext('2d');

      var stroke_width = parseInt($(this).attr('stroke-width'));

      self.setSectoredCircle(ctx, canvas.width, canvas.height, datalist, fill, stroke_width);

    })
  },

  setRounds: function() {
    var self = this;
    $('.circle').each(function() {

      var timeout = 400;

      $(this).find('.progress').each(function() {


        var proc = $(this).attr('data-val');

        var $progress = $(this);

        setTimeout(function() {
          self.setCircle($progress, proc);
        }, timeout)

        timeout += 400;
      })

    })
  },

  setSectoredCircle: function(ctx, w, h, datalist, fill_sectors, stroke_width) {

    var default_fill = $(ctx.canvas).attr('default-fill') || '#e4e4e4';

    var radius = h / 2 - stroke_width / 2;
    var centerx = w / 2;
    var centery = h / 2;
    var total = 0;

    for (x = 0; x < datalist.length; x++) { total += datalist[x]; };

    var between = stroke_width / 400;

    if (between < 0.05) between = 0.07;


    var lastend = between / 2;
    var offset = Math.PI / 2;

    for (x = 0; x < datalist.length; x++) {

      var thispart = datalist[x];
      ctx.beginPath();

      var grd = ctx.createLinearGradient(0, 0, 0, 250);
      grd.addColorStop(0, "#80c440");
      grd.addColorStop(1, "#c2d41f");

      var arcsector = Math.PI * (2 * thispart / total) - between;
      ctx.arc(centerx, centery, radius, lastend - offset, lastend + arcsector - offset, false);
      ctx.lineWidth = stroke_width;

      var fill = false;

      for (var j = 0; j < fill_sectors.length; j++) {
        if (fill_sectors[j] == x) {

          fill = true;
          break;

        }
      }

      if (fill) {
        ctx.strokeStyle = grd;
      } else {
        ctx.strokeStyle = default_fill;
      }


      ctx.stroke();
      ctx.closePath();
      lastend += arcsector + between;
    }
  },


  setCircle: function($circle, value) {
    var self = this;

    var $svg = $circle.parents('svg');

    var total = 100;

    var val = ((value / total) * 100);


    var r = parseInt($circle.css('r')) || parseInt($circle.attr('r'));

    var c = Math.PI * (r * 2);

    var over = false;

    if (val < 0) { val = 0; }
    if (val > 100) {
      val = 100;
    }

    var pct = ((100 - val) / 100) * c;

    $circle.css({ strokeDashoffset: pct });

  },

  createCircle: function($svg, type, val) {

    var elem = '<circle stroke="url(#linearColors' + type + '-2)" data-val="' + val + '" class="progress" r="165" cx="200" cy="200" stroke-linecap="round" fill="transparent" stroke-dasharray="1037" stroke-dashoffset="1037" style="stroke-dashoffset: 1037px;" stroke-width="60"></circle>';

    $svg.append(elem)

    this.setCircle($svg.find('.progress:last'), val);
  }
})

$(budget.init);
//console.log(budget.init);




//
$(document).ready(function() {

  //
  $('.js-abs-btn').click(function() {
    $('.abs-box--active').removeClass('abs-box--active');
    $(this).parents('.abs-box').addClass('abs-box--active');
    $(".d-abs__nav").addClass("_active");
    //if ($(window).width() < 970) {
    //    $("html, body").animate({scrollTop: $(".abs-box--active .puzzle-inner").offset().top - 100}, 600);
    //}

    //$(window).resize(function() {
    //  if ($(window).width() < 970) {
    //    $("html, body").animate({scrollTop: $(".abs-box--active .puzzle-inner").offset().top - 100}, 600);
    //}})
    return false;
  });
  $('.js-abs-close').click(function() {
    $('.abs-box--active').removeClass('abs-box--active');
    $(".d-abs__nav").removeClass("_active");
    //if ($(window).width() < 970) {
    //    $("html, body").animate({scrollTop: $(".d-abs__nav").offset().top - 80}, 600);
    //}

    //$(window).resize(function() {
    //  if ($(window).width() < 970) {
    //    $("html, body").animate({scrollTop: $(".abs-box--active .puzzle-inner").offset().top - 100}, 600);
    //}})
  });
  $(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
      $('.js-abs-close').click();
    }
  });
  //


  //init func
  if (!$('.wrapper_main').length) {
    basicBudgetFiguresDiagrams();
  }
  tabsLine();
  sectionTabs();
  stepsDetails();
  stageSlider();
  dateSlider();
});
//$(document).ready * end

//
function tabsLine() {
  if ($('.owl-nav').length) {
    $('.owl-nav').each(function() {
      var next = $(this).find('.owl-next');
      var prev = $(this).find('.owl-prev');

      if ($(this).hasClass('owl-nav_members')) {
        
        var navItem = $(this).parents('.section-tabs').find('.dd-holder .section-tabs__nav-item');
        
        next.on('click', function(e) {
          
          navItem.each(function(){
            var nawItemWidth = 0;
            $(this).prevAll().each(function(){
              nawItemWidth = nawItemWidth + $(this).outerWidth();
            });
            $(this).attr('data-offset', nawItemWidth);
          });
          
          var currentHolderPosition = $(this).parents('.section-tabs').find('.dd-holder').scrollLeft();
          var currentNavItem;
          
          for (var i = 0; i < navItem.length; i++) {
            var navItemPosition = Math.floor(navItem.eq(i).position().left);
            
            if (navItemPosition > 0) {
              currentNavItem = navItem.eq(i);
              break;
            } else if (navItemPosition == 0) {
              currentNavItem = navItem.eq(i+1);
              break;
            }
          }
          
          var offset = currentNavItem.data('offset');
          $(this).parents('.section-tabs').find('.dd-holder').animate({ scrollLeft: offset }, 300);
        });

        prev.on('click', function(e) {
          
          navItem.each(function(){
            var nawItemWidth = 0;
            $(this).prevAll().each(function(){
              nawItemWidth = nawItemWidth + $(this).outerWidth();
            });
            $(this).attr('data-offset', nawItemWidth);
          });
          
          var currentHolderPosition = $(this).parents('.section-tabs').find('.dd-holder').scrollLeft();
          var currentNavItem;
          
          for (var i = 0; i < navItem.length; i++) {
            var navItemPosition = Math.floor(navItem.eq(i).position().left);
            
            if (navItemPosition > 0) {
              currentNavItem = navItem.eq(i-1);
              break;
            } else if (navItemPosition == 0) {
              currentNavItem = navItem.eq(i-1);
              if (i-1 < 0) {
                currentNavItem = navItem.eq(i);
              }
              break;
            }
          }
          
          var offset = currentNavItem.data('offset');
          $(this).parents('.section-tabs').find('.dd-holder').animate({ scrollLeft: offset }, 300);
        });

      } else {
        next.on('click', function(e) {
          var offset = $(this).parents('.section-tabs').find('.tile__item').outerWidth(true);
          $(this).parents('.section-tabs').find('.dd-holder').animate({ scrollLeft: '+='+offset }, 300);
        });

        prev.on('click', function(e) {
          var offset = $(this).parents('.section-tabs').find('.tile__item').outerWidth(true);
          $(this).parents('.section-tabs').find('.dd-holder').animate({ scrollLeft: '-='+offset }, 300);
        });
      }
    });
  }

//   if ($('.owl-nav_members').length) {
//     $('.owl-nav_members').each(function() {
//       var next = $(this).find('.owl-next_members');
//       var prev = $(this).find('.owl-prev_members');
//
//
//
//
//     });
// }

  function arrowActive(el) {
    if (!el) {
      return
    }
    var sL = el.scrollLeft(),
      leftArr = el.parents('.section-tabs').find('.owl-prev'),
      rightArr = el.parents('.section-tabs').find('.owl-next');

    if (sL === 0) {
      leftArr.addClass('disabled');
    } else if (sL === (el.prop('scrollWidth') - el.width().toFixed(0))) {
      rightArr.addClass('disabled');
    } else {
      leftArr.removeClass('disabled');
      rightArr.removeClass('disabled');
    }
  }
  if ($('.dd-holder').length) {
    arrowActive($('.dd-holder'));
    $('.dd-holder').each(function() {
      $(this).scroll(function() {
        arrowActive($(this));
      });
    })
  }


  $('.js-label-button').click(function() {
    var sectionTabs = $(this).parents('.section-tabs');
    setTimeout(function() {
      sectionTabs.find(".whitescreen1").fadeToggle(100);
    }, 500)

    sectionTabs.find($('.section-tabs__nav')).slideToggle();
    sectionTabs.find($('.owl-nav')).toggle();

    $(this).toggleClass('js-label-button-closed');
    sectionTabs.toggleClass('active');
    sectionTabs.find($('.section-tabs__head')).toggleClass('section-tabs__head_closed');
    return false
    /*
    если понадобиться скрывать пункты в навигации табов,
    то при клике надо будет реинициализировать карусельку
    */
  });

  $('.js-label').click(function() {
    var sectionTabs = $(this).parents('.section-tabs');
    sectionTabs.find($('.section-tabs__content')).slideToggle();
  })

  if ($('.owl-carousel.sections').length) {
    $('.owl-carousel.sections').owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      responsiveClass: true,
      center: false,
      autoWidth: true, //разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: false,
      smartSpeed: 400,
      responsive: {
        0: {
          touchDrag: true,
          autoWidth: false,
          items: 1
        },
        520: {
          autoWidth: true
        },
        1025: {
          touchDrag: false
        }
      }
    });
  }

  //   $('.owl-carousel.documents').owlCarousel({
  //  loop:false,
  //  margin:0,
  //  nav:true,
  //  responsiveClass:true,
  //  center:false,
  //   mouseDrag: true,
  //   touchDrag:true,
  //
  //  // autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
  //   startPosition:0,
  //   items: 'auto',
  //   responsive: {
  //     0: {
  //       touchDrag:true,
  //       items: 1
  //     },
  //     650: {
  //       touchDrag: true,
  //       items: 2
  //     },
  //     970: {
  //       touchDrag: true,
  //       items: 3
  //     },
  //     1024: {
  //       touchDrag: true,
  //       items: 3
  //     },
  //     1280: {
  //       touchDrag: false,
  //       items: 4
  //     }
  //   },
  //  dots:false,
  //  autoplay:false,
  //  smartSpeed:500
  // });

  //   $('.owl-carousel.owl-carousel_news').owlCarousel({
  //     loop:false,
  //     margin:0,
  //     nav:true,
  //     responsiveClass:true,
  //     center:false,
  //     // autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
  //     startPosition:0,
  //     items: 4,
  //     responsive: {
  //       0: {
  //         touchDrag:true,
  //         items: 1
  //       },
  //       650: {
  //         touchDrag: true,
  //         items: 2
  //       },
  //       970: {
  //         touchDrag: true,
  //         items: 3
  //       },
  //       1024: {
  //         touchDrag: true,
  //         items: 3
  //       },
  //       1280: {
  //         touchDrag: false,
  //         items: 4
  //       }
  //     },
  //     dots:false,
  //     mouseDrag:false,
  //     touchDrag:false,
  //     autoplay:false,
  //     smartSpeed:500
  //   });
  //
  // $('.owl-carousel.owl-carousel_services').owlCarousel({
  //   loop:false,
  //   margin:0,
  //   nav:true,
  //   responsiveClass:true,
  //   center:false,
  //   // autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
  //   startPosition:0,
  //   items: 4,
  //   responsive: {
  //     0: {
  //       touchDrag:true,
  //       items: 1
  //     },
  //     650: {
  //       touchDrag: true,
  //       items: 2
  //     },
  //     970: {
  //       touchDrag: true,
  //       items: 3
  //     },
  //     1024: {
  //       touchDrag: true,
  //       items: 3
  //     },
  //     1280: {
  //       touchDrag: false,
  //       items: 4
  //     }
  //   },
  //   dots:false,
  //   mouseDrag:false,
  //   touchDrag:false,
  //   autoplay:false,
  //   smartSpeed:500
  // });

  // var owl = $('.owl-carousel');
  //
  // $(document).on('click', '.btn-arrow--prev', function(e){
  //  $(this).parents('.section-tabs__nav').find('.owl-prev').click();
  //  // owl.trigger('refresh.owl.carousel');
  //  return false
  // });
  // $(document).on('click', '.btn-arrow--next', function(e){
  //  $(this).parents('.section-tabs__nav').find('.owl-next').click();
  //   return false
  // });
}

//
function sectionTabs() {

  var sectionTabNavBtnActive = 'section-tabs__nav-btn--active';
  var sectionTabActive = 'section-tabs__tab--active';

  $(document).on('click', '.section-tabs__nav-btn', function() {
    if (!$(this).hasClass(sectionTabNavBtnActive)) {
      $('.' + sectionTabNavBtnActive).removeClass(sectionTabNavBtnActive);
      $('.' + sectionTabActive).removeClass(sectionTabActive);
      $(this).addClass(sectionTabNavBtnActive);
      $('.section-tabs_members').addClass('active');
      //$('.owl-nav').show();
      $('[data-target="' + $(this).data('data-target-for') + '"]').addClass('participant_active');
      $('.section-tabs_members .section-tabs__head').removeClass('section-tabs__head_closed');
      $('.section-tabs_members .section-tabs__nav, .section-tabs_members .section-tabs__content').slideDown();
      $('[data-section-tab-for="' + $(this).data('section-tab-for') + '"]').addClass(sectionTabNavBtnActive);
      $('[data-section-tab="' + $(this).data('section-tab-for') + '"]').addClass(sectionTabActive);
      if ($(window).width() < 800) {
        //window.scroll = $(window).scrollTop();
        //$("body").css('top', -scroll + 'px').toggleClass('noscroll');
        $('body').css('overflow', 'hidden');
      }
    }
    return false
  });

  $('.js-tab-close').click(function() {
    $('.section-tabs__tab--active').removeClass('section-tabs__tab--active');
    $('.section-tabs__nav-btn--active').removeClass('section-tabs__nav-btn--active');
    if ($(window).width() < 800) {
      //$("body").css('top', "0").removeClass('noscroll');
      //$(window).scrollTop(scroll);
      $('body').css('overflow', '');
    }
  });

  $('.section-tabs__participants-list a').click(function(e) {
    e.preventDefault();
    var sectionTab = $(this).attr('data-section-tab-for');
    $('.section-tabs__tab--active').removeClass('section-tabs__tab--active');
    $('[data-section-tab="' + sectionTab + '"]').addClass('section-tabs__tab--active');
    $('.section-tabs__tab--active').scrollTop(0);
  });
}

function stepsDetails() {
  $('.graphic-table__title-wrap, .step .link-more, .step__head, .graphic-table__line-output').each(function() {
    $(this).click(function(e) {
      e.preventDefault();
      var output = false;
      if ($(this).hasClass('graphic-table__title-wrap')) {
        var stepNumber = $(this).attr('data-step');
      }
      if ($(this).hasClass('link-more') || $(this).hasClass('step__head')) {
        var stepNumber = $(this).parents('.step').attr('data-step');
      }
      if ($(this).hasClass('graphic-table__line-output')) {
        output = true;
        var stepNumber = $(this).parents('.graphic-table__table-tr').find('.graphic-table__title-wrap').attr('data-step');
      }
      $('.steps').each(function() {
        var steps = $('.steps:visible'),
          graphicRow = $('.graphic-table__title-wrap[data-step="' + stepNumber + '"]').parents('.graphic-table__table-tr:visible'),
          currentStep = $('.step[data-step="' + stepNumber + '"]:visible'),
          currentStepHead = currentStep.find($('.step__head')),
          currentStepDescr = currentStep.find($('.step__descr')),
          stepsDetails = steps.find('.steps-details'),
          currentStepDetails = $('.steps-details__content[data-step="' + stepNumber + '"]'),
          stepsOffset = steps.offset().top,
          stepDescrOffset = currentStepDescr.offset().top,
          offsetDiff = stepDescrOffset - stepsOffset;

        $('.graphic-table__table-tr').removeClass('active');
        graphicRow.addClass('active');
        $('.step__head').removeClass('active');
        currentStepHead.addClass('active');
        $('.steps-details__content').hide();
        currentStepDetails.show();
        
        if (output) {
          setTimeout(function(){
            if ($(window).width() > 800) {
              var headerHeight = $('.header').outerHeight();
              var dateBlockOffset = $('.tabs__tab.active').find(currentStepDetails).find('.steps-details__date-list').offset().top;
              dateBlockOffset -= headerHeight+30;
              $('html, body').animate( {scrollTop: dateBlockOffset}, 1000);
            } else {
              var dateBlockOffset = $('.tabs__tab.active').find(currentStepDetails).find('.steps-details__date-list-wrapper').position().top;
              dateBlockOffset -= 110;
              $('.tabs__tab.active .steps-details__wrapper').animate({scrollTop: dateBlockOffset}, 1000);
            }
          }, 700);
        }
        
        if ($(window).width() > 800) {
          stepsDetails.show();
          stepsDetails.css('top', offsetDiff + 'px').addClass('active');
          steps.css('height', offsetDiff + stepsDetails.outerHeight() + 'px');
        } else {
          stepsDetails.show();
          stepsDetails.addClass('active');
          window.scroll = $(window).scrollTop();
          $("body").css('top', -scroll + 'px').toggleClass('noscroll');
        }
      })
    });
  })


  $('.js-steps-detail-close').click(function() {
    $('.graphic-table__table-tr').removeClass('active');
    $('.step__head').removeClass('active');
    $('.steps-details').removeClass('active');
    setTimeout(function() {
      $('.steps-details').hide();
    }, 250);
    if ($(window).width() > 800) {
      $('.steps').css('height', 'auto');
    } else {
      $("body").css('top', "0").removeClass('noscroll');
      $(window).scrollTop(scroll);
    }
  });
}


function stageSlider() {
  $('.steps__mob-slider').each(function() {
    var currentSlide = 0,
      slideAmount = $(this).find('.steps__mob-slider-item').length;

    $('.steps__mob-slider-arrow').click(function() {
      $('.steps__mob-slider-arrow').removeClass('steps__mob-slider-arrow-blocked');
      if ($(this).hasClass('steps__mob-slider-arrow_next')) {
        currentSlide++;
        if (currentSlide > slideAmount - 1) {
          currentSlide = slideAmount - 1;
          $(this).addClass('steps__mob-slider-arrow-blocked');
        } else if (currentSlide > slideAmount - 2) {
          $(this).addClass('steps__mob-slider-arrow-blocked');
        }
      } else {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = 0;
          $(this).addClass('steps__mob-slider-arrow-blocked');
        } else if (currentSlide < 1) {
          $(this).addClass('steps__mob-slider-arrow-blocked');
        }
      }
      $('.steps__mob-wrapper').css('left', '-' + currentSlide * 100 + '%');
      $('.steps__holder').css('left', '-' + currentSlide * 100 + '%');
    });

  });
}

function dateSlider() {

  $('.steps-details__date-list a').click(function(e) {
    e.preventDefault();
    if ($(window).width() > 800) {
      var activity = $(this).attr('data-activity');
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      $('.steps-details__activity').removeClass('active');
      $('.steps-details__activity[data-activity="' + activity + '"]').addClass('active');
    }
  });

  $('.steps-details__date-list-wrapper').each(function() {
    var currentSlide = 0,
      slideAmount = $(this).find('.steps-details__date-list li').length;

    $('.steps-details__date-list-arrow').click(function() {
      $('.steps-details__date-list-arrow').removeClass('disabled');
      if ($(this).hasClass('steps-details__date-list-arrow_next')) {
        currentSlide++;
        if (currentSlide > slideAmount - 1) {
          currentSlide = slideAmount - 1;
        }
        if (currentSlide === slideAmount - 1) {
          $(this).addClass('disabled');
        }
      } else {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = 0;
        }
        if (currentSlide === 0) {
          $(this).addClass('disabled');
        }
      }
      $('.steps-details__date-list').css('left', '-' + currentSlide * 100 + '%');
      var activity = $('.steps-details__date-list li').eq(currentSlide).find('a').attr('data-activity');
      $('.steps-details__activity').removeClass('active');
      $('.steps-details__activity[data-activity="' + activity + '"]').addClass('active');
    });

  });

  $(window).resize(function() {
    $('.steps-details__date-list li').removeClass('active');
    $('.steps-details__date-list li:first-child').addClass('active');
    $('.steps-details__activity').removeClass('active');
    $('.steps-details__activity[data-activity="1"]').addClass('active');
  });
}


function basicBudgetFiguresDiagrams() {
  diagram('#diagram-01', {
    stroke: 30,
    kind: 'triple2',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050
  }); //.animate();

  diagram('#diagram-02', {
    stroke: 30,
    kind: 'triple2',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050
  }); //.animate();

  diagram('#diagram-03', {
    stroke: 30,
    kind: 'triple2',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050
  }); //.animate();

  diagram('#diagram-1', {
    stroke: 30,
    kind: 'triple',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050
  }); //.animate();

  diagram('#diagram-2', {
    stroke: 30,
    kind: 'triple',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050
  }); //.animate();

  diagram('#diagram-3', {
    stroke: 30,
    kind: 'triple',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050
  }); //.animate();

  var diagram_4 = diagram('#diagram-4', {
    viewBox: 390,
    stroke: 60,
    kind: 'ifinite',
    data: [1921.7],
    gradient: ['#008ADF', '#00E6F9'],
    valClass: ['large-diagram__value-lightblue', 'large-diagram__value-blue'],
    maxValue: 1665.5,
    animate: true
  });

  var diagram_5 = diagram('#diagram-5', {
    viewBox: 390,
    stroke: 60,
    kind: 'ifinite',
    data: [1364.5],
    gradient: ['#9D308A', '#ED5F64'],
    valClass: ['large-diagram__value-pink', 'large-diagram__value-violet'],
    maxValue: 1865.5,
    animate: true
  });

  // function appendList(inst, className) {
  //     var $selectElement = inst.dpDiv.find('.' + className);
  //     var selected = $selectElement.find("option[selected]");
  //     var $listElement = $('<dl class="{0} dropdown"></dl>'.replace('{0}', className + '-list')).appendTo($selectElement.parent());
  //     $listElement.append('<dt><a href="#">' + selected.text() + '<span class="value">' + selected.val() + '</span></a></dt>');
  //     $listElement.append('<dd><ul class="dateListItem" ></ul></dd>');
  //     $selectElement.children('option').each(function () {
  //         var $listItem = $listElement.find(".dateListItem").append('<li><a href="#">' + $(this).text() + '<span class="value">' + $(this).val() + '</span></a></li>');
  //         $listItem.hide();
  //         $listItem.find('a').click(function (e) {
  //             e.preventDefault();
  //             $selectElement.val($(this).find('span').text());
  //             $selectElement.change();
  //         });
  //     });
  //     $listElement.find('dt a').click(function (e) {
  //         e.preventDefault();
  //         $(this).closest('dt')
  //           .siblings('dd')
  //           .find('.dateListItem')
  //           .toggle();
  //     });
  // }
  //
  // function convertToLists(inst) {
  //     var self = this;
  //     setTimeout(function () {
  //       inst.dpDiv.addClass('datePickerWithLists');
  //       appendList(inst, 'ui-datepicker-month');
  //       appendList(inst, 'ui-datepicker-year');
  //     }, 0);
  // };

  //   if($( ".jq-spec-datepicker-alt" ).length > 0){
  //  $('.jq-spec-datepicker-alt').datepicker({
  //    dateFormat:'на dd M',
  //    changeMonth: true,
  //    changeYear: true,
  //    showOtherMonths: true,
  //    selectOtherMonths: false,
  //    firstDay: 1,
  //    monthNames: ['январь','февраль','март','апрель','май','июнь',
  //    'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
  //    monthNamesShort: ['января','февраля','марта','апреля','мая','июня',
  //    'июля','августа','сентября','октября','ноября','декабря'],
  //    dayNamesMin: ['вс', 'пн','вт','ср','чт','пт','сб'],
  //    beforeShow: function(input, inst) {
  //
  //      $('#ui-datepicker-div').removeClass(function() {
  //        return $('input').get(0).id;
  //      });
  //      $('#ui-datepicker-div').removeClass('datepicker__show');
  //      $('#ui-datepicker-div').addClass($(this).attr('class'));
  //    },
  //     onChangeMonthYear: function (year, month, inst) {
  //       convertToLists(inst);
  //     }
  //  });
  // }

  if ($(".jq-spec-datepicker-one").length > 0) {
    $('.jq-spec-datepicker-one').datepicker({
      dateFormat: 'dd M yy',
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
      beforeShowDay: EnableSpecificDates,
      onSelect: function() {
        var selecteddate = $(this).val();
        $(this).next().val(selecteddate);
      }
      // beforeShow: function(input, inst) {
      //   convertToLists(inst);
      // },
      // onChangeMonthYear: function (year, month, inst) {
      //   convertToLists(inst);
      // }
    });
  }

  function DisableSpecificDates(date) {

    var disableddates = ["8-6-2017", "8-9-2017", "8-15-2017", "8-23-2017"];
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
  
  function EnableSpecificDates(date) {
      var enableddates = ["6-6-2017", "6-9-2017", "6-15-2017", "6-23-2017", "10-26-2017", "10-4-2017", "10-12-2017", "1-28-2018"];
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


}
$(document).ready(function() {
  $(".gov-program .analityc-control-button").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var program = $(".dropdown"),
      programGraphics = program.find($('.analityc-graphics')),
      programTable = program.find($('.analityc-table')),
      programGraphicsActive = program.find($('.analityc-graphics.active')),
      programTableActive = program.find($('.analityc-table.active'));

    if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (programTableActive.hasClass('analityc-table')) {
        programTable.removeClass('active');
        programGraphics.addClass('active');
      }
    } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (programGraphicsActive.hasClass('analityc-graphics')) {
        programGraphics.removeClass('active');
        programTable.addClass('active');
      }
    }
  });
});
// переключение вкладок в (depfin_analytics_income)
$(document).ready(function() {
  // $('.analityc-widget_sources .analityc-control-group._dp').addClass('active');
  // $('.ar').hide();
  $(".analityc-widget_params-income .analityc-control-group_comparison .analityc-select").on("change", function() {
    var $this = $(this);
    var income = $('.analityc-widget_params-income'),
      // arrow = $('.ar'),
      // tablearr = $('section__ar');
      incomeGraphics = income.find($('.analityc-widget-sources')),
      incomeGraphicsPace = income.find($('.analityc-widget-income_pace')),
      incomeGraphicsShare = income.find($('.analityc-widget-income_share')),
      incomeGraphicsDone = income.find($('.analityc-widget-income_done')),
      incomeGraphicsYear = income.find($('.analityc-widget-income_year')),
      incomeGraphicsBarFull = income.find($('.analityc-widget-income_bars-full')),
      incomeGraphicsBar = income.find($('.analityc-widget-income_bars')),
      incomeGraphicsButton = income.find($('.d-smr__add-char'));

    incomeGraphics.removeClass('_active');
    incomeGraphicsButton.removeClass('_active');
    // tablearr.hide();

    if ($this.val() === "Общий анализ основных видов доходов") {
      incomeGraphicsPace.addClass('_active');
    } else {
      incomeGraphicsBarFull.addClass('_active');
    }
  });

  // function sourcesHead(type) {
  //   var sourcesButtons = $('.analityc-widget_sources .analityc-control-buttons'),
  //       sourcesSwitcherBig = $('.analityc-widget_sources .analityc-control-switcher_big'),
  //       sourcesDatepicker = $('.analityc-widget_sources .analityc-control-group._dp');
  //
  //   if (type === 1) {
  //     sourcesButtons.addClass('active');
  //     sourcesSwitcherBig.removeClass('active');
  //     sourcesDatepicker.removeClass('active');
  //   } else if (type === 2) {
  //     sourcesButtons.addClass('active');
  //     sourcesSwitcherBig.addClass('active');
  //     sourcesDatepicker.removeClass('active');
  //   } else if (type === 3) {
  //     sourcesButtons.addClass('active');
  //     sourcesSwitcherBig.removeClass('active');
  //     sourcesDatepicker.addClass('active');
  //   }
  // }

  $(".analityc-widget_params-income .analityc-control-switcher").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var income = $('.analityc-widget_params-income'),
      // arrow = $('.ar'),
      // tablearr = $('.section__ar'),
      incomeGraphics = income.find($('.analityc-widget-sources')),
      incomeGraphicsPace = income.find($('.analityc-widget-income_pace')),
      incomeGraphicsShare = income.find($('.analityc-widget-income_share')),
      incomeGraphicsDone = income.find($('.analityc-widget-income_done')),
      incomeGraphicsYear = income.find($('.analityc-widget-income_year')),
      incomeGraphicsBarFull = income.find($('.analityc-widget-income_bars-full')),
      incomeGraphicsBar = income.find($('.analityc-widget-income_bars'));

    if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (sourcesTableActive.hasClass('analityc-widget-sources-table_approved')) {
        sourcesTable.removeClass('_active');
        sourcesGraphicsApproved.addClass('_active');
        sourcesHead(1);
        arrow.show();
        tablearr.hide();
      } else if (sourcesTableActive.hasClass('analityc-widget-sources-table_changes')) {
        sourcesTable.removeClass('_active');
        sourcesGraphicsChanges.addClass('_active');
        sourcesHead(1);
        arrow.show();
        tablearr.hide();
      } else if (sourcesTableActive.hasClass('analityc-widget-sources-table_done')) {
        sourcesTable.removeClass('_active');
        sourcesGraphicsDone.addClass('_active');
        sourcesHead(1);
        arrow.hide();
        tablearr.hide();
      } else if (sourcesTableActive.hasClass('analityc-widget-sources-table_date')) {
        sourcesTable.removeClass('_active');
        sourcesGraphicsDate.addClass('_active');
        sourcesHead(3);
        arrow.hide();
        tablearr.hide();
      }
    } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (sourcesGraphicsActive.hasClass('analityc-widget-sources_approved')) {
        sourcesGraphics.removeClass('_active');
        sourcesTableApproved.addClass('_active');
        sourcesHead(2);
        arrow.hide();
        tablearr.show();
      } else if (sourcesGraphicsActive.hasClass('analityc-widget-sources_changes')) {
        sourcesGraphics.removeClass('_active');
        sourcesTableChanges.addClass('_active');
        sourcesHead(2);
        arrow.hide();
        tablearr.show();
      } else if (sourcesGraphicsActive.hasClass('analityc-widget-sources_done')) {
        sourcesGraphics.removeClass('_active');
        sourcesTableDone.addClass('_active');
        sourcesHead(2);
        arrow.hide();
        tablearr.show();
      } else if (sourcesGraphicsActive.hasClass('analityc-widget-sources_date')) {
        sourcesGraphics.removeClass('_active');
        sourcesTableDate.addClass('_active');
        sourcesHead(2);
        arrow.hide();
        tablearr.show();
      }
    }
  });
});
