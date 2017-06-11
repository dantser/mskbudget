import $ from 'jquery';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');
  const SWITCH = 'arr-switchclass';

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
};
