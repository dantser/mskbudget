import $ from 'jquery';

export default () => {
  if ($('#menu .menu__link.has-dropdown, #menu .submenu__link.has-dropdown').length) {

    function closeMenu() {
      return $('#menu .has-dropdown.dropdown-is-active').removeClass('dropdown-is-active');
    }


    // показываем подменю 1-го уровня по ховеру
    // ДЕСКТОП
    $('#menu .menu__link').on('mouseover', function(e) {
      if ($(window).outerWidth() > 1024) {
        if (!$(this).hasClass('has-dropdown')) {
          closeMenu();
          return;
        }

        if (!$(this).hasClass('dropdown-is-active')) {
          const _this = this;
          $.when(closeMenu()).then(function() {
            $(_this).addClass('dropdown-is-active');
          });
        }
      }
    });

    // МОБИЛА
    $('#menu .menu__link.has-dropdown').on('click', function(e) {
      if ($(window).outerWidth() <= 1024) {
        e.preventDefault();

        if (!$(this).hasClass('dropdown-is-active')) {
          const _this = this;
          $.when(closeMenu()).then(function() {
            $(_this).addClass('dropdown-is-active');
          });
        } else {
          closeMenu();
        }
      }
    });


    // скрываем, если курсор вышел за пределы хедера
    $('.sections').on('mouseenter', function(e) {
      if ($(window).outerWidth() > 1024) {
        closeMenu();
      }
    });

    // скрываем, если кликнули за пределами меню
    $('body').bind('click', function(e) {
      if ($(e.target).closest('#menu .menu__link.has-dropdown').length == 0 && $(e.target).closest('#menu .submenu__link.has-dropdown').length == 0) {
        closeMenu();
      }
    });

    // скрываем, если наэали Esc на клавиатуре
    $(document).keyup(function(e) {
      if (e.keyCode == 27 && $('#menu .menu__link.has-dropdown')) { // escape key maps to keycode `27`
        closeMenu();
      }
    });
  }

  // выпадающее подменю второго уровня
  if ($('#menu .submenu__link.has-dropdown').length) {

    function closeSubMenu() {
      return $('#menu .submenu__link.has-dropdown').removeClass('dropdown-is-active');
    }

    // показываем подменю 2-го уровня
    // ДЕКСТОП
    $('#menu .submenu__link').on('mouseover', function(e) {
      if ($(window).outerWidth() > 1024) {
        if (!$(this).hasClass('has-dropdown') && $(this).parents('.subsubmenu').length == 0) {
          closeSubMenu();
          return;
        } else if ($(this).hasClass('has-dropdown')) {
          if (e.target.offsetTop > 0) {
            e.target.nextElementSibling.setAttribute('style','transform: translateY(' + e.target.offsetTop + 'px)');
          }
          $(this).addClass('dropdown-is-active');
        }
      }
    });

    // МОБИЛА
    $('#menu .submenu__link.has-dropdown').on('click', function(e) {
      if ($(window).outerWidth() <= 1024) {
          e.preventDefault();
          if ($(this).hasClass('dropdown-is-active')) {
            closeSubMenu();
          } else {
            $(this).addClass('dropdown-is-active');
          }
      }
    });
  }
}
