import $ from 'jquery';

export default () => {
  if ($('#menu').length) {
    $('#menu .menu__link').on('click', function(event) {
      event.preventDefault();

      if ( $(this).hasClass('is-active') ) {
        $('#menu .menu__link.is-active').removeClass('is-active');
      } else {
        $('#menu .menu__link.is-active').removeClass('is-active');
        $(this).addClass('is-active');
      }
    });
  }
}
