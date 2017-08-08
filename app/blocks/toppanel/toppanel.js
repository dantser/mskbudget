import $ from 'jquery';

export default function toppanel() {
  // const $toppanel = $('.top-panel-frame-wrp');
  const $toppanel = $('body > div:first');
  const $navbar = $('#header');
  const $navbarDrop = $('#headerDrop');
  const $trigger = $('*[data-toggle-toppanel]');
  const $position = $(window).scrollTop();
  const hideToppanelOnScrollDown = false;

console.log($toppanel);
  if ($toppanel && $navbar && $trigger) {
    // Скрыть/показать топпанель ДИТа
    $trigger.on('click', (e) => {
      e.preventDefault();

      $toppanel.toggleClass('is-active');
      $navbar.toggleClass('toppanel-is-active');
      // $navbarDrop.toggleClass('toppanel-is-active');
    });

    // Скрываем топпанель ДИТ при скролле страницы вниз
    if (hideToppanelOnScrollDown) {
      $(window).scroll(function() {
        var $scroll = $(window).scrollTop();
        console.log($toppanel.hasClass('is-active'));
        if ($scroll > $position && $toppanel.hasClass('is-active') && $navbar.hasClass('toppanel-is-active')) {
          $toppanel.removeClass('is-active');
          $navbar.removeClass('toppanel-is-active');

          console.log('ska');
        }
      });
    }
  }
}
