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
    
    function addActiveClass(el) {
      el.addClass('dropdown-is-active');
    }
    
    var timeout;
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
          var el = $(this);
          timeout = setTimeout(function(){
            addActiveClass(el);
          }, 300);
        }
      }
    });
    
    //$('#menu .submenu__link, #menu .subsubmenu').on('mouseout', function(e) {
    //  if ($(window).outerWidth() > 1024) {
    //    if (!$('#menu .subsubmenu:hover').length) {
    //      clearTimeout(timeout);
    //      closeSubMenu();
    //    }
    //  }
    //});
    
    $('#menu .submenu__link, #menu .subsubmenu').on('mouseout', function(e) {
      if ($(window).outerWidth() > 1024) {
        clearTimeout(timeout);
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
  
  // выделение соответствующего пункта меню на открытой странице
  if ($('#menu').length) {
    setNav();
  }
  
  function setNav() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    
    $('.menu__link, .menu .submenu__link').removeClass('current');
    
    $('.menu__link, .menu .submenu__link').each(function(){
      var href = $(this).attr('href');
      if (path.substr(-href.length) === href) {
        $(this).addClass('current');
        $(this).parents('.submenu').prev().addClass('current');
      }
    });
  }
}
