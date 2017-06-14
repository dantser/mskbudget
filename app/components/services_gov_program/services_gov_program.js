import $ from 'jquery';

export default () => {
  const SLIDE_TEXT = $('.gov-program__tasks .text:nth-child(n+3)');
  const SHOWHIDE = $('.js-showhide');
  const DROPDOWN = $('.dropdown');
  const DROPDOWN_C = '.dropdown';
  const DROPDOWN_BTN = $('.dropdown__btn');


  if (!SHOWHIDE || !SLIDE_TEXT) {
    return;
  }

  DROPDOWN_BTN.each( function() { // eslint-disable-line
    const EL = $(this);
    const DROPDOWN_ACTIVE_CLASS = 'dropdown_active';

    EL.on('click', (e) => {
      e.preventDefault();
      EL.parent().siblings(DROPDOWN_C).removeClass(DROPDOWN_ACTIVE_CLASS);
      EL.parent(DROPDOWN_C).toggleClass(DROPDOWN_ACTIVE_CLASS);
    });
  });

  SHOWHIDE.each( function () { // eslint-disable-line
    const EL = $(this);
    const SHORTEXTCLASS = 'gov-program__tasks_short';
    EL.on('click', (e) => {
      e.preventDefault();
      SLIDE_TEXT.slideToggle();
      const ELTEXT = EL.text();
      EL.text(ELTEXT === 'Показать все 10 задач государственной программы' ? 'Скрыть задачи' : 'Показать все 10 задач государственной программы');
    });
  });
}
