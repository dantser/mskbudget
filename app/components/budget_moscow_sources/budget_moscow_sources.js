import $ from 'jquery';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');
  const SWITCH = 'arr-switchclass';
  const TABLE_ARROW = $('.table__arrow');
  const TABLE_SUBROW = $('.table__row_subrow');
  const ACTIVE_TABLE = $('._active').find('.table');

  if (!ARR_RIGHT || !ARR_LEFT) {
    return;
  };

  if (ACTIVE_TABLE.length) {
    $('.section__ar').show();
  } else {
    $('.section__ar').hide();
  }

  ARR_RIGHT.on('click', (e) => {
    e.preventDefault();
    if ($('.table__data:last-child').is(':visible')) {
      return;
    }

    if ($(window).width() < 700) {
        $('.table__data:visible').hide().next().css('display', 'block');
    }
    else {
      $('.table__data:visible').hide().next().css('display', 'table-cell');
    }
  });

  ARR_LEFT.on('click', (e) => {
    e.preventDefault();
    if ($('.table__data:nth-child(2)').is(':visible')) {
      return;
    }

    if ($(window).width() < 700) {
      $('.table__data:visible').hide().prev().css('display', 'block');
    }
    else {
      $('.table__data:visible').hide().prev().css('display', 'table-cell');
    }
  });

  TABLE_ARROW.each( function () { // eslint-disable-line
    const EL = $(this);

    EL.on('click', (e) => {
      e.preventDefault();
      // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
      EL.parents('.table__row').toggleClass('table__row_opened');
      $('.table__row_subrow_tax').slideToggle();
    });
  })

  $('.section__ar_right').on('click', function (e) {
    e.preventDefault();
    // const EL = $(this);
    // $('._active').find('.table').css('transform', 'translateX(100px)');
    ACTIVE_TABLE.animate( { scrollLeft: '+=460' }, 1000);
  });

  $('.section__ar_left').on('click', function (e) {
    e.preventDefault();
    // const EL = $(this);
    ACTIVE_TABLE.animate( { scrollLeft: '-=460' }, 1000);
    // ACTIVE_TABLE.css('transform', 'translateX(-100px)');

  });
};
