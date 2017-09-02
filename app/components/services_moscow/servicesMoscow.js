import $ from 'jquery';
import Swiper from 'swiper';

export default () => {

    $('.buttons-set__item').click(function() {
      $('.button-light').removeClass('button-light--fill');
      $(this).find('.button-light').addClass('button-light--fill');
    })

    var slider = new Swiper('.services-moscow-index__slider', {
      prevButton: '.services-moscow-index___slider-arrow_prev',
      nextButton: '.services-moscow-index__slider-arrow_next',
    });

    var table = new Swiper('.services-moscow-index__index', {
      slidesPerView: 5,
      prevButton: '.services-moscow-index___table-arrow_prev',
      nextButton: '.services-moscow-index___table-arrow_next',

      breakpoints: {
        900: {
          slidesPerView: 3,
        },
        580: {
          slidesPerView: 1,
        },
      }
    });

    const SORT_BTN = $('.services-moscow-index__sort');

    SORT_BTN.click(function() {
      $(this).toggleClass('services-moscow-index__sort_desc services-moscow-index__sort_asc');
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
}