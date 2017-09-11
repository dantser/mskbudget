import $ from 'jquery';

export default () => {

  $('.analityc-control-switcher a').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');
  })

  // Переключаем свитчеры по клику на иконку график/таблица
  $(document).on('click', '[data-select-switcher]', function(){
    var target = $(this).data('select-switcher');
    $(document).find('[data-switcher=' + target + ']').addClass('active').siblings('[data-switcher]').removeClass('active');
  });
}
