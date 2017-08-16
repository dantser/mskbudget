import $ from 'jquery';
import 'jquery-ui-bundle';

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
      EL.parents('.tile__item').toggleClass('tile__item_pinned');
    })
  });

  // стрелочки в виджетах
  $('.widget-card-gov-programs-result .arrow-button_next, .widget-card-social-support .arrow-button_next').on('click', function (e) {
    e.preventDefault();
    const widgetCard = $(this).parents('.widget-card').find('.widget-card__info-block-items_active');

    widgetCard.find('.widget-card__info-block-item_active')
    .removeClass('widget-card__info-block-item_active')
    .next('.widget-card__info-block-item').addClass('widget-card__info-block-item_active');

    if (!widgetCard.find('.widget-card__info-block-item').is('.widget-card__info-block-item_active')) {
      widgetCard.find('.widget-card__info-block-item:first-child').addClass('widget-card__info-block-item_active');
    }
  });

  $('.widget-card-gov-programs-result .arrow-button_prev, .widget-card-social-support .arrow-button_prev').on('click', function (e) {
    e.preventDefault();
    const widgetCard = $(this).parents('.widget-card').find('.widget-card__info-block-items_active');

    widgetCard.find('.widget-card__info-block-item_active')
    .removeClass('widget-card__info-block-item_active')
    .prev('.widget-card__info-block-item').addClass('widget-card__info-block-item_active');

    if (!widgetCard.find('.widget-card__info-block-item').is('.widget-card__info-block-item_active')) {
      widgetCard.find('.widget-card__info-block-item:last-child').addClass('widget-card__info-block-item_active');
    }
  });

  // опросы и обучающий сервис
  $('.widget-card-polls .arrow-button_next, .widget-card-polls-pers .arrow-button_next, .widget-card-quiz .arrow-button_next, .widget-card-quiz-pers .arrow-button_next, .widget-card-projects .arrow-button_next').on('click', function (e) {
    e.preventDefault();
    const widgetCard = $(this).parents('.widget-card__content').find('.widget-card__info-block_active');

    widgetCard.find('.widget-card__info_active').removeClass('widget-card__info_active')
    .next('.widget-card__info').addClass('widget-card__info_active');

    if (!widgetCard.find('.widget-card__info').is('.widget-card__info_active')) {
      widgetCard.find('.widget-card__info:first-child').addClass('widget-card__info_active');
    }
  });

  $('.widget-card-polls .arrow-button_prev, .widget-card-polls-pers .arrow-button_prev, .widget-card-quiz .arrow-button_prev, .widget-card-quiz-pers .arrow-button_prev, .widget-card-projects .arrow-button_prev').on('click', function (e) {
    e.preventDefault();
    const widgetCard = $(this).parents('.widget-card__content').find('.widget-card__info-block_active');

    widgetCard.find('.widget-card__info_active').removeClass('widget-card__info_active')
    .prev('.widget-card__info').addClass('widget-card__info_active');

    if (!widgetCard.find('.widget-card__info').is('.widget-card__info_active')) {
      widgetCard.find('.widget-card__info:last-child').addClass('widget-card__info_active');
    }
  });

  // бюджетная сеть
  $('.widget-card-budget-web .arrow-button_next').on('click', function (e) {
    e.preventDefault();
    const widgetCard = $(this).parents('.widget-card').find('.widget-card__results_active');

    widgetCard.find('.widget-card__results-total_active')
    .removeClass('widget-card__results-total_active')
    .next('.widget-card__results-total').addClass('widget-card__results-total_active');

    if (!widgetCard.find('.widget-card__results-total').is('.widget-card__results-total_active')) {
      widgetCard.find('.widget-card__results-total:first-child').addClass('widget-card__results-total_active');
    }
  });

  $('.widget-card-budget-web .arrow-button_prev').on('click', function (e) {
    e.preventDefault();
    const widgetCard = $(this).parents('.widget-card').find('.widget-card__results_active');

    widgetCard.find('.widget-card__results-total_active')
    .removeClass('widget-card__results-total_active')
    .prev('.widget-card__results-total').addClass('widget-card__results-total_active');

    if (!widgetCard.find('.widget-card__results-total').is('.widget-card__results-total_active')) {
      widgetCard.find('.widget-card__results-total:last-child').addClass('widget-card__results-total_active');
    }
  });

//конец стрелочек в виджетах



// сворачивание-разворачивание карточек в мобильной версии
  if ($(window).width() < 581) {
    $('.widget-card__title').each(function () {
      $(this).on('click', function () {
        var $this = $(this);
        if ($this.parents().hasClass('dropdown-block') || $this.parents().hasClass('wrapper_main')) {   //убираем сворачивание виджетов в блоке дропдаунов и на главной
          return;
        }
        $this.parents('.widget-card').find('.service__diagram-tabs').hide();
        $this.parents('.widget-card').toggleClass('widget-card_active');
        $this.parents('.widget-card__head').siblings().slideToggle(321);
        setTimeout(function () {
          $this.parents('.widget-card').find('.service__diagram-tabs').show();
        }, 321)
      })
    })
  };



  // виджет москва и города мира
  $('.widget-card-cities .selectbox_cities').find('li').on('click', function () {
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
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt1').show(321).addClass('widget-card__info-block-items_active');
    } else if (newval == "opt2") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt2').show(321).addClass('widget-card__info-block-items_active');
    } else if (newval == "opt3") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt3').show(321).addClass('widget-card__info-block-items_active');
    } else if (newval == "opt4") {
      $('.widget-card-gov-programs-result .widget-card__info-block-items_opt4').show(321).addClass('widget-card__info-block-items_active');
    }
  });

  // виджет социальная поддержка населения
  $('.widget-card-social-support').find('li').on('click', function () {
    const newval = $(this).data('val');
    $('.widget-card-social-support').find('.widget-card__info-block-items').hide();
    if (newval == "opt1") {
      $('.widget-card-social-support .widget-card__info-block-items_opt1').show(321).addClass('widget-card__info-block-items_active');
    } else if (newval == "opt2") {
      $('.widget-card-social-support .widget-card__info-block-items_opt2').show(321).addClass('widget-card__info-block-items_active');
    } else if (newval == "opt3") {
      $('.widget-card-social-support .widget-card__info-block-items_opt3').show(321).addClass('widget-card__info-block-items_active');
    } else if (newval == "opt4") {
      $('.widget-card-social-support .widget-card__info-block-items_opt4').show(321).addClass('widget-card__info-block-items_active');
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
    $(this).parents('.widget-card__content').find('.widget-card__results').slideUp(321);
    if (newval == "opt1") {
      $(this).parents('.widget-card__content').find('.widget-card__results_opt1').slideDown(321);
    } else if (newval == "opt2") {
      $(this).parents('.widget-card__content').find('.widget-card__results_opt2').slideDown(321);
    } else if (newval == "opt3") {
      $(this).parents('.widget-card__content').find('.widget-card__results_opt3').slideDown(321);
    } else if (newval == "opt4") {
      $(this).parents('.widget-card__content').find('.widget-card__results_opt4').slideDown(321);
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

  // виджет калькулятор
  $('.widget-card-calc').find('li').on('click', function () {
    const newval = $(this).data('val');
    $(this).parents('.widget-card__content').find('.widget-card__output-calc').removeClass('widget-card__output-calc_active').hide(321);
    if (newval == "opt1") {
      $(this).parents('.widget-card__content').find('.widget-card__output-calc_opt1').show(321);
    } else if (newval == "opt2") {
      $(this).parents('.widget-card__content').find('.widget-card__output-calc_opt2').show(321);
    } else if (newval == "opt3") {
      $(this).parents('.widget-card__content').find('.widget-card__output-calc_opt3').show(321);
    } else if (newval == "opt4") {
      $(this).parents('.widget-card__content').find('.widget-card__output-calc_opt4').show(321);
    }
  });
}
