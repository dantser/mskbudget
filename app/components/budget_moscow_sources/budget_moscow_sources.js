import $ from 'jquery';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');
  const SWITCH = 'arr-switchclass';
  const TABLE_ARROW = $('.table__arrow');
  const TABLE_SUBROW = $('.table__row_subrow');

  if (!ARR_RIGHT || !ARR_LEFT) {
    return;
  };

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
};
