$(document).ready(function() {

	var winW = $(window).width();

$('.slider').slick('unslick');
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: false,
    swipe: false,
    sliderId: 'one-section',
});

$('.slick-cloned .diagram-value').each(function() {
    $(this).html($(this).attr('data-value'));
});
$('.slick-cloned .anim-diagram').attr('stroke-dashoffset', 0);


/*change diagrams Ahead*/
	if (winW < 900) {

		$('.cube').on('cubeChanged', function(cube, id, currentSlide) {
			if (id == 'diagrams') {

				switch(currentSlide) {

					case '0':
					case '1':
					case '2':

					$('#diagrams-ahead-1').slideDown(321);
					$('#diagrams-ahead-2').slideUp(321);
					break;

					case '3':
					case '4':
					$('#diagrams-ahead-2').slideDown(321);
					$('#diagrams-ahead-1').slideUp(321);
					break;

				}

			}

		});

	}

});
