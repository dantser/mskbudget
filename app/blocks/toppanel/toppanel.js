import $ from 'jquery';

export default function toppanel() {
  const $toppanel = $('.top-panel-frame-wrp');
  const $header = $('#header');
  const $trigger = $('*[data-toggle-toppanel]');

  if ($toppanel && $header && $trigger) {
    // Скрыть/показать топпанель ДИТа
    $trigger.on('click', (e) => {
      e.preventDefault();
      $toppanel.toggleClass('is-active');
      $header.toggleClass('toppanel-is-active');
    });

    // Скрываем топпанель ДИТ при скролле страницы вниз
    // в файле app/components/header/header.js

    // Скрываем топпанель ДИТ при клике за её пределами
    $('body').bind('click', function(e) {
      if (!e.target.closest('*[data-toggle-toppanel]') && !e.target.closest('.top-panel-frame-wrp')) {
        $toppanel.removeClass('is-active');
        $header.removeClass('toppanel-is-active');
      }
    });
  }
}
