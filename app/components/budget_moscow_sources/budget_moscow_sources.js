import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');
  const SWITCH = 'arr-switchclass';
  const TABLE_ARROW = $('.table__arrow');
  const TABLE_SUBROW = $('.table__row_subrow');
  const ACTIVE_TABLE = $('._active').find('.table');


  if (ACTIVE_TABLE.length) {
    $('.section__ar').show();
  } else {
    $('.section__ar').hide();
  }

  ARR_RIGHT.click( (e) => {
    e.preventDefault();
    ARR_LEFT.removeClass('disabled');
    if ($('.graphic__data:last-child').is(':visible')) {
      return;
    }

    if ($('.graphic__data:nth-child(3)').is(':visible')) {
      ARR_RIGHT.addClass('disabled');
    }

    if ($(window).width() < 700) {
        $('.graphic__data:visible').hide().next().css('display', 'block');
    }
    else {
      $('.graphic__data:visible[data-char]').hide().next().css('display', 'table-cell');
    }
  });

  ARR_LEFT.on('click', (e) => {
    e.preventDefault();
    ARR_RIGHT.removeClass('disabled');
    if ($('.graphic__data:nth-child(2)').is(':visible')) {
      return;
    }

    if ($('.graphic__data:nth-child(3)').is(':visible')) {
      ARR_LEFT.addClass('disabled');
    }

    if ($(window).width() < 700) {
      $('.graphic__data:visible').hide().prev().css('display', 'block');
    }
    else {
      $('.graphic__data:visible[data-char]').hide().prev().css('display', 'table-cell');
    }
  });

  TABLE_ARROW.each( function () { // eslint-disable-line
    const EL = $(this);

    EL.on('click', (e) => {
      e.preventDefault();
      // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
      EL.parents('.table__row').toggleClass('table__row_opened');
      $('.table__row_subrow_tax').toggle();
    });
  })

  $('.section__ar_right').on('click', function (e) {
    $('.analityc-table__wrapper').animate( { scrollLeft: '+=100' }, 300);
    console.log($('.table').offset().left);
  });

  $('.section__ar_left').on('click', function (e) {
    $('.analityc-table__wrapper').animate( { scrollLeft: '-=100' }, 300);
  });

  // $('.section__ar_right').on('click', function (e) {
  //   e.preventDefault();
  //   console.log(1);
  //   // const EL = $(this);
  //   ACTIVE_TABLE.css('transform', 'translateX(100px)');
  //   ACTIVE_TABLE.animate( { scrollLeft: '+=460' }, 1000);
  // });
  //
  // $('.section__ar_left').on('click', function (e) {
  //   e.preventDefault();
  //   // const EL = $(this);
  //   ACTIVE_TABLE.animate( { scrollLeft: '-=460' }, 1000)  ;
  //   // ACTIVE_TABLE.css('transform', 'translateX(-100px)');
  //
  // });

  $(".section__ar_right1").click(function(){
    console.log('1');
    ACTIVE_TABLE.animate({scrollLeft: "-="+100});
  });
  $(".section__ar_left1").click(function(){
    console.log('1');
    ACTIVE_TABLE.animate({scrollLeft: "+="+100});
  });

  // const changesSlider = new Swiper('.analityc-widget-sources-table_date', {
  //   // nextButton: '.section__ar_left',
  //   // prevButton: '.section__ar_right',
  //   // slidesPerView: 'auto',
  //   // freeMode: true,
  //   // spaceBetween: 0,
  //   // scrollContainer: true,
  //   // autoWidth: true
  //
  // });
  //
  //
  // const v_swiper = new Swiper('.v-swiper', {
  //   // nextButton: '.section__ar_left',
  //   // prevButton: '.section__ar_right',
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   spaceBetween: 0,
  //   scrollContainer: true,
  //   autoWidth: true
  //
  // });


  // стрелочки на графиках в адаптиве
  $('.ar-left, .ar-right').hide();
  $(window).on('scroll', function(){
    if ($('.moscow-sources').length) {
      if ($('.analityc-widget-sources_changes').hasClass('_active') || $('.analityc-widget-sources_approved').hasClass('_active')) {
        var sourcesScroll = $(window).scrollTop();
        var arrowTopDistance = $('.moscow-sources .analityc-widget_sources').offset().top - $(window).height() / 4;
        var arrowBottomDistance = $('.footer').offset().top - $(window).height() / 1.3;
        var headerHeight = $('.header').height();
        var colHeadTopDistance = $('.moscow-sources .analityc-widget_sources').offset().top - headerHeight;
        var colHeadBottomDistance = $('.footer').offset().top - $(window).height() - 200;

        if (sourcesScroll >= arrowTopDistance && sourcesScroll <= arrowBottomDistance) {
          $('.ar-left, .ar-right').show();
        } else {
          $('.ar-left, .ar-right').hide();
        }
      }
    }
  });
};
