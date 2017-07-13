$(document).ready(function(){

var winW = $(window).width(),
winH = $(window).height();

/*Menu*/
$('.header__open-menu').click(function() {

    var _ = $(this);

    if ( !_.hasClass('act') ) {

        $('.header__drop').fadeIn(321);
        _.addClass('act');
        $('.header').addClass('header_opened');
        $('.sections, .guide').addClass('filter_blur');

    } else {

        $('.header__drop').fadeOut(321);
        _.removeClass('act');
        $('.header').removeClass('header_opened');
        $('.sections, .guide').removeClass('filter_blur');

    }

    return false;
});

if (winW > 700 && !$('.sections').hasClass('sections_fs')) {
    $(window).scroll(function() {
        var scr = $(this).scrollTop();
        if (scr > 21) {
            $('.header').addClass('header_short');
        } else {
            $('.header').removeClass('header_short');
        }
    });
}

// $('.menu__sub-menu').each(function() {
//     var offset = $(this).parent().offset().left;
//     $(this).css({width: winW, marginLeft: -offset});
//     $(this).find('.menu__sub-menu-ul').width($('.menu').width());
// });


// if (winW > 1101) {

//     $('.menu__item').mouseenter(function() {
//         if( $(this).find('.menu__sub-menu').length > 0 ){
//             var offsetY = $(this).closest('.menu').position().top;
//             var heightM = $(this).find('.menu__sub-menu').innerHeight();
//             $('.header').css('height', offsetY+heightM+30);
//             console.log(offsetY);
//         }
//     });

//     $('.menu__item').mouseleave(function() {
//         $('.header').css('height', '');
//     });
// }




/*News Title*/
$('.news__thumb, .news__title').hover(function() {
    $(this).parent().find('.news__thumb, .news__title').addClass('hover');
}, function() {
     $(this).parent().find('.news__thumb, .news__title').removeClass('hover');
});

/*To top*/
if ($('.button-top').length) {
	setTimeout(function() {

		var osT = $('.footer').offset().top - 321,
		scr = 0;

		$(window).scroll(function() {
			scr = $(this).scrollTop();
			if (scr > osT) {
				$('.button-top').fadeIn(721, function() {
					$('.button-top').addClass('button-top_active');
				});
			} else {
				$('.button-top').fadeOut(721, function() {
					$('.button-top').removeClass('button-top_active');
				});
			}
		});

	}, 1321);

	$('.button-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 821);
		return false;
	});
}



 initOverLabels();

 $('.login-form').submit(function() {
     window.location.href = "main-log.html";
     return false;
 });

$(document).data('resize-width', winW);
function resizeWidth() {
    var existingWidth = $(document).data('resize-width');
    var newWidth = $(window).width();
    if (existingWidth != newWidth) {
         window.location.reload();
    }
}

$(window).resize(resizeWidth);

});

window.onload = function() {
    $(document).ready(function() {
         $('#whitescreen').fadeOut(521);
    });
}
