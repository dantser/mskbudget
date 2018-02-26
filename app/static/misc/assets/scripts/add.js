// checkBrowser
var browserV = {};
browserV.edge = /edge/.test(navigator.userAgent.toLowerCase());
browserV.ie = /msie/.test(navigator.userAgent.toLowerCase());
browserV.ie11 = /rv:11\.0/.test(navigator.userAgent.toLowerCase());
browserV.ff = /firefox/.test(navigator.userAgent.toLowerCase());
browserV.s517 = /version\/5\.1\.7/.test(navigator.userAgent.toLowerCase());



// Custom selects
$(document).on('click', '.selectbox li', function (e) {

  if ($(this).hasClass('locked')) {
    e.stopPropagation();
  } else if ($(this).find('a').length) {
    e.stopPropagation();
    $(this).parents('.selectbox').removeClass('active');
  } else {
    var newval = $(this).data('val');
    $(this).parents('.selectbox').find('select').val(newval).change();
    /*var inputval = $(this).parents('.selectbox').find('select option[value="'+newval+'"]').text();
    $(this).parents('.selectbox').find('select option').removeAttr('selected');
    $(this).parents('.selectbox').find('select option[value="'+newval+'"]').attr('selected', 'selected');
    $(this).parents('.selectbox').find('input').val(inputval);

    if ($(this).parents('.selectbox').hasClass('analityc-widget__selectbox_alt analityc-widget__selectbox_month')) {
      var optIndex = $(this).index(),
          monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      inputval = monthArray[optIndex];
    }

    if (!$(this).parents('.selectbox').find('.switchConsolidatedMonth').length  && $('.gov-debt').length == 0){
        $(this).parents('.selectbox').find('.selectbox__val').text(inputval);
    }

    // смена картинки
    if ($(this).find('img').length) {
      var imgSrc = $(this).find('img').attr('src');
      $(this).parents('.selectbox').children('img').attr('src', imgSrc);
    }
    if ($(this).find('svg').length) {
      var svgSrc = $(this).find('use').attr('xlink:href');
      $(this).parents('.selectbox').children('svg').children('use').attr('xlink:href', svgSrc);
    }*/
  }
});

$(document).on('change', '.selectbox select', function(){
  var newval = $(this).val();
  $(this).parents('.selectbox').find('li[data-val="'+newval+'"]').each(function(){
    var inputval = $(this).parents('.selectbox').find('select option[value="'+newval+'"]').text();
    $(this).parents('.selectbox').find('select option').removeAttr('selected');
    $(this).parents('.selectbox').find('select option[value="'+newval+'"]').attr('selected', 'selected');
    $(this).parents('.selectbox').find('input').val(inputval);

    if ($(this).parents('.selectbox').hasClass('analityc-widget__selectbox_alt analityc-widget__selectbox_month')) {
      var optIndex = $(this).index(),
          monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      inputval = monthArray[optIndex];
    }

    if (!$(this).parents('.selectbox').find('.switchConsolidatedMonth').length  && $('.gov-debt').length == 0){
        $(this).parents('.selectbox').find('.selectbox__val').text(inputval);
    }

    // смена картинки
    if ($(this).find('img').length) {
      var imgSrc = $(this).find('img').attr('src');
      $(this).parents('.selectbox').children('img').attr('src', imgSrc);
    }
    if ($(this).find('svg').length) {
      var svgSrc = $(this).find('use').attr('xlink:href');
      $(this).parents('.selectbox').children('svg').children('use').attr('xlink:href', svgSrc);
    }
  });
});

$(document).on('mousedown', '.selectbox select', function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.blur();
  window.focus();
  $(document).find('.selectbox').not($(this).parents('.selectbox')).removeClass('active');
  $(this).parents('.selectbox').toggleClass('active');
  //selectboxItemWidth($(this).parents('.selectbox'));
});

$(document).on('click', '.selectbox select', function (e) {
  e.stopPropagation();
  //selectboxItemWidth($(this).parents('.selectbox'));
});

$(document).on('click', '.selectbox', function (e) {
  if (!$(this).hasClass('selectbox_disabled')) {
    e.stopPropagation();
    $(document).find('.selectbox').not($(this)).removeClass('active');
    $(this).toggleClass('active');
    //selectboxItemWidth($(this));
  }
});

$(document).on('click', '.selectbox > *', function (e) {
  if (!$(this).parents('.selectbox_disabled').length && !$(this).is('select')) {
    e.preventDefault();
    e.stopPropagation();
    $(document).find('.selectbox').not($(this).parents('.selectbox')).removeClass('active');
    $(this).parents('.selectbox').toggleClass('active');
    //selectboxItemWidth($(this).parents('.selectbox'));
  }
});

function selectboxItemWidth(el) {
  el.find('li').each(function(){
    var itemWidth = $(this).width(),
        spanWidth = $(this).find('span').width();
    if ($(this).find('a').length) {
      itemWidth = $(this).find('a').width();
    }
    if (spanWidth > itemWidth) {
      var spanText = $(this).find('span').text();
      $(this).attr('title', $.trim(spanText));
    }
  });
}

function graphicLines() {
	$(".analityc-graphics__line").each(function(){
		  var valWidth = $(this).find('.analityc-graphics__line-bar-value').outerWidth(true),
			  lineWidth = $(this).find('.analityc-graphics__line-total').width(),
			  fillWidth = $(this).find('.analityc-graphics__line-fill').width();
		  
		  if (valWidth > lineWidth) {
			$(this).addClass('analityc-graphics__line_short');
			$(this).find('.analityc-graphics__line-abs').css('left', fillWidth+'px');
		  } else {
			$(this).removeClass('analityc-graphics__line_short');
			$(this).find('.analityc-graphics__line-abs').css('left', '');
		  }
	});
}

//$(document).on('click', '.selectbox ul', function () {
//  $(this).removeClass('active');
//  
//  setTimeout(function () {
//    $('body').click();
//  },100)
//});
//$('body, html').click(() => {
//  $(document).find('.selectbox').removeClass('active');
//});

$(document).on('click', 'html, body', function(){
  $('.selectbox').removeClass('active');
});


// Custom Selects jQuery UI
$(document).ready(function(){

  if ($('.select-element1').length) {

    $('.select-element1').selectmenu({
      change: function(event, ui) {
        var val = $(this).val();
        $(this).find('option').removeAttr('selected');
        $(this).find('option').each(function(){
          if ($(this).val() == val) {
            $(this).attr('selected', 'selected');
          }
        });
        $(this).change();
      }
    }).selectmenu( "menuWidget" ).addClass( "ui-openreit" );

  }

  if ($('.select-element2').length) {

    $('.select-element2').selectmenu({
      change: function(event, ui) {
        var val = $(this).val();
        $(this).find('option').removeAttr('selected');
        $(this).find('option').each(function(){
          if ($(this).val() == val) {
            $(this).attr('selected', 'selected');
          }
        });
        $(this).change();
      }
    }).selectmenu( "menuWidget" ).addClass( "ui-openreit" );

  }

});



// Inputmasks
$(document).ready(function(){

  if ($('.contest-popup').length) {

    window.inputMasks = function() {

      Inputmask({
        mask: '99.99.9999',
        clearMaskOnLostFocus: false,
        positionCaretOnClick: 'none',
        onincomplete: function(){
          $(this).siblings('.contest-popup__label').addClass('contest-popup__err')
        }
      }).mask('.contest-popup__fio#pi-birth');

      Inputmask({
        mask: '+7 (999) 999-9999',
        clearMaskOnLostFocus: false,
        positionCaretOnClick: 'none',
        onincomplete: function(){
          $(this).siblings('.contest-popup__label').addClass('contest-popup__err')
        }
      }).mask('.contest-popup__fio#pi-phone, .contest-popup__fio#pj-phone');

      //Inputmask({
      //  mask: "*{1,80}@i{1,20}.i{1,6}[.i{1,2}]",
      //  clearMaskOnLostFocus: false,
      //  positionCaretOnClick: 'none',
      //  greedy: false,
      //  onBeforePaste: function (pastedValue, opts) {
      //    pastedValue = pastedValue.toLowerCase();
      //    return pastedValue.replace("mailto:", "");
      //  },
      //  definitions: {
      //    '*': {
      //      validator: "[0-9A-Za-z._-]",
      //      cardinality: 1,
      //      casing: "lower"
      //    },
      //    'i': {
      //      validator: "[0-9A-Za-z_-]",
      //      cardinality: 1,
      //      casing: "lower"
      //    }
      //  }
      //}).mask('.contest-popup__fio#pi-email, .contest-popup__fio#pj-email');

      //Inputmask({
      //  mask: "*{1,80}",
      //  placeholder: "",
      //  clearMaskOnLostFocus: false,
      //  positionCaretOnClick: 'none',
      //  onBeforePaste: function (pastedValue, opts) {
      //    pastedValue = pastedValue.toLowerCase();
      //    return pastedValue.replace("mailto:", "");
      //  },
      //  definitions: {
      //    '*': {
      //      validator: "[0-9A-Za-z@._-]",
      //      cardinality: 1,
      //      casing: "lower"
      //    }
      //  }
      //}).mask('.contest-popup__fio#pi-email, .contest-popup__fio#pj-email');
    }

    inputMasks();

  }

});



// Обрезание текста троеточием
function overflowDotts(size, element, title) {
  var content = element;
  content.each(function () {
    var contentText = $(this).text();
    if(contentText.length > size){
      if (title) $(this).attr('title', $(this).text());
      $(this).text((contentText.slice(0, size)).trim() + '...');
    }
  });
};

function overflowDottsInit() {
  
  function textTitles(el) {
    $(el).filter(':visible').each(function() {
      if ($(this).find('.js-shave').length) {
        var dots = $(this).find('.js-shave-char').text(),
            title = $(this).text().replace(dots, '').replace(/\s\s+/g, ' ');
        $(this).attr('title', title);
      } else {
        $(this).removeAttr('title');
      }
    });
  }

  // teaser-card
  if ($('.teaser-card').length) {
    overflowDotts(120, $('.teaser-card__title'));
  }

  // widget-card
  if ($('.widget-card').length) {
    overflowDotts(70, $('.widget-card-polls .widget-card__info-block-title, .widget-card-quiz .widget-card__info-block-title'));
    
    //
    $('.widget-card-social-support .widget-card__info-block-item, .widget-card-gov-programs-result .widget-card__info-block-item').filter(':visible').each(function() {
      var $this = $(this),
          itemMaxHeight = $this.parent().outerHeight() - 10;
      $this.shave(itemMaxHeight);
    });
    
    textTitles('.widget-card-social-support .widget-card__info-block-item, .widget-card-gov-programs-result .widget-card__info-block-item');
    
    //
    $('.widget-card-polls-pers, .widget-card-quiz-pers').each(function(){
      
      var contentBlockLength = $(this).find('.widget-card__content').length,
          lineHeight = parseFloat($(this).find('.widget-card__info-block-title').css('line-height')),
          titleMaxHeight;
      
      if (contentBlockLength > 1) {
        titleMaxHeight = Math.ceil(lineHeight * 2);
      } else {
        titleMaxHeight = Math.ceil(lineHeight * 7);
      }
      
      $(this).find('.widget-card__info-block-title:visible').shave(titleMaxHeight);
    });
    
    textTitles('.widget-card-polls-pers .widget-card__info-block-title, .widget-card-quiz-pers .widget-card__info-block-title');
    
    //
    $('.widget-card-projects').find('.widget-card__info').filter(':visible').each(function() {
      var $this = $(this),
          card = $this.parents('.widget-card'),
          head = $this.parents('.widget-card').find('.widget-card__head'),
          navButtons = $this.parent().siblings('.widget-card__nav-buttons'),
          blockTitle = $this.find('.widget-card__info-block-title'),
          blockSubtitle = $this.find('.widget-card__info-block-subtitle'),
          bottomLink = $this.parents('.widget-card').find('.widget-card__bottom-link'),
          descMaxHeight;
      
      descMaxHeight = card.outerHeight() - head.outerHeight() - navButtons.outerHeight(true) - blockTitle.outerHeight(true) - blockSubtitle.outerHeight(true) - bottomLink.outerHeight() - 15;
      $this.find('.widget-card__info-block-desc').shave(descMaxHeight);
    });
    
    textTitles('.widget-card-projects .widget-card__info-block-desc');
  }

  // depfin-budget-moscow-open
  if ($('.depfin-budget-moscow-open').length) {
    
    $('.depfin-budget-moscow-open__text').shave(65);
    
    textTitles('.depfin-budget-moscow-open__text');
    
    $('.depfin-budget-moscow-open__category').each(function(){
      if ($(this).text().length > 27) {
        $(this).attr('title', $(this).text());
      }
    });
  }

  // media-card
  if ($('.media-card').length) {
    if ($(window).width() < 1140 && $(window).width() >= 401) {
      overflowDotts(42, $('.media-card__text'));
    } else if ($(window).width() < 400) {
      overflowDotts(80, $('.media-card__text'));
    } else {
      overflowDotts(60, $('.media-card__text'));
    }
  }

  // section-tabs
  if ($('.section-tabs').length) {
    overflowDotts(60, $('.section-tabs__title'));
    overflowDotts(400, $('.section-tabs__text'));
    $('.news__title').shave(180);
    textTitles('.news__title');
  }

  // document / directory
  if ($('.document').length || $('.directory').length) {
    
    $('.document__title, .directory__title').shave(135);
    
    $('.document').each(function() {
      var $this = $(this),
          cardHeight = $this.height(),
          textMaxHeight = cardHeight - $this.find('.document__date').outerHeight(true) - $this.find('.document__tit-wrap').outerHeight();
      $this.find('.document__excerpt').shave(textMaxHeight);
    });
    
    textTitles('.document__title, .document__excerpt, .directory__title');
  }

  // wrapper_main (главная)
  if ($('.wrapper_main').length) {
    
    var newsTitleMaxHeight;
    
    $('.news:visible').first().each(function() {
      var $this = $(this),
          cardHeight = $this.outerHeight();
      newsTitleMaxHeight = cardHeight - $this.find('.news__thumb').height() - $this.find('.news__category').outerHeight(true) - $this.find('.news__bottom').outerHeight() - 5;
    });
    
    $('.news__title').shave(newsTitleMaxHeight);
    
    textTitles('.news__title');
  }

  // media-main / news-page / news-one
  if ($('.media-main').length || $('.news-page').length || $('.news-one').length) {
    
    var newsTitleMaxHeight;
    
    $('.news:visible').first().each(function() {
      var $this = $(this),
          cardHeight = $this.outerHeight();
      newsTitleMaxHeight = cardHeight - $this.find('.news__thumb').height() - $this.find('.news__category').outerHeight(true) - $this.find('.news__bottom').outerHeight() - 7;
    });
    
    $('.news__title').shave(newsTitleMaxHeight);
    
    textTitles('.news__title');
  }

  // d-si__quiz (опросы / викторины)
  if ($('.d-si__quiz').length) {
    overflowDotts(90, $('.d-si__quiz_head'));
  }

}

$(document).ready(function(){
  overflowDottsInit();
});

function dotTextInit(element) {
  if ($(element).length) {
    $(element).each(function(){
      var textSpan = $(this).find('span'),
          wordArray = textSpan.text().split(' '),
          newText = '';

      for (var i = 0; i < wordArray.length; i++) {

        if (textSpan.text(newText+wordArray[i]).height() <= $(this).height()) {
          newText += ' '+wordArray[i];
        } else if (textSpan.text(newText+'...').height() <= $(this).height()){
          newText += '...';
          i = wordArray.length;
        } else {
          newText = newText.substring(0, newText.lastIndexOf(' ')) + '...';
          i = wordArray.length;
        }

        textSpan.text(newText);
      }
    });
  }
}



// Всплывающие подсказки в селектах
function selectTitles(el) {

  if ($(el).length) {

    $(el).each(function () {

      $(this).find('li:visible').each(function(){

        var itemWidth = $(this).width(),
            spanWidth = $(this).find('span').width();

        if ($(this).find('a').length) {
          itemWidth = $(this).find('a').width();
        }

        if (spanWidth > itemWidth) {

          var spanText = $(this).find('span').text();
          $(this).addClass('long').attr('title', $.trim(spanText));

        }
      });
    });
  }
}

function selectTitlesInit() {
  selectTitles('.selectbox');
  
  if ($('.widget-card').length) {
    if (browserV.edge || browserV.ff || browserV.ie || browserV.ie11) {
      $('.widget-card .selectbox ul').addClass('ieff');
    }
    $('.widget-card .selectbox ul:visible').scrollbar();
  }
  
  if ($('.search_net').length) {
    if (browserV.edge || browserV.ff || browserV.ie || browserV.ie11) {
      $('.search_net .selectbox ul').addClass('ieff');
    }
    $('.search_net .selectbox ul:visible').scrollbar();
  }
}

$(document).on('serviceSliderInited', function(){
  selectTitlesInit();
  overflowDottsInit();
});



// Обрезание троеточием и добавление подсказки в подписях диаграмм в виджетах
function captionDots(el) {
  if ($(el).length) {
    $(el+':visible').each(function(){
      var lineHeight = parseInt($(this).css('line-height')),
          captionHeight = $(this).height(),
          captionText = $(this).text();
      if (captionHeight > lineHeight) {
        $(this).addClass('long').attr('title', $.trim(captionText));
      }
    });
  }
}

function captionDotsInit() {
  captionDots('.diagram-tabs__caption');
}

$(document).ready(function(){
  setTimeout(function(){
    captionDotsInit();
  }, 500);
});



// Позиционирование картинок в новостях и событиях
function setImagePosition() {

  $('.js-image').each(function(){

    $(this).removeClass('full-height');
    $(this).css('top', '');

    var imageHeight = $(this).height(), // высота картинки
        blockHeight = $(this).parent().height(), // высота области под картинку
        imageBlockHeightDiff = imageHeight - blockHeight; // разность высоты картинки и высоты области под картинку

    if (imageBlockHeightDiff > 0) { // если высота картинки больше высоты области под картинку

      var imageTranslation = imageBlockHeightDiff * parseFloat($(this).attr('data-pos')); // расстояние от верха картинки до нужной зоны

      if (imageTranslation < 0) imageTranslation = 0;
      if (imageTranslation > imageBlockHeightDiff) imageTranslation = imageBlockHeightDiff;

      $(this).css('top', '-'+imageTranslation+'px');

    } else {

      $(this).addClass('full-height');

    }

  });

}

$(window).resize(setImagePosition);
$(document).ready(setImagePosition).ajaxSuccess(setImagePosition);



// Tooltips
function tooltipInit() {

  var tooltips = document.querySelectorAll('.js-tooltip');
  var screenWidth = $(window).width();
  var tooltipPosition = (screenWidth > 559) ? 'right' : 'top';

  if (tooltips) {
    tippy('.js-tooltip', {
      // @TEST
      // trigger: 'click',
      delay: [10, 100],
      //performance: true,
      animation: 'shift',

      position: tooltipPosition,
      offset: 20,
      // animation: 'perspective',
      duration: 200,
      arrow: true,
      distance: 20,
      theme: 'light',
      size: 'big',
      arrowSize: 'big',
      popperOptions: {
        modifiers: {
          flip: {
            behavior: ['right', 'bottom']
          }
        }
      }
    });
  }
}


// Documents / services / news slider
function cardSlider(item) {
  var parent = $(item);
  var slideCnt = parent.find('.tile__item').length - parent.find('.tile__item.hidden').length;
  var slideWidth = parent.find('.tile__item').outerWidth(true);
  var wrapperWidth = slideCnt * slideWidth;
  parent.find('.section-tabs__content').css('width', wrapperWidth+'px');

  if (parent.find('.dd-holder').is(':visible')) {
    var holderWidth = parent.find('.dd-holder').width();

    if (wrapperWidth <= holderWidth) {
      parent.find($('.owl-nav')).hide();
    } else {
      parent.find($('.owl-nav')).show();
    }
  }
}

function cardSliderInit() {
  cardSlider('.section-tabs_documents');
  cardSlider('.section-tabs_news');
  cardSlider('.section-tabs_services');

  $(document).on('click', '.owl-nav .owl-next', function(){
    if (!$(this).parents('.owl-nav_members').length && !$(this).parents('.owl-nav').hasClass('inited')) {
      var offset = $(this).parents('.section-tabs').find('.tile__item').outerWidth(true);
      $(this).parents('.section-tabs').find('.dd-holder').animate({ scrollLeft: '+='+offset }, 300);
    }
  });

  $(document).on('click', '.owl-nav .owl-prev', function(){
    if (!$(this).parents('.owl-nav_members').length && !$(this).parents('.owl-nav').hasClass('inited')) {
      var offset = $(this).parents('.section-tabs').find('.tile__item').outerWidth(true);
      $(this).parents('.section-tabs').find('.dd-holder').animate({ scrollLeft: '-='+offset }, 300);
    }
  });

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
}



// checkMobile
var checkMobile = {
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
    return (checkMobile.Android() || checkMobile.BlackBerry() || checkMobile.iOS() || checkMobile.Opera() || checkMobile.Windows());
  }
};



// график Исполнение на дату
function dateGraphicLines() {
  
  $('.analityc-graphics__lines').each(function(){
    if (!$(this).parents('.services-VMO').length) {
      
      // определяем максимальное значение
      var maxValue = 0;
      
      $(this).find('.analityc-graphics__line').each(function(){
        var valueBlock = $(this).find('.analityc-graphics__line-values'),
            values = valueBlock.text().split('/'),
            firstValue = parseFloat($.trim(values[0].replace(' ', '').replace(',', '.'))),
            lastValue = parseFloat($.trim(values[1].replace(' ', '').replace(',', '.'))),
            curMaxValue;
        if (firstValue > maxValue) {
          maxValue = firstValue;
        }
        if (lastValue > maxValue) {
          maxValue = lastValue;
        }
        $(this).attr('data-val1', firstValue);
        $(this).attr('data-val2', lastValue);
      });
      
      // определяем ширину линий
      $(this).find('.analityc-graphics__line').each(function(){
        var firstValue = parseFloat($(this).attr('data-val1')),
            lastValue = parseFloat($(this).attr('data-val2')),
            fillWidth = firstValue / maxValue * 100,
            totalWidth = (firstValue < lastValue) ? lastValue / maxValue * 100 : fillWidth,
            valPosition = 100 - totalWidth;
        $(this).find('.analityc-graphics__line-fill').css('width', fillWidth + '%');
        $(this).find('.analityc-graphics__line-total').css('width', totalWidth + '%');
        $(this).find('.analityc-graphics__line-bar-value').css('right', valPosition + '%');
      });
      
      // всплывающие окна
      $(this).find('.analityc-graphics__line').each(function(){
        var valWidth = $(this).find('.analityc-graphics__line-bar-value').outerWidth(true),
            lineWidth = $(this).find('.analityc-graphics__line-total').width(),
            fillWidth = $(this).find('.analityc-graphics__line-fill').width();
        
        if (valWidth > lineWidth) {
          $(this).addClass('analityc-graphics__line_short');
          $(this).find('.analityc-graphics__line-abs').css('left', fillWidth+'px');
        } else {
          $(this).removeClass('analityc-graphics__line_short');
          $(this).find('.analityc-graphics__line-abs').css('left', '');
        }
      });
    }
  });
  
  $('.analityc-js-line__line-bar').each(function(){
    
    var values = $(this).find('.analityc-js-line__line-values'),
        barValue = $(this).find('.analityc-js-line__line-bar-value'),
        fill = $(this).find('.analityc-js-line__line-fill'),
        maxValue = parseFloat(barValue.text().replace(' ', '').replace(',', '.')),
        fillValue = parseFloat(values.text().replace(' ', '').replace(',', '.')),
        fillWidth = fillValue / maxValue * 100;
    
    if (fillWidth > 100) fillWidth = 100;
    fill.css('width', fillWidth+'%');
    
    var valWidth = values.outerWidth(true),
        fillWidth = fill.width();
    
    if (valWidth > fillWidth) {
      values.addClass('analityc-js-line__line-values--out');
    } else {
      values.removeClass('analityc-js-line__line-values--out');
    }
  });
}


// смена контента в разделе Аналитика
function changeAnalitycContent() {
  if (appLoaded) {
    analyticsMain();
    depfin_analytics_income();
    depfinAnalyticsExpenses();
    analyticsGovDebt();
    depfinAnalyticsGP();
  }
}



// Значения графиков в разделах Бюджет Москвы и Аналитика
function graphicValuesInit() {
  if (appLoaded) {
    budgetIncome();
    budgetExpenses();
    sources();
    budget_moscow_gov_program();
    govDebt();
    mrelations();
    aip();
    budgetForecast();
    analyticsMain();
    depfin_analytics_income();
    depfinAnalyticsExpenses();
    analyticsGovDebt();
    depfinAnalyticsGP();
  }
}
