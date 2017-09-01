import $ from 'jquery';

export default () => {

	$(document).ready(function(){

	  $('.alternative-link__title').on('click', function (e) {
	    e.preventDefault();
	    $('.news').removeClass('news_hidden');
	  })

	  $('.news-one__show-more').on('click', function (e) {
	    e.preventDefault();
			$('.news-one .news-one__card-wrapper').height('auto')
	  });

	})

}
