"use strict";
window.onload = function () {
  new Vue({ el: "#carousel", data: { slides: 20 }, components: { "carousel-3d": Carousel3d.Carousel3d, slide: Carousel3d.Slide } }), 
  
  setTimeout(function() {
	  $(".scroll-pane").mCustomScrollbar({setTop: 0})
  })
};
"use strict";$(".d-sq_radio, .d-sq_check").styler();
"use strict";function moveProgressBar() {
  $(".d-sr__pb_empty").each(function () {
    var s = $(this).data("progress-percent") / 100,
        e = $(this).width(),
        r = s * e;$(this).children(".d-sr__pb_fill").stop().animate({ width: r }, 1500);
  });
}$("#d-si-select, .d-sii__chbox").styler(), moveProgressBar(), $(window).resize(function () {
  moveProgressBar();
});
"use strict";$(function () {
  $(".graph__bar").each(function () {
    $(this).animate({ width: $(this).data("width") }, 2500);
  }), $(window).on("load", function () {/*$(".scroll-pane").mCustomScrollbar()*/}), $(".d-smr__add-char-label").click(function () {
    $(this).next(".d-smr__add-char-block").toggleClass("show"), $(this).toggleClass("expanded");
  }), $(document).on("mouseup touchend", function (a) {
    $(a.target).closest(".d-smr__add-char-label, .d-smr__add-char-block, .d-smr__add-char-block *").length || ($(".d-smr__add-char-block").removeClass("show"), $(".d-smr__add-char-label").removeClass("expanded"));
  });
});
"use strict";

var $window = $(window),
    $document = $(document),
    $html = $("html"),
    $body = $("body");

(function (window, Modernizr) {
    'use strict';

    var md = new MobileDetect(navigator.userAgent),
        grade = md.mobileGrade();
    Modernizr.addTest({
        mobile: !!md.mobile(),
        phone: !!md.phone(),
        tablet: !!md.tablet(),
        mobilegradea: grade === 'A'
    });
    window.mobileDetect = md;
})(window, Modernizr);

var utils = {};

utils.delegate = function createDelegate(object, method) {
    var shim = function shim() {
        method.apply(object, arguments);
    };
    return shim;
};

utils.getOrientation = function getOrientation() {

    switch (window.orientation) {

        case 90:
        case -90:
            $html.attr("data-orientation", "landscape");break;

        case 180:
        case 0:
            $html.attr("data-orientation", "portrait");break;

        default:
            $html.attr("data-orientation", "no-orientation");

    }
};

var budget = { modules: [] };
budget.extend = function (moduleName, moduleData) {
    if (!moduleName) {
        console.log("Error creating module");
        return;
    }
    if (!moduleData) {
        var moduleData = { elements: {}, init: function init() {
                console.log("Empty init for module");
            } };
    }
    this[moduleName] = moduleData;
    this.modules.push(moduleData);
    return moduleData;
};
budget.init = function () {
    var totalModules = budget.modules.length;
    for (var k = 0; k < totalModules; k++) {
        budget.modules[k].init();
    }
};
"use strict";

//*******************************************
//
//    carousel hover
//
//*******************************************
budget.extend("carouselHover", {
            init: function init() {

                        var interval = false;
						var timeout = false;

                        $("body").on("mouseenter", ".carousel-area__right__zone", function (event) {
									$('.carousel-3d-slide').finish();
                                    var speed = parseInt($(event.currentTarget).data("speed"), 10);

                                    speed = 2000 / speed;

                                    if (speed > 2000) speed = 2000;
			
									timeout = setTimeout(function() {
										if ($(".carousel-3d-slide.current").next().length) {
													$(".carousel-3d-slide.current").next().trigger("click");
										} else {
													$(".carousel-3d-slide:first-child").trigger("click");
										}
										$(".scroll-pane").mCustomScrollbar("disable", true);
										$(".scroll-pane").mCustomScrollbar({top:0});
										
										
										interval = setInterval(function (event) {

													if ($(".carousel-3d-slide.current").next().length) {
																$(".carousel-3d-slide.current").next().trigger("click");
													} else {
																$(".carousel-3d-slide:first-child").trigger("click");
													}
													setTimeout(function() {
														$(".scroll-pane").mCustomScrollbar("disable", true);
														$(".scroll-pane").mCustomScrollbar({top:0});
													})
										}, speed);
									},500)
                        });

                        $("body").on("mouseleave", ".carousel-area__right__zone", function (event) {
                                    clearInterval(interval);
									clearTimeout(timeout);
						
                        });

                        $("body").on("mouseenter", ".carousel-area__left__zone", function (event) {
									$('.carousel-3d-slide').finish();
                                    var speed = parseInt($(event.currentTarget).data("speed"), 10);

                                    speed = 2000 / speed;

                                    if (speed > 2000) speed = 2000;

									timeout = setTimeout(function() {
										if ($(".carousel-3d-slide.current").prev().length) {
													$(".carousel-3d-slide.current").prev().trigger("click");
										} else {
													$(".carousel-3d-slide:last-child").trigger("click");
										}
										$(".scroll-pane").mCustomScrollbar("disable", true);
										$(".scroll-pane").mCustomScrollbar({top:0});
										
										
										interval = setInterval(function (event) {

													if ($(".carousel-3d-slide.current").prev().length) {
																$(".carousel-3d-slide.current").prev().trigger("click");
													} else {
																$(".carousel-3d-slide:last-child").trigger("click");
													}
													setTimeout(function() {
														$(".scroll-pane").mCustomScrollbar("disable", true);
														$(".scroll-pane").mCustomScrollbar({top:0});
													})
										}, speed);
									},500)
									
                        });

                        $("body").on("mouseleave", ".carousel-area__left__zone", function (event) {
								
                                    clearInterval(interval);
									clearTimeout(timeout);
									
                        });
            }
});
'use strict';

$('#d-si-select, .d-sii__chbox').styler();
"use strict";

//*******************************************
//
//    what is budget description
//
//*******************************************
budget.extend("whatIsBudgetDescription", {
        init: function init() {
                var _this = this;

                this.elements = {};
                this.elements.$components = $(".whatIsBudget-component__wrapper");

                this.elements.$revenues = $(".whatIsBudget-revenues__item");
                this.elements.$revenuesTitle = $(".whatIsBudget-revenues__subtitle");
                this.elements.$revenuesExamples = $(".whatIsBudget-revenues__examples");

                this.elements.publicDebt = $(".whatIsBudget-publicDebt");

                this.elements.$classification = $(".whatIsBudget-expenditures__classification");
                this.elements.$expendituresTitle = $(".whatIsBudget-expenditures__title");
                this.elements.$expenditures = $(".whatIsBudget-expenditures__item");
                this.elements.$expendituresList = $(".whatIsBudget-expenditures__listWrapper");

                this.elements.close = {};
                this.elements.close.revenues = $(".whatIsBudget-revenues__close");
                this.elements.close.publicDebt = $(".whatIsBudget-publicDebt__close");
                this.elements.close.expenditures = $(".whatIsBudget-expenditures__close");

                this.current = {};
                this.current.revenues = false;
                this.current.publicDebt = false;
                this.current.expenditures = false;
                this.current.expendituresTitle = false;

                if (!Modernizr.mobile) this.rebuildExpenditures();

                $document.click(function (event) {

                        if ($(event.target).closest(".whatIsBudget-revenues__item._active, .whatIsBudget-publicDebt._active, .whatIsBudget-expenditures__item._active").length) return;

                        if (_this.current.revenues) {

                                _this.hideRevenues();
                        } else if (_this.current.publicDebt) {

                                _this.hidePublicDebt();
                        } else if (_this.current.expenditures) {

                                _this.hideExpenditures();
                        }
                });

                this.elements.$revenues.on("click", ".whatIsBudget-revenues__subtitle", function (event) {
                        _this.revenuesTriggered($(event.delegateTarget));
                });

                this.elements.publicDebt.on("click", ".whatIsBudget-publicDebt__title", function (event) {
                        _this.publicDebtTriggered($(event.delegateTarget));
                });

                this.elements.$expenditures.on("click", ".whatIsBudget-expenditures__subtitle", function (event) {
                        _this.expendituresTriggered($(event.delegateTarget));
                });

                this.elements.$expendituresTitle.on("click", function (event) {
                        _this.expendituresTitleTriggered($(event.currentTarget));
                });

                this.elements.close.revenues.on("click", function (event) {
                        _this.hideRevenues();
                });

                this.elements.close.publicDebt.on("click", function (event) {
                        _this.hidePublicDebt();
                });

                this.elements.close.expenditures.on("click", function (event) {
                        _this.hideExpenditures();
                });
        },
        showdescription: function showdescription(item) {

                this.elements.$components.attr("data-active", item);
        },
        rebuildExpenditures: function rebuildExpenditures() {

                $("<div class='whatIsBudget-expenditures__titleWrapper'></div>").insertAfter(this.elements.$classification);

                this.elements.$expendituresTitle.prependTo($(".whatIsBudget-expenditures__titleWrapper"));

                this.elements.$expendituresTitle = $(".whatIsBudget-expenditures__title");
        },
        revenuesTriggered: function revenuesTriggered($element) {

                if (this.current.revenues == $element[0]) {

                        this.hideRevenues();
                } else {

                        this.hideRevenues();
                        this.showRevenues($element);
                }
        },
        hideRevenues: function hideRevenues() {

                $(this.current.revenues).removeClass("_active");

                this.current.revenues = false;
        },
        showRevenues: function showRevenues($element) {

                this.current.revenues = $element[0];

                $(this.current.revenues).addClass("_active");
        },
        publicDebtTriggered: function publicDebtTriggered($element) {

                if (this.current.publicDebt == $element[0]) {

                        this.hidePublicDebt();
                } else {

                        this.hidePublicDebt();
                        this.showPublicDebt($element);
                }
        },
        hidePublicDebt: function hidePublicDebt() {

                $(this.current.publicDebt).removeClass("_active");

                this.current.publicDebt = false;
        },
        showPublicDebt: function showPublicDebt($element) {

                this.current.publicDebt = $element[0];

                $(this.current.publicDebt).addClass("_active");
        },
        expendituresTriggered: function expendituresTriggered($element) {

                if (this.current.expenditures == $element[0]) {

                        this.hideExpenditures();
                } else {

                        this.hideExpenditures();
                        this.showExpenditures($element);
                }
        },
        hideExpenditures: function hideExpenditures() {

                $(this.current.expenditures).removeClass("_active");

                this.current.expenditures = false;
        },
        showExpenditures: function showExpenditures($element) {

                this.current.expenditures = $element[0];

                $(this.current.expenditures).addClass("_active");
        },
        expendituresTitleTriggered: function expendituresTitleTriggered($element) {

                if (this.current.expendituresTitle == $element[0]) {

                        this.hideExpendituresTitle();
                } else {

                        this.hideExpendituresTitle();
                        this.showExpendituresTitle($element);
                }
        },
        hideExpendituresTitle: function hideExpendituresTitle() {

                $(this.current.expendituresTitle).removeClass("_active");

                this.current.expendituresTitle = false;

                this.elements.$expendituresList.css("display", "none");
        },
        showExpendituresTitle: function showExpendituresTitle($element) {

                this.current.expendituresTitle = $element[0];

                $(this.current.expendituresTitle).addClass("_active");

                this.elements.$expendituresList.eq($element.attr("data-item")).css("display", "block");
        }
});
"use strict";

//*******************************************
//
//    what is budget lines
//
//*******************************************
budget.extend("whatIsBudgetLines", {
            init: function init() {
                        var _this = this;

                        this.elements = {};

                        this.elements.$component = $(".whatIsBudget-component__wrapper");

                        this.elements.revenues = {};
                        this.elements.revenues.$parent = $(".whatIsBudget-revenues__wrapper");

                        this.elements.revenues.$title1 = $(".whatIsBudget-revenues:nth-child(1) .whatIsBudget-revenues__title");
                        this.elements.revenues.$title2 = $(".whatIsBudget-revenues:nth-child(2) .whatIsBudget-revenues__title");
                        this.elements.revenues.$title3 = $(".whatIsBudget-revenues:nth-child(3) .whatIsBudget-revenues__title");

                        this.elements.revenues.$line1 = $(".whatIsBudget-revenues:nth-child(1) .whatIsBudget-revenues__title .whatIsBudget-line");
                        this.elements.revenues.$line2 = $(".whatIsBudget-revenues:nth-child(2) .whatIsBudget-revenues__title .whatIsBudget-line");
                        this.elements.revenues.$line3 = $(".whatIsBudget-revenues:nth-child(3) .whatIsBudget-revenues__title .whatIsBudget-line");

                        this.elements.deficit = {};
                        this.elements.deficit.$parent = $(".whatIsBudget-financingOfDeficit__wrapper");

                        this.elements.deficit.$item1 = $(".whatIsBudget-financingOfDeficit:nth-child(1)");
                        this.elements.deficit.$item2 = $(".whatIsBudget-financingOfDeficit:nth-child(2)");
                        this.elements.deficit.$item5 = $(".whatIsBudget-financingOfDeficit:nth-child(5)");
                        this.elements.deficit.$item6 = $(".whatIsBudget-financingOfDeficit:nth-child(6)");
                        this.elements.deficit.$item7 = $(".whatIsBudget-financingOfDeficit:nth-child(7)");

                        this.elements.deficit.$title1 = $(".whatIsBudget-financingOfDeficit:nth-child(1) .whatIsBudget-financingOfDeficit__title");
                        this.elements.deficit.$title2 = $(".whatIsBudget-financingOfDeficit:nth-child(2) .whatIsBudget-financingOfDeficit__title");
                        this.elements.deficit.$title3 = $(".whatIsBudget-financingOfDeficit:nth-child(3) .whatIsBudget-financingOfDeficit__title");
                        this.elements.deficit.$title5 = $(".whatIsBudget-financingOfDeficit__suitcase");
                        this.elements.deficit.$title6 = $(".whatIsBudget-financingOfDeficit:nth-child(6) .whatIsBudget-financingOfDeficit__title");
                        this.elements.deficit.$title7 = $(".whatIsBudget-financingOfDeficit:nth-child(7) .whatIsBudget-financingOfDeficit__title");

                        this.elements.deficit.$line1 = $(".whatIsBudget-financingOfDeficit__line1");
                        this.elements.deficit.$line2 = $(".whatIsBudget-financingOfDeficit__line2");
                        this.elements.deficit.$line3 = $(".whatIsBudget-financingOfDeficit__line3");
                        this.elements.deficit.$line4 = $(".whatIsBudget-financingOfDeficit__line4");
                        this.elements.deficit.$line5 = $(".whatIsBudget-financingOfDeficit__line5");
                        this.elements.deficit.$line6 = $(".whatIsBudget-financingOfDeficit__line6");
                        this.elements.deficit.$line7 = $(".whatIsBudget-financingOfDeficit__line7");

                        $window.on("load resize", function (event) {

                                    if (_this.elements.$component.attr("data-active") == "0") _this.setRevenuesLines();
                                    if (_this.elements.$component.attr("data-active") == "1") _this.setDeficitLines();
                        });
            },
            setRevenuesLines: function setRevenuesLines() {

                        var width = {};
                        width.parent = this.elements.revenues.$parent.width();

                        if (!Modernizr.phone) {

                                    this.elements.revenues.$line1.css("width", width.parent / 2 - this.elements.revenues.$title1.outerWidth());

                                    this.elements.revenues.$line2.css("width", width.parent / 2 - this.elements.revenues.$title2.outerWidth());

                                    this.elements.revenues.$line3.css("height", Math.ceil(this.elements.revenues.$title3.position().top) + 2);
                        } else {

                                    var bottom = Math.ceil(this.elements.revenues.$title3.outerHeight()) / 2 - 3;

                                    var height = this.elements.revenues.$title3.position().top + this.elements.revenues.$title3.outerHeight() - bottom;

                                    this.elements.revenues.$line3.css({ bottom: bottom, height: height });
                        }
            },
            setDeficitLines: function setDeficitLines() {

                        var width = {};
                        width.parent = this.elements.deficit.$parent.width();

                        if (!Modernizr.phone) {

                                    this.elements.deficit.$line1.css("width", width.parent / 2 - this.elements.deficit.$title1.outerWidth() - parseInt(this.elements.deficit.$item1.css("marginLeft"), 10));

                                    this.elements.deficit.$line2.css("width", width.parent / 2 - this.elements.deficit.$title1.outerWidth() - parseInt(this.elements.deficit.$item1.css("marginLeft"), 10));

                                    this.elements.deficit.$line3.css("height", this.elements.deficit.$item1.position().top + this.elements.deficit.$title1.outerHeight() / 2);

                                    this.elements.deficit.$line4.css("top", this.elements.deficit.$title3.position().top + this.elements.deficit.$title3.outerHeight());

                                    this.elements.deficit.$line5.css("height", this.elements.deficit.$item6.position().top - this.elements.deficit.$item5.position().top - this.elements.deficit.$title6.outerHeight() - 25);

                                    this.elements.deficit.$line6.css("width", width.parent / 2 - this.elements.deficit.$title6.outerWidth() - parseInt(this.elements.deficit.$item6.css("marginLeft"), 10));

                                    this.elements.deficit.$line7.css("width", width.parent / 2 - this.elements.deficit.$title6.outerWidth() - parseInt(this.elements.deficit.$item6.css("marginLeft"), 10));
                        } else {

                                    this.elements.deficit.$line2.css("bottom", this.elements.deficit.$title2.outerHeight() / 2);

                                    this.elements.deficit.$line2.css("height", this.elements.deficit.$item2.position().top + 10);

                                    this.elements.deficit.$line7.css("bottom", this.elements.deficit.$title7.outerHeight() / 2);

                                    this.elements.deficit.$line7.css("height", this.elements.deficit.$item7.position().top - this.elements.deficit.$item6.position().top + 60);
                        }
            }
});
"use strict";

//*******************************************
//
//    what is budget weight
//
//*******************************************
budget.extend("whatIsBudgetWeight", {
        init: function init() {
                var _this = this;
                
                if (!$('.whatIsBudget').length) return false;

                this.elements = {};
                this.elements.$platform = $(".budgetScales-platform");
                this.elements.$characteristics = $(".whatIsBudget-characteristic__wrapper");
                this.elements.$characteristic = $(".whatIsBudget-characteristic");
                this.elements.$termin = $(".whatIsBudget-characteristic__termin");
                this.elements.$definition = $(".whatIsBudget-characteristic__definition");
                this.elements.$game = $(".budgetScales-game");

                this.elements.$component = $(".whatIsBudget-component__wrapper");
                this.elements.$componentItem = $(".whatIsBudget-component");
                this.elements.$revenues = $(".whatIsBudget-revenues__wrapper");
                this.elements.$financingOfDeficit = $(".whatIsBudget-financingOfDeficit__wrapper");
                this.elements.$expenditures = $(".whatIsBudget-expenditures__wrapper");

                this.elements.weight = {};
                this.elements.weight.$revenues = $(".budgetScales-mainWeight._revenues");
                this.elements.weight.$expenditures = $(".budgetScales-mainWeight._expenditures");
                this.elements.weight.$financingOfDeficit = $(".budgetScales-supportingWeight._financingOfDeficit");
                this.elements.weight.$useOfSurplus = $(".budgetScales-supportingWeight._useOfSurplus");

                this.elements.$activeZoneWrapper = $(".budgetScales-activeZone__wrapper");
                this.elements.$activeZone = $(".budgetScales-activeZone");
                this.elements.$zoneSurplus = this.elements.$activeZone.filter("._surplus");
                this.elements.$zoneBalance = this.elements.$activeZone.filter("._balance");
                this.elements.$zoneDeficit = this.elements.$activeZone.filter("._deficit");

                this.block = {};
                this.block.weight = false;

                this.height = {};
                this.padding = {};

                this.timeout = false;
                this.timeoutAligment = false;
                this.timeoutGameLeft = false;
                this.timeoutGameRight = false;

                this.status = {};
                this.status.definition = [false, false, false];

                this.length = {};
                this.length.characteristic = this.elements.$characteristic.length;

                this.cssDefinition();

                $window.on("load resize", function (event) {
                        _this.cssDefinition();
                });

                if (!Modernizr.mobile) {

                        //ховер в левой части
                        this.elements.$zoneSurplus.on("mouseenter", function (event) {
                                clearTimeout(_this.timeoutGameLeft);
                                _this.rollToTheLeft();
                        });

                        this.elements.weight.$revenues.on("mouseenter", function (event) {
                                clearTimeout(_this.timeoutGameLeft);
                                _this.rollToTheLeft();
                        });

                        this.elements.$zoneSurplus.on("mouseleave", function (event) {

                                if ($(event.relatedTarget).hasClass("budgetScales-mainWeight") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                                _this.rollToCenter();

                                if (_this.elements.$component.attr("data-active") != "0") {

                                        _this.timeoutGameLeft = setTimeout(function () {
                                                _this.gameWithWeight(0);
                                        }, 1000);
                                }
                        });

                        this.elements.weight.$revenues.on("mouseleave", function (event) {

                                if ($(event.relatedTarget).hasClass("budgetScales-activeZone") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                                _this.rollToCenter();

                                if (_this.elements.$component.attr("data-active") != "0") {

                                        _this.timeoutGameLeft = setTimeout(function () {
                                                _this.gameWithWeight(0);
                                        }, 1000);
                                }
                        });

                        //ховер по центру
                        this.elements.$zoneBalance.on("mouseenter", function (event) {
                                _this.alignmentToTheCenter();
                        });

                        //ховер в правой части
                        this.elements.$zoneDeficit.on("mouseenter", function (event) {
                                clearTimeout(_this.timeoutGameRight);
                                _this.rollToTheRight();
                        });

                        this.elements.weight.$expenditures.on("mouseenter", function (event) {
                                clearTimeout(_this.timeoutGameRight);
                                _this.rollToTheRight();
                        });

                        this.elements.$zoneDeficit.on("mouseleave", function (event) {

                                if ($(event.relatedTarget).hasClass("budgetScales-mainWeight") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                                _this.rollToCenter();

                                if (_this.elements.$component.attr("data-active") != "2") {
                                        _this.timeoutGameRight = setTimeout(function () {
                                                _this.gameWithWeight(1);
                                        }, 1000);
                                }
                        });

                        this.elements.weight.$expenditures.on("mouseleave", function (event) {

                                if ($(event.relatedTarget).hasClass("budgetScales-mainWeight") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                                _this.rollToCenter();

                                if (_this.elements.$component.attr("data-active") != "2") {
                                        _this.timeoutGameRight = setTimeout(function () {
                                                _this.gameWithWeight(1);
                                        }, 1000);
                                }
                        });
                }

                if (Modernizr.mobile) {

                        this.elements.$zoneSurplus.on("click", function (event) {
                                _this.rollToTheLeft();
                        });

                        this.elements.$zoneBalance.on("click", function (event) {
                                _this.rollToCenter();
                                _this.alignmentToTheCenter();
                        });

                        this.elements.$zoneDeficit.on("click", function (event) {
                                _this.rollToTheRight();
                        });
                }

                this.elements.$componentItem.on("click", ".whatIsBudget-component__termin", function (event) {

                        _this.showInformation($(event.delegateTarget).index());
                });

                this.elements.weight.$revenues.click(function (event) {

                        //if (!this.block.weight) return false;
                        if (!Modernizr.mobile) {
                            _this.showInformation(0);
                        } else {
                            _this.rollToTheLeft();
                        }
                });

                this.elements.weight.$financingOfDeficit.click(function (event) {

                        //if (!this.block.weight) return false;

                        _this.showInformation(1);
                });

                this.elements.weight.$expenditures.click(function (event) {

                        //if (!this.block.weight) return false;
                        if (!Modernizr.mobile) {
                            _this.showInformation(2);
                        } else {
                            _this.rollToTheRight();
                        }
                });

                this.elements.$characteristic.on("click", ".whatIsBudget-characteristic__termin", function (event) {

                        var index = $(event.delegateTarget).index();

                        for (var i = 0; i < _this.length.characteristic; i++) {
                                if (i != index) _this.hideDefinition(i);
                        }

                        _this.showDefinition(index);
                });
        },
        gameWithWeight: function gameWithWeight(index) {

                TweenMax.to(this.elements.$game[index], 0.1, { autoAlpha: 1 });
                TweenMax.to(this.elements.$game[index], 0.4, { autoAlpha: 0, delay: 0.6 });

                TweenMax.to(this.elements.$game[index], 0.2, { x: -25 });
                TweenMax.to(this.elements.$game[index], 0.4, { x: 25, delay: 0.2 });
                TweenMax.to(this.elements.$game[index], 0.2, { x: 0, delay: 0.5 });
        },
        showInformation: function showInformation(index) {

                this.elements.$component.attr("data-active", index);

                if (index === 0) {

                        this.elements.$revenues.css("display", "block");
                        this.elements.$financingOfDeficit.css("display", "none");
                        this.elements.$expenditures.css("display", "none");

                        budget.whatIsBudgetLines.setRevenuesLines.apply(budget.whatIsBudgetLines);
                } else if (index === 1) {

                        this.elements.$revenues.css("display", "none");
                        this.elements.$financingOfDeficit.css("display", "block");
                        this.elements.$expenditures.css("display", "none");

                        budget.whatIsBudgetLines.setDeficitLines.apply(budget.whatIsBudgetLines);
                } else if (index === 2) {

                        this.elements.$revenues.css("display", "none");
                        this.elements.$financingOfDeficit.css("display", "none");
                        this.elements.$expenditures.css("display", "block");
                }

                var scrollTop = this.elements.$component.offset().top + this.elements.$component.outerHeight() + 100 - $window.height();

                if (scrollTop > $window.scrollTop()) {
                        TweenMax.to($("body, html"), 0.4, { scrollTop: scrollTop, ease: Quad.easeOut });
                }
        },
        cssDefinition: function cssDefinition() {

                this.elements.$characteristics.css("height", "auto");

                this.elements.$definition.addClass("_show");

                this.height.characteristic = Math.ceil(Math.max.apply(null, this.elements.$characteristic.map(function () {
                        return $(this).height();
                }).get()));

                this.padding.definitionTop = parseInt(this.elements.$definition.css("paddingTop"), 10);
                this.padding.definitionBottom = parseInt(this.elements.$definition.css("paddingBottom"), 10);

                this.elements.$definition.removeClass("_show");

                this.elements.$characteristics.css("height", this.height.characteristic);
        },
        rollToCenter: function rollToCenter() {

                if (this.block.weight) return false;

                clearTimeout(this.timeout);
                this.timeout = false;

                this.elements.$platform.attr("data-advantage", "");
                this.elements.weight.$revenues.attr("data-status", "");
                this.elements.weight.$expenditures.attr("data-status", "");
        },
        rollToTheLeft: function rollToTheLeft() {
                var _this2 = this;

                if (this.block.weight) return false;

                clearTimeout(this.timeout);
                this.timeout = false;

                this.elements.$platform.attr("data-advantage", "surplus");
                this.elements.weight.$revenues.attr("data-status", "big");
                this.elements.weight.$expenditures.attr("data-status", "");

                this.timeout = setTimeout(function () {

                        _this2.block.weight = true;
                        _this2.elements.$activeZoneWrapper.addClass("_noactive");

                        _this2.hideDefinition(2);
                        _this2.hideDefinition(1);
                        _this2.showDefinition(0);
                }, 2500);

                this.timeoutAligment = setTimeout(function () {

                        if (!_this2.block.weight) return false;

                        _this2.alignmentToTheRight();
                }, 4500);
        },
        rollToTheRight: function rollToTheRight() {
                var _this3 = this;

                if (this.block.weight) return false;

                clearTimeout(this.timeout);
                this.timeout = false;

                this.elements.$platform.attr("data-advantage", "deficit");
                this.elements.weight.$expenditures.attr("data-status", "big");
                this.elements.weight.$revenues.attr("data-status", "");

                this.timeout = setTimeout(function () {

                        _this3.block.weight = true;
                        _this3.elements.$activeZoneWrapper.addClass("_noactive");

                        _this3.hideDefinition(0);
                        _this3.hideDefinition(1);
                        _this3.showDefinition(2);
                }, 2500);

                this.timeoutAligment = setTimeout(function () {

                        if (!_this3.block.weight) return false;

                        _this3.alignmentToTheLeft();
                }, 4500);
        },
        alignmentToTheRight: function alignmentToTheRight() {
                var _this4 = this;

                TweenMax.fromTo(this.elements.weight.$useOfSurplus, 1.5, { autoAlpha: 0 }, { autoAlpha: 1 });
                TweenMax.fromTo(this.elements.weight.$useOfSurplus, 1.5, { y: -150 }, { y: 0, ease: Bounce.easeOut });

                setTimeout(function () {

                        _this4.elements.$platform.attr("data-advantage", "");
                }, 1000);

                setTimeout(function () {

                        _this4.elements.weight.$revenues.attr("data-status", "");

                        TweenMax.to(_this4.elements.weight.$useOfSurplus, 2.5, { autoAlpha: 0, onComplete: function onComplete() {

                                        _this4.block.weight = false;
                                        _this4.elements.$activeZoneWrapper.removeClass("_noactive");
                                        clearTimeout(_this4.timeout);
                                        _this4.timeout = false;
                                } });
                }, 6000);
        },
        alignmentToTheLeft: function alignmentToTheLeft() {
                var _this5 = this;

                TweenMax.fromTo(this.elements.weight.$financingOfDeficit, 1.5, { autoAlpha: 0 }, { autoAlpha: 1 });
                TweenMax.fromTo(this.elements.weight.$financingOfDeficit, 1.5, { y: -150 }, { y: 0, ease: Bounce.easeOut });

                setTimeout(function () {

                        _this5.elements.$platform.attr("data-advantage", "");
                }, 1000);

                setTimeout(function () {

                        _this5.elements.weight.$expenditures.attr("data-status", "");

                        TweenMax.to(_this5.elements.weight.$financingOfDeficit, 2.5, { autoAlpha: 0, onComplete: function onComplete() {

                                        _this5.block.weight = false;
                                        _this5.elements.$activeZoneWrapper.removeClass("_noactive");
                                        clearTimeout(_this5.timeout);
                                        _this5.timeout = false;
                                } });
                }, 6000);
        },
        alignmentToTheCenter: function alignmentToTheCenter() {
                var _this6 = this;

                if (this.block.weight) return false;

                clearTimeout(this.timeout);
                this.timeout = false;

                clearTimeout(this.timeoutAligment);
                this.timeoutAligment = false;

                this.timeout = setTimeout(function () {

                        _this6.block.weight = true;
                        _this6.elements.$activeZoneWrapper.addClass("_noactive");

                        _this6.elements.weight.$revenues.attr("data-status", "center");
                        _this6.elements.weight.$expenditures.attr("data-status", "center");

                        _this6.hideDefinition(0);
                        _this6.hideDefinition(2);
                        _this6.showDefinition(1);

                        setTimeout(function () {

                                _this6.block.weight = false;
                                _this6.elements.$activeZoneWrapper.removeClass("_noactive");
                                clearTimeout(_this6.timeout);
                                _this6.timeout = false;
                        }, 2500);
                }, 1000);
        },
        showDefinition: function showDefinition(eq) {
                var _this7 = this;

                if (this.status.definition[eq]) return false;

                this.status.definition[eq] = true;

                TweenMax.killTweensOf(this.elements.$definition[eq]);

                this.elements.$definition.eq(eq).addClass("_show");

                var height = this.elements.$definition.eq(eq).outerHeight();

                this.elements.$definition.eq(eq).removeClass("_show").css("display", "block");

                this.elements.$termin.eq(eq).addClass("_show");

                TweenMax.fromTo(this.elements.$definition[eq], 1.5, { autoAlpha: 0, height: 0, paddingTop: 0, paddingBottom: 0 }, { autoAlpha: 1, height: height, paddingTop: this.padding.definitionTop, paddingBottom: this.padding.definitionBottom, onComplete: function onComplete() {

                                _this7.elements.$definition.eq(eq).addClass("_show");

                                var height = _this7.elements.$definition.eq(eq).outerHeight();

                                _this7.elements.$definition.eq(eq).removeClass("_show");

                                TweenMax.set(_this7.elements.$definition[eq], { height: height });
                        } });
        },
        hideDefinition: function hideDefinition(eq) {
                var _this8 = this;

                TweenMax.to(this.elements.$definition[eq], 1.5, { autoAlpha: 0, height: 0, paddingTop: 0, paddingBottom: 0, onComplete: function onComplete() {

                                _this8.elements.$termin.eq(eq).removeClass("_show");
                                _this8.elements.$definition.eq(eq).css("display", "none");

                                TweenMax.set(_this8.elements.$definition[eq], { paddingTop: _this8.padding.definitionTop, paddingBottom: _this8.padding.definitionBottom });

                                _this8.status.definition[eq] = false;
                        } });
        }
});
"use strict";

budget.init();

$document.on("ready", function () {

    utils.getOrientation();
});

$window.on("load", function () {});

$window.on("orientationchange", function () {

    utils.getOrientation();
});