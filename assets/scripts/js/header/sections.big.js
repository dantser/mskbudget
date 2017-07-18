! function(e) {
    $(document).ready(function() {
        function i() {
            d = !1
        }

        function s(e) {
            e = e || window.event;
            var s = e.deltaY || e.detail || e.wheelDelta;
            (a.ie11 || a.safari) && (s *= -1), s > 0 && 0 == d ? (d = !0, $(".sections_fs").slick("slickNext"), $(".sections_fs").on("afterChange", function() {
                setTimeout(function() {
                    i()
                }, 500)
            })) : s < 0 && 0 == d && (d = !0, $(".sections_fs").slick("slickPrev"), $(".sections_fs").on("afterChange", function() {
                setTimeout(function() {
                    i()
                }, 500)
            }))
        }
        var t = $(e).width();
        $(e).height();
        if ($(".sections_fs").length > 0) {
            $(".sections_fs").slick({
                infinite: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0,
                draggable: !1,
                vertical: !0,
                swipe: !1,
                sliderId: "sections"
            });
            var n = $(".wrapper")[0];
            null != n && (n.addEventListener ? "onwheel" in document ? n.addEventListener("DOMMouseScroll mousewheel wheel", s, {
                passive: !0
            }) : "onmousewheel" in document ? n.addEventListener("DOMMouseScroll mousewheel wheel", s, {
                passive: !0
            }) : n.addEventListener("MozMousePixelScroll", s, {
                passive: !0
            }) : n.attachEvent("onmousewheel", s));
            var d = !1,
                a = {};
            a.ie11 = /rv:11\.0/.test(navigator.userAgent.toLowerCase()), a.safari = /safari/.test(navigator.userAgent.toLowerCase()) && !/chrome/.test(navigator.userAgent.toLowerCase()), $(".sections_fs").on("beforeChange", function(e, i, s, n) {
            }), $(".sections_fs").swipe({
                swipe: function(e, i) {
                    "up" == i ? this.slick("slickNext") : "down" == i && this.slick("slickPrev")
                }
            }), $(document).keydown(function(e) {
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode ? $(".slick-current .slider").slick("slickPrev") : 38 === e.keyCode ? $(".sections_fs").slick("slickPrev") : 39 === e.keyCode ? $(".slick-current .slider").slick("slickNext") : 40 === e.keyCode && $(".sections_fs").slick("slickNext"))
            })
        }
        $(".slider").length > 0 && ($(".slider").each(function() {
            var e = $(this);
            if (t > 1180 && e.attr("data-sides-1100")) {
                for (var i = 0; i < e.attr("data-sides-1100"); i++) e.append('<div class="cube__side_new cube__side_new-' + (i + 1) + '" />');
                e.parent().find(".cube-brick").each(function(i) {
                    e.find(".cube__side_new-" + $(this).attr("data-brick-1100")).append($(this).html())
                }), e.parent().find(".cube-brick").remove(), e.find(".grid-brick-3").wrapAll('<div class="grid grid_col-3"></div>'), e.find(".grid-brick-2").wrapAll('<div class="grid grid_col-2"></div>'), e.find(".cube__side_new").each(function() {
                    $(this).find(".tile__item").wrapAll('<div class="tile"></div>')
                })
            } else if (t > 900 && e.attr("data-sides-900")) {
                for (var i = 0; i < e.attr("data-sides-900"); i++) e.append('<div class="cube__side_new cube__side_new-' + (i + 1) + '" />');
                e.parent().find(".cube-brick").each(function(i) {
                    e.find(".cube__side_new-" + $(this).attr("data-brick-900")).append($(this).html())
                }), e.parent().find(".cube-brick").remove(), e.find(".grid-brick-3").wrapAll('<div class="grid grid_col-3"></div>'), e.find(".grid-brick-2").wrapAll('<div class="grid grid_col-2"></div>'), e.find(".cube__side_new").each(function() {
                    $(this).find(".tile__item").wrapAll('<div class="tile"></div>')
                })
            } else if (t > 700 && e.attr("data-sides-700")) {
                for (var i = 0; i < e.attr("data-sides-700"); i++) e.append('<div class="cube__side_new cube__side_new-' + (i + 1) + '" />');
                e.parent().find(".cube-brick").each(function(i) {
                    e.find(".cube__side_new-" + $(this).attr("data-brick-700")).append($(this).html())
                }), e.parent().find(".cube-brick").remove(), e.find(".cube__side_new").each(function() {
                    $(this).find(".tile__item").wrapAll('<div class="tile"></div>')
                })
            }
        }), $(".slider").slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            dots: !1,
            draggable: !1,
            swipe: !1,
            sliderId: "one-section"
        }), $(".slider").swipe({
            swipe: function(e, i) {
                "left" == i ? this.slick("slickNext") : "right" == i && this.slick("slickPrev")
            }
        }))
    })
}(window);
