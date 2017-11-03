import $ from 'jquery';
import 'jquery.scrollbar';

export default () => {

  $(document).on('click', '.analityc-control-switcher a', function (e) {
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
    if ($('.gov-debt').length == 0) {
      graphicsDate();
    }
  })
  
  
  
  if ($('.analityc-widgethead').length) {
  
    // Чекбоксы в селекте "Добавить показатель на страницу"
    $(document).on('change', '.d-smr__add-char-item input', function(){
      if (this.checked) {
        $(this).next().next().find('input').prop('checked', true).change();
      } else {
        $(this).next().next().find('input').prop('checked', false).change();
      }
    });
    
    // Кастомный скроллбар в селекте "Добавить показатель на страницу"
    $('.d-smr__add-char-list-wrapper').scrollbar();
    
    // Добавить год и этап
    if ($('.analityc-add-group').length) {
      $('.analityc-add-group').each(function(){
        if ($(this).siblings('.analityc-control-group').length == $(this).siblings('.analityc-control-group:visible').length) {
          $('.analityc-add-group').hide();
        }
      });
    }
    
    $(document).on('click', '.analityc-add-group', function(e){
      e.preventDefault();
      $(this).siblings('.analityc-control-group').not(':visible').first().show();
      $('.analityc-remove-group').show();
      if ($(this).siblings('.analityc-control-group').length == $(this).siblings('.analityc-control-group:visible').length) {
        $('.analityc-add-group').hide();
      }
    });
    
    // Удалить год и этап
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };
    
    if ($('.analityc-remove-group').length) {
      $('.analityc-remove-group').parent().each(function(){
        if (isMobile.any()) {
          $(this).addClass('analityc-control-group_mobile');
        } else {
          $(this).removeClass('analityc-control-group_mobile');
        }
      });
    }
    
    $(document).on('click', '.analityc-remove-group', function(e){
      e.preventDefault();
      $(this).parent().hide();
      $('.analityc-add-group').show();
      if ($(this).parent().siblings('.analityc-control-group:visible').length == 1) {
        $('.analityc-remove-group').hide();
      }
    });
  
  }

}
