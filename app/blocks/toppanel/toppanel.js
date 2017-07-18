import $ from 'jquery';

export default function toppanel() {
  const $toppanel = $('#toppanel');
  const $navbar = $('#header');
  const $navbarDrop = $('#headerDrop');
  const $trigger = $('.js-show-toppanel');

  if ($toppanel && $navbar && $navbarDrop && $trigger) {
    $trigger.on('click', (e) => {
      e.preventDefault();

      $toppanel.toggleClass('is-active');
      $navbar.toggleClass('toppanel-is-active');
      $navbarDrop.toggleClass('toppanel-is-active');
    });
  }
}
