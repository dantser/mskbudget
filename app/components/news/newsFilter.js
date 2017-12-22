import $ from 'jquery';

export default () => {

  $(document).ready(function(){

    $('.news-page__buttons-set').each(function() {
      $(this).find('.news-page__buttons-set-button').click(function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings('.news-page__buttons-set-button').removeClass('active');
      })
    })

    // Показать еще (для страницы новостей)
    $('.news-page__show-more').on('click', function (e) {
      e.preventDefault();
      $('.news-page .news-page__card-wrapper').animate({
        height: $('.news-page .news-page__card-wrapper').find('.tile').height()
      }, 1000, function(){
        $('.news-page .news-page__card-wrapper').height('auto');
      });
    });
  });
  
  // Перенос блока подписки на мобилке
  /*if ($('.news-page').length) {
    if ($(window).width() <= 580) {
      $('.news-page__subscribe').appendTo('.news-page__content');
    }
  }*/
  
}
