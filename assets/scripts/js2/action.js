var $window = $(window),
    $document = $(document),
    $html = $('html'),
    $body = $('body');


$document.ready(function () {
    $('.carousel').carousel({
        hAlign: 'center',
        vAlign: 'center',
        hMargin: 0.08,
        vMargin: 1,
        frontWidth: 660,
        frontHeight: 600,
        carouselWidth: 930,
        carouselHeight: 660,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backZoom: 0.9,
        slidesPerScroll: 10,
        speed: 300,
        buttonNav: 'none',
        directionNav: false,
        autoplay: false,
        pauseOnHover: true,
        mouse: false,
        shadow: false,
        reflection: false,
        description: false,
        backOpacity: 1,

       // carouselWidth:930,carouselHeight:330,directionNav:true,reflection: true,shadow:true,buttonNav:'bullets'

        after: function(carousel) {
            $(".slides .slideItem").removeClass("_active").filter(":eq(" + carousel.current + ")").addClass("_active");
            //console.log(carousel.current);
        }
    });
    console.log(1)
    console.log($('.carousel-3d-slide'))
});
