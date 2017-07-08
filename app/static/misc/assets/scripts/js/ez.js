var budget = {modules : []};
budget.extend = function(moduleName, moduleData){
    if(!moduleName){
        return;
    }
    if(!moduleData){
        var moduleData = {elements: {}, init: function(){console.log("Empty init for module")}};
    }
    this[moduleName] = moduleData;
    this.modules.push( moduleData );
    return moduleData;
}
budget.init = function(){
    var totalModules = budget.modules.length;
    for(var k = 0; k < totalModules; k++){
        budget.modules[k].init();
    }
}


//*******************************************
//
//    общее
//
//*******************************************
budget.extend("common", {

    init: function () {

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
        $('#blackout [data-answer]').on('click', function(){
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
			//$('.edu-content').removeClass('_active');

			//var id = $(this).attr('id');

			//$('.edu-content[id="'+id+'"]').addClass('_active');

			//$('.edu-lesson-link').removeClass('disable');

			//$(this).addClass('disable');

			//$('.close-lessons-burger').trigger('click');
		})

		//$('.d-sq__head_next').on('click', function() {
		//	var $active = $('.edu-lesson-link.disable');

		//	if ($active.next('.edu-lesson-link').length) {
		//		$active.next('.edu-lesson-link').trigger('click');
		//	} else {
		//		$('.edu-lesson-link:first').trigger('click');
		//	}
		//})
		//$('.d-sq__head_prev').on('click', function() {
		//	var $active = $('.edu-lesson-link.disable');

		//	if ($active.prev('.edu-lesson-link').length) {
		//		$active.prev('.edu-lesson-link').trigger('click');
		//	} else {
		//		$('.edu-lesson-link:last').trigger('click');
		//	}
		//})

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

		},0)

		if ($( ".datepicker" ).length) {
			$( ".datepicker" ).datepicker();
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
			isRTL: false
			};
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


        if ($('.sectored_round').length) {
            self.correctSectoredRounds();
        }

    },

    correctSectoredRounds: function() {

        var self = this;

        $('.sectored_round').each(function() {

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

        var radius = h / 2 - stroke_width/2;
        var centerx = w / 2;
        var centery = h / 2;
        var total = 0;

        for(x=0; x < datalist.length; x++) { total += datalist[x]; };

        var between = stroke_width / 400;

        if (between < 0.05) between = 0.07;


        var lastend = between / 2;
        var offset = Math.PI / 2;

        for (x=0; x < datalist.length; x++) {

            var thispart = datalist[x];
            ctx.beginPath();

            var grd=ctx.createLinearGradient(0,0,0,250);
            grd.addColorStop(0,"#80c440");
            grd.addColorStop(1,"#c2d41f");

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

		var val = ((value/total)*100);


		var r = parseInt($circle.css('r')) || parseInt($circle.attr('r'));

		var c = Math.PI*(r*2);

		var over = false;

		if (val < 0) { val = 0;}
		if (val > 100) {
			val = 100;
		}

		var pct = ((100-val)/100)*c;

		$circle.css({strokeDashoffset: pct});

	},

	createCircle: function($svg, type, val) {

		var elem = '<circle stroke="url(#linearColors'+type+'-2)" data-val="'+val+'" class="progress" r="165" cx="200" cy="200" stroke-linecap="round" fill="transparent" stroke-dasharray="1037" stroke-dashoffset="1037" style="stroke-dashoffset: 1037px;" stroke-width="60"></circle>';

		$svg.append(elem)

		this.setCircle($svg.find('.progress:last'), val);
	}
})

$(budget.init);




//
$(document).ready(function(){

//
$('.js-abs-btn').click(function(){
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
$('.js-abs-close').click(function(){
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
$(document).on('keyup', function(e){
	if(e.keyCode == 27){
		$('.js-abs-close').click();
	}
});
//


//init func
tabsLine();
sectionTabs();
stepsDetails();
stageSlider();
dateSlider();
basicBudgetFiguresDiagrams();
});
//$(document).ready * end

//
function tabsLine(){
	$('.js-label-button').click(function(){
      var sectionTabs = $(this).parents('.section-tabs');
      sectionTabs.find($('.section-tabs__nav')).slideToggle();
      sectionTabs.find($('.owl-nav')).slideToggle();
      sectionTabs.find($('.section-tabs__content')).slideToggle();
      $(this).toggleClass('js-label-button-closed');
      sectionTabs.toggleClass('active');
      sectionTabs.find($('.section-tabs__head')).toggleClass('section-tabs__head_closed');
      return false
		/*
		если понадобиться скрывать пункты в навигации табов,
		то при клике надо будет реинициализировать карусельку
		*/
	});

	$('.owl-carousel.sections').owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		responsiveClass:true,
		center:false,
		autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
		startPosition:0,
		dots:false,
		mouseDrag:false,
		touchDrag:false,
		autoplay:false,
		smartSpeed:500
	});

    $('.owl-carousel.documents').owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		responsiveClass:true,
		center:false,
		// autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
    startPosition:0,
    items: 4,
    responsive: {
      0: {
        touchDrag:true,
        items: 1
      },
      650: {
        touchDrag: true,
        items: 2
      },
      970: {
        touchDrag: true,
        items: 3
      },
      1280: {
        touchDrag: false,
        items: 4
      }
    },
		dots:false,
		mouseDrag:false,
		touchDrag:false,
		autoplay:false,
		smartSpeed:500
	});

  $('.owl-carousel.owl-carousel_news').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  responsiveClass:true,
  center:false,
  // autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
  startPosition:0,
  items: 3,
  responsive: {
    0: {
      touchDrag:true,
      items: 1
    },
    900: {
      touchDrag: true,
      items: 2
    },
    1024: {
      touchDrag: true
    },
    1280: {
      touchDrag: false,
      items: 3
    }
  },
  dots:false,
  mouseDrag:false,
  touchDrag:false,
  autoplay:false,
  smartSpeed:500
});

$('.owl-carousel.owl-carousel_services').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  responsiveClass:true,
  center:false,
  // autoWidth:true,//разная ширина слайдов, ширину задавать на вложенный блок у слайда! + не указывать явно items:1,
  startPosition:0,
  items: 4,
  responsive: {
    0: {
      touchDrag:true,
      items: 1
    },
    650: {
      touchDrag: true,
      items: 2
    },
    970: {
      touchDrag: true,
      items: 3
    },
    1280: {
      touchDrag: false,
      items: 4
    }
  },
  dots:false,
  mouseDrag:false,
  touchDrag:false,
  autoplay:false,
  smartSpeed:500
});

	// var owl = $('.owl-carousel');
  //
	// $(document).on('click', '.btn-arrow--prev', function(e){
	// 	$(this).parents('.section-tabs__nav').find('.owl-prev').click();
	// 	// owl.trigger('refresh.owl.carousel');
	// 	return false
	// });
	// $(document).on('click', '.btn-arrow--next', function(e){
	// 	$(this).parents('.section-tabs__nav').find('.owl-next').click();
  //   return false
	// });
}

//
function sectionTabs(){

	var sectionTabNavBtnActive = 'section-tabs__nav-btn--active';
	var sectionTabActive = 'section-tabs__tab--active';

	$(document).on('click', '.section-tabs__nav-btn', function(){
		if(!$(this).hasClass(sectionTabNavBtnActive)){
			$('.' + sectionTabNavBtnActive).removeClass(sectionTabNavBtnActive);
			$('.' + sectionTabActive).removeClass(sectionTabActive);
			$(this).addClass(sectionTabNavBtnActive);
			$('[data-section-tab="'+ $(this).data('section-tab-for') + '"]').addClass(sectionTabActive);
            if ($(window).width() < 800) {
              window.scroll = $(window).scrollTop();
              $("body").css('top', -scroll + 'px').toggleClass('noscroll');
            }
		}
		return false
	});

	$('.js-tab-close').click(function(){
		$('.section-tabs__tab--active').removeClass('section-tabs__tab--active');
		$('.section-tabs__nav-btn--active').removeClass('section-tabs__nav-btn--active');
        if ($(window).width() < 800) {
          $("body").css('top', "0").removeClass('noscroll');
          $(window).scrollTop(scroll);
        }
	});

    $('.section-tabs__participants-list a').click(function(e){
      e.preventDefault();
      var sectionTab = $(this).attr('data-section-tab-for');
      $('.section-tabs__tab--active').removeClass('section-tabs__tab--active');
      $('[data-section-tab="'+ sectionTab + '"]').addClass('section-tabs__tab--active');
      $('.section-tabs__tab--active').scrollTop(0);
    });
}

function stepsDetails(){
  $('.graphic-table__title-wrap, .step .link-more').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('graphic-table__title-wrap')) {
      var stepNumber = $(this).attr('data-step');
    }
    if ($(this).hasClass('link-more')) {
      var stepNumber = $(this).parents('.step').attr('data-step');
    }

    var steps = $('.steps'),
        graphicRow = $('.graphic-table__title-wrap[data-step="'+stepNumber+'"]').parents('.graphic-table__table-tr'),
        currentStep = $('.step[data-step="'+stepNumber+'"]'),
        currentStepHead = currentStep.find($('.step__head')),
        currentStepDescr = currentStep.find($('.step__descr')),
        stepsDetails = $('.steps-details'),
        currentStepDetails = $('.steps-details__content[data-step="'+stepNumber+'"]'),
        stepsOffset = steps.offset().top,
        stepDescrOffset = currentStepDescr.offset().top,
        offsetDiff = stepDescrOffset - stepsOffset;

    $('.graphic-table__table-tr').removeClass('active');
    graphicRow.addClass('active');
    $('.step__head').removeClass('active');
    currentStepHead.addClass('active');
    $('.steps-details__content').hide();
    currentStepDetails.show();
    if ($(window).width() > 800) {
      stepsDetails.show();
      stepsDetails.css('top', offsetDiff+'px').addClass('active');
      steps.css('height', offsetDiff+stepsDetails.outerHeight()+'px');
    } else {
      stepsDetails.show();
      stepsDetails.addClass('active');
      window.scroll = $(window).scrollTop();
      $("body").css('top', -scroll + 'px').toggleClass('noscroll');
    }
  });

  $('.js-steps-detail-close').click(function(){
    $('.graphic-table__table-tr').removeClass('active');
    $('.step__head').removeClass('active');
    $('.steps-details').removeClass('active');
    setTimeout(function(){
      $('.steps-details').hide();
    }, 250);
    if ($(window).width() > 800) {
      $('.steps').css('height', 'auto');
    } else {
      $("body").css('top', "0").removeClass('noscroll');
      $(window).scrollTop(scroll);
    }
  });

  $(window).resize(function(){
    $('.graphic-table__table-tr').removeClass('active');
    $('.step__head').removeClass('active');
    $('.steps-details').css('top', '0').removeClass('active');
    setTimeout(function(){
      $('.steps-details').hide();
    }, 250);
    $('.steps').css('height', 'auto');
    if ($('body').hasClass('noscroll')) {
      $("body").css('top', "0").removeClass('noscroll');
      $(window).scrollTop(scroll);
    }
  });
}



function stageSlider() {
  $('.steps__mob-slider').each(function(){
    var currentSlide = 0,
        slideAmount = $(this).find('.steps__mob-slider-item').length;

    $('.steps__mob-slider-arrow').click(function(){
      $('.steps__mob-slider-arrow').removeClass('steps__mob-slider-arrow-blocked');
      if($(this).hasClass('steps__mob-slider-arrow_next')) {
        currentSlide++;
        if (currentSlide > slideAmount-1) {
          currentSlide = slideAmount-1;
          $(this).addClass('steps__mob-slider-arrow-blocked');
        }
      } else {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = 0;
          $(this).addClass('steps__mob-slider-arrow-blocked');
        }
      }
      $('.steps__mob-wrapper').css('left', '-'+currentSlide*100+'%');
      $('.steps__holder').css('left', '-'+currentSlide*100+'%');
    });

  });
}

function dateSlider() {

  $('.steps-details__date-list a').click(function(e){
    e.preventDefault();
    if ($(window).width() > 800) {
      var activity = $(this).attr('data-activity');
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      $('.steps-details__activity').removeClass('active');
      $('.steps-details__activity[data-activity="'+activity+'"]').addClass('active');
    }
  });

  $('.steps-details__date-list-wrapper').each(function(){
    var currentSlide = 0,
        slideAmount = $(this).find('.steps-details__date-list li').length;

    $('.steps-details__date-list-arrow').click(function(){
      $('.steps-details__date-list-arrow').removeClass('disabled');
      if($(this).hasClass('steps-details__date-list-arrow_next')) {
        currentSlide++;
        if (currentSlide > slideAmount-1) {
          currentSlide = slideAmount-1;
        }
        if (currentSlide === slideAmount-1) {
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
      $('.steps-details__date-list').css('left', '-'+currentSlide*100+'%');
      var activity = $('.steps-details__date-list li').eq(currentSlide).find('a').attr('data-activity');
      $('.steps-details__activity').removeClass('active');
      $('.steps-details__activity[data-activity="'+activity+'"]').addClass('active');
    });

  });

  $(window).resize(function(){
    $('.steps-details__date-list li').removeClass('active');
    $('.steps-details__date-list li:first-child').addClass('active');
    $('.steps-details__activity').removeClass('active');
    $('.steps-details__activity[data-activity="1"]').addClass('active');
  });
}


function basicBudgetFiguresDiagrams () {
    diagram( '#diagram-1', {
        stroke: 30,
        kind: 'triple',
        data: [ 1446.2, 1598.9],
        animate: true,
        maxValue: 2050
    }).animate();

    diagram( '#diagram-2', {
        stroke: 30,
        kind: 'triple',
        data: [ 1446.2, 1598.9],
        animate: true,
        maxValue: 2050
    }).animate();

    diagram('#diagram-3', {
        stroke: 30,
        kind: 'triple',
        data: [ 1446.2, 1598.9],
        animate: true,
        maxValue: 2050
    }).animate();

    var diagram_4 = diagram('#diagram-4', {
        viewBox: 390,
        stroke: 60,
        kind: 'ifinite',
        data: [ 1921.7 ],
        gradient: ['#008ADF', '#00E6F9'],
        valClass: ['large-diagram__value-lightblue', 'large-diagram__value-blue'],
        maxValue: 1665.5,
        animate: true
    });

    var diagram_5 = diagram('#diagram-5', {
        viewBox: 390,
        stroke: 60,
        kind: 'ifinite',
        data: [ 1364.5 ],
        gradient: [ '#9D308A', '#ED5F64' ],
        valClass: ['large-diagram__value-pink', 'large-diagram__value-violet'],
        maxValue: 1865.5,
        animate: true
    });

    $(".analityc-control-group._stage .analityc-select").on("change", function () {
      if ($(this).parents('.analityc-widget_figures')) {
        var $this = $(this);

        $(".analityc-widget-rounds").removeClass("_active");
        if ($this.val() === "Закон об исполнении") {
            $(".analityc-widget-rounds:eq(0)").addClass("_active");
		} else {
            $(".analityc-widget-rounds:eq(1)").addClass("_active");
            diagram_4.animate();
            diagram_5.animate();
		}
		if ($this.val() === "Заключительный этап" || $this.val() ===  "Исполнение на дату") {
            $(".analityc-control-group._dp").show();
            $(".analityc-control-group._percent").hide();

		}
    else {
            $(".analityc-control-group._dp").hide();
            $(".analityc-control-group._percent").show();
		}
      }
	});

  $(".analityc-control-button").on("click", function(e) {
    if (!$(this).parents('.analityc-widget__income') && !$(this).parents('.analityc-widget__expenses') && !$(this).parents('.analityc-widget_sources') && !$(this).parents('.analityc-widget_moscow-gov-program')) {
    e.preventDefault();
    var table = $(".analityc-control-button_table");
    var $this = $(this);
    $('.analityc-control-button').removeClass('active');
    $this.toggleClass('active');
    $(".analityc-widget-sources").removeClass("_active");

     if (table.hasClass("active")) {

        $(".analityc-widget-sources_table").addClass("_active");
    } else {
      $(".analityc-widget-sources_table").removeClass("_active");
    }
    }
  })

  $(".analityc-control-group._stage .analityc-select").on("change", function () {
    if (!$(this).parents('.analityc-widget__income') && !$(this).parents('.analityc-widget__expenses')) {
      var $this = $(this);
      $(".analityc-widget-sources").removeClass("_active");

      if ($this.val() ===  "Исполнение на дату") {
          $(".analityc-widget-sources:eq(0)").addClass("_active");
      } else if($this.val() ===  "Закон о бюджете утвержденный") {
              $(".analityc-widget-sources:eq(1)").addClass("_active");
      } else if($this.val() ===  "Закон о внесении изменений") {
              $(".analityc-widget-sources:eq(2)").addClass("_active");
      } else if($this.val() ===  "Закон об исполнении") {
              $(".analityc-widget-sources:eq(3)").addClass("_active");
      }

      if ($this.val() ===  "Исполнение на дату") {
              $(".analityc-control-group._dp").show();
              $(".analityc-control-switcher").hide();

      } else if ($this.val() ===  "Закон о внесении изменений") {
              $(".analityc-control-group._dp").hide();
              $(".analityc-control-switcher").css('display', 'inline-block');
      }
      else {
              $(".analityc-control-group._dp").hide();
              $(".analityc-control-switcher").hide();
      }
    }
  });
}
$(document).ready(function(){
 $(".gov-program .analityc-control-button").on("click", function (e) {
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
$(document).ready(function(){
  // $('.analityc-widget_sources .analityc-control-group._dp').addClass('active');
  // $('.ar').hide();
  $(".analityc-widget_params-income .analityc-control-group_comparison .analityc-select").on("change", function () {
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

    if ($this.val() ===  "Общий анализ основных видов доходов") {
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

// переключение вкладок в budget_moscow_gov_program
$(document).ready(function(){
  $('.analityc-widget_moscow-gov-program .analityc-control-switcher_large').addClass('active');
  $('.ar').hide();
  $(".analityc-widget_moscow-gov-program .analityc-control-group._stage .analityc-select").on("change", function () {
    var $this = $(this);
    var sources = $('.analityc-widget_moscow-gov-program'),
        arrow = $('.ar'),
        tablearr = $('section__ar');
        gpGraphics = sources.find($('.analityc-widget-sources')),
        gpGraphicsDate = sources.find($('.analityc-widget-moscow-gov-program_date')),
        gpGraphicsStructure = sources.find($('.analityc-widget-moscow-gov-program_structure')),
        gpGraphicsChanges = sources.find($('.analityc-widget-moscow-gov-program_changes')),
        gpGraphicsDone = sources.find($('.analityc-widget-moscow-gov-program_done')),
        gpGraphicsButton = sources.find($('.analityc-control-button_graphics')),
        gpTable = sources.find($('.analityc-table')),
        gpTableButton = sources.find($('.analityc-control-button_table'));

    gpGraphics.removeClass('_active');
    gpTable.removeClass('_active');
    gpGraphicsButton.addClass('_active');
    gpTableButton.removeClass('_active');
    tablearr.hide();

    if ($this.val() ===  "Закон о бюджете утвержденный") {
      gpGraphicsDone.addClass('_active');
      gpHead(1);
      arrow.show();
    } else if($this.val() ===  "Закон о внесении изменений") {
      gpGraphicsChanges.addClass('_active');
      gpHead(2);
      arrow.show();
    } else if($this.val() ===  "Исполнение на дату") {
      gpGraphicsDate.addClass('_active');
      gpHead(3);
      arrow.hide();
    }

  });

  function gpHead(type) {
    var gpButtons = $('.analityc-widget_moscow-gov-program .analityc-control-buttons'),
        gpSwitcherBig = $('.analityc-widget_moscow-gov-program .analityc-control-switcher_large'),
        gpDatepicker = $('.analityc-widget_moscow-gov-program .analityc-control-group._dp');

    if (type === 1) {
      gpButtons.addClass('active');
      gpSwitcherBig.addClass('active');
      gpDatepicker.removeClass('active');
    } else if (type === 2) {
      gpButtons.addClass('active');
      gpSwitcherBig.removeClass('active');
      gpDatepicker.removeClass('active');
    } else if (type === 3) {
      gpButtons.addClass('active');
      gpSwitcherBig.removeClass('active');
      gpDatepicker.addClass('active');
    }
  }

  $(".analityc-widget_moscow-gov-program .analityc-control-button").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var sources = $(".analityc-widget_moscow-gov-program"),
        arrow = $('.ar'),
        tablearr = $('.section__ar'),
        gpGraphics = sources.find($('.analityc-widget-sources')),
        gpGraphicsActive = sources.find($('.analityc-widget-sources._active')),
        gpGraphicsDate = sources.find($('.analityc-widget-moscow-gov-program_date')),
        gpGraphicsStructure = sources.find($('.analityc-widget-moscow-gov-program_structure')),
        gpGraphicsChanges = sources.find($('.analityc-widget-moscow-gov-program_changes')),
        gpGraphicsDone = sources.find($('.analityc-widget-moscow-gov-program_done')),
        gpTable = sources.find($('.analityc-table')),
        gpTableActive = sources.find($('.analityc-table._active')),
        gpTableStructure = sources.find($('.analityc-widget-moscow-gov-program-table_structure')),
        gpTableChanges = sources.find($('.analityc-widget-moscow-gov-program-table_changes')),
        gpTableDone = sources.find($('.analityc-widget-moscow-gov-program-table_done')),
        gpTableDate = sources.find($('.analityc-widget-moscow-gov-program-table_date'));

    if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (gpTableActive.hasClass('analityc-widget-moscow-gov-program-table_structure')) {
        gpTable.removeClass('_active');
        gpGraphicsStructure.addClass('_active');
        gpHead(1);
        arrow.show();
        tablearr.hide();
      } else if (gpTableActive.hasClass('analityc-widget-moscow-gov-program-table_changes')) {
        gpTable.removeClass('_active');
        gpGraphicsChanges.addClass('_active');
        gpHead(2);
        arrow.show();
        tablearr.hide();
      } else if (gpTableActive.hasClass('analityc-widget-moscow-gov-program-table_done')) {
        gpTable.removeClass('_active');
        gpGraphicsDone.addClass('_active');
        gpHead(1);
        arrow.hide();
        tablearr.hide();
      } else if (gpTableActive.hasClass('analityc-widget-moscow-gov-program-table_date')) {
        gpTable.removeClass('_active');
        gpGraphicsDate.addClass('_active');
        gpHead(3);
        arrow.hide();
        tablearr.hide();
      }
    } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (gpGraphicsActive.hasClass('analityc-widget-moscow-gov-program_structure')) {
        gpGraphics.removeClass('_active');
        gpTableStructure.addClass('_active');
        gpHead(1);
        arrow.hide();
        tablearr.show();
      } else if (gpGraphicsActive.hasClass('analityc-widget-moscow-gov-program_changes')) {
        gpGraphics.removeClass('_active');
        gpTableChanges.addClass('_active');
        gpHead(2);
        arrow.hide();
        tablearr.show();
      } else if (gpGraphicsActive.hasClass('analityc-widget-moscow-gov-program_done')) {
        gpGraphics.removeClass('_active');
        gpTableDone.addClass('_active');
        gpHead(2);
        arrow.hide();
        tablearr.show();
      } else if (gpGraphicsActive.hasClass('analityc-widget-moscow-gov-program_date')) {
        gpGraphics.removeClass('_active');
        gpTableDate.addClass('_active');
        gpHead(3);
        arrow.hide();
        tablearr.show();
      }
    }
  });
});


  $(".analityc-widget_params-income .analityc-control-switcher").on("click", function (e) {
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

// переключение вкладок в (budget_moscow_sources)
$(document).ready(function(){
  $('.analityc-widget_sources .analityc-control-group._dp').addClass('active');
  $('.ar').hide();
  $(".analityc-widget_sources .analityc-control-group._stage .analityc-select").on("change", function () {
    var $this = $(this);
    var sources = $('.analityc-widget_sources'),
        arrow = $('.ar'),
        tablearr = $('section__ar');
        sourcesGraphics = sources.find($('.analityc-widget-sources')),
        sourcesGraphicsApproved = sources.find($('.analityc-widget-sources_approved')),
        sourcesGraphicsChanges = sources.find($('.analityc-widget-sources_changes')),
        sourcesGraphicsDone = sources.find($('.analityc-widget-sources_done')),
        sourcesGraphicsDate = sources.find($('.analityc-widget-sources_date')),
        sourcesGraphicsButton = sources.find($('.analityc-control-button_graphics')),
        sourcesTable = sources.find($('.analityc-table')),
        sourcesTableButton = sources.find($('.analityc-control-button_table'));

    sourcesGraphics.removeClass('_active');
    sourcesTable.removeClass('_active');
    sourcesGraphicsButton.addClass('_active');
    sourcesTableButton.removeClass('_active');
    tablearr.hide();

    if ($this.val() ===  "Закон о бюджете утвержденный") {
      sourcesGraphicsApproved.addClass('_active');
      sourcesHead(1);
      arrow.show();
    } else if($this.val() ===  "Закон о внесении изменений") {
      sourcesGraphicsChanges.addClass('_active');
      sourcesHead(1);
      arrow.show();
    } else if($this.val() ===  "Закон об исполнении") {
      sourcesGraphicsDone.addClass('_active');
      sourcesHead(1);
      arrow.hide();
    } else if($this.val() ===  "Исполнение на дату") {
      sourcesGraphicsDate.addClass('_active');
      sourcesHead(3);
      arrow.hide();
    }

  });

  function sourcesHead(type) {
    var sourcesButtons = $('.analityc-widget_sources .analityc-control-buttons'),
        sourcesSwitcherBig = $('.analityc-widget_sources .analityc-control-switcher_big'),
        sourcesDatepicker = $('.analityc-widget_sources .analityc-control-group._dp');

    if (type === 1) {
      sourcesButtons.addClass('active');
      sourcesSwitcherBig.removeClass('active');
      sourcesDatepicker.removeClass('active');
    } else if (type === 2) {
      sourcesButtons.addClass('active');
      sourcesSwitcherBig.addClass('active');
      sourcesDatepicker.removeClass('active');
    } else if (type === 3) {
      sourcesButtons.addClass('active');
      sourcesSwitcherBig.removeClass('active');
      sourcesDatepicker.addClass('active');
    }
  }

  $(".analityc-widget_sources .analityc-control-button").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var sources = $(".analityc-widget_sources"),
        arrow = $('.ar'),
        tablearr = $('.section__ar'),
        sourcesGraphics = sources.find($('.analityc-widget-sources')),
        sourcesGraphicsActive = sources.find($('.analityc-widget-sources._active')),
        sourcesGraphicsApproved = sources.find($('.analityc-widget-sources_approved')),
        sourcesGraphicsChanges = sources.find($('.analityc-widget-sources_changes')),
        sourcesGraphicsDone = sources.find($('.analityc-widget-sources_done')),
        sourcesGraphicsDate = sources.find($('.analityc-widget-sources_date')),
        sourcesTable = sources.find($('.analityc-table')),
        sourcesTableActive = sources.find($('.analityc-table._active')),
        sourcesTableApproved = sources.find($('.analityc-widget-sources-table_approved')),
        sourcesTableChanges = sources.find($('.analityc-widget-sources-table_changes')),
        sourcesTableDone = sources.find($('.analityc-widget-sources-table_done')),
        sourcesTableDate = sources.find($('.analityc-widget-sources-table_date'));

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

// переключение вкладок в Доходах бюджета (budget_income)
$(document).ready(function(){
  $(".analityc-widget_income .analityc-control-group._stage select.analityc-select").on("change", function () {
    var $this = $(this);
    var income = $(".analityc-widget_income"),
        incomeGraphics = income.find($('.analityc-graphics')),
        incomeGraphicsApproved = income.find($('.analityc-graphics_approved')),
        incomeGraphicsChanges = income.find($('.analityc-graphics_changes')),
        incomeGraphicsDone = income.find($('.analityc-graphics_done')),
        incomeGraphicsDateOne = income.find($('.analityc-graphics_date-one')),
        incomeGraphicsButton = income.find($('.analityc-control-button_graphics')),
        incomeTable = income.find($('.analityc-table')),
        incomeTableButton = income.find($('.analityc-control-button_table'));

    incomeGraphics.removeClass('active');
    incomeTable.removeClass('active');
    incomeGraphicsButton.addClass('active');
    incomeTableButton.removeClass('active');

    if ($this.val() ===  "Закон о бюджете утвержденный") {
      incomeGraphicsApproved.addClass('active');
      incomeHead(1);
    } else if($this.val() ===  "Закон о внесении изменений") {
      incomeGraphicsChanges.addClass('active');
      incomeHead(2);
    } else if($this.val() ===  "Закон об исполнении") {
      incomeGraphicsDone.addClass('active');
      incomeHead(1);
    } else if($this.val() ===  "Исполнение на дату") {
      incomeGraphicsDateOne.addClass('active');
      incomeHead(4);
    }

  });

  function incomeHead(type) {
    var incomeSwitcherDef = $('.analityc-widget_income .analityc-control-switcher_default'),
        incomeButtons = $('.analityc-widget_income .analityc-control-buttons'),
        incomeSwitcherBig = $('.analityc-widget_income .analityc-control-switcher_big'),
        incomeDatepicker = $('.analityc-widget_income .analityc-control-group._dp');

    if (type === 1) {
      incomeSwitcherDef.addClass('active');
      incomeButtons.addClass('active');
      incomeSwitcherBig.removeClass('active');
      incomeDatepicker.removeClass('active');
    } else if (type === 2) {
      incomeSwitcherDef.removeClass('active');
      incomeButtons.addClass('active');
      incomeSwitcherBig.removeClass('active');
      incomeDatepicker.removeClass('active');
    } else if (type === 3) {
      incomeSwitcherDef.removeClass('active');
      incomeButtons.addClass('active');
      incomeSwitcherBig.addClass('active');
      incomeDatepicker.removeClass('active');
    } else if (type === 4) {
      incomeSwitcherDef.removeClass('active');
      incomeButtons.addClass('active');
      incomeSwitcherBig.removeClass('active');
      incomeDatepicker.addClass('active');
    }
  }

  $(".analityc-widget_income .analityc-control-button").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var income = $(".analityc-widget_income"),
        incomeGraphics = income.find($('.analityc-graphics')),
        incomeGraphicsActive = income.find($('.analityc-graphics.active')),
        incomeGraphicsApproved = income.find($('.analityc-graphics_approved')),
        incomeGraphicsChanges = income.find($('.analityc-graphics_changes')),
        incomeGraphicsDone = income.find($('.analityc-graphics_done')),
        incomeGraphicsDateOne = income.find($('.analityc-graphics_date-one')),
        incomeTable = income.find($('.analityc-table')),
        incomeTableActive = income.find($('.analityc-table.active')),
        incomeTableApproved = income.find($('.analityc-table_approved')),
        incomeTableChanges = income.find($('.analityc-table_changes')),
        incomeTableDone = income.find($('.analityc-table_done')),
        incomeTableDate = income.find($('.analityc-table_date'));

    if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (incomeTableActive.hasClass('analityc-table_approved')) {
        incomeTable.removeClass('active');
        incomeGraphicsApproved.addClass('active');
        incomeHead(1);
      } else if (incomeTableActive.hasClass('analityc-table_changes')) {
        incomeTable.removeClass('active');
        incomeGraphicsChanges.addClass('active');
        incomeHead(2);
      } else if (incomeTableActive.hasClass('analityc-table_done')) {
        incomeTable.removeClass('active');
        incomeGraphicsDone.addClass('active');
        incomeHead(1);
      } else if (incomeTableActive.hasClass('analityc-table_date')) {
        incomeTable.removeClass('active');
        incomeGraphicsDateOne.addClass('active');
        incomeHead(4);
      }
    } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (incomeGraphicsActive.hasClass('analityc-graphics_approved')) {
        incomeGraphics.removeClass('active');
        incomeTableApproved.addClass('active');
        incomeHead(1);
      } else if (incomeGraphicsActive.hasClass('analityc-graphics_changes')) {
        incomeGraphics.removeClass('active');
        incomeTableChanges.addClass('active');
        incomeHead(3);
      } else if (incomeGraphicsActive.hasClass('analityc-graphics_done')) {
        incomeGraphics.removeClass('active');
        incomeTableDone.addClass('active');
        incomeHead(1);
      } else if (incomeGraphicsActive.hasClass('analityc-graphics_date-one')) {
        incomeGraphics.removeClass('active');
        incomeTableDate.addClass('active');
        incomeHead(4);
      }
    }
  });

  $(".analityc-widget_income .analityc-control-group._dp input").on("change", function () {
    var income = $(".analityc-widget_income"),
        incomeGraphics = income.find($('.analityc-graphics')),
        incomeGraphicsActive = income.find($('.analityc-graphics.active')),
        incomeGraphicsDateTwo = income.find($('.analityc-graphics_date-two'));

    if (incomeGraphicsActive.hasClass('analityc-graphics_date-one')) {
      incomeGraphics.removeClass('active');
      incomeGraphicsDateTwo.addClass('active');
    }
  });
});


// переключение вкладок в Расходах бюджета (budget_expenses)
$(document).ready(function(){
  $(".analityc-widget_expenses .analityc-control-group._stage select.analityc-select").on("change", function () {
    var $this = $(this);
    var $classify = $(".analityc-widget_expenses .analityc-control-group._classify select.analityc-select");
    var expenses = $(".analityc-widget_expenses"),
        expensesGraphics = expenses.find($('.analityc-graphics')),
        expensesGraphicsChanges = expenses.find($('.analityc-graphics_changes')),
        expensesGraphicsDone = expenses.find($('.analityc-graphics_done')),
        expensesGraphicsDateOne = expenses.find($('.analityc-graphics_date-one')),
        expensesGraphicsTargeted = expenses.find($('.analityc-graphics_targeted')),
        expensesGraphicsSections = expenses.find($('.analityc-graphics_sections')),
        expensesGraphicsDepartments = expenses.find($('.analityc-graphics_departments')),
        expensesGraphicsKinds = expenses.find($('.analityc-graphics_kinds')),
        expensesGraphicsButton = expenses.find($('.analityc-control-button_graphics')),
        expensesTable = expenses.find($('.analityc-table')),
        expensesTableButton = expenses.find($('.analityc-control-button_table')),
        expensesBottomTip = expenses.find($('.analityc-bottomtip'));

    expensesGraphics.removeClass('active');
    expensesTable.removeClass('active');
    expensesGraphicsButton.addClass('active');
    expensesTableButton.removeClass('active');
    expensesBottomTip.removeClass('active');

    if ($this.val() ===  "Закон о бюджете утвержденный" && $classify.val() === "Целевые статьи (программный и непрограммный тип)") {
      expensesGraphicsTargeted.addClass('active');
      expensesBottomTip.addClass('active');
      expensesHead(1);
    } else if ($this.val() ===  "Закон о бюджете утвержденный" && $classify.val() === "Разделы и подразделы") {
      expensesGraphicsSections.addClass('active');
      expensesBottomTip.addClass('active');
      expensesHead(1);
    } else if ($this.val() ===  "Закон о бюджете утвержденный" && $classify.val() === "Ведомства") {
      expensesGraphicsDepartments.addClass('active');
      expensesBottomTip.addClass('active');
      expensesHead(1);
    } else if ($this.val() ===  "Закон о бюджете утвержденный" && $classify.val() === "Виды") {
      expensesGraphicsKinds.addClass('active');
      expensesBottomTip.addClass('active');
      expensesHead(1);
    } else if($this.val() ===  "Закон о внесении изменений") {
      expensesGraphicsChanges.addClass('active');
      expensesBottomTip.addClass('active');
      expensesHead(1);
    } else if($this.val() ===  "Закон об исполнении") {
      expensesGraphicsDone.addClass('active');
      expensesHead(1);
    } else if($this.val() ===  "Исполнение на дату") {
      expensesGraphicsDateOne.addClass('active');
      expensesHead(3);
    }

  });

  function expensesHead(type) {
    var expensesSwitcherLarge = $('.analityc-widget_expenses .analityc-control-switcher_large'),
        expensesSwitcherBig = $('.analityc-widget_expenses .analityc-control-switcher_big'),
        expensesDatepicker = $('.analityc-widget_expenses .analityc-control-group._dp');

    if (type === 1) {
      expensesSwitcherLarge.addClass('active');
      expensesSwitcherBig.removeClass('active');
      expensesDatepicker.removeClass('active');
    } else if (type === 2) {
      expensesSwitcherLarge.removeClass('active');
      expensesSwitcherBig.addClass('active');
      expensesDatepicker.removeClass('active');
    } else if (type === 3) {
      expensesSwitcherLarge.removeClass('active');
      expensesSwitcherBig.removeClass('active');
      expensesDatepicker.addClass('active');
    }
  }

  $(".analityc-widget_expenses .analityc-control-button").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var expenses = $(".analityc-widget_expenses"),
        expensesGraphics = expenses.find($('.analityc-graphics')),
        expensesGraphicsActive = expenses.find($('.analityc-graphics.active')),
        expensesGraphicsChanges = expenses.find($('.analityc-graphics_changes')),
        expensesTable = expenses.find($('.analityc-table')),
        expensesTableActive = expenses.find($('.analityc-table.active')),
        expensesTableChanges = expenses.find($('.analityc-table_changes'));

    if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (expensesTableActive.hasClass('analityc-table_changes')) {
        expensesTable.removeClass('active');
        expensesGraphicsChanges.addClass('active');
        expensesHead(2);
      }
    } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
      $this.siblings().removeClass('active');
      $this.addClass('active');
      if (expensesGraphicsActive.hasClass('analityc-graphics_changes')) {
        expensesGraphics.removeClass('active');
        expensesTableChanges.addClass('active');
        expensesHead(1);
      }
    }
  });

  $(".analityc-widget_expenses .analityc-control-group._dp input").on("change", function () {
    var expenses = $(".analityc-widget_expenses"),
        expensesGraphics = expenses.find($('.analityc-graphics')),
        expensesGraphicsActive = expenses.find($('.analityc-graphics.active')),
        expensesGraphicsDateTwo = expenses.find($('.analityc-graphics_date-two'));

    if (expensesGraphicsActive.hasClass('analityc-graphics_date-one')) {
      expensesGraphics.removeClass('active');
      expensesGraphicsDateTwo.addClass('active');
    }
  });

  $(".analityc-widget_expenses .analityc-control-group._classify select.analityc-select").on("change", function () {
    var $this = $(this);
    var expenses = $(".analityc-widget_expenses"),
        expensesGraphics = expenses.find($('.analityc-graphics')),
        expensesGraphicsTargeted = expenses.find($('.analityc-graphics_targeted')),
        expensesGraphicsSections = expenses.find($('.analityc-graphics_sections')),
        expensesGraphicsDepartments = expenses.find($('.analityc-graphics_departments')),
        expensesGraphicsKinds = expenses.find($('.analityc-graphics_kinds')),
        expensesGraphicsButton = expenses.find($('.analityc-control-button_graphics')),
        expensesTable = expenses.find($('.analityc-table')),
        expensesTableButton = expenses.find($('.analityc-control-button_table'));

    if ($(".analityc-widget_expenses .analityc-control-group._stage select.analityc-select").val() === "Закон о бюджете утвержденный") {

      expensesGraphics.removeClass('active');
      expensesTable.removeClass('active');
      expensesGraphicsButton.addClass('active');
      expensesTableButton.removeClass('active');

     if ($this.val() ===  "Целевые статьи (программный и непрограммный тип)") {
        expensesGraphicsTargeted.addClass('active');
        expensesHead(1);
      } else if($this.val() ===  "Разделы и подразделы") {
        expensesGraphicsSections.addClass('active');
        expensesHead(1);
      } else if($this.val() ===  "Ведомства") {
        expensesGraphicsDepartments.addClass('active');
        expensesHead(1);
      } else if($this.val() ===  "Виды") {
        expensesGraphicsKinds.addClass('active');
        expensesHead(1);
      }
    }

  });
});

// Подсказка на элементе селекта в Расходах бюджета
$(document).ready(function(){
  $(".analityc-widget_expenses .analityc-control-group._transfer .analityc-popup").each(function(){
    if ($(this).length > 0) {
      var popup = $(this);
      var dropdown = popup.prev().find($('.jq-selectbox__dropdown'));
      popup.appendTo(dropdown);
    }
  });

  $(".analityc-widget_expenses .analityc-control-group._transfer .jq-selectbox li.disabled").hover(function(){
    $(".analityc-widget_expenses .analityc-control-group._transfer .analityc-popup").addClass('active');
  }, function(){
    $(".analityc-widget_expenses .analityc-control-group._transfer .analityc-popup").removeClass('active');
  });
});
