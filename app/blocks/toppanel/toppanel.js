import $ from 'jquery';

export default function toppanel() {
  // Скрыть/показать топпанель ДИТа
  $('a[data-toggle-toppanel="data-toggle-toppanel"]').on('click', function(e) {
    e.preventDefault();
    $('.top-panel-frame-wrp').toggleClass('is-active');
    $('#header').toggleClass('toppanel-is-active');
  });

  // Скрываем топпанель ДИТ при скролле страницы вниз
  // в файле app/components/header/header.js

  // Скрываем топпанель ДИТ при клике за её пределами
  $('body').on('click', function(e) {
    if (!e.target.closest('a[data-toggle-toppanel="data-toggle-toppanel"]') && !e.target.closest('.top-panel-frame-wrp')) {
      $('.top-panel-frame-wrp').removeClass('is-active');
      $('#header').removeClass('toppanel-is-active');
    }
  });
}
