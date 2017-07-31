import vex from 'vex-js/dist/js/vex.combined.js';

/*
* Модальные окна на базе vex
* https://github.com/HubSpot/vex
*
* Возможные варианты:
* vex.dialog.alert(stringOrOptions)
* vex.dialog.confirm(options)
* vex.dialog.prompt(options)
* vex.dialog.open(options)
*
* Простейший пример:
* vex.dialog.alert('Thanks for checking out vex!')
*/
export default function() {
  // кастомные callback-функции для разных модалок
  const budgetCalcRestoreDefaults = function(value) {
    console.log('callback fired ' + value);
  }

  // универсальный код вызова модальных окон
  const modals = Array.from(document.querySelectorAll('[data-modal]'));

  if (typeof(vex) && modals.length) {
    vex.defaultOptions.className = "vex-theme-default";

    modals.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();

        const modalType = (item.getAttribute('data-modal-type')) ? item.getAttribute('data-modal-type') : 'alert';
        const btnYesText = (item.getAttribute('data-modal-btn-yes')) ? item.getAttribute('data-modal-btn-yes') : 'Ок';
        const btnNoText = (item.getAttribute('data-modal-btn-no')) ? item.getAttribute('data-modal-btn-no') : 'Нет';
        const heading = (item.getAttribute('data-modal-heading')) ? ('<div class="vex-heading">' + item.getAttribute('data-modal-heading') + '</div>') : '';
        const text = (item.getAttribute('data-modal-text')) ? ('<div class="vex-text">' + item.getAttribute('data-modal-text') + '</div>') : '';
        const content = heading + text;
        const callbackFunctionName = (item.getAttribute('data-callback-function')) ? item.getAttribute('data-callback-function') : false;

        vex.dialog.buttons.YES.text = btnYesText;
        vex.dialog.buttons.NO.text = btnNoText;

        if (modalType === 'alert') {
          vex.dialog.alert({
            unsafeMessage: content,
            showCloseButton: true,

            // @DANGER
            // Используется для тестирования вёрстки по желанию заказчика
            // Убрать на продакшене
            callback: function(value) {
              if (value && document.getElementById('budget-calc-app__tab_check-indicator')) {
                document.getElementById('budget-calc-app__tab_check-indicator').click();
              }
            }
            // @DANGER
          });
        } else if (modalType === 'confirm') {
          vex.dialog.confirm({
            unsafeMessage: content,
            showCloseButton: true,

            callback: function (value) {
              if (callbackFunctionName === "budgetCalcRestoreDefaults") {
                budgetCalcRestoreDefaults(value);
              } else {
                if (value) {
                  console.log('yes, set your own callback');
                } else {
                  console.log('no, set your own callback');
                }
              }
            }
          });
        }
      });
    });
  }
}
