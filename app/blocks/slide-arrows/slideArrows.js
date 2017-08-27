import $ from 'jquery';

export default () => {
  
  function slideArrow(el) {
    
    if ($(el).length > 0) {
      
      $('.slide-arrows__arrow_left').on('click', function (e) {
        $(el).animate( { scrollLeft: '-=100' }, 300);
      });
    
      $('.slide-arrows__arrow_right').on('click', function (e) {
        $(el).animate( { scrollLeft: '+=100' }, 300);
      });
      
      function arrowActive(el) {
          
        var sL = $(el).scrollLeft(),
            leftArr = $('.slide-arrows__arrow_left'),
            rightArr = $('.slide-arrows__arrow_right');
      
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
  slideArrow('.budget-forecast__table-wrapper');
  
}