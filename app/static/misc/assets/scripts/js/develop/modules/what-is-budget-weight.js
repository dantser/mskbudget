//*******************************************
//
//    what is budget weight
//
//*******************************************
budget.extend("whatIsBudgetWeight", {

    init() {
        
        this.elements = {};
        this.elements.$platform        = $(".budgetScales-platform");
        this.elements.$characteristics = $(".whatIsBudget-characteristic__wrapper");
        this.elements.$characteristic  = $(".whatIsBudget-characteristic");
        this.elements.$termin          = $(".whatIsBudget-characteristic__termin");
        this.elements.$definition      = $(".whatIsBudget-characteristic__definition");
        this.elements.$game            = $(".budgetScales-game");

        
        this.elements.$component          = $(".whatIsBudget-component__wrapper");
        this.elements.$componentItem      = $(".whatIsBudget-component");
        this.elements.$revenues           = $(".whatIsBudget-revenues__wrapper");
        this.elements.$financingOfDeficit = $(".whatIsBudget-financingOfDeficit__wrapper");
        this.elements.$expenditures       = $(".whatIsBudget-expenditures__wrapper");

        this.elements.weight = {};
        this.elements.weight.$revenues           = $(".budgetScales-mainWeight._revenues");
        this.elements.weight.$expenditures       = $(".budgetScales-mainWeight._expenditures");
        this.elements.weight.$financingOfDeficit = $(".budgetScales-supportingWeight._financingOfDeficit");
        this.elements.weight.$useOfSurplus       = $(".budgetScales-supportingWeight._useOfSurplus");


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
        this.timeoutAligment  = false;
        this.timeoutGameLeft  = false;
        this.timeoutGameRight = false;

        this.status = {};
        this.status.definition = [false,false,false];

        this.length = {};
        this.length.characteristic = this.elements.$characteristic.length;



        this.cssDefinition();

        $window.on("load resize", event => {
            this.cssDefinition();
        });

        if (!Modernizr.mobile) {

            //ховер в левой части
            this.elements.$zoneSurplus.on("mouseenter", event => {
                clearTimeout(this.timeoutGameLeft);
                this.rollToTheLeft();
            });

            this.elements.weight.$revenues.on("mouseenter", event => {
                clearTimeout(this.timeoutGameLeft);
                this.rollToTheLeft();
            });
    
            this.elements.$zoneSurplus.on("mouseleave", event => {

                if ($(event.relatedTarget).hasClass("budgetScales-mainWeight") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                this.rollToCenter();

                if (this.elements.$component.attr("data-active") != "0") {

                    this.timeoutGameLeft = setTimeout(() => {
                        this.gameWithWeight(0);
                    } , 1000);
                    
                }

            });

            this.elements.weight.$revenues.on("mouseleave", event => {

                if ($(event.relatedTarget).hasClass("budgetScales-activeZone") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                this.rollToCenter();

                if (this.elements.$component.attr("data-active") != "0") {

                    this.timeoutGameLeft = setTimeout(() => {
                        this.gameWithWeight(0);
                    } , 1000);

                }

            });


            
            //ховер по центру
            this.elements.$zoneBalance.on("mouseenter", event => {
                this.alignmentToTheCenter();
            });


            
            //ховер в правой части
            this.elements.$zoneDeficit.on("mouseenter", event => {
                clearTimeout(this.timeoutGameRight);
                this.rollToTheRight();
            });

            this.elements.weight.$expenditures.on("mouseenter", event => {
                clearTimeout(this.timeoutGameRight);
                this.rollToTheRight();
            });
            
            this.elements.$zoneDeficit.on("mouseleave", event => {

                if ($(event.relatedTarget).hasClass("budgetScales-mainWeight") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                this.rollToCenter();

                if (this.elements.$component.attr("data-active") != "2") {
                    this.timeoutGameRight = setTimeout(() => {
                        this.gameWithWeight(1);
                    } , 1000);
                }

            });

            this.elements.weight.$expenditures.on("mouseleave", event => {

                if ($(event.relatedTarget).hasClass("budgetScales-mainWeight") || $(event.relatedTarget).hasClass("budgetScales-supportingWeight")) return false;

                this.rollToCenter();

                if (this.elements.$component.attr("data-active") != "2") {
                    this.timeoutGameRight = setTimeout(() => {
                        this.gameWithWeight(1);
                    } , 1000);
                }

            });

        }

        if (Modernizr.mobile) {

            this.elements.$zoneSurplus.on("click", event => {
                this.rollToTheLeft();
            });

            this.elements.$zoneBalance.on("click", event => {
                this.rollToCenter();
                this.alignmentToTheCenter();
            });

            this.elements.$zoneDeficit.on("click", event => {
                this.rollToTheRight();
            });

        }

        this.elements.$componentItem.on("click", ".whatIsBudget-component__termin", event => {

            this.showInformation($(event.delegateTarget).index());

        });

        this.elements.weight.$revenues.click(event => {

            //if (!this.block.weight) return false;

            this.showInformation(0);

        });

        this.elements.weight.$financingOfDeficit.click(event => {

            //if (!this.block.weight) return false;

            this.showInformation(1);

        });

        this.elements.weight.$expenditures.click(event => {

            //if (!this.block.weight) return false;

            this.showInformation(2);

        });

        this.elements.$characteristic.on("click", ".whatIsBudget-characteristic__termin", event => {

            var index = $(event.delegateTarget).index();

            for (var i=0; i<this.length.characteristic; i++) {
                if (i != index) this.hideDefinition(i);
            }

            this.showDefinition(index);
        })

    },

    gameWithWeight(index) {

        TweenMax.to(this.elements.$game[index], 0.1, { autoAlpha: 1 });
        TweenMax.to(this.elements.$game[index], 0.4, { autoAlpha: 0, delay: 0.6 });

        TweenMax.to(this.elements.$game[index], 0.2, { x: -25 });
        TweenMax.to(this.elements.$game[index], 0.4, { x:  25, delay: 0.2 });
        TweenMax.to(this.elements.$game[index], 0.2, { x:   0, delay: 0.5 });

    },

    showInformation(index) {

        this.elements.$component.attr("data-active",index);

        if (index === 0) {

            this.elements.$revenues.css("display","block");
            this.elements.$financingOfDeficit.css("display","none");
            this.elements.$expenditures.css("display","none");

            budget.whatIsBudgetLines.setRevenuesLines.apply(budget.whatIsBudgetLines);

        } else if (index === 1) {

            this.elements.$revenues.css("display","none");
            this.elements.$financingOfDeficit.css("display","block");
            this.elements.$expenditures.css("display","none");

            budget.whatIsBudgetLines.setDeficitLines.apply(budget.whatIsBudgetLines);

        } else if (index === 2) {

            this.elements.$revenues.css("display","none");
            this.elements.$financingOfDeficit.css("display","none");
            this.elements.$expenditures.css("display","block");

        }



        var scrollTop = this.elements.$component.offset().top + this.elements.$component.outerHeight() + 100 - $window.height();

        if (scrollTop > $window.scrollTop()) {
            TweenMax.to($("body, html"), 0.4, { scrollTop, ease: Quad.easeOut });
        }

    },

    cssDefinition() {

        this.elements.$characteristics.css("height","auto");

        this.elements.$definition.addClass("_show");

        this.height.characteristic = Math.ceil(Math.max.apply(null, this.elements.$characteristic.map(function () { return $(this).height(); }).get()));

        console.log(this.height.characteristic);

        this.padding.definitionTop    = parseInt(this.elements.$definition.css("paddingTop"),10);
        this.padding.definitionBottom = parseInt(this.elements.$definition.css("paddingBottom"),10);

        this.elements.$definition.removeClass("_show");

        this.elements.$characteristics.css("height", this.height.characteristic);

    },

    rollToCenter() {

        if (this.block.weight) return false;

        clearTimeout(this.timeout);
        this.timeout = false;

        this.elements.$platform.attr("data-advantage", "");
        this.elements.weight.$revenues.attr("data-status","");
        this.elements.weight.$expenditures.attr("data-status","");

    },

    rollToTheLeft() {

        if (this.block.weight) return false;

        clearTimeout(this.timeout);
        this.timeout = false;

        this.elements.$platform.attr("data-advantage", "surplus");
        this.elements.weight.$revenues.attr("data-status","big");
        this.elements.weight.$expenditures.attr("data-status","");

        this.timeout = setTimeout(() => {

            this.block.weight = true;
            this.elements.$activeZoneWrapper.addClass("_noactive");

            this.hideDefinition(2);
            this.hideDefinition(1);
            this.showDefinition(0);

        } , 2500);

        this.timeoutAligment = setTimeout(() => {

            if (!this.block.weight) return false;

            this.alignmentToTheRight();

        } , 4500);

    },

    rollToTheRight() {

        if (this.block.weight) return false;

        clearTimeout(this.timeout);
        this.timeout = false;

        this.elements.$platform.attr("data-advantage", "deficit");
        this.elements.weight.$expenditures.attr("data-status","big");
        this.elements.weight.$revenues.attr("data-status","");

        this.timeout = setTimeout(() => {

            this.block.weight = true;
            this.elements.$activeZoneWrapper.addClass("_noactive");

            this.hideDefinition(0);
            this.hideDefinition(1);
            this.showDefinition(2);

        } , 2500);

        this.timeoutAligment = setTimeout(() => {

            if (!this.block.weight) return false;

            this.alignmentToTheLeft();

        } , 4500);

    },

    alignmentToTheRight() {

        TweenMax.fromTo(this.elements.weight.$useOfSurplus, 1.5, { autoAlpha: 0 }, { autoAlpha: 1 });
        TweenMax.fromTo(this.elements.weight.$useOfSurplus, 1.5, { y: -150 }, { y: 0, ease:Bounce.easeOut });

        setTimeout(() => {

            this.elements.$platform.attr("data-advantage", "");

        } , 1000);

        setTimeout(() => {

            this.elements.weight.$revenues.attr("data-status","");

            TweenMax.to(this.elements.weight.$useOfSurplus, 2.5, { autoAlpha: 0, onComplete: () => {
                
                this.block.weight = false;
                this.elements.$activeZoneWrapper.removeClass("_noactive");
                clearTimeout(this.timeout);
                this.timeout = false;

            } });

        } , 6000);

    },

    alignmentToTheLeft() {

        TweenMax.fromTo(this.elements.weight.$financingOfDeficit, 1.5, { autoAlpha: 0 }, { autoAlpha: 1 });
        TweenMax.fromTo(this.elements.weight.$financingOfDeficit, 1.5, { y: -150 }, { y: 0, ease:Bounce.easeOut });

        setTimeout(() => {

            this.elements.$platform.attr("data-advantage", "");

        } , 1000);

        setTimeout(() => {

            this.elements.weight.$expenditures.attr("data-status","");

            TweenMax.to(this.elements.weight.$financingOfDeficit, 2.5, { autoAlpha: 0, onComplete: () => {
                
                this.block.weight = false;
                this.elements.$activeZoneWrapper.removeClass("_noactive");
                clearTimeout(this.timeout);
                this.timeout = false;

            } });

        } , 6000);

    },

    alignmentToTheCenter() {

        if (this.block.weight) return false;

        clearTimeout(this.timeout);
        this.timeout = false;

        clearTimeout(this.timeoutAligment);
        this.timeoutAligment = false;

        this.timeout = setTimeout(() => {

            this.block.weight = true;
            this.elements.$activeZoneWrapper.addClass("_noactive");

            this.elements.weight.$revenues.attr("data-status","center");
            this.elements.weight.$expenditures.attr("data-status","center");

            this.hideDefinition(0);
            this.hideDefinition(2);
            this.showDefinition(1);

            setTimeout(() => {

                this.block.weight = false;
                this.elements.$activeZoneWrapper.removeClass("_noactive");
                clearTimeout(this.timeout);
                this.timeout = false;

            } , 2500);

        } , 1000);

    },

    showDefinition(eq) {

        if (this.status.definition[eq]) return false;

        this.status.definition[eq] = true;

        TweenMax.killTweensOf(this.elements.$definition[eq]);

        this.elements.$definition.eq(eq).addClass("_show");

        var height = this.elements.$definition.eq(eq).outerHeight();

        this.elements.$definition.eq(eq).removeClass("_show")
                                       .css("display","block");

        this.elements.$termin.eq(eq).addClass("_show");

        TweenMax.fromTo(
            this.elements.$definition[eq],
            1.5,
            { autoAlpha: 0, height: 0, paddingTop: 0, paddingBottom: 0 },
            { autoAlpha: 1, height, paddingTop: this.padding.definitionTop, paddingBottom: this.padding.definitionBottom, onComplete: () => {

                this.elements.$definition.eq(eq).addClass("_show");

                var height = this.elements.$definition.eq(eq).outerHeight();

                this.elements.$definition.eq(eq).removeClass("_show");

                TweenMax.set(this.elements.$definition[eq], { height });
    
            } }
        );

    },

    hideDefinition(eq) {

        TweenMax.to(this.elements.$definition[eq], 1.5, { autoAlpha: 0, height: 0, paddingTop: 0, paddingBottom: 0, onComplete: () => {

            this.elements.$termin.eq(eq).removeClass("_show");
            this.elements.$definition.eq(eq).css("display","none");

            TweenMax.set(this.elements.$definition[eq], { paddingTop: this.padding.definitionTop, paddingBottom: this.padding.definitionBottom });

            this.status.definition[eq] = false;

        } });

    }
    
});