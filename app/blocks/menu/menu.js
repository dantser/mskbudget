import $ from 'jquery';

export default () => {
  if ($('#menu .menu__link.has-dropdown').length) {
    function closeSubMenu() {
      $('#menu .menu__link.has-dropdown').removeClass('dropdown-is-active');
    }

    $('#menu .menu__link.has-dropdown').on('click', function(event) {
      if ($(window).width() >= 1024) {
        event.preventDefault();

        if ($(this).hasClass('dropdown-is-active')) {
          closeSubMenu();
        } else {
          closeSubMenu();
          $(this).addClass('dropdown-is-active');
        }
      }
    }).on('blur', function() {
      closeSubMenu();
    });

    $(document).keyup(function(e) {
      if (e.keyCode == 27 && $('#menu .menu__link.has-dropdown')) { // escape key maps to keycode `27`
        closeSubMenu();
      }
    });
  }
}

