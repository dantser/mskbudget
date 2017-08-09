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
  });

  $('.widget-card__arrow-button').on('click', function (e) {
    e.preventDefault();
  });

  $('.widget-card__title').each(function () {
    $(this).on('click', function () {
      var $this = $(this);
      $this.parents('.widget-card').find('.service__diagram-tabs').hide();
      $this.parents('.widget-card').toggleClass('widget-card_active');
      $this.parents('.widget-card__head').siblings().slideToggle(321);
      setTimeout(function () {
        $this.parents('.widget-card').find('.service__diagram-tabs').show();
      }, 321)
    })
  });

  // виджет москва и города мира
  $('.selectbox_cities').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-cities').find('.widget-card__results').slideUp();
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
  });

  // виджет результаты реализации гос.программ
  $('.widget-card-gov-programs-result').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-gov-programs-result').find('.widget-card__info-block-items').hide();
    if (newval == "opt1") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt1').show(321);
    } else if (newval == "opt2") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt2').show(321);
    } else if (newval == "opt3") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt3').show(321);
    } else if (newval == "opt4") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt4').show(321);
    }
  });
  // виджет социальная поддержка населения
  $('.widget-card-social-support').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-social-support').find('.widget-card__info-block-items').hide();
    if (newval == "opt1") {
      $('.widget-card-social-support .widget-card__info-block-items_opt1').show(321);
    } else if (newval == "opt2") {
      $('.widget-card-social-support .widget-card__info-block-items_opt2').show(321);
    } else if (newval == "opt3") {
      $('.widget-card-social-support .widget-card__info-block-items_opt3').show(321);
    } else if (newval == "opt4") {
      $('.widget-card-social-support .widget-card__info-block-items_opt4').show(321);
    }
  });
  // виджет внутригородские муниципальные образования
  $('.widget-card-municipalities').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-municipalities').find('.widget-card__results-total').hide();
    if (newval == "opt1") {
      $('.widget-card-municipalities .widget-card__results-total_opt1').show(321);
    } else if (newval == "opt2") {
      $('.widget-card-municipalities .widget-card__results-total_opt2').show(321);
    } else if (newval == "opt3") {
      $('.widget-card-municipalities .widget-card__results-total_opt3').show(321);
    } else if (newval == "opt4") {
      $('.widget-card-municipalities .widget-card__results-total_opt4').show(321);
    }
  });
// виджет москва и регионы рф
  $('.widget-card-regions').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-regions').find('.widget-card__results').slideUp(321);
    if (newval == "opt1") {
      $('.widget-card-regions .widget-card__results_opt1').slideDown(321);
    } else if (newval == "opt2") {
      $('.widget-card-regions .widget-card__results_opt2').slideDown(321);
    } else if (newval == "opt3") {
      $('.widget-card-regions .widget-card__results_opt3').slideDown(321);
    } else if (newval == "opt4") {
      $('.widget-card-regions .widget-card__results_opt4').slideDown(321);
    }
  });
  // виджет бюджетная сеть
  $('.widget-card-budget-web').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-budget-web').find('.widget-card__results').removeClass('widget-card__results_active');
    if (newval == "opt1") {
      $('.widget-card-budget-web .widget-card__results_opt1').addClass('widget-card__results_active');
    } else if (newval == "opt2") {
      $('.widget-card-budget-web .widget-card__results_opt2').addClass('widget-card__results_active');
    } else if (newval == "opt3") {
      $('.widget-card-budget-web .widget-card__results_opt3').addClass('widget-card__results_active');
    } else if (newval == "opt4") {
      $('.widget-card-budget-web .widget-card__results_opt4').addClass('widget-card__results_active');
    }
  });
}
