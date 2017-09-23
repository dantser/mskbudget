import $ from 'jquery';

export default () => {
  
  function slideArrow(el, arrows, offset) {
    
    if (el.length > 0) {
      
      arrows.find('.slide-arrows__arrow_left').on('click', function (e) {
        if (offset === 'sliderwidth') {offset = el.outerWidth();}
        el.animate( { scrollLeft: '-='+offset }, 300);
      });
    
      arrows.find('.slide-arrows__arrow_right').on('click', function (e) {
        if (offset === 'sliderwidth') {offset = el.outerWidth();}
        el.animate( { scrollLeft: '+='+offset }, 300);
      });
      
      function arrowActive(el) {
          
        var sL = el.scrollLeft(),
            leftArr = arrows.find('.slide-arrows__arrow_left'),
            rightArr = arrows.find('.slide-arrows__arrow_right');
      
        if (sL === 0) {
          leftArr.addClass('disabled');
        } else if (sL === ( el.prop('scrollWidth') - el.width().toFixed(0) ) ) {
          rightArr.addClass('disabled');
        } else {
          leftArr.removeClass('disabled');
          rightArr.removeClass('disabled');
        }
      }
      
      arrowActive(el);
      el.scroll(function(){
        arrowActive($(this));
      });
      
    }
  }
  
  // Инициализация
  if ($('.slide-arrows').length) {
    $('.slide-arrows').each(function(){
      var container = $(this).parents('.analityc-table, .linear-diagrams, .analityc-graphics'),
          wrapper = container.find('.analityc-table__wrapper, .linear-diagrams__wrapper, .analityc-graphics__graphic-slider'),
          arrows = $(this),
          offset = wrapper.data('offset');
      slideArrow(wrapper, arrows, offset);
    });
  }
  
  //// Бюджет Москвы - Социально-экономическое развитие
  //slideArrow('.budget-forecast__table-wrapper', '.budget-forecast__slide-arrows', 100);
  //
  //// Аналитика - Государственный долг
  //slideArrow('.analytics-gov-debt__graphic-wrapper', '.analytics-gov-debt__slide-arrows_graphics', 100);
  //slideArrow('.analytics-gov-debt__table-wrapper', '.analytics-gov-debt__slide-arrows_table', 100);
  
}