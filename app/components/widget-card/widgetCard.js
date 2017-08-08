import $ from 'jquery';

export default () => {
  const FAVOR = $('.widget-card__favor');
  const PIN = $('.widget-card__pin');

  FAVOR.each(function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.toggleClass('widget-card__favor_active');
    })
  });

  PIN.each(function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.toggleClass('widget-card__pin_active');
    })
  })

  $('.selectbox_cities').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card__results').slideUp();
    if (newval == "Москва") {
      $('.widget-card__results_moscow').slideDown(321);
      $(this).parents('.widget-card-cities').find('.widget-card__logo img').attr('src', 'assets/images/logo.png');
    } else if (newval == "Лондон") {
      $('.widget-card__results_london').slideDown(321);
      $(this).parents('.widget-card-cities').find('.widget-card__logo img').attr('src', 'assets/images/coat/london.png');
    } else if (newval == "Париж") {
      $('.widget-card__results_paris').slideDown(321);
      $(this).parents('.widget-card-cities').find('.widget-card__logo img').attr('src', 'assets/images/coat/paris.png');
    } else if (newval == "Берлин") {
      $('.widget-card__results_berlin').slideDown(321);
      $(this).parents('.widget-card-cities').find('.widget-card__logo img').attr('src', 'assets/images/coat/berlin.png');
    }

  })
}
