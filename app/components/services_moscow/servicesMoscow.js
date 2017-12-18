import $ from 'jquery';
import Swiper from 'swiper';

var isDocumentLoad = true;

export default () => {
  if (isDocumentLoad)
  {
    $('.services-moscow__buttons-set .buttons-set__item').click(function() {
      $('.button-light').removeClass('button-light--fill');
      $(this).find('.button-light').addClass('button-light--fill');
    })

    var slider = new Swiper('.services-moscow-index__slider', {
      prevButton: '.services-moscow-index__slider-arrow_prev',
      nextButton: '.services-moscow-index__slider-arrow_next',
      loop: true
    });
  }
  isDocumentLoad = false;
  
  if ($('.services-moscow').length) {
  
    if ($(window).width() > 900) {
      var colLength = $('.services-moscow-index__col').length;
      if (colLength >= 5) {
        var table = new Swiper('.services-moscow-index__index', {
          slidesPerView: 5,
          prevButton: '.services-moscow-index__table-arrow_prev',
          nextButton: '.services-moscow-index__table-arrow_next',
          loop: true
        });
      } else {
        $('.services-moscow-index__table-arrow_prev').hide();
        $('.services-moscow-index__table-arrow_next').hide();
        $('.services-moscow-index__col').css('width', (100 / colLength)+'%');
        $('.services-moscow-index__col').addClass('services-moscow-index__col_noslide');
      }
    } else {
      var table = new Swiper('.services-moscow-index__index', {
        slidesPerView: 'auto',
        prevButton: '.services-moscow-index__table-arrow_prev',
        nextButton: '.services-moscow-index__table-arrow_next',
        loop: true
      });
    }

    const SORT_BTN = $('.services-moscow-index__sort');

    SORT_BTN.click(function() {
      $(this).toggleClass('services-moscow-index__sort_desc services-moscow-index__sort_ask');
    })
  
    // формирование высоты шапки в таблице
    var tableHeadingHeight = 59;
    $('.services-moscow-index__col-heading, .services-moscow-index__row_caption').each(function() {
      var headingH = $(this).outerHeight();
      if (headingH > tableHeadingHeight) tableHeadingHeight = headingH;
    })
    $('.services-moscow-index__col-heading, .services-moscow-index__row_caption').each(function() {
      $(this).height(tableHeadingHeight);
    })
    
    var graphic = $('.services-moscow .analityc-graphics-line-gorizontal'),
        grLines = graphic.find('.analityc-graphics-line-gorizontal__lines'),
        grLine = graphic.find('.analityc-graphics-line-gorizontal__line'),
        grLayout = graphic.find('.analityc-graphics-line-gorizontal__lines-layout'),
        grUnit = graphic.find('.analityc-graphics-line-gorizontal__unit'),
        grMinVal = 0,
        grMaxVal = 0,
        grTotalVal,
        grNeg,
        grSector,
        grCount,
        grCountLimit,
        grStep;

    grLine.each(function() {
      var gr_val = $(this).find('.analityc-graphics-line-gorizontal__line-bar-value').text();
      if (gr_val != '') {
        var gr_val_dec = parseFloat((gr_val).replace(',', '.').replace(' ', ''));
        
        if (gr_val_dec < 0) {
          if (gr_val_dec < grMinVal) grMinVal = gr_val_dec;
        } else {
          if (gr_val_dec > grMaxVal) grMaxVal = gr_val_dec;
        }
      }
    });
    
    if ($(window).width() > 900) {
      grCountLimit = 17;
    } else if ($(window).width() > 580) {
      grCountLimit = 12;
    } else {
      grCountLimit = 7;
    }
  
    grMinVal = Math.floor(grMinVal/10)*10;
    grMaxVal = Math.ceil(grMaxVal/10)*10;
    grTotalVal = Math.abs(grMinVal) + grMaxVal;
    grNeg = 100 * Math.abs(grMinVal) / grTotalVal; 
    grCount = grTotalVal / 10;
    if (grCount > grCountLimit) {
      grCount = grCountLimit;
    }
    grSector = 100 / grCount;
    grStep = grTotalVal / grCount;
    
    grLayout.css({
      'padding-left': grNeg+'%'
    });
  
    grLine.each(function() {
      var gr_val = $(this).find('.analityc-graphics-line-gorizontal__line-bar-value').text();
      if (gr_val != '') {
        var gr_val_dec = parseFloat((gr_val).replace(',', '.').replace(' ', ''));
        
        var gr_val_pers = gr_val_dec*100/grMaxVal;

        if (gr_val_dec < 0) {
          $(this).css('width', gr_val_pers*(-1) + '%');
          $(this).css('left', gr_val_pers + '%');
        } else {
          $(this).css('width', gr_val_pers + '%');
        }
      } else {
        $(this).css('width', 0);
      }
    });
    
    grUnit.eq(0).find('span').text(grMinVal);
    
    for (var i = 0; i < grCount; i++) {
      var grCountStep = grStep * (i+1);
      grCountStep = Math.round(grCountStep);
      grUnit.eq(0).clone(true).appendTo(grUnit.parent()).css('margin-left', grSector+'%').find('span').text(grMinVal + grCountStep);
    }
  
    $('.city-popup__wrapper').scrollbar();
  }
  
  //Попап
  $(document).on('click', '.services-moscow-index__col-heading', function(e){
    e.stopPropagation();
    var category = $(this).data('category');
    var popup = $(this).parents('.services-moscow-index__table').find('.services-moscow-index__city-popup');
    popup.find('.city-popup__category').removeClass('active');
    popup.find('.city-popup__category[data-category="'+category+'"]').addClass('active');
    if ($(window).width() <= 580) {
      $.when(popup.fadeIn(321)).then(function(){
        var categoryHeight = popup.find('.city-popup__category.active').height(),
            titleHeight = popup.find('.city-popup__category.active .city-popup__title').outerHeight(true),
            listMaxHeight = categoryHeight - titleHeight;
        popup.find('.city-popup__category.active .city-popup__wrapper').css('max-height', listMaxHeight);
      });
    } else {
      popup.fadeIn(321);
    }
  });
  
  $(document).on('click', '.services-moscow-params__sources-link', function(e){
    e.preventDefault();
    e.stopPropagation();
    var popup = $(this).parents('.services-moscow__note').find('.services-moscow-params__city-popup');
    popup.fadeIn(321);
  });
  
  $(document).on('click', '.city-popup__close', function(){
    $(this).parents('.city-popup').fadeOut(321);
  });
  
  $(document).on('click', '.city-popup', function(e){
    e.stopPropagation();
  });
  
  $(document).on('click', 'html, body', function(){
    $('.city-popup').fadeOut(321);
  });
}
