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
      var container = $(this).parents('.analityc-table, .linear-diagrams, .analityc-graphics, .dropdown__content, .analytics-gov-debt__graphics-container, .analityc-graphics-container, .significant-list_list'),
          wrapper = container.find('.analityc-table__wrapper, .linear-diagrams__wrapper, .analityc-graphics__graphic-slider, .budget-forecast__table-wrapper, .table-wrapper, .analytics-gov-debt__graphics-wrapper, .analytics-gov-debt__table-wrapper, .analityc-graphics-wrapper, .significant-list__table-wrap'),
          arrows = $(this),
          offset = wrapper.data('offset');
      slideArrow(wrapper, arrows, offset);
    });
  }

  // Движущиеся стрелки
  if ($('.analityc-table_sticky-arrows').length) {
    
    $(window).scroll(function(){
      
      if ($('.analityc-table_sticky-arrows .slide-arrows:visible').length) {
        
        var stickyArrows = $('.analityc-table_sticky-arrows .slide-arrows:visible');
        var scrollDistance = $(window).scrollTop() + $(window).height() / 2;
        var table = stickyArrows.parents('.analityc-table_sticky-arrows');
        var tableHeight = table.outerHeight();
        var topArrowsDistance = table.offset().top + 100;
        var bottomArrowsDistance = table.offset().top + tableHeight - 80;
        if (scrollDistance >= topArrowsDistance && scrollDistance <= bottomArrowsDistance) {
          stickyArrows.addClass('fixed');
        } else {
          stickyArrows.removeClass('fixed');
        }
        if (scrollDistance >= bottomArrowsDistance) {
          stickyArrows.addClass('bottom');
        } else {
          stickyArrows.removeClass('bottom');
        }
          
      }
      
    });
  }

}
