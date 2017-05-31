(function() {

	$(document).ready(function() {

		$('.banner__title').each(function() {
			var _ = $(this),
			txt = _.text(),
			words = txt.split(' '),
			txtL = txt.length,
			wordsL = words.length;

			if (txtL > 50) {
				_.empty();
				if (wordsL == 9) {
					_.append('<span class="banner__row banner__row_v7 load-anim-fade" data-delay="900">'+ words[0] +' '+ words[1] +'</span><br>');
					_.append('<span class="banner__row banner__row_v4 load-anim-fade" data-delay="1500">'+ words[2] +' '+ words[3] +' '+ words[4] +'</span><br>');
					_.append('<span class="banner__row banner__row_v6 load-anim-fade" data-delay="2100">'+ words[5] +' '+ words[6] +' '+ words[7] +' '+ words[8] +'</span><br>');
				}
			} else if (txtL > 30) {
				_.empty();
				if (wordsL == 4) {
					_.append('<span class="banner__row banner__row_v1 load-anim-fade" data-delay="900">'+ words[0] +' '+ words[1] +'</span><br>');
					_.append('<span class="banner__row banner__row_v2 load-anim-fade" data-delay="1500">'+ words[2] +' '+ words[3] +'</span><br>');
				}
			} else if (txtL > 15) {
				_.empty();
				if (wordsL == 2) {
					_.append('<span class="banner__row banner__row_v9 load-anim-fade" data-delay="900">'+ words[0] +'</span><br>');
					_.append('<span class="banner__row banner__row_v2 load-anim-fade" data-delay="1500">'+ words[1] +'</span><br>');
				}
			}  else {
				_.empty();
				_.append('<span class="banner__row banner__row_v1 load-anim-fade" data-delay="900">'+ words[0] +'</span><br>');
			}
		});

		$('.banner__title_b').each(function() {
			var _ = $(this),
			txt = _.text(),
			words = txt.split(' '),
			txtL = txt.length,
			wordsL = words.length,
			snt = '',
			l = words[0].length;

			if (txtL > 39) {
				for (var i = 0; i < wordsL; i++) {
					if (l < 21) {
						if (words[i+1]) {
							l += words[i+1].length;
						}
					} else {
						snt += '<br>';
						if (words[i]) {
							l = words[i].length;
						}
					}
					snt += words[i] +' ';
				}
				_.empty();
				_.append('<span class="banner__row banner__row_v11 load-anim-fade" data-delay="900">'+ snt +'</span>');
			} else if(txtL > 25) {
				for (var i = 0; i < wordsL; i++) {
					if (l < 21) {
						if (words[i+1]) {
							l += words[i+1].length;
						}
					} else {
						snt += '<br>';
						if (words[i]) {
							l = words[i].length;
						}
					}
					snt += words[i] +' ';
				}
				_.empty();
				_.append('<span class="banner__row banner__row_v10 load-anim-fade" data-delay="900">'+ snt +'</span>');
			} else {
				for (var i = 0; i < wordsL; i++) {
					if (l < 12) {
						if (words[i+1]) {
							l += words[i+1].length;
						}
					} else {
						snt += '<br>';
						if (words[i]) {
							l = words[i].length;
						}
					}
					
					snt += words[i] +' ';
				}
				_.empty();
				_.append('<span class="banner__row banner__row_v10 load-anim-fade" data-delay="900">'+ snt +'</span>');
			}

		});

	});

}());