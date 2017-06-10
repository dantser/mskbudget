import $ from 'jquery';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');

  ARR_RIGHT.on('click', (e) => {
    e.preventDefault();
    if ($('.table__data:last-child').is(':visible')) {
      return;
    }
    $('.table__data:visible').css('display', 'none').next().css('display', 'table-cell');
  });

  ARR_LEFT.on('click', (e) => {
    e.preventDefault();
    if ($('.d-smr__chart-col:visible[data-char = revenue]').is(':visible')) {
      return;
    }
    $('.d-smr__chart-col:visible[data-char]').css('display', 'none').prev().css('display', 'table-cell');
  });
};
