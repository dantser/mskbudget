import $ from 'jquery';

export default () => {
  
  $(document).ready(function(){
    
    $('.news-page__buttons-set a').on('click', function(e){
      e.preventDefault();
      $('.news-page__buttons-set a').removeClass('button-light--fill');
      $(this).addClass('button-light--fill');
      var filter = $(this).data('filter');
      
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
          $('.news-page .tile__item').css('display', 'inline-flex');
        } else {
          $('.news-page .tile__item[data-filter="'+filter+'"]').css('display', 'inline-flex');
        }
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
  });
}
