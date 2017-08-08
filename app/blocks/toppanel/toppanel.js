import $ from 'jquery';

export default function toppanel() {
  const $toppanel = $('.top-panel-frame-wrp');
  const $navbar = $('#header');
  const $navbarDrop = $('#headerDrop');
  const $trigger = $('*[data-toggle-toppanel]');

  if ($toppanel && $navbar && $trigger) {
    $trigger.on('click', (e) => {
      e.preventDefault();

      $toppanel.toggleClass('is-active');
      $navbar.toggleClass('toppanel-is-active');
      // $navbarDrop.toggleClass('toppanel-is-active');
    });
  }
}
