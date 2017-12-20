import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {

  $(document).on('click', '.widget-card__favor', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('widget-card__favor_active');
  });

  /*$(document).on('click', '.widget-card__pin', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('widget-card__pin_active');
    $(this).parents('.tile__item').toggleClass('tile__item_pinned');
    
    if ($(this).parents('.wrapper_main').length) {
      
      var activeItem = $(this).parents('.tile__item'),
          slider = $(this).parents('.slider'),
          slide = slider.find('.slick-slide'),
          firstSlide = slide.eq(1),
          lastPinnedItem = slider.find('.tile__item_pinned').last();
      
      if ( !$(this).parents('.tile__item').hasClass('tile__item_pinned') ) {
        
        var currentSlide = lastPinnedItem.parents('.slick-slide').index();
        activeItem.insertAfter(lastPinnedItem);
        slide.each(function(){
          if (!$(this).hasClass('slick-cloned') && $(this).index() <= currentSlide && $(this).index() !== 1) {
            $(this).find('.tile__item').first().appendTo($(this).prev().find('.tile'));
          }
        });
        
      } else {
        
        var currentSlide = $(this).parents('.slick-slide').index();
        activeItem.prependTo(firstSlide.find('.tile'));
        slide.each(function(){
          if (!$(this).hasClass('slick-cloned') && $(this).index() < currentSlide) {
            $(this).find('.tile__item').last().prependTo($(this).next().find('.tile'));
          }
        });
        
      }
      
    } else {
      
      if ( !$(this).parents('.tile__item').hasClass('tile__item_pinned') ) {
        var block = $(this).parents('.tile__item');
        $(this).parents('.serv').find('.tile__item.tile__item_pinned').last().after(block);
      } else {
        $(this).parents('.tile__item').prependTo( $(this).parents('.serv') );
      }
      
    }
  });*/

  // добавляем title всем заголовкам
  $('.widget-card__title h3, .widget-card__results-total, .widget-card__info-block-title, .widget-card__lessons-text').each(function(){
    $(this).attr('title', $(this).text() );
  });

  // стрелочки в виджетах
  $(document).on('click', '.widget-card-gov-programs-result .arrow-button_next, .widget-card-social-support .arrow-button_next', function (e) {
    e.preventDefault();
    var widgetCard = $(this).parents('.widget-card').find('.widget-card__info-block-items_active');

    widgetCard.find('.widget-card__info-block-item_active')
    .removeClass('widget-card__info-block-item_active')
    .next('.widget-card__info-block-item').addClass('widget-card__info-block-item_active');

    if (!widgetCard.find('.widget-card__info-block-item').is('.widget-card__info-block-item_active')) {
      widgetCard.find('.widget-card__info-block-item:first-child').addClass('widget-card__info-block-item_active');
    }
  });

  $(document).on('click', '.widget-card-gov-programs-result .arrow-button_prev, .widget-card-social-support .arrow-button_prev', function (e) {
    e.preventDefault();
    var widgetCard = $(this).parents('.widget-card').find('.widget-card__info-block-items_active');

    widgetCard.find('.widget-card__info-block-item_active')
    .removeClass('widget-card__info-block-item_active')
    .prev('.widget-card__info-block-item').addClass('widget-card__info-block-item_active');

    if (!widgetCard.find('.widget-card__info-block-item').is('.widget-card__info-block-item_active')) {
      widgetCard.find('.widget-card__info-block-item:last-child').addClass('widget-card__info-block-item_active');
    }
  });

  // опросы и обучающий сервис
  $(document).on('click', '.widget-card-polls .arrow-button_next, .widget-card-polls-pers .arrow-button_next, .widget-card-quiz .arrow-button_next, .widget-card-quiz-pers .arrow-button_next, .widget-card-projects .arrow-button_next', function (e) {
    e.preventDefault();
    var widgetCard = $(this).parents('.widget-card__content').find('.widget-card__info-block_active');

    widgetCard.find('.widget-card__info_active').removeClass('widget-card__info_active')
    .next('.widget-card__info').addClass('widget-card__info_active');

    if (!widgetCard.find('.widget-card__info').is('.widget-card__info_active')) {
      widgetCard.find('.widget-card__info:first-child').addClass('widget-card__info_active');
    }
  });

  $(document).on('click', '.widget-card-polls .arrow-button_prev, .widget-card-polls-pers .arrow-button_prev, .widget-card-quiz .arrow-button_prev, .widget-card-quiz-pers .arrow-button_prev, .widget-card-projects .arrow-button_prev', function (e) {
    e.preventDefault();
    var widgetCard = $(this).parents('.widget-card__content').find('.widget-card__info-block_active');

    widgetCard.find('.widget-card__info_active').removeClass('widget-card__info_active')
    .prev('.widget-card__info').addClass('widget-card__info_active');

    if (!widgetCard.find('.widget-card__info').is('.widget-card__info_active')) {
      widgetCard.find('.widget-card__info:last-child').addClass('widget-card__info_active');
    }
  });

  // бюджетная сеть
  $(document).on('click', '.widget-card-budget-web .arrow-button_next', function (e) {
    e.preventDefault();
    var widgetCard = $(this).parents('.widget-card').find('.widget-card__results_active');

    widgetCard.find('.widget-card__results-total_active')
    .removeClass('widget-card__results-total_active')
    .next('.widget-card__results-total').addClass('widget-card__results-total_active');

    if (!widgetCard.find('.widget-card__results-total').is('.widget-card__results-total_active')) {
      widgetCard.find('.widget-card__results-total:first-child').addClass('widget-card__results-total_active');
    }
  });

  $(document).on('click', '.widget-card-budget-web .arrow-button_prev', function (e) {
    e.preventDefault();
    var widgetCard = $(this).parents('.widget-card').find('.widget-card__results_active');

    widgetCard.find('.widget-card__results-total_active')
    .removeClass('widget-card__results-total_active')
    .prev('.widget-card__results-total').addClass('widget-card__results-total_active');

    if (!widgetCard.find('.widget-card__results-total').is('.widget-card__results-total_active')) {
      widgetCard.find('.widget-card__results-total:last-child').addClass('widget-card__results-total_active');
    }
  });

//конец стрелочек в виджетах



// сворачивание-разворачивание карточек в мобильной версии
  if ($(window).width() < 581) {
      $(document).on('click', '.widget-card__title', function () {
        var $this = $(this);
        if ($this.parents().hasClass('dropdown-block') || $this.parents().hasClass('wrapper_main') || $this.parents().hasClass('lk-services-second')) {   //убираем сворачивание виджетов в блоке дропдаунов и на главной
          return;
        }
        $this.parents('.widget-card').find('.service__diagram-tabs, .service-dots').hide();
        $this.parents('.widget-card').toggleClass('widget-card_active');
        $this.parents('.widget-card__head').siblings().slideToggle(321);
        setTimeout(function () {
          $this.parents('.widget-card').find('.service__diagram-tabs, .service-dots').show();
          selectTitles('.selectbox');
        }, 321)
      });
	  
	  $(document).on('click', '.depfin-services-main .widget-card .datepicker__show', function(e){
		var $this = $(this);
        $this.parents('.widget-card').find('.service__diagram-tabs, .service-dots').hide();
        $this.parents('.widget-card').addClass('widget-card_active');
        $this.parents('.widget-card__head').siblings().slideDown(321);
        setTimeout(function () {
          $this.parents('.widget-card').find('.service__diagram-tabs, .service-dots').show();
          selectTitles('.selectbox');
        }, 321)
	  });
  };



  // виджет москва и города мира
  $(document).on('click', '.widget-card-cities .selectbox_cities li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__results').slideUp();
    widgetCard.find('.widget-card__logo img').removeClass('active');
    widgetCard.find('.widget-card__logo img[data-option="'+newval+'"]').addClass('active');
    widgetCard.find('.selectbox-indexes select').each(function() {
      newval += "%" + $(this).val();
    });
    console.log("Newval is " + newval);
    widgetCard.find('.widget-card__results[data-option="'+newval+'"]').slideDown(321);
  });

  $(document).on('click', '.widget-card-cities .selectbox-indexes li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__results').slideUp();
    widgetCard.find('.selectbox_cities select').each(function() {
      newval = $(this).val() + "%" + newval;
    });
    console.log("Newval is " + newval);
    widgetCard.find('.widget-card__results[data-option="'+newval+'"]').slideDown(321);
  });

  // виджет результаты реализации гос.программ
  $(document).on('click', '.widget-card-gov-programs-result li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__info-block-items').hide();
    widgetCard.find('.widget-card__info-block-items[data-option="'+newval+'"]').show(321).addClass('widget-card__info-block-items_active');
  });

  // виджет социальная поддержка населения
  $(document).on('click', '.widget-card-social-support li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__info-block-items').removeClass('widget-card__info-block-items_active').hide();
    widgetCard.find('.widget-card__info-block-items[data-option="'+newval+'"]').show(321).addClass('widget-card__info-block-items_active');
  });
  
  // виджет внутригородские муниципальные образования
  $(document).on('click', '.widget-card-municipalities li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__results-total').hide();
    widgetCard.find('.widget-card__results-total[data-option="'+newval+'"]').show(321);
  });
  
  // виджет москва и регионы рф
  $(document).on('click', '.widget-card-regions li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__results').slideUp(321);
    widgetCard.find('.widget-card__results[data-option="'+newval+'"]').slideDown(321);
  });
  
  // виджет бюджетная сеть
  $(document).on('click', '.widget-card-budget-web li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__results').removeClass('widget-card__results_active');
    widgetCard.find('.widget-card__results[data-option="'+newval+'"]').addClass('widget-card__results_active');
  });

  // виджет калькулятор
  $(document).on('click', '.widget-card-calc li', function () {
    var newval = $(this).data('val');
    var widgetCard = $(this).parents('.widget-card');
    widgetCard.find('.widget-card__output-calc').removeClass('widget-card__output-calc_active').hide(321);
    widgetCard.find('.widget-card__output-calc[data-option="'+newval+'"]').show(321);
  });
  
  // Выделение регионов на карте
  $(document).on('change', '.widget-card .d-si__search', function () {
    var region = $(this).val(),
        regionMap = $(this).parents('.widget-card').find('.svg-map');
    region = region.toLowerCase();
    regionMap.find('path, polygon').removeClass('active');
    regionMap.find('[data-name="'+region+'"]').addClass('active');
    $(this).blur();
  });
  
  // Обрезание текста многоточием
  if ($('.widget-card').length) {
    
    function overflowDotts(size, element) {
      const CONTENT = $(element);
      CONTENT.each(function () {
        const SIZE = size;
        const CONTENTTEXT = $(this).text();
          if(CONTENTTEXT.length > SIZE){
            $(this).text((CONTENTTEXT.slice(0, SIZE)).trim() + '...');
          }
      });
    };
  
    overflowDotts(70, '.widget-card-polls .widget-card__info-block-title, .widget-card-quiz .widget-card__info-block-title');
    overflowDotts(45, '.widget-card-polls-pers .widget-card__info-block-title, .widget-card-quiz-pers .widget-card__info-block-title');
    overflowDotts(127, '.widget-card-social-support .widget-card__info-block-item, .widget-card-gov-programs-result .widget-card__info-block-item');
    overflowDotts(65, '.widget-card-projects .widget-card__info-block-desc');
    
    
    function dotText(el, children) {
      $(el).each(function(){
        var textSpan = $(this).find(children),
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
    
    dotText('.widget-card__title', 'h3');
  }
  
  // Фикс шрифта заголовков виджетов в iOS
  var isMobile = {
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
  };
  if (isMobile.iOS() && $('.widget-card').length) {
    $('.widget-card__title h3').addClass('alt');
  } else {
    $('.widget-card__title h3').removeClass('alt');
  }

}
