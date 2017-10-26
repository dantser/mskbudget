;(function(w) {

	Share = {
		vkontakte: function(purl, ptitle, text, pimg) {
			url  = 'https://vk.com/share.php?';
			url += 'url='          + encodeURIComponent(purl);
			url += '&title='       + encodeURIComponent(ptitle);
			url += '&description=' + encodeURIComponent(text);
			url += '&image='       + encodeURIComponent(pimg);
			url += '&noparse=true';
			Share.popup(url);
		},
		facebook: function(purl, ptitle, text, pimg) {
			url  = 'http://www.facebook.com/sharer.php?s=100';
			url += '&p[title]='     + encodeURIComponent(ptitle);
			url += '&p[summary]='   + encodeURIComponent(text);
			url += '&p[url]='       + encodeURIComponent(purl);
			url += '&p[images][0]=' + encodeURIComponent(pimg);
			Share.popup(url);
		},
		twitter: function(purl, ptitle, text) {
			url  = 'http://twitter.com/share?';
			url += 'text='      + encodeURIComponent(ptitle);
			url += '&url='      + encodeURIComponent(purl);
			url += '&counturl=' + encodeURIComponent(purl);
			Share.popup(url);
		},
		oklassniki: function(purl, ptitle, text) {
			url  = 'http://www.ok.ru/dk?st.cmd=addShare&st.s=1';
			url += '&st.comments='   + encodeURIComponent(text);
			url += '&st._surl='      + encodeURIComponent(purl)
			Share.popup(url);
		},
		popup: function(url) {
			window.open(url,'','toolbar=0,status=0,width=626,height=436');
		}
	};



	$(document).ready(function() {

		if( $(w).width() < 1100 ){
			$(document).on('click', '.share__btn', function(e) {
				
				e.stopPropagation();

				var _ = $(this);

				if( !_.hasClass('share__btn_act') ){

					$(document).find('.share__panel').slideUp(321);
					$(document).find('.share__btn').removeClass('share__btn_act');
					_.addClass('share__btn_act').next().slideDown(321);
					$(document).find('.sections__subscribe').css('zIndex', 0);

				}else{

					_.removeClass('share__btn_act').next().slideUp(321, function() {
						$(document).find('.sections__subscribe').css('zIndex', 3);
					});


				}
				return false;
			});
			
			$(document).on('click', 'html, body', function() {
				
				$(document).find('.share__panel').slideUp(321);
				$(document).find('.share__btn').removeClass('share__btn_act');
				$(document).find('.sections__subscribe').css('zIndex', 3);
			});

		} else {

		function shareBtnInit() {
			$(document).on('mouseenter', '.share__btn', function() {
				$(this).addClass('share__btn_act').next().slideDown(321);
				$(document).find('.sections__subscribe').css('zIndex', 0);
			});

			$(document).on('mouseleave', '.share__panel', function() {
				$(this).slideUp(321).prev().removeClass('share__btn_act');
				$(document).find('.sections__subscribe').css('zIndex', 3);
			});

			$(document).on('mouseleave', '.share__btn', function(e) {
				if( e.pageY < ($(this).height() + $(this).offset().top) ){
					$(this).removeClass('share__btn_act').next().slideUp(321);
					$(document).find('.sections__subscribe').css('zIndex', 3);
				}
			});
		}

		shareBtnInit();

		}


		$(document).on('click', '.share__a_vk', function() {
		    Share.vkontakte(
				document.location.href,
				$('title').text(),
				$("meta[name='description']").attr("content"),
				$("meta[property='og\\:image']").attr("content")
			);
		});
		$(document).on('click', '.share__a_fb', function() {
			Share.facebook(
				document.location.href
				// $('title').text(),
				// $("meta[property='og\\:description']").attr("content"),
				// $("meta[property='og\\:image']").attr("content")
			);
		});
		$(document).on('click', '.share__a_tw', function() {
			Share.twitter(
				document.location.href,
				$('title').text() + '. ' + $("meta[name='twitter\\:description']").attr("content"),
				$("meta[name='twitter\\:image']").attr("content")
			);
		});
		$(document).on('click', '.share__a_ok', function() {
			Share.oklassniki(
				document.location.href,
				$('title').text(),
				$("meta[name='og\\:image']").attr("content")
			);
		});


	});


}(window));
