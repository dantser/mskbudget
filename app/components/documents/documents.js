export default function () {
  // Отправка формы при кнажатии enter
  $('.js-enterform').each(function() {
      $(this).find('input').keypress(function(e) {
          // Enter pressed?
          e.preventDefault();
          if(e.which == 10 || e.which == 13) {
              this.form.submit();
          }
      });
  });

  // Показать еще
  $('.more__a').on('click', function (e) {
    e.preventDefault();
    $('.tile__item:nth-child(n+5)').slideDown();
  });

  // Фокус в поле ввода при клике на лейбл
  $('.form__label_type, .form__label_format').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parents('.form__field').find('.form__select-btn').click().focus();
  });

  // Активный класс для сортировки
  $('.sort__a').on('click', function (e) {
    e.preventDefault();
    $('.sort__a').removeClass('sort__a_act');
    $(this).addClass('sort__a_act');
  });

}
