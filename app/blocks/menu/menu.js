import $ from 'jquery';

export default () => {
  if ($('#menu .menu__link.has-dropdown').length) {
    function closeSubMenu() {
      $('#menu .menu__link.has-dropdown').removeClass('dropdown-is-active');
    }

    $('#menu .menu__link.has-dropdown').on('click', function(event) {
      event.preventDefault();

      if ( $(this).hasClass('dropdown-is-active') ) {
        closeSubMenu();
      } else {
        closeSubMenu();
        $(this).addClass('dropdown-is-active');
      }
    }).on('focusout', function () {
      closeSubMenu();
    });
  }
}
