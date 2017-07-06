import $ from 'jquery';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');
  const HIDE_COL = $('.js-hide-col');
  const SORT = $('.sort_desc');

  ARR_RIGHT.on('click', (e) => {
    e.preventDefault();
    if ($('.d-smr__chart-col[data-char = death-rate]').is(':visible')) {
      return;
    }
    $('.d-smr__chart-col:visible[data-char]').css('display', 'none').next().css('display', 'table-cell');
  });

  ARR_LEFT.on('click', (e) => {
    e.preventDefault();
    if ($('.d-smr__chart-col:visible[data-char = revenue]').is(':visible')) {
      return;
    }
    $('.d-smr__chart-col:visible[data-char]').css('display', 'none').prev().css('display', 'table-cell');
  });

  HIDE_COL.each( function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      const ELTEXT = EL.text();
      const DATA = EL.parents('.d-smr__chart-col').attr('data-char');
      $("[data-char='" +DATA+ "']").not(EL.parents('.d-smr__chart-col')).children().toggle();
      EL.text(ELTEXT === 'Скрыть колонку' ? 'Показать колонку' : 'Скрыть колонку');
    })
  });

  SORT.each(function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      const ELTEXT = EL.text();
      EL.text(ELTEXT === 'По убыванию' ? 'По возрастанию' : 'По убыванию');
      EL.toggleClass('sort_desc').toggleClass('sort_desc-top');
    })
  })

  $('#a').on('click', function() {
    const checkBoxes = $("input[name=a\\[\\]]");
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  })

};
