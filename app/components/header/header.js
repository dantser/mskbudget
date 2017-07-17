import $ from 'jquery';

export default () => {
  const $header = $('#header');
  const $burger = $('#burger');
  const $headerDrop = $('#headerDrop');

  if ($header && $burger && $headerDrop) {
    $burger.on('click', function(event) {
      event.preventDefault();

      const $headerIsOpen = $('#header.is-active').length;

      if ($headerIsOpen) {
        $header.removeClass('is-active');
        $burger.removeClass('is-active');
        $('.sections, .guide').removeClass('filter_blur');
        $headerDrop.fadeOut(250);
      } else {
        $header.addClass('is-active');
        $burger.addClass('is-active');
        $('.sections, .guide').addClass('filter_blur');
        $headerDrop.fadeIn(250);
      }
    });
  }

  if ($(window).width() > 1024 && !$('.sections').hasClass('sections_fs')) {
    $(window).scroll(function() {
      var scr = $(this).scrollTop();
      if (scr > 21) {
        $header.addClass('header_short');
      } else {
        $header.removeClass('header_short');
      }
    });
  }
}
