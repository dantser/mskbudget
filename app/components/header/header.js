import $ from 'jquery';

export default () => {
  const $header = $('#header');
  const $burger = $('#burger');
  const $headerDrop = $('#headerDrop');
  const $toppanel = $('.top-panel-frame-wrp');

  function mobileMenuClose() {
    $header.removeClass('is-active');
    $burger.removeClass('is-active');
    $('.sections, .guide').removeClass('filter_blur');
    $headerDrop.fadeOut(250);
    $('body').removeClass('mobile-menu-is-open');

    // toppanel
    $toppanel.removeClass('is-active');
    $header.removeClass('toppanel-is-active');
  }

  function mobileMenuShow() {
    $header.addClass('is-active');
    $burger.addClass('is-active');
    $('.sections, .guide').addClass('filter_blur');
    $headerDrop.fadeIn(250);
    $('body').addClass('mobile-menu-is-open');
  }

  // Мобильное меню
  if ($header && $burger && $headerDrop) {
    $burger.on('click', function(event) {
      event.preventDefault();

      const $headerIsOpen = $('#header.is-active').length;

      if ($headerIsOpen) {
        mobileMenuClose();
      } else {
        mobileMenuShow();
      }
    });
  }

  if ($('.js-close-mobile-menu').length) {
    $('.js-close-mobile-menu').on('click', function() {
      mobileMenuClose();
    });
  }

  // Поведение навбара при скролее страницы на декстопе
  // P.S. в ES6 стиле не работает!
  if ($(window).width() > 1024) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;

    $(window).scroll(function(event) {
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(window).scrollTop();

      if (Math.abs(lastScrollTop - st) <= delta) {
        return;
      }

      if (st > lastScrollTop && st > delta) {
        $header.addClass('header_short').removeClass('toppanel-is-active');
        $toppanel.removeClass('is-active');
      } else {
        if (st + $(window).height() < $(document).height()) {
          $header.removeClass('header_short');
        }
      }

      lastScrollTop = st;
    }

    hasScrolled();
  }
}
