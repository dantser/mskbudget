import $ from 'jquery';

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

  // аккордеоны в табличке "доходы"
  const $incomesRow = $('.js-incomes-row_accordeon');

  if ($incomesRow) {
    $incomesRow.on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('is-active');
    });
  }
}
