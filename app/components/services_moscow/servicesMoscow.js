import $ from 'jquery';
import Swiper from 'swiper';

export default () => {

    $('.services-moscow__buttons-set .buttons-set__item').click(function() {
      $('.button-light').removeClass('button-light--fill');
      $(this).find('.button-light').addClass('button-light--fill');
    })

    var slider = new Swiper('.services-moscow-index__slider', {
      prevButton: '.services-moscow-index__slider-arrow_prev',
      nextButton: '.services-moscow-index__slider-arrow_next',
      loop: true
    });

    var table = new Swiper('.services-moscow-index__index', {
      slidesPerView: 5,
      prevButton: '.services-moscow-index__table-arrow_prev',
      nextButton: '.services-moscow-index__table-arrow_next',
      loop: true,

      breakpoints: {
        900: {
          slidesPerView: 'auto',
        }
      }
    });

    const SORT_BTN = $('.services-moscow-index__sort');

    SORT_BTN.click(function() {
      $(this).toggleClass('services-moscow-index__sort_desc services-moscow-index__sort_ask');
    })

    const GRAPHIC = $('.services-moscow .analityc-graphics-line-gorizontal');
    const GR_LINES = GRAPHIC.find('.analityc-graphics-line-gorizontal__line');
    const GR_MAX_VAL = 120;

    GR_LINES.each(function() {
      var gr_val = $(this).find('.analityc-graphics-line-gorizontal__line-bar-value').text();
      if (gr_val != '') {
        var gr_val_dec = parseFloat((gr_val).replace(',', '.'));
        var gr_val_pers = gr_val_dec*100/GR_MAX_VAL

        if (gr_val_dec < 0) {
          $(this).css('width', gr_val_pers*(-1) + '%');
          $(this).css('left', gr_val_pers + '%');
        } else {
          $(this).css('width', gr_val_pers + '%');
        }

      } else {
        $(this).css('width', '0');
      }

    })
  
    $('.city-popup__wrapper').scrollbar();
  
  //Попап
  $(document).on('click', '.services-moscow-index__col-heading', function(e){
    e.stopPropagation();
    var category = $(this).data('category');
    var popup = $(this).parents('.services-moscow-index__table').find('.services-moscow-index__city-popup');
    popup.find('.city-popup__category').removeClass('active');
    popup.find('.city-popup__category[data-category="'+category+'"]').addClass('active');
    popup.fadeIn(321);
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
