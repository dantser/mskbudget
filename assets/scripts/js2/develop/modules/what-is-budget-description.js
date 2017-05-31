//*******************************************
//
//    what is budget description
//
//*******************************************
budget.extend("whatIsBudgetDescription", {

    init() {
        
        this.elements = {};
        this.elements.$components = $(".whatIsBudget-component__wrapper");

        this.elements.$revenues         = $(".whatIsBudget-revenues__item");
        this.elements.$revenuesTitle    = $(".whatIsBudget-revenues__subtitle");
        this.elements.$revenuesExamples = $(".whatIsBudget-revenues__examples");

        this.elements.publicDebt = $(".whatIsBudget-publicDebt");

        this.elements.$classification    = $(".whatIsBudget-expenditures__classification");
        this.elements.$expendituresTitle = $(".whatIsBudget-expenditures__title");
        this.elements.$expenditures      = $(".whatIsBudget-expenditures__item");
        this.elements.$expendituresList  = $(".whatIsBudget-expenditures__listWrapper");

        this.elements.close = {};
        this.elements.close.revenues     = $(".whatIsBudget-revenues__close");
        this.elements.close.publicDebt   = $(".whatIsBudget-publicDebt__close");
        this.elements.close.expenditures = $(".whatIsBudget-expenditures__close");

        this.current = {};
        this.current.revenues = false;
        this.current.publicDebt = false;
        this.current.expenditures = false;
        this.current.expendituresTitle = false;

        if (!Modernizr.mobile) this.rebuildExpenditures();

        $document.click(event => {

            if ($(event.target).closest(".whatIsBudget-revenues__item._active, .whatIsBudget-publicDebt._active, .whatIsBudget-expenditures__item._active").length) return;

            if (this.current.revenues) {

                this.hideRevenues();

            } else if (this.current.publicDebt) {

                this.hidePublicDebt();

            } else if (this.current.expenditures) {

                this.hideExpenditures();

            }

        });

        this.elements.$revenues.on("click", ".whatIsBudget-revenues__subtitle", event => {
            this.revenuesTriggered($(event.delegateTarget));
        });

        this.elements.publicDebt.on("click", ".whatIsBudget-publicDebt__title", event => {
            this.publicDebtTriggered($(event.delegateTarget));
        });

        this.elements.$expenditures.on("click", ".whatIsBudget-expenditures__subtitle", event => {
            this.expendituresTriggered($(event.delegateTarget));
        });

        this.elements.$expendituresTitle.on("click", event => {
            this.expendituresTitleTriggered($(event.currentTarget)); 
        });

        this.elements.close.revenues.on("click", event => {
            this.hideRevenues();
        });

        this.elements.close.publicDebt.on("click", event => {
            this.hidePublicDebt();
        });

        this.elements.close.expenditures.on("click", event => {
            this.hideExpenditures();
        });

    },

    showdescription(item) {

        this.elements.$components.attr("data-active", item);

    },

    rebuildExpenditures() {

        $("<div class='whatIsBudget-expenditures__titleWrapper'></div>").insertAfter(this.elements.$classification);

        this.elements.$expendituresTitle.prependTo($(".whatIsBudget-expenditures__titleWrapper"));

        this.elements.$expendituresTitle = $(".whatIsBudget-expenditures__title");

    },

    revenuesTriggered($element) {

        if (this.current.revenues == $element[0]) {

            this.hideRevenues();

        } else {

            this.hideRevenues();
            this.showRevenues($element);

        }

    },

    hideRevenues() {

        $(this.current.revenues).removeClass("_active");

        this.current.revenues = false;

    },

    showRevenues($element) {

        this.current.revenues = $element[0];

        $(this.current.revenues).addClass("_active");

    },

    publicDebtTriggered($element) {

        if (this.current.publicDebt == $element[0]) {

            this.hidePublicDebt();

        } else {

            this.hidePublicDebt();
            this.showPublicDebt($element);

        }

    },

    hidePublicDebt() {

        $(this.current.publicDebt).removeClass("_active");

        this.current.publicDebt = false;

    },

    showPublicDebt($element) {

        this.current.publicDebt = $element[0];

        $(this.current.publicDebt).addClass("_active");

    },

    expendituresTriggered($element) {

        if (this.current.expenditures == $element[0]) {

            this.hideExpenditures();

        } else {

            this.hideExpenditures();
            this.showExpenditures($element);

        }

    },

    hideExpenditures() {

        $(this.current.expenditures).removeClass("_active");

        this.current.expenditures = false;

    },

    showExpenditures($element) {

        this.current.expenditures = $element[0];

        $(this.current.expenditures).addClass("_active");

    },

    expendituresTitleTriggered($element) {

        if (this.current.expendituresTitle == $element[0]) {

            this.hideExpendituresTitle();

        } else {

            this.hideExpendituresTitle();
            this.showExpendituresTitle($element);

        }

    },

    hideExpendituresTitle() {

        $(this.current.expendituresTitle).removeClass("_active");

        this.current.expendituresTitle = false;

        this.elements.$expendituresList.css("display","none");

    },

    showExpendituresTitle($element) {

        this.current.expendituresTitle = $element[0];

        $(this.current.expendituresTitle).addClass("_active");

        this.elements.$expendituresList.eq($element.attr("data-item")).css("display","block");

    }
    
});