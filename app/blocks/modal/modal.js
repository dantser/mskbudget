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
  const modals = Array.from(document.querySelectorAll('[data-show-vex-modal]'));

  if (typeof(vex) && modals.length) {
    vex.defaultOptions.className = "vex-theme-default";

    modals.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        vex.dialog.confirm({
          // если это диалог
          message: 'message',

          // если это уведомление
          // content: 'content',

          // unsafeContent: '',
          showCloseButton: true,
          escapeButtonCloses: true,
          overlayClosesOnClick: true,
          appendLocation: 'body',
          // className: 'modal',
          // overlayClassName: 'modal__overlay',
          // contentClassName: 'modal__content',
          // closeClassName: 'modal__close',
          closeAllOnPopState: true,

          // обязателен для диалогов
          callback: function (value) {
            if (value) {
              console.log('yes')
            } else {
              console.log('no')
            }
          }
        });
      });
    });
  }
}
