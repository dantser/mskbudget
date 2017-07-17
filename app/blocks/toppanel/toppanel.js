import $ from 'jquery';

export default function toppanel() {
  const $toppanel = $('#toppanel');
  const $navbar = $('#header');
  const $sections = $('.sections');
  const $trigger = $('.js-show-toppanel');

  if ($toppanel && $navbar && $sections && $trigger) {
    $trigger.on('click', (e) => {
      e.preventDefault();

      $toppanel.toggleClass('is-active');
      $navbar.toggleClass('toppanel-is-active');
      // $sections.toggleClass('toppanel-is-active');
    });
  }
}
