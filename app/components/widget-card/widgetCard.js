import $ from 'jquery';

export default () => {
  const FAVOR = $('.widget-card__favor');

  FAVOR.each(function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.toggleClass('widget-card__favor_active');
    })
  })
}
