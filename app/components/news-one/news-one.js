import $ from 'jquery';

export default () => {
  $('.alternative-link__title').on('click', function (e) {
    e.preventDefault();
    $('.news').removeClass('news_hidden');
  })
  $('.news-one__show-more').on('click', function (e) {
    e.preventDefault();
    $('.tile__item:nth-child(n+4)').css('display', 'inline-block');
  })
}
