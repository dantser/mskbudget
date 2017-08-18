import $ from 'jquery';
import matchHeight from 'jquery-match-height';

export default () => {
  const $calcApp = $('#budget-calc-app');
  const $header = $('#header');

  // @DANGER дев-скрипт для показа страниц заказчику
  const $registeredContent = $('.js-budget-calc__toggle-if-register');

  if ($registeredContent.length) {
    $registeredContent.on('click', function(e) {
      e.preventDefault();
      $('.js-budget-calc__toggle-if-register.is-active').removeClass('is-active');
      $('.js-budget-calc__toggle-if-register.is-hidden').removeClass('is-hidden');
    });
  }
  // @DANGER дев-скрипт для показа страниц заказчику


  // Выпадающий список при сохранении своего варианта бюджета
  // триггер: кнопка "Сохранить этот вариант"
  const $saveThisBudgetBtn = $('.js-budget-calc-save-the-budget');
  const $savedBudgetsList = $('.js-saved-budgets-list');

  if ($saveThisBudgetBtn.length && $savedBudgetsList.length) {
    $saveThisBudgetBtn.on('click', function(e) {
      e.preventDefault();
      $saveThisBudgetBtn.toggleClass('is-active');
      $savedBudgetsList.toggleClass('is-active');
    });
  }

  // Табы для калькулятора бюджета
  const $tabsWrapper = $('#budget-calc-app__main-content');
  const $tabs = $('.js-budget-calc-app__tab');
  const $tabControls = $('.js-budget-calc-app__tab-control');

  if ($calcApp.length && $tabsWrapper.length && $tabs.length && $tabControls.length) {
    $calcApp.on('click', '.js-budget-calc-app__tab-control', function(event) {
      // Тултипы
      if (event.target.classList.contains('js-tooltip')) {
        return;
      } else {
        event.preventDefault();
        const $targetTab = $($(this).attr('data-target'));
        const $targetTabIndicator = $($targetTab.attr('data-state-indicator'));

        if (!$targetTab.hasClass('is-active')) {
          $tabs.removeClass('is-active');
          $targetTab.addClass('is-active');

          $tabControls.removeClass('is-active');
          $targetTabIndicator.addClass('is-active');

          const scrollPosition = $calcApp.offset().top - $header.outerHeight() - 15;
          setTimeout(function() {
            $("body").animate({
              scrollTop: scrollPosition
            }, 350);
          }, 25);
        }
      }
    });
  }

  // аккордеоны
  if ($('.js-table-row-accordeon').length) {
    $calcApp.on('click', '.js-table-row-accordeon', function(event) {
      // Тултипы
      if (event.target.classList.contains('js-tooltip')) {
        return;
      } else {
        event.preventDefault();
        $(this).toggleClass('is-active');
      }
    });
  }

  // вкладка расходы
  // подменю у плиток
  const $calcAppCostsTab = $('#budget-calc-app__tab_costs');
  const costsItemExpand = '.js-budget-calc-app__costs-item-expand';
  const $costsItemLink = $('.js-budget-calc-app__costs-item-link');
  const costsItemClassName = '.js-budget-calc-app__costs-item';

  if ($costsItemLink.length && $calcAppCostsTab.length) {
    $costsItemLink.on('click', function(event) {
      event.preventDefault();

      const $item = $(this).parent(costsItemClassName);
      const $expand = $item.find(costsItemExpand);
      const height = $expand.find('.js-budget-calc-app_costs-item-expand-inner').get(0).scrollHeight;
      const $openedItem = $calcAppCostsTab.find(costsItemClassName + '.is-active');
      const isAlreadyActive = $item.hasClass('is-active');

      console.log($openedItem);

      if (isAlreadyActive) {
        $item.removeClass('is-active').css('margin-bottom', '0');
        $expand.css('height', '0');
      } else {
        $openedItem.removeClass('is-active').css('margin-bottom', '0').find(costsItemExpand).css('height', '0');
        $item.addClass('is-active').css('margin-bottom', height);
        $expand.css('height', height);
      }
    });
  }

  // одинаковая высота блоков/плиток в расходах
  // спасибо Internet Explorer, что нельзя делать нормальные вещи на флексбоксе
  const $costsItems = $('.js-bc-match-height-1');
  const $costsItemsLinks = $('.js-bc-match-height-2');
  const $costsItemsValues = $('.js-bc-match-height-3');

  if (typeof(matchHeight) && $costsItems.length && $costsItemsLinks.length && $costsItemsValues.length) {
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
      $widgetBalance.removeClass('mr0 mt10').insertAfter('#budget-calc-app__tab_balance-indicator');
      // $widgetBalance.removeClass('mr0 mt0').insertAfter('#budget-calc-app__main-content');
    } else if (screenWidth() <= 1024 && nowTheyInSidebar) {
      $blocksToMove.appendTo($calcAppFooter);
      $widgetBalance.addClass('mr0 mt10').insertAfter('#budget-calc-app__main-content');
    }
  }

  if ($calcAppFooter.length && $calcAppSidebar.length && $blocksToMove.length && $widgetBalance.length) {
    window.addEventListener('load', moveAroundThoseWidgets);
    window.addEventListener('resize', moveAroundThoseWidgets);
  }
}
