;(function(w) {

	var rootL = 'share.php?id='

		var Share = {
			vkontakte: function(purl) {
				url  = 'http://vkontakte.ru/share.php?';
				url += 'url=' + encodeURIComponent( rootL + purl );
				Share.popup(url);
			},
			facebook: function(purl) {
				url  = 'http://www.facebook.com/sharer.php?';
				url += 'u=' + encodeURIComponent( rootL + purl );
				Share.popup(url);
			},
			twitter: function(purl) {
				url  = 'http://twitter.com/share?';
				url += 'url=' + encodeURIComponent( rootL + purl );
				Share.popup(url);
			},
			odnoklasniki: function(purl) {
				url  = 'http://odnoklassniki.com/share?';
				url += 'url=' + encodeURIComponent( rootL + purl );
				Share.popup(url);
			},

			popup: function(url) {
				window.open(url,'','toolbar=0,status=0,width=626,height=436');
			}
		};



	$(document).ready(function() {

		if( $(w).width() < 1100 ){
			$('.share__btn').click(function() {

				var _ = $(this);

				if( !_.hasClass('share__btn_act') ){

					$('.share__panel').slideUp(321);
					$('.share__btn').removeClass('share__btn_act');
					_.addClass('share__btn_act').next().slideDown(321);
					$('.sections__subscribe').css('zIndex', 0);

				}else{

					_.removeClass('share__btn_act').next().slideUp(321, function() {
						$('.sections__subscribe').css('zIndex', 3);
					});
					

				}
				return false;
			});

		} else {

			$('.share__btn').mouseenter(function() {

				$(this).addClass('share__btn_act').next().slideDown(321);
				$('.sections__subscribe').css('zIndex', 0);

			});



			$('.share__panel').mouseleave(function() {

				$(this).slideUp(321).prev().removeClass('share__btn_act');
				$('.sections__subscribe').css('zIndex', 3);

			});

			$('.share__btn').mouseleave(function(e) {

				if( e.pageY < ($(this).height() + $(this).offset().top) ){

					$(this).removeClass('share__btn_act').next().slideUp(321);
					$('.sections__subscribe').css('zIndex', 3);

				}

			});

		} 


		$('.share__a_vk').click(function() {
			Share.vkontakte( 'vk' );
			return false;
		});
		$('.share__a_fb').click(function() {
			Share.facebook( 'fb' );
			return false;
		});
		$('.share__a_tw').click(function() {
			Share.twitter( 'tw' );
			return false;
		});
		$('.share__a_ok').click(function() {
			Share.odnoklasniki( 'ok' );
			return false;
		});


	});


}(window));