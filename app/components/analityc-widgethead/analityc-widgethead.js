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

  // вывод даты в заголовке Исполнение на дату
  function graphicsDate() {
    const DP_OUTPUT = $(document).find('.js-dp-output_cons');
    const DP = $(document).find('[data-level="consolidated"]');
    var val = '1 ' + DP.find('.analityc-widget__selectbox_month .selectbox__val').text() + ' ' + DP.find('.analityc-widget__selectbox_year .selectbox__val').text();
    DP_OUTPUT.text(val);
  }
  $(document).on('click', '.analityc-control-group._level li', function() {
    graphicsDate();
    $('.js-dp-output').siblings().removeClass('active');
    if ($(this).data('val') == 'consolidated')
      $('.js-dp-output_cons').addClass('active');
    else
      $('.js-dp-output_others').addClass('active');
  })
  $(document).on('click', '[data-level="consolidated"] li', function() {
    graphicsDate();
  })

}
