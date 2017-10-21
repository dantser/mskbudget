import $ from 'jquery';

export default () => {

	$(document).ready(function(){

	  $('.alternative-link__title').on('click', function (e) {
      e.preventDefault();
      var content = $('.news-one__card-wrapper_side');
      content.animate({
        height: content.find('.tile').height()
      }, 1000, function(){
        content.height('auto');
      });
	  })

    // Показать еще (для страницы новостей)
    $('.news-one__show-more').on('click', function (e) {
      e.preventDefault();
      var content = $('.news-one__card-wrapper_also');
      content.animate({
        height: content.find('.tile').height()
      }, 1000, function(){
        content.height('auto');
      });
    });

	})

}
