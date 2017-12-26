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
  }
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
function overflowDotts(size, element) {
  var content = $(element);
  content.each(function () {
    var contentText = $(this).text();
    if(contentText.length > size){
      $(this).text((contentText.slice(0, size)).trim() + '...');
    }
  });
};

function overflowDottsInit() {
  
  // teaser-card
  if ($('.teaser-card').length) {
    overflowDotts(120, '.teaser-card__title');
  }
  
  // widget-card
  if ($('.widget-card').length) {
    overflowDotts(70, '.widget-card-polls .widget-card__info-block-title, .widget-card-quiz .widget-card__info-block-title');
    overflowDotts(45, '.widget-card-polls-pers .widget-card__info-block-title, .widget-card-quiz-pers .widget-card__info-block-title');
    overflowDotts(127, '.widget-card-social-support .widget-card__info-block-item, .widget-card-gov-programs-result .widget-card__info-block-item');
    overflowDotts(95, '.widget-card-projects .widget-card__info-block-desc');
  }
  
  // depfin-budget-moscow-open
  if ($('.depfin-budget-moscow-open').length) {
    if ($(window).width() < 900) {
      overflowDotts(50, '.depfin-budget-moscow-open__text');
    } else {
      overflowDotts(70, '.depfin-budget-moscow-open__text');
    }
  }
  
  // media-card
  if ($('.media-card').length) {
    if ($(window).width() < 1140 && $(window).width() >= 401) {
      overflowDotts(42, '.media-card__text');
    } else if ($(window).width() < 400) {
      overflowDotts(80, '.media-card__text');
    } else {
      overflowDotts(60, '.media-card__text');
    }
  }
  
  // section-tabs
  if ($('.section-tabs').length) {
    overflowDotts(60, '.section-tabs__title');
    overflowDotts(400, '.section-tabs__text');
    overflowDotts(165, '.news__title');
  }
  
  // document / directory
  if ($('.document').length || $('.directory').length) {
    overflowDotts(60, '.document__title');
    overflowDotts(60, '.directory__title');
    overflowDotts(250, '.document__excerpt');
  }
    
  // wrapper_main (главная)
  if ($('.wrapper_main').length) {
    overflowDotts(80, '.news__title');
  }
  
  // media-main / news-page / news-one
  if ($('.media-main, .news-page, .news-one').length) {
    if ($(window).width() > 640) {
      overflowDotts(140, '.news__title');
    } else {
      overflowDotts(85, '.news__title');
    }
  }
  
  // d-si__quiz (опросы / викторины)
  if ($('.d-si__quiz').length) {
    overflowDotts(90, '.d-si__quiz_head');
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



// Позиционирование картинок в новостях и событиях
function setImagePosition() {
  
  if ($('.js-image').length) {
    
    $('.js-image').each(function(){
      
      $(this).removeClass('full-height');
      $(this).css('top', '');
      
      var imageWidth = $(this).width(), // ширина картинки
          imageHeight = $(this).height(), // высота картинки
          blockHeight = $(this).parent().height(), // высота области под картинку
          imageBlockHeightDiff = imageHeight - blockHeight; // разность высоты картинки и высоты области под картинку
      
      if (imageBlockHeightDiff > 0) { // если высота картинки больше высоты области под картинку
      
        var zoneHeight = imageWidth / 2.5, // высота нужной зоны
            zoneDistance = $(this).attr('data-pos'), // расстояние от верха картинки до нужной зоны
            blockZoneHeightDiff = blockHeight - zoneHeight, // разность высоты области под картинку и высоты нужной зоны
            imageTranslation = zoneDistance - blockZoneHeightDiff / 2; // сдвиг картинки под нужную область
      
        if (imageTranslation < 0) imageTranslation = 0;
        if (imageTranslation > imageBlockHeightDiff) imageTranslation = imageBlockHeightDiff;
      
        $(this).css('top', '-'+imageTranslation+'px');
        
      } else {
        
        $(this).addClass('full-height');
        
      }
      
    });
  }
}

$(document).ready(function(){
  setImagePosition();
});
