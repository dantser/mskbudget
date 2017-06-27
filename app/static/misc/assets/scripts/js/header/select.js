function getPasteEvent() {
    var e = document.createElement("input"),
        t = "onpaste";
    return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
}
var pasteEventName = getPasteEvent() + ".mask",
    ua = navigator.userAgent,
    iPhone = /iphone/i.test(ua),
    android = /android/i.test(ua),
    caretTimeoutId;
$.mask = {
    definitions: {
        9: "[0-9]",
        a: "[A-Za-z]",
        "*": "[A-Za-z0-9]"
    },
    dataName: "rawMaskFn",
    placeholder: "_"
}, $.fn.extend({
    caret: function(e, t) {
        var a;
        if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
            this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((a = this.createTextRange()).collapse(!0), a.moveEnd("character", t), a.moveStart("character", e), a.select())
        })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (a = document.selection.createRange(), e = 0 - a.duplicate().moveStart("character", -1e5), t = e + a.text.length), {
            begin: e,
            end: t
        })
    },
    unmask: function() {
        return this.trigger("unmask")
    },
    mask: function(e, t) {
        var a, n, r, i, o;
        return !e && this.length > 0 ? $(this[0]).data($.mask.dataName)() : (t = $.extend({
            placeholder: $.mask.placeholder,
            completed: null
        }, t), a = $.mask.definitions, n = [], r = o = e.length, i = null, $.each(e.split(""), function(e, t) {
            "?" == t ? (o--, r = e) : a[t] ? (n.push(new RegExp(a[t])), null === i && (i = n.length - 1)) : n.push(null)
        }), this.trigger("unmask").each(function() {
            function s(e) {
                for (; ++e < o && !n[e];);
                return e
            }

            function c(e) {
                for (; --e >= 0 && !n[e];);
                return e
            }

            function d(e, a) {
                var r, c;
                if (!(e < 0)) {
                    for (r = e, c = s(a); r < o; r++)
                        if (n[r]) {
                            if (!(c < o && n[r].test(v[c]))) break;
                            v[r] = v[c], v[c] = t.placeholder, c = s(c)
                        }
                    f(), m.caret(Math.max(i, e))
                }
            }

            function l(e) {
                var a, r, i, c;
                for (a = e, r = t.placeholder; a < o; a++)
                    if (n[a]) {
                        if (i = s(a), c = v[a], v[a] = r, !(i < o && n[i].test(c))) break;
                        r = c
                    }
            }

            function _(e) {
                var t, a, n, r = e.which;
                8 === r || 46 === r || iPhone && 127 === r ? (t = m.caret(), a = t.begin, (n = t.end) - a == 0 && (a = 46 !== r ? c(a) : n = s(a - 1), n = 46 === r ? s(n) : n), u(a, n), d(a, n - 1), e.preventDefault()) : 27 == r && (m.val(k), m.caret(0, h()), e.preventDefault())
            }

            function p(e) {
                var a, r, i, c = e.which,
                    _ = m.caret();
                e.ctrlKey || e.altKey || e.metaKey || c < 32 || c && (_.end - _.begin != 0 && (u(_.begin, _.end), d(_.begin, _.end - 1)), (a = s(_.begin - 1)) < o && (r = String.fromCharCode(c), n[a].test(r) && (l(a), v[a] = r, f(), i = s(a), android ? setTimeout($.proxy($.fn.caret, m, i), 0) : m.caret(i), t.completed && i >= o && t.completed.call(m))), e.preventDefault())
            }

            function u(e, a) {
                var r;
                for (r = e; r < a && r < o; r++) n[r] && (v[r] = t.placeholder)
            }

            function f() {
                m.val(v.join(""))
            }

            function h(e) {
                var a, s, c = m.val(),
                    d = -1;
                for (a = 0, pos = 0; a < o; a++)
                    if (n[a]) {
                        for (v[a] = t.placeholder; pos++ < c.length;)
                            if (s = c.charAt(pos - 1), n[a].test(s)) {
                                v[a] = s, d = a;
                                break
                            }
                        if (pos > c.length) break
                    } else v[a] === c.charAt(pos) && a !== r && (pos++, d = a);
                return e ? f() : d + 1 < r ? (m.val(""), u(0, o)) : (f(), m.val(m.val().substring(0, d + 1))), r ? a : i
            }
            var m = $(this),
                v = $.map(e.split(""), function(e, n) {
                    if ("?" != e) return a[e] ? t.placeholder : e
                }),
                k = m.val();
            m.data($.mask.dataName, function() {
                return $.map(v, function(e, a) {
                    return n[a] && e != t.placeholder ? e : null
                }).join("")
            }), m.attr("readonly") || m.one("unmask", function() {
                m.unbind(".mask").removeData($.mask.dataName)
            }).bind("focus.mask", function() {
                clearTimeout(caretTimeoutId);
                var t;
                k = m.val(), t = h(), caretTimeoutId = setTimeout(function() {
                    f(), t == e.length ? m.caret(0, t) : m.caret(t)
                }, 10)
            }).bind("blur.mask", function() {
                h(), m.val() != k && m.change()
            }).bind("keydown.mask", _).bind("keypress.mask", p).bind(pasteEventName, function() {
                setTimeout(function() {
                    var e = h(!0);
                    m.caret(e), t.completed && e == m.val().length && t.completed.call(m)
                }, 0)
            }), h()
        }))
    }
});
var initDp;
$(document).ready(function() {
    function e(e) {
        return /^(0?[1-9]|[12][0-9]|3[01])\.(0?(?:[1-9]|1[0-2]))\.[0-9]{2}$/.test(e)
    }

    function t(e, t) {
        var a = e.split("."),
            n = t.split("."),
            r = new Date(+a[2] + 2e3, a[1] - 1, a[0]);
        return !(new Date(+n[2] + 2e3, n[1] - 1, n[0]) > r)
    }

    function a(e, t) {
        function a() {
            r.find(".on-hover_active").removeClass("on-hover_active"), r.find(".on-hover-content").slideUp(321), e.addClass("on-hover_active"), e.parent().addClass("on-hover_active").parent().find(".code__tit").addClass("on-hover_active"), r.find(".on-hover-sibling-" + n).addClass("on-hover_active"), r.find(".on-hover-content-" + n).slideDown(321)
        }
        var n = e.attr("data-hover-index"),
            r = $(".on-hover-parent-" + e.attr("data-hover-parent"));
        e.hasClass("on-hover_active") || (t ? (e.addClass("hover"), setTimeout(function() {
            e.hasClass("hover") && a()
        }, 321)) : a())
    }
    var n = $(window).width();
    $(document).on("click", ".select__btn", function() {
        var e = $(this);
        return e.hasClass("select__btn_act") ? e.next().slideUp(321, function() {
            e.removeClass("select__btn_act")
        }) : ($(".select__drop").slideUp(321, function() {
            $(".select__btn").removeClass("select__btn_act")
        }), e.addClass("select__btn_act").next().slideDown(321)), !1
    }), $(document).on("click", ".select__a", function() {
        var e = $(this);
        return e.parent().parent().prev().text(e.text()), $(e.attr("href")).length > 0 && ($(e.attr("href")).parent().find(".select-content").slideUp(321), $(e.attr("href")).slideDown(321)), $(".select__drop").slideUp(321, function() {
            $(".select__btn").removeClass("select__btn_act")
        }), !1
    }), initDp = function() {
        $(".jq-datepicker").length > 0 && $(".jq-datepicker").datepicker({
            dateFormat: "dd.mm.yy",
            changeMonth: !0,
            changeYear: !0,
            showOtherMonths: !0,
            selectOtherMonths: !0,
            firstDay: 1,
            monthNames: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            monthNamesShort: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            dayNamesMin: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            beforeShow: function(e, t) {
                $("#ui-datepicker-div").removeClass(function() {
                    return $("input").get(0).id
                }), $("#ui-datepicker-div").removeClass("datepicker__show"), $("#ui-datepicker-div").addClass($(this).attr("class"))
            }
        })
    }, $(document).on("click", function(e) {
        $(e.target).closest(".ui-datepicker").length && $(e.target).hasClass("jq-datepicker") || $(".jq-datepicker").blur()
    }), $(".range-datepicker__item").length > 0 && ($(".range-datepicker__item").datepicker({
        dateFormat: "dd.mm.y",
        changeMonth: !0,
        changeYear: !0,
        showOtherMonths: !0,
        selectOtherMonths: !0,
        firstDay: 1,
        monthNames: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
        monthNamesShort: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
        dayNamesMin: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        maxDate: "+0D",
        onSelect: function(e, t) {
            var a = $(this).attr("data-range"),
                n = $(this).parent().attr("data-range-box");
            "max" == a ? ($("#" + n + " .input-max").val(e), $(".range-datepicker").fadeOut(321), $(".range-datepicker__item_min, .range-datepicker__item_max").removeAttr("style"), $(".form__date-range").removeClass("form__date-range_focus")) : "min" == a && ($("#" + n + " .input-min").val(e), $(this).fadeOut(321).next().fadeIn(321), $(".range-datepicker__item_max").datepicker("option", {
                minDate: e
            }))
        }
    }),

// Клик на иконку
    $(document).on("click", ".form__date-range-icon", function() {
        $(".form__date-range").removeClass("form__date-range_focus"), $(this).parent().find(".input-min").focus()
    })), $(".jq-f-datepicker").length > 0 && ($(".form__date-range").each(function(e) {
        $(this).attr("id", "rid-" + e)
    }), $(".jq-f-datepicker").focus(function(e) {
        var t = $(this),
            a = t.parent().offset().left,
            n = t.parent().offset().top + 37,
            r = t.parent().find(".input-min").val(),
            i = t.parent().find(".input-max").val();
        boxId = t.parent().attr("id"), t.parent().addClass("form__date-range_focus"), $(".range-datepicker").attr("data-range-box", boxId).css({
            left: a,
            top: n
        }).fadeIn(321), $(".range-datepicker__item_min").datepicker("setDate", r), $(".range-datepicker__item_max").datepicker("setDate", i), $(".range-datepicker__item_min, .range-datepicker__item_max").removeAttr("style")
    }).mask("99.99.99"), $(".jq-f-datepicker").val("дд.мм.гг"), $(".jq-f-datepicker").blur(function() {
        var a = $(this);
        if (a.val()) {
            if (a.hasClass("input-max")) {
                var n = a.val(),
                    r = a.parent().find(".input-min").val();
                e(n) && e(r) ? t(n, r) || a.val("дд.мм.гг") : a.val("дд.мм.гг")
            } else if (a.hasClass("input-min")) {
                var r = a.val(),
                    n = a.parent().find(".input-max").val();
                e(r) ? e(n) && (t(n, r) || a.val("дд.мм.гг")) : a.val("дд.мм.гг")
            }
        } else a.val("дд.мм.гг")
    }), $("#form-find-document").submit(function() {
        var a = !0;
        return $(this).find(".form__date-range").each(function() {
            var n = $(this),
                r = n.find(".input-max").val(),
                i = n.find(".input-min").val();
            "дд.мм.гг" == r && "дд.мм.гг" == i || (e(r) && e(i) ? t(r, i) || (a = !1, n.find(".input-max").blur(), n.find(".input-min").blur()) : (a = !1, n.find(".input-max").blur(), n.find(".input-min").blur()))
        }), a
    }), $(document).on("click", function(e) {
        $(e.target).closest(".range-datepicker").length || $(e.target).closest(".form__date-range").length || $(e.target).hasClass("ui-corner-all") || $(e.target).hasClass("ui-icon") ? e.preventDefault() : ($(".range-datepicker").fadeOut(321), $(".form__date-range").removeClass("form__date-range_focus"), $(".range-datepicker__item_min, .range-datepicker__item_max").removeAttr("style"))
    })), $(document).on("click", ".datepicker__show", function() {
        var e = $(this);
        return e.hasClass("datepicker__show_act") ? e.next().slideUp(321, function() {
            e.removeClass("datepicker__show_act")
        }) : ($(".datepicker__panel").slideUp(321, function() {
            $(".datepicker__show").removeClass("datepicker__show_act")
        }), e.addClass("datepicker__show_act").next().slideDown(321)), !1
    }), $(document).on("click", ".datepicker__col_years a", function() {
        var e = $(this).parent().parent().parent().parent();
        if (!$(this).hasClass("datepicker__a_act")) {
            var t = e.find(".datepicker__show").text().split(".");
            e.find(".datepicker__show").text(t[0] + "." + t[1] + "." + $(this).text()), e.find(".datepicker__col_years a").removeClass("datepicker__a_act"), $(this).addClass("datepicker__a_act")
        }
        return !1
    }), $(document).on("click", ".datepicker__col_months a", function() {
        var e = $(this).parent().parent().parent().parent().parent();
        if (!$(this).hasClass("datepicker__a_act")) {
            var t = e.find(".datepicker__show").text().split(".");
            e.find(".datepicker__show").text(t[0] + "." + $(this).attr("data-month") + "." + t[2]), e.find(".datepicker__col_months a").removeClass("datepicker__a_act"), $(this).addClass("datepicker__a_act")
        }
        return !1
    }), $(document).on("click", ".datepicker__close", function() {
        return $(this).parent().slideUp(321).prev().removeClass("datepicker__show_act"), !1
    }), $(".tab__btn").click(function() {
        var e = $(this);
        return e.hasClass("tab__btn_active") || (e.parent().find(".tab__btn").removeClass("tab__btn_active"), e.parent().parent().find(".tab__content").slideUp(321), e.addClass("tab__btn_active"), $(e.attr("href")).slideDown(321)), !1
    }), $(".dropdown__btn").click(function() {
        $(".dropdown_active").not($(this).parents(".dropdown_active")).removeClass("dropdown_active");
        var e = $(this);
        return e.hasClass("dropdown__btn_active") ? e.parent().find(".dropdown__content").slideUp(321, function() {
            e.removeClass("dropdown__btn_active")
        }) : ($(".dropdown__content").slideUp(321), $(".dropdown__btn").removeClass("dropdown__btn_active"), e.parent().find(".dropdown__content").slideDown(321, function() {
            e.addClass("dropdown__btn_active")
        })), !1
    }), $(".dropdown__close").click(function() {
        return $(this).parent().slideUp(321).parent().removeClass("dropdown_active").find(".dropdown__btn").removeClass("dropdown__btn_active"), !1
    }), n < 1100 ? $(".on-hover").click(function() {
        a($(this), !1)
    }) : ($(".on-hover").mouseenter(function() {
        a($(this), !0)
    }), $(".on-hover").mouseleave(function() {
        $(this).removeClass("hover")
    })), $(".on-hover").click(function() {
        return !1
    }), $(".service-dots__btn").click(function() {
        var e = $(this);
        return e.hasClass("active") || (e.closest(".service").find(".service-dot-cont").slideUp(321), $("#" + e.attr("data-cont")).slideDown(321), e.siblings().removeClass("active"), e.addClass("active")), !1
    }), $(".service__title button").click(function() {
        var e = $(this);
        return e.hasClass("active") ? e.removeClass("active") : e.addClass("active"), !1
    })
});
