import $ from 'jquery';

export default () => {
  const SLIDE_TEXT = $('.gov-program__tasks .text:nth-child(n+3)');
  const SHOWHIDE = $('.js-showhide');

  if (!SHOWHIDE || !SLIDE_TEXT) {
    return;
  }

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
