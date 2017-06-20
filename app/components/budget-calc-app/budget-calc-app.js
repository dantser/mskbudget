import $ from 'jquery';

export default() => {
  // Табы для калькулятора бюджета
  const $calcApp = $('#budget-calc-app');
  const $tabsWrapper = $('#budget-calc-app__main-content');
  const $tabs = $('.js-budget-calc-app__tab');
  const $tabControls = $('.js-budget-calc-app__tab-control');

  if ($calcApp && $tabsWrapper && $tabs && $tabControls) {
    $calcApp.on('click', '.js-budget-calc-app__tab-control', function(event) {
      event.preventDefault();
      const $targetTab = $($(this).attr('data-target'));
      const $targetTabIndicator = $($targetTab.attr('data-state-indicator'));

      if (!$targetTab.hasClass('is-active')) {
        $tabs.removeClass('is-active');
        $targetTab.addClass('is-active');

        $tabControls.removeClass('is-active');
        $targetTabIndicator.addClass('is-active');

        // скроллимть страницу наверх при изменении вкладки или нет?
        // $('body').animate({
        //   scrollTop: $('#budget-calc-app').offset().top - $('header.header').outerHeight() - 20
        // }, 150);

        // console.log($('#budget-calc-app').offset().top - $('header.header').outerHeight() - 20);
      }
    });
  }
}
