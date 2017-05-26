//*******************************************
//
//    what is budget lines
//
//*******************************************
budget.extend("whatIsBudgetLines", {

    init() {
        
        this.elements = {};

        this.elements.$component = $(".whatIsBudget-component__wrapper");

        this.elements.revenues = {};
        this.elements.revenues.$parent = $(".whatIsBudget-revenues__wrapper");

        this.elements.revenues.$title1 = $(".whatIsBudget-revenues:nth-child(1) .whatIsBudget-revenues__title");
        this.elements.revenues.$title2 = $(".whatIsBudget-revenues:nth-child(2) .whatIsBudget-revenues__title");
        this.elements.revenues.$title3 = $(".whatIsBudget-revenues:nth-child(3) .whatIsBudget-revenues__title");

        this.elements.revenues.$line1  = $(".whatIsBudget-revenues:nth-child(1) .whatIsBudget-revenues__title .whatIsBudget-line");
        this.elements.revenues.$line2  = $(".whatIsBudget-revenues:nth-child(2) .whatIsBudget-revenues__title .whatIsBudget-line");
        this.elements.revenues.$line3  = $(".whatIsBudget-revenues:nth-child(3) .whatIsBudget-revenues__title .whatIsBudget-line");


        this.elements.deficit = {};
        this.elements.deficit.$parent = $(".whatIsBudget-financingOfDeficit__wrapper");

        this.elements.deficit.$item1  = $(".whatIsBudget-financingOfDeficit:nth-child(1)");
        this.elements.deficit.$item2  = $(".whatIsBudget-financingOfDeficit:nth-child(2)");
        this.elements.deficit.$item5  = $(".whatIsBudget-financingOfDeficit:nth-child(5)");
        this.elements.deficit.$item6  = $(".whatIsBudget-financingOfDeficit:nth-child(6)");
        this.elements.deficit.$item7  = $(".whatIsBudget-financingOfDeficit:nth-child(7)");

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

        $window.on("load resize", event => {

            if (this.elements.$component.attr("data-active") == "0") this.setRevenuesLines();
            if (this.elements.$component.attr("data-active") == "1") this.setDeficitLines();

        });

    },

    setRevenuesLines() {

        var width = {};
            width.parent = this.elements.revenues.$parent.width();

        if (!Modernizr.phone) {

            this.elements.revenues.$line1.css("width", width.parent / 2 - this.elements.revenues.$title1.outerWidth());

            this.elements.revenues.$line2.css("width", width.parent / 2 - this.elements.revenues.$title2.outerWidth());

            this.elements.revenues.$line3.css("height", Math.ceil(this.elements.revenues.$title3.position().top) + 2);

        } else {

            var bottom = Math.ceil(this.elements.revenues.$title3.outerHeight()) / 2 - 3;

            var height = this.elements.revenues.$title3.position().top + this.elements.revenues.$title3.outerHeight() - bottom;

            this.elements.revenues.$line3.css({ bottom, height });

        }

    },

    setDeficitLines() {

        var width = {};
            width.parent = this.elements.deficit.$parent.width();

        if (!Modernizr.phone) {

            this.elements.deficit.$line1.css("width", width.parent / 2 - this.elements.deficit.$title1.outerWidth() - parseInt(this.elements.deficit.$item1.css("marginLeft"),10));

            this.elements.deficit.$line2.css("width", width.parent / 2 - this.elements.deficit.$title1.outerWidth() - parseInt(this.elements.deficit.$item1.css("marginLeft"),10));

            this.elements.deficit.$line3.css("height", this.elements.deficit.$item1.position().top + this.elements.deficit.$title1.outerHeight() / 2);

            this.elements.deficit.$line4.css("top", this.elements.deficit.$title3.position().top + this.elements.deficit.$title3.outerHeight());

            this.elements.deficit.$line5.css("height", this.elements.deficit.$item6.position().top - this.elements.deficit.$item5.position().top - this.elements.deficit.$title6.outerHeight() - 25)

            this.elements.deficit.$line6.css("width", width.parent / 2 - this.elements.deficit.$title6.outerWidth() - parseInt(this.elements.deficit.$item6.css("marginLeft"),10));

            this.elements.deficit.$line7.css("width", width.parent / 2 - this.elements.deficit.$title6.outerWidth() - parseInt(this.elements.deficit.$item6.css("marginLeft"),10));

        } else {

            this.elements.deficit.$line2.css("bottom", this.elements.deficit.$title2.outerHeight() / 2);

            this.elements.deficit.$line2.css("height", this.elements.deficit.$item2.position().top + 10);

            this.elements.deficit.$line7.css("bottom", this.elements.deficit.$title7.outerHeight() / 2);

            this.elements.deficit.$line7.css("height", this.elements.deficit.$item7.position().top - this.elements.deficit.$item6.position().top + 60);

        }

        

    }
    
});