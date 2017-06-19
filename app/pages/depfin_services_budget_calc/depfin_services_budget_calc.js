import $ from 'jquery';

export default function depfin_services_budget_calc() {
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
}
