import $ from 'jquery';

export default () => {

  $(document).ready(function(){

    var currentFilter = 'all';

    newsMargins();

    $('.news-page__buttons-set a').on('click', function(e){
      e.preventDefault();
      $('.news-page__buttons-set a').removeClass('button-light--fill');
      $(this).addClass('button-light--fill');
      var filter = $(this).data('filter');

      currentFilter = filter;

      if ($(window).width() < 639) {
        var text = $(this).text();
        $('.news-page__buttons-set-selected span:first-child').text(text);
        $('.news-page__buttons-set').slideUp();
        $('.news-page__buttons-set-wrapper').removeClass('active');
      }

      $('.news-page .tile__item').removeClass('active');

      setTimeout(function(){
        $('.news-page .tile__item').css('display', 'none');
        if (filter === 'all') {
          $('.news-page .tile__item').css('display', 'inline-block');
        } else {
          $('.news-page .tile__item[data-filter="'+filter+'"]').css('display', 'inline-block');
        }

        newsMargins();
      }, 250);

      setTimeout(function(){
        $('.news-page .tile__item').addClass('active');
        if ($(window).width() < 992) {
          $('.news-page .tile__item:nth-child(n+7)').css('display', 'none');
        }
        if ($(window).width() < 639) {
          $('.news-page .tile__item:nth-child(n+5)').css('display', 'none');
        }
      }, 500);
    });

    $('.news-page__buttons-set-selected').click(function(e){
      e.stopPropagation();
      $('.news-page__buttons-set-wrapper').addClass('active');
      $('.news-page__buttons-set').slideDown();
    });

    $('html').click(function(){
      if ($(window).width() < 639) {
        $('.news-page__buttons-set').slideUp();
        $('.news-page__buttons-set-wrapper').removeClass('active');
      }
    });

    $('.news-page__show-more').on('click', function (e) {
      e.preventDefault();

      if (currentFilter == 'all')
        $('.tile__item').css('display', 'inline-block');
      else
        $('.tile__item[data-filter="'+currentFilter+'"]').css('display', 'inline-block');

      newsMargins();

    })
  });

  var newsMargins = function() {
    var news = $('.news-page .tile__item:visible').map(function() {
      return $(this).css('margin-right', '2%');
    })

    for (var i=1; i<=news.length; i++) {
      if ($(window).width() <= 900) {
        if (i % 2 == 0) {
          console.log('even')
          news[i-1].css('margin-right', '0');
        }
      }
      else {
        if (i % 3 == 0) {
          news[i-1].css('margin-right', '0');  
        }
      }
    }
  }
}
