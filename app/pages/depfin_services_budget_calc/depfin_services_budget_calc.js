import $ from 'jquery';
import slick from 'slick-carousel';

export default function depfin_services_budget_calc() {
  // табы внутри калькулятора бюджета
  const $tabsWrapper = $('#budget-calc__tabs');
  const $tabs = $('.js-budget-calc__tab');

  if ($tabsWrapper && $tabs) {
    $tabs.on('click', '.js-budget-calc__tab-control', function(event) {
      event.preventDefault();
      const $targetTab = $($(this).attr('data-target'));

      if (!$targetTab.hasClass('is-active')) {
        $tabs.removeClass('is-active');
        $targetTab.addClass('is-active');

        // скроллим наверх
        setTimeout(function() {
          $("html, body").animate({ scrollTop: 0 }, 350);
        }, 25);
      }
    });
  }


  // скролл-ссылки
  const $scrollToLinks = $('.js-budget-calc-page__scrollToLink');

  if ($scrollToLinks) {
    $scrollToLinks.on({
      click: function(event) {
        if ( $(this).attr('data-scrollto').length > 1 ) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $($(this).attr('data-scrollto')).offset().top - 95
          });
        }
      }
    });
  }


  // карусель для экрана "intro" в мобильной версии
  const $introCarousel = $('.js-budget-calc-page__howto-carousel');

  if ($introCarousel) {
    const slickLoader = function() {
      const $slidesToRemove = $('.js-slick-remove');
      const $hiddenStorage = $('#budget-calc__howto-hidden');
      const $theGrid = $('#budget-calc__howto-grid');

      if ($(window).outerWidth() <= 480 && !$introCarousel.hasClass('slick-initialized')) {
        const $slidesRemoved = $slidesToRemove.detach();
        $hiddenStorage.append($slidesRemoved);

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
      } else if ($(window).outerWidth() > 480 && $introCarousel.hasClass('slick-initialized')) {
        $introCarousel.slick('unslick');
        $theGrid.append($slidesToRemove);
      }
    }

    slickLoader();

    $(window).resize(function() {
      setTimeout(function() {
        slickLoader();
      }, 15);
    });
  }
}
