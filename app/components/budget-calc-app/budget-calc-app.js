import $ from 'jquery';
import matchHeight from 'jquery-match-height';

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

  // вкладка расходы
  // подменю у плиток
  const $calcAppCostsTab = $('#budget-calc-app__tab_costs');
  const $costsItemLink = $('.js-budget-calc-app__costs-item-link');
  const costsItemClassName = '.js-budget-calc-app__costs-item';

  if ($costsItemLink && $calcAppCostsTab) {
    $costsItemLink.on('click', function(event) {
      event.preventDefault();

      const isAlreadyActive = $(this).parent(costsItemClassName).hasClass('is-active');

      if (isAlreadyActive) {
        $(this).parent(costsItemClassName).removeClass('is-active');
      } else {
        $calcAppCostsTab.find(costsItemClassName).removeClass('is-active');
        $(this).parent(costsItemClassName).addClass('is-active');
      }
    });
  }

  // одинаковая высота блоков/плиток в расходах
  // спасибо Internet Explorer, что нельзя делать нормальные вещи на флексбоксе
  const $costsItems = $('.js-budget-calc-app__costs-item');
  const $costsItemsLinks = $('.js-budget-calc-app__costs-item-link');
  const $costsItemsValues = $('.js-budget-calc-app__costs-item-value');

  if (typeof(matchHeight) && $costsItems) {
    $costsItems.matchHeight();
    $costsItemsLinks.matchHeight();
    $costsItemsValues.matchHeight();
  }

  // перенос блоков "проверить бюджет" и "вернуть исходные значения"
  // в футер калькулятора на экранах 1024 пикселя и меньше шириной
  // + перенос виджета "Баланс" наверх в мобильной версии
  const blocksToMoveClass = '.js-moveAroundThoseWidgets';
  const $calcAppFooter = $('#budget-calc-app__footer');
  const $calcAppSidebar = $('#budget-calc-app__sidebar');
  const $blocksToMove = $(blocksToMoveClass);
  const $widgetBalance = $('#budget-calc-app__widget_not-balanced');

  function screenWidth() {
     return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
  }

  function moveAroundThoseWidgets() {
    let nowTheyInSidebar = $calcAppSidebar.has(blocksToMoveClass).length ? true : false;

    if (screenWidth() > 1024 && !nowTheyInSidebar) {
      $blocksToMove.appendTo($calcAppSidebar);
      $widgetBalance.removeClass('mr0').insertAfter('#budget-calc-app__tab_balance-indicator');
    } else if (screenWidth() <= 1024 && nowTheyInSidebar) {
      $blocksToMove.appendTo($calcAppFooter);
      $widgetBalance.addClass('mr0').prependTo($calcApp);
    }
  }

  if ($calcAppFooter && $calcAppSidebar && $blocksToMove && $widgetBalance) {
    window.addEventListener('load', moveAroundThoseWidgets);
    window.addEventListener('resize', moveAroundThoseWidgets);
  }
}
