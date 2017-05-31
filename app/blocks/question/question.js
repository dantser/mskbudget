import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const TEXT = '.question__reply';
  const SHOWHIDE = $('.question__link');

  SHOWHIDE.each( function () { // eslint-disable-line
    const EL = $(this);
    const SHORTEXTCLASS = 'question__reply_long';
    EL.on('click', (e) => {
      e.preventDefault();
      const ELTEXT = EL.text();
      EL.siblings(TEXT).toggleClass(SHORTEXTCLASS, 400);
      EL.text(ELTEXT === 'Раскрыть полностью' ? 'Свернуть' : 'Раскрыть полностью');
    });
  });
};
