import $ from 'jquery';

export default () => {
  
  function slideArrow(el, arrows, offset) {
    
    if ($(el).length > 0) {
      
      $(arrows).find('.slide-arrows__arrow_left').on('click', function (e) {
        if (offset === 'sliderwidth') {offset = $(el).outerWidth();}
        $(el).animate( { scrollLeft: '-='+offset }, 300);
      });
    
      $(arrows).find('.slide-arrows__arrow_right').on('click', function (e) {
        if (offset === 'sliderwidth') {offset = $(el).outerWidth();}
        $(el).animate( { scrollLeft: '+='+offset }, 300);
      });
      
      function arrowActive(el) {
          
        var sL = $(el).scrollLeft(),
            leftArr = $(arrows).find('.slide-arrows__arrow_left'),
            rightArr = $(arrows).find('.slide-arrows__arrow_right');
      
        if (sL === 0) {
          leftArr.addClass('disabled');
        } else if (sL === ( $(el).prop('scrollWidth') - $(el).width().toFixed(0) ) ) {
          rightArr.addClass('disabled');
        } else {
          leftArr.removeClass('disabled');
          rightArr.removeClass('disabled');
        }
      }
      
      arrowActive(el);
      $(el).scroll(function(){
        arrowActive(this);
      });
      
    }
  }
  
  // Инициализация
  
  // Бюджет Москвы - Социально-экономическое развитие
  slideArrow('.budget-forecast__table-wrapper', '.budget-forecast__slide-arrows', 100);
  
  // Аналитика - Государственный долг
  slideArrow('.analytics-gov-debt__graphic-wrapper', '.analytics-gov-debt__slide-arrows_graphics', 100);
  slideArrow('.analytics-gov-debt__table-wrapper', '.analytics-gov-debt__slide-arrows_table', 100);
  
  // Бюджет Москвы - Государственный долг
  slideArrow('.gov-debt .analityc-graphics__graphic-slider_approved', '.gov-debt .analityc-graphics__slide-arrows_approved', 'sliderwidth');
  slideArrow('.gov-debt .analityc-graphics__graphic-slider_changes', '.gov-debt .analityc-graphics__slide-arrows_changes', 'sliderwidth');
  slideArrow('.gov-debt .analityc-graphics__graphic-slider_repayment', '.gov-debt .analityc-graphics__slide-arrows_repayment', 100);
  
}