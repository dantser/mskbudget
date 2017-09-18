export default function () {
  // Отправка формы при кнажатии enter
  /*$('.js-enterform').each(function() {
      $(this).find('input').keypress(function(e) {
          // Enter pressed?
          // e.preventDefault();
          if(e.which == 10 || e.which == 13) {
              this.form.submit();
              e.preventDefault();
          }
      });
  });*/

  // Показать еще
  $('.more__a').on('click', function (e) {
    e.preventDefault();
    $('.tile__item:hidden').slideDown();
  });

  // Показать еще (для страницы документов)
  $('.documents-page .more__a').on('click', function (e) {
    e.preventDefault();
    $('.documents-page .documents-cards').animate({
      height: $('.documents-page .documents-cards').find('.tile').height()
    }, 1000, function(){
      $('.documents-page .documents-cards').height('auto');
    });
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
    $(this).toggleClass('sort__a_top')
  });

}
