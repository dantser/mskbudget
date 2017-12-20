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
  
  // Обрезание текста троеточием
  if ($('.media-main, .news-page, .news-one').length) {
    
    function overflowDotts(size, element) {
      var content = $(element);
      content.each(function () {
        var contentText = $(this).text();
        if(contentText.length > size){
          $(this).text((contentText.slice(0, size)).trim() + '...');
        }
      });
    };
    
    if ($(window).width() > 640) {
      overflowDotts(140, '.news__title');
    } else {
      overflowDotts(85, '.news__title');
    }
    
  }
  
  // Перенос блока подписки на мобилке
  /*if ($('.news-page').length) {
    if ($(window).width() <= 580) {
      $('.news-page__subscribe').appendTo('.news-page__content');
    }
  }*/
  
}
