/*MaskedInput--*/
function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';
}

var pasteEventName = getPasteEvent() + ".mask",
	ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	android=/android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	dataName: "rawMaskFn",
	placeholder: '_',
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
			len;

		if (!mask && this.length > 0) {
			input = $(this[0]);
			return input.data($.mask.dataName)();
		}
		settings = $.extend({
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
				mask.split(""),
				function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					}
				}),
				focusText = input.val();

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = settings.placeholder;
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = settings.placeholder; i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function keydownEvent(e) {
				var k = e.which,
					pos,
					begin,
					end;

				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if (k == 27) {//escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
				var k = e.which,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if (k) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								setTimeout($.proxy($.fn.caret,input,next),0);
							}else{
								input.caret(next);
							}

							if (settings.completed && next >= len) {
								settings.completed.call(input);
							}
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							break;
						}
					} else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
						pos++;
						lastMatch = i;
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					input.val("");
					clearBuffer(0, len);
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=settings.placeholder ? c : null;
				}).join('');
			});

			if (!input.attr("readonly"))
				input
				.one("unmask", function() {
					input
						.unbind(".mask")
						.removeData($.mask.dataName);
				})
				.bind("focus.mask", function() {
					clearTimeout(caretTimeoutId);
					var pos,
						moveCaret;

					focusText = input.val();
					pos = checkVal();

					caretTimeoutId = setTimeout(function(){
						writeBuffer();
						if (pos == mask.length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.bind("blur.mask", function() {
					checkVal();
					if (input.val() != focusText)
						input.change();
				})
				.bind("keydown.mask", keydownEvent)
				.bind("keypress.mask", keypressEvent)
				.bind(pasteEventName, function() {
					setTimeout(function() {
						var pos=checkVal(true);
						input.caret(pos);
						if (settings.completed && pos == input.val().length)
							settings.completed.call(input);
					}, 0);
				});
			checkVal(); //Perform initial check for existing values
		});
	}
});

/*--MaskedInput*/




var initDp;

$(document).ready(function() {

var winW = $(window).width();


//Select list
$(document).on('click', '.select__btn', function () {

	var _ = $(this);

	if(!_.hasClass('select__btn_act')){

		$('.select__drop').slideUp(321, function() {
			$('.select__btn').removeClass('select__btn_act');
		});

		_.addClass('select__btn_act').next().slideDown(321);

	}
	else{

		_.next().slideUp(321, function () {
			_.removeClass('select__btn_act');
		});

	}

	return false;
});

$(document).on('click', '.select__a', function () {

	var _ = $(this);

	_.parent().parent().prev().text( _.text() );

	if( $( _.attr('href') ).length > 0 ){

		$( _.attr('href') ).parent().find( '.select-content' ).slideUp(321);
		$( _.attr('href') ).slideDown(321);

	}

	$('.select__drop').slideUp(321, function() {
		$('.select__btn').removeClass('select__btn_act');
	});

	return false;
});

//jQuery Datepicker
initDp = function() {
	if($( ".jq-datepicker" ).length > 0){
		$('.jq-datepicker').datepicker({
			dateFormat:'dd.mm.yy',
			changeMonth: true,
			changeYear: true,
			showOtherMonths: true,
			selectOtherMonths: true,
			firstDay: 1,
			monthNames: ['январь','февраль','март','апрель','май','июнь',
			'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
			monthNamesShort: ['январь','февраль','март','апрель','май','июнь',
			'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
			dayNamesMin: ['вс', 'пн','вт','ср','чт','пт','сб'],
			beforeShow: function(input, inst) {
				$('#ui-datepicker-div').removeClass(function() {
					return $('input').get(0).id;
				});
				$('#ui-datepicker-div').removeClass('datepicker__show');
				$('#ui-datepicker-div').addClass($(this).attr('class'));
			}
		});
	}
}

$(document).on('click', function(e) {
	if (!$(e.target).closest(".ui-datepicker").length || !$(e.target).hasClass('jq-datepicker')) {
		$('.jq-datepicker').blur();
	}
});

if($( ".range-datepicker__item" ).length > 0){
	$('.range-datepicker__item').datepicker({
		dateFormat:'dd.mm.yy',
		changeMonth: true,
		changeYear: true,
		showOtherMonths: true,
		selectOtherMonths: true,
		firstDay: 1,
		monthNames: ['январь','февраль','март','апрель','май','июнь',
		'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
		monthNamesShort: ['январь','февраль','март','апрель','май','июнь',
		'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
		dayNamesMin: ['вс', 'пн','вт','ср','чт','пт','сб'],
		maxDate: "+0D",

		onSelect: function(value, ui) {

			var range = $(this).attr('data-range'),
			boxId = $(this).parent().attr('data-range-box');

			if (range == 'max') {

				$('#'+boxId+' .input-max').val(value);
				$('.range-datepicker').fadeOut(321);
				$( ".range-datepicker__item_min, .range-datepicker__item_max" ).removeAttr('style');
				$('.form__date-range').removeClass('form__date-range_focus');
                $('.range-datepicker__item_min').datepicker('option', {maxDate: value});

			} else if(range == 'min') {

				$('#'+boxId+' .input-min').val(value);
				$(this).fadeOut(321).next().fadeIn(321);
				$('.range-datepicker__item_max').datepicker('option', {minDate: value});

			}

		},
	});



	$(document).on('click', '.form__date-range-icon', function() {
		$('.form__date-range').removeClass('form__date-range_focus');
		$(this).parent().find('.input-min').focus();
	});
}


if ($('.jq-f-datepicker').length > 0) {

	$('.form__date-range').each(function(i) {
		$(this).attr('id', 'rid-'+ i);
	});


/*
	var curDate = new Date();
	var curr_date = ('0'+ curDate.getDate()).slice(-2);
	var curr_month = ('0'+ (curDate.getMonth()+1)).slice(-2);
	var curr_year = curDate.getFullYear().toString().slice(-2);

	$('.jq-f-datepicker').val(curr_date +'.'+ curr_month +'.'+ curr_year);
*/
	$('.jq-f-datepicker').focus(function(e) {

		var _ = $(this),
		dpX = _.parent().offset().left,
		dpY = _.parent().offset().top + 37,
		dMin = _.parent().find('.input-min').val(),
		dMax = _.parent().find('.input-max').val();
		boxId = _.parent().attr('id');
		_.parent().addClass('form__date-range_focus');

		$('.range-datepicker').attr('data-range-box', boxId).css({left: dpX, top: dpY}).fadeIn(321);

		$( ".range-datepicker__item_min" ).datepicker( "setDate", dMin );
		$( ".range-datepicker__item_max" ).datepicker( "setDate", dMax );

		$( ".range-datepicker__item_min, .range-datepicker__item_max" ).removeAttr('style');


	}).mask('99.99.99');

	$('.jq-f-datepicker').val('дд.мм.гг');

	function checkDateFormat(val) {
		return /^(0?[1-9]|[12][0-9]|3[01])\.(0?(?:[1-9]|1[0-2]))\.[0-9]{2}$/.test(val);
	}

	function compareDates(maxV, minV) {
		var maxI = maxV.split('.');
		var minI = minV.split('.');

		var maxD = new Date((+maxI[2]+2000), (maxI[1]-1), maxI[0]);
		var minD = new Date((+minI[2]+2000), (minI[1]-1), minI[0]);

		if(minD > maxD){
			return false;
		} else {
			return true;
		}
	}

	$('.jq-f-datepicker').blur(function() {
		var _ = $(this);
		if (!_.val()) {
			_.val('дд.мм.гг');
		} else {

			if(_.hasClass('input-max')){
				var maxV = _.val(),
				minV = _.parent().find('.input-min').val();

				if( checkDateFormat(maxV) && checkDateFormat(minV) ){

					if(!compareDates(maxV, minV)){
						_.val('дд.мм.гг');
					}

				} else {
					_.val('дд.мм.гг');
				}

			} else if(_.hasClass('input-min')){

				var minV = _.val(),
				maxV = _.parent().find('.input-max').val();

				if( checkDateFormat(minV) ){

					if ( checkDateFormat(maxV) ) {

						if(!compareDates(maxV, minV)){
							_.val('дд.мм.гг');
						}

					}

				} else {
					_.val('дд.мм.гг');
				}

			}

		}

	});

	$('#form-find-document').submit(function() {

		var submit = true;

		$(this).find('.form__date-range').each(function() {

			var _ = $(this),
			maxV = _.find('.input-max').val(),
			minV = _.find('.input-min').val();

			if(maxV != 'дд.мм.гг' || minV != 'дд.мм.гг'){

				if( checkDateFormat(maxV) && checkDateFormat(minV) ){

					if(!compareDates(maxV, minV)){
						submit = false;
						_.find('.input-max').blur();
						_.find('.input-min').blur();
					}

				} else {
					submit = false;
					_.find('.input-max').blur();
					_.find('.input-min').blur();
				}

			}

		});

		return submit;
	});

	$(document).on('click', function(e) {
		if ($(e.target).closest(".range-datepicker").length || $(e.target).closest(".form__date-range").length || $(e.target).hasClass('ui-corner-all')  || $(e.target).hasClass('ui-icon')) {
			e.preventDefault();
		} else {
			$('.range-datepicker').fadeOut(321);
			$('.form__date-range').removeClass('form__date-range_focus');
			$( ".range-datepicker__item_min, .range-datepicker__item_max" ).removeAttr('style');
		}
	});

}



//Datepicker

$(document).on('click', '.datepicker__show', function () {

	var _ = $(this);

	if(!_.hasClass('datepicker__show_act')){

		$('.datepicker__panel').slideUp(321, function() {
			$('.datepicker__show').removeClass('datepicker__show_act');
		});

		_.addClass('datepicker__show_act').next().slideDown(321);

	}
	else{

		_.next().slideUp(321, function () {
			_.removeClass('datepicker__show_act');
		});

	}

	return false;
});

$(document).on('click', '.datepicker__col_years a', function () {
	var parent = $(this).parent().parent().parent().parent();
	if(!$(this).hasClass('datepicker__a_act')){

		var currentDate = parent.find('.datepicker__show').text().split('.');

		parent.find('.datepicker__show').text( currentDate[0] +'.'+ currentDate[1] +'.'+ $(this).text() );

		parent.find('.datepicker__col_years a').removeClass('datepicker__a_act');
		$(this).addClass('datepicker__a_act');

	}

	return false;
});

$(document).on('click', '.datepicker__col_months a', function () {

	var parent = $(this).parent().parent().parent().parent().parent();
	if(!$(this).hasClass('datepicker__a_act')){

		var currentDate = parent.find('.datepicker__show').text().split('.');

		parent.find('.datepicker__show').text( currentDate[0] +'.'+ $(this).attr('data-month') +'.'+ currentDate[2] );

		parent.find('.datepicker__col_months a').removeClass('datepicker__a_act');
		$(this).addClass('datepicker__a_act');

	}

	return false;
});
/*
$(document).on('click', '.datepicker__close', function () {

	$(this).parent().slideUp(321).prev().removeClass('datepicker__show_act');

	return false;
});
*/

//Tab
$('.tab__btn').click(function() {

	var _ = $(this);

	if(!_.hasClass('tab__btn_active')){

		_.parent().find('.tab__btn').removeClass('tab__btn_active');
		_.parent().parent().find('.tab__content').slideUp(321);

		_.addClass('tab__btn_active');
		$(_.attr('href')).slideDown(321);

	}

	return false;
});


//Dropdown
$('.dropdown__btn').click(function() {

	var _ = $(this);

	if(!_.hasClass('dropdown__btn_active')){

		$('.dropdown__content').slideUp(321);
		$('.dropdown__btn').removeClass('dropdown__btn_active');
		_.parent().find('.dropdown__content').slideDown(321, function() {
			_.addClass('dropdown__btn_active');
		});

	} else {

		_.parent().find('.dropdown__content').slideUp(321, function() {
			_.removeClass('dropdown__btn_active');
		});

	}

	return false;
});

$('.dropdown__close').click(function() {
	$(this).parent().slideUp(321).parent().find('.dropdown__btn').removeClass('dropdown__btn_active');
	return false;
});


//Select on hover
function hoverHandler(_, hover) {

	var ind = _.attr('data-hover-index');
	var par = $('.on-hover-parent-'+ _.attr('data-hover-parent'));

	function action() {
		par.find('.on-hover_active').removeClass('on-hover_active');
		par.find('.on-hover-content').slideUp(321);

		_.addClass('on-hover_active');
		_.parent().addClass('on-hover_active').parent().find('.code__tit').addClass('on-hover_active');
		par.find('.on-hover-sibling-'+ ind).addClass('on-hover_active');

		par.find('.on-hover-content-'+ ind).slideDown(321);
	}

	if (!_.hasClass('on-hover_active')) {

		if (hover) {

			_.addClass('hover');

			setTimeout(function() {

				if (_.hasClass('hover')){

					action();

				}

			}, 321);

		} else {

			action();

		}

	}

}


if (winW < 1000) {

	$('.on-hover').click(function() {
		hoverHandler($(this), false);
	});

} else {

	$('.on-hover').mouseenter(function() {
		hoverHandler($(this), true);
	});

	$('.on-hover').mouseleave(function() {
		$(this).removeClass('hover');
	});

}

$('.on-hover').click(function() {
	return false;
});


//serviceDiagramDots
$('.service-dots__btn').click(function() {
	var _ = $(this);

	if (!_.hasClass('active')) {
		_.closest('.service').find('.service-dot-cont').slideUp(321);
		$('#'+ _.attr('data-cont')).slideDown(321);
		_.siblings().removeClass('active');
		_.addClass('active');

	}

return false;
});

//serviceTitButton
//serviceDiagramDots
$('.service__title button').click(function() {
	var _ = $(this);
	if (!_.hasClass('active')) {
		_.addClass('active');
	} else {
		_.removeClass('active');
	}
return false;
});


});
