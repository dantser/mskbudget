import $ from 'jquery';

export default () => {

  $('.analityc-control-switcher a').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');
  })
}
