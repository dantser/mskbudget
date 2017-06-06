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
			$(this).fadeOut();
		})
		$('.popup').on('click', function(e) {
			e.stopPropagation()
		})
		$('.popup').find('.close-popup').on('click', function() {
			$('.blackout').fadeOut();
		})

		$('.d-study__clear-res').on('click', function() {
			$('.blackout').fadeIn();
		})

		$('.edu-lesson-link').on('click', function() {
			$('.edu-content').removeClass('_active');

			var id = $(this).attr('id');

			$('.edu-content[id="'+id+'"]').addClass('_active');

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

            $('.carousel-3d-slide').on('click', function() {

                self.current_slide = $(this).index('.carousel-3d-slide') + 1;

                //$('.carousel-count').html(self.current_slide+'&nbsp;из&nbsp;'+self.slide_count);
            })

             //$('.carousel-count').html('1&nbsp;из&nbsp;'+self.slide_count);

		},0)

		if ($( ".datepicker" ).length) {
			$( ".datepicker" ).datepicker();
			$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: '&#x3c;Пред',
			nextText: 'След&#x3e;',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
			'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false
			};
			$.datepicker.setDefaults($.datepicker.regional['ru']);
		}

        $('.dropdown-trigger').on('click', function() {

            if ($(this).parents('.dropdown').hasClass('_open')) {
                $(this).parents('.dropdown').removeClass('_open');

                $(this).next('.dropdown-content').slideUp();

            } else {
                $(this).parents('.dropdown').addClass('_open');
                $(this).next('.dropdown-content').slideDown();
            }
        })

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
                $(this).parents('.d-sr__stat-container').next('.other-info').hide();
                $(this).removeClass('_active')
            } else {
                $(this).parents('.d-sr__stat-container').next('.other-info').show();
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
    if ($html.hasClass("mobile")) {
        $("html, body").animate({scrollTop: $(".abs-box--active .puzzle-inner").offset().top - 100}, 600);
    }
    return false;
});
$('.js-abs-close').click(function(){
	$('.abs-box--active').removeClass('abs-box--active');
    $(".d-abs__nav").removeClass("_active");
    if ($html.hasClass("mobile")) {
        $("html, body").animate({scrollTop: $(".d-abs__nav").offset().top - 80}, 600);
    }
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
basicBudgetFiguresDiagrams();
});
//$(document).ready * end

//
function tabsLine(){
	$('.js-label-button').click(function(){
    $('.section-tabs__nav').slideToggle();
    $('.section-tabs__content').slideToggle();
    $(this).toggleClass('js-label-button-closed');
    $('.section-tabs__head').toggleClass('section-tabs__head_closed')
		return false
		/*
		если понадобиться скрывать пункты в навигации табов,
		то при клике надо будет реинициализировать карусельку
		*/
	});

	$('.owl-carousel').owlCarousel({
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

	// var owl = $('.owl-carousel');

	$(document).on('click', '.btn-arrow--prev', function(e){
		$(this).parents('.section-tabs__nav').find('.owl-prev').click();
		// owl.trigger('refresh.owl.carousel');
		return false
	});
	$(document).on('click', '.btn-arrow--next', function(e){
		$(this).parents('.section-tabs__nav').find('.owl-next').click();
		return false
	});
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
		}
		return false
	});

	$('.js-tab-close').click(function(){
		$('.section-tabs__tab--active').removeClass('section-tabs__tab--active');
		$('.section-tabs__nav-btn--active').removeClass('section-tabs__nav-btn--active');
	});
}

//
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
        var $this = $(this);

        $(".analityc-widget-rounds").removeClass("_active");
        if ($this.val() === "Закон об исполнении") {
            $(".analityc-widget-rounds:eq(0)").addClass("_active");
		} else {
            $(".analityc-widget-rounds:eq(1)").addClass("_active");
            diagram_4.animate();
            diagram_5.animate();
		}
		if ($this.val() === "Заключительный этап") {
            $(".analityc-control-group._dp").show();
		} else {
            $(".analityc-control-group._dp").hide();
		}
	});
}
