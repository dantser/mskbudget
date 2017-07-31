import $ from 'jquery';

export default () => {
  function appendList(inst, className) {
      const $selectElement = inst.dpDiv.find('.' + className);
      console.log($selectElement);
      const selected = $selectElement.find("option[selected]");
      const $listElement = $('<dl class="{0} dropdown"></dl>'.replace('{0}', className + '-list')).appendTo($selectElement.parent());
      $listElement.append('<dt><a href="#">' + selected.text() + '<span class="value">' + selected.val() + '</span></a></dt>');
      $listElement.append('<dd><ul class="dateListItem" ></ul></dd>');
      $selectElement.children('option').each(function () {
          const $listItem = $listElement.find(".dateListItem").append('<li><a href="#">' + $(this).text() + '<span class="value">' + $(this).val() + '</span></a></li>');
          $listItem.hide();
          $listItem.find('a').click(function (e) {
              e.preventDefault();
              $selectElement.val($(this).find('span').text());
              $selectElement.change();
          });
      });
      $listElement.find('dt a').click(function (e) {
          e.preventDefault();
          $(this).closest('dt')
            .siblings('dd')
            .find('.dateListItem')
            .toggle();
      });
  }

  function convertToLists(inst) {
      const self = this;
      setTimeout(function () {
        inst.dpDiv.addClass('datePickerWithLists');
        appendList(inst, 'ui-datepicker-month');
        appendList(inst, 'ui-datepicker-year');
      }, 0);
  };

  //   if($( ".jq-spec-datepicker-alt" ).length > 0){
  // 	$('.jq-spec-datepicker-alt').datepicker({
  // 		dateFormat:'на dd M',
  // 		changeMonth: true,
  // 		changeYear: true,
  // 		showOtherMonths: true,
  // 		selectOtherMonths: false,
  // 		firstDay: 1,
  // 		monthNames: ['январь','февраль','март','апрель','май','июнь',
  // 		'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
  // 		monthNamesShort: ['января','февраля','марта','апреля','мая','июня',
  // 		'июля','августа','сентября','октября','ноября','декабря'],
  // 		dayNamesMin: ['вс', 'пн','вт','ср','чт','пт','сб'],
  // 		beforeShow: function(input, inst) {
  //
  // 			$('#ui-datepicker-div').removeClass(function() {
  // 				return $('input').get(0).id;
  // 			});
  // 			$('#ui-datepicker-div').removeClass('datepicker__show');
  // 			$('#ui-datepicker-div').addClass($(this).attr('class'));
  // 		},
  //     onChangeMonthYear: function (year, month, inst) {
  //       convertToLists(inst);
  //     }
  // 	});
  // }

  if($( ".jq-spec-datepicker" ).length > 0){
  $('.jq-spec-datepicker').datepicker({
  dateFormat:'dd M yy',
  changeMonth: true,
  changeYear: true,
  showOtherMonths: true,
  selectOtherMonths: false,
  firstDay: 1,
  monthNames: ['январь','февраль','март','апрель','май','июнь',
  'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
  monthNamesShort: ['январь','февраль','март','апрель','май','июнь',
  'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
  dayNamesMin: ['вс', 'пн','вт','ср','чт','пт','сб'],
  beforeShow: function(input, inst) {
    convertToLists(inst);
  },
  onChangeMonthYear: function (year, month, inst) {
    convertToLists(inst);
  }
  });
  }

  $(document).ready(function(){



  // $('.jq-spec-datepicker, .ui-icon').on('click', function () {
  //   $('select').selectmenu();
  //
  // });



  $(document).on('click', function () {
    $('.jq-spec-datepicker-alt').blur().removeClass('hasDatepicker');
    $('.dateListItem').blur();
  });

    if ($('.basic_budget_figures').length) {
      var diagramIndex = 1;

      $('.basic_budget_figures .comp-diagram_dash-1').each(function(){
        var diagram = $(this);
        var diagramFilter = diagram.find('filter');
        var diagramFilterG = diagram.find('g[filter]');
        diagramFilter.attr('id', 'f'+diagramIndex);
        diagramFilterG.attr('filter', 'url(#f'+diagramIndex+')');
        diagramIndex ++;
      });
    }
  });




  $(".analityc-control-group._stage select").on('change', function () {
    if ($(this).parents('.analityc-widget_figures')) {
      var $this = $(this),
          dp = $(".analityc-control-group._dp"),
          dp_alt = $(".analityc-control-group._dp-alt");

      $(".analityc-widget-rounds").removeClass("_active");
      if ($this.val() === "Закон о бюджете первоначальный") {
          $(".analityc-widget-rounds:eq(0)").addClass("_active");
      } else if ($this.val() === "Закон о внесении изменений") {
          $(".analityc-widget-rounds:eq(2)").addClass("_active");
      } else {
        $(".analityc-widget-rounds:eq(1)").addClass("_active");
        //diagram_4.animate();
        //diagram_5.animate();
      }

      if ($this.val() ===  "Исполнение на дату") {
        dp.show();
        $(".analityc-control-group._percent").hide();

        if ($(".analityc-control-group._level .analityc-select").val() ===  "Консолидированный бюджет") {
          dp.hide();
          dp_alt.show();
        }
      }
      else {
        dp.hide();
        dp_alt.hide();
        $(".analityc-control-group._percent").show();
      }
    }
  });

$(".analityc-control-group._level .analityc-select").on("change", function () {
  if ($(this).parents('.analityc-widget_figures')) {
    var $this = $(this),
        dp = $(".analityc-control-group._dp"),
        dp_alt = $(".analityc-control-group._dp-alt");

    if ($(".analityc-control-group._stage .analityc-select").val() ===  "Исполнение на дату") {
      dp.show();
      dp_alt.hide();
      $(".analityc-control-group._percent").hide();

      if ($this.val() ===  "Консолидированный бюджет") {
        dp_alt.show();
        dp.hide();
      }
    } else {
      dp_alt.hide();
      dp.hide();
    }
  }
});

$(".analityc-control-button").on("click", function(e) {
  if (!$(this).parents('.analityc-widget__income') && !$(this).parents('.analityc-widget__expenses') && !$(this).parents('.analityc-widget_sources') && !$(this).parents('.analityc-widget_moscow-gov-program')) {
  e.preventDefault();
  var table = $(".analityc-control-button_table");
  var $this = $(this);
  $('.analityc-control-button').removeClass('active');
  $this.toggleClass('active');
  $(".analityc-widget-sources").removeClass("_active");

   if (table.hasClass("active")) {

      $(".analityc-widget-sources_table").addClass("_active");
  } else {
    $(".analityc-widget-sources_table").removeClass("_active");
  }
  }
})

$(".analityc-control-group._stage .analityc-select").on("change", function () {
  if (!$(this).parents('.analityc-widget__income') && !$(this).parents('.analityc-widget__expenses')) {
    var $this = $(this);
    $(".analityc-widget-sources").removeClass("_active");

    if ($this.val() ===  "Исполнение на дату") {
        $(".analityc-widget-sources:eq(0)").addClass("_active");
    } else if($this.val() ===  "Закон о бюджете утвержденный") {
            $(".analityc-widget-sources:eq(1)").addClass("_active");
    } else if($this.val() ===  "Закон о внесении изменений") {
            $(".analityc-widget-sources:eq(2)").addClass("_active");
    } else if($this.val() ===  "Закон об исполнении") {
            $(".analityc-widget-sources:eq(3)").addClass("_active");
    }

    if ($this.val() ===  "Исполнение на дату") {
            $(".analityc-control-group._dp").show();
            $(".analityc-control-switcher").hide();

    } else if ($this.val() ===  "Закон о внесении изменений") {
            $(".analityc-control-group._dp").hide();
            $(".analityc-control-switcher").css('display', 'inline-block');
    }
    else {
            $(".analityc-control-group._dp").hide();
            $(".analityc-control-switcher").hide();
    }
  }
});

}
