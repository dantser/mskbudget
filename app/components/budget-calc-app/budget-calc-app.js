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
      }
    });
  }

  // аккордеоны
  const $tableRow = $('.js-table-row-accordeon');

  if ($tableRow) {
    $tableRow.on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('is-active');
    });
  }

  // перенос блоков "проверить бюджет" и "вернуть исходные значения"
  // в футер калькулятора на экранах 1024 пикселя и меньше шириной
  const blocksToMoveClass = '.js-moveAroundThoseWidgets';
  const $calcAppFooter = $('#budget-calc-app__footer');
  const $calcAppSidebar = $('#budget-calc-app__sidebar');
  const $blocksToMove = $(blocksToMoveClass);

  function screenWidth() {
     return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
  }

  function moveAroundThoseWidgets() {
    let nowTheyInSidebar = $calcAppSidebar.has(blocksToMoveClass).length ? true : false;

    if (screenWidth() > 1024 && !nowTheyInSidebar) {
      $blocksToMove.appendTo($calcAppSidebar);
    } else if (screenWidth() <= 1024 && nowTheyInSidebar) {
      $blocksToMove.appendTo($calcAppFooter);
    }
  }

  if ($calcAppFooter && $calcAppSidebar && $blocksToMove) {
    window.addEventListener('load', moveAroundThoseWidgets);
    window.addEventListener('resize', moveAroundThoseWidgets);
  }
}
