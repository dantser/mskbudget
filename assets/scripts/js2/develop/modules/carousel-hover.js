//*******************************************
//
//    carousel hover
//
//*******************************************
budget.extend("carouselHover", {

    init() {

        var interval;
        
        $("body").on("mouseenter", ".carousel-area__right__zone", event => {

            var speed = parseInt($(event.currentTarget).data("speed"),10);

            speed = 4000 / speed;

            if (speed > 1000) speed = 1000;

            if ($(".carousel-3d-slide.current").next().length) {
                $(".carousel-3d-slide.current").next().trigger("click");
            } else {
                $(".carousel-3d-slide:first-child").trigger("click");
            }

            interval = setInterval(event => {

                if ($(".carousel-3d-slide.current").next().length) {
                    $(".carousel-3d-slide.current").next().trigger("click");
                } else {
                    $(".carousel-3d-slide:first-child").trigger("click");
                }

            }, speed);

        });

        $("body").on("mouseleave", ".carousel-area__right__zone", event => {

            clearInterval(interval);

        });


        $("body").on("mouseenter", ".carousel-area__left__zone", event => {

            var speed = parseInt($(event.currentTarget).data("speed"),10);

            speed = 4000 / speed;

            if (speed > 1000) speed = 1000;

            if ($(".carousel-3d-slide.current").prev().length) {
                $(".carousel-3d-slide.current").prev().trigger("click");
            } else {
                $(".carousel-3d-slide:last-child").trigger("click");
            }

            interval = setInterval(event => {

                if ($(".carousel-3d-slide.current").prev().length) {
                    $(".carousel-3d-slide.current").prev().trigger("click");
                } else {
                    $(".carousel-3d-slide:last-child").trigger("click");
                }

            }, speed);

        });

        $("body").on("mouseleave", ".carousel-area__left__zone", event => {

            clearInterval(interval);

        });

    }
    
});