import $ from 'jquery';

export default () => {
  if ($('#menu').length) {
    $('#menu .menu__link').on('click', function(event) {
      event.preventDefault();

      $('#menu .menu__link.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    });
  }
}
