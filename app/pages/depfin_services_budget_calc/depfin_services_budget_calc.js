import $ from 'jquery';
import slick from 'slick-carousel';

export default function depfin_services_budget_calc() {
  // табы внутри калькулятора бюджета
  const $tabsWrapper = $('#budget-calc__tabs');
  const $tabs = $('.js-budget-calc__tab');

  if ($tabsWrapper && $tabs) {
    $tabs.on('click', '.js-budget-calc__tab-control', function(event) {
      event.preventDefault();
      const $targetTab = $($(this).attr('href'));

      if (!$targetTab.hasClass('is-active')) {
        $tabs.removeClass('is-active');
        $targetTab.addClass('is-active');
      }
    });
  }


  // карусель для экрана "intro" в мобильной версии
  const $introCarousel = $('.js-budget-calc-page__howto-carousel');

  if ($introCarousel) {
    const slickLoader = function() {
      if ($(window).outerWidth() <= 480 && !$introCarousel.hasClass('slick-initialized')) {
        $introCarousel.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
          variableWidth: false,
        });
      } else {
        if ($introCarousel.hasClass('slick-initialized')) {
          $introCarousel.slick('unslick');
        }
      }
    }

    slickLoader();

    $(window).resize(function() {
      slickLoader();
    });
  }


  // аккордеоны в табличке "доходы"
  const $incomesRow = $('.js-incomes-row_accordeon');

  if ($incomesRow) {
    $incomesRow.on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('is-active');
    });
  }
}
