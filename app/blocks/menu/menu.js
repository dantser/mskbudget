import $ from 'jquery';

export default () => {
  // главное меню на ДЕКСТОПЕ: экран шире чем 1024px

  // закрываем выпадающие меню на всех уровнях
  if ($('#menu .menu__link.has-dropdown, #menu .submenu__link.has-dropdown').length) {
    function closeMenu() {
      console.log('closeMenu() fired!');
      return $('#menu .has-dropdown').removeClass('dropdown-is-active');
    }

    // показываем меню по ховеру
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

  // выпадающее меню второго уровня
  if ($('#menu .submenu__link.has-dropdown').length) {
    // закрываем выпадающие меню второго уровня
    function closeSubMenu() {
      console.log('closeSubMenu() fired!');
      return $('#menu .submenu__link.has-dropdown').removeClass('dropdown-is-active');
    }

    // показываем меню
    $('#menu .submenu__link').on('mouseover', function(e) {
      if ($(window).outerWidth() > 1024) {
        if (!$(this).hasClass('has-dropdown') && $(this).parents('.subsubmenu').length == 0) {
          closeSubMenu();
          return;
        } else if ($(this).hasClass('has-dropdown')) {
          if (e.target.offsetTop > 0) {
            // const correctTop = e.target.nextElementSibling.offsetTop + e.target.offsetTop;
            e.target.nextElementSibling.setAttribute('style','transform: translateY(' + e.target.offsetTop + 'px)');
          }
          $(this).addClass('dropdown-is-active');
        }
      }
    });
  }
}
