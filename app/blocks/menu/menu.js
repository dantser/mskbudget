import $ from 'jquery';

export default () => {
  // выпадающее меню первого уровня
  if ($('#menu .menu__link.has-dropdown').length) {
    function closeMenu() {
      $('#menu .menu__link.has-dropdown').removeClass('dropdown-is-active');
    }

    $('#menu .menu__link.has-dropdown').on('click', function(event) {
      if ($(window).width() >= 1024) {
        event.preventDefault();

        if ($(this).hasClass('dropdown-is-active')) {
          closeMenu();
        } else {
          closeMenu();
          $(this).addClass('dropdown-is-active');
        }
      }
    });

    $('body').bind('click', function(e) {
      if ($(e.target).closest('#menu .menu__link.has-dropdown').length == 0 && $(e.target).closest('#menu .submenu__link.has-dropdown').length == 0) {
        closeMenu();
      }
    });

    $(document).keyup(function(e) {
      if (e.keyCode == 27 && $('#menu .menu__link.has-dropdown')) { // escape key maps to keycode `27`
        closeMenu();
      }
    });
  }

  // выпадающее меню второго уровня
  if ($('#menu .submenu__link.has-dropdown').length) {
    function closeSubMenu() {
      $('#menu .submenu__link.has-dropdown').removeClass('dropdown-is-active');
    }

    $('#menu .submenu__link.has-dropdown').on('click', function(event) {
      if ($(window).width() >= 1024) {
        event.preventDefault();

        if ($(this).hasClass('dropdown-is-active')) {
          closeSubMenu();
        } else {
          closeSubMenu();
          $(this).addClass('dropdown-is-active');
        }
      }
    });
  }
}
