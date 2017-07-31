import $ from 'jquery';

export default () => {

  if ($('.wrapper_main').length) {
    $(window).resize(function(){
      location.reload();
    });
  }
  $('.service__icon').each(function () {
    $(this).on('click', (e) => {
      e.preventDefault();
      $(this).toggleClass('service__icon_active');
    })
  })


  $(document).ready(function(){
    function appendList(inst, className) {
        var $selectElement = inst.dpDiv.find('.' + className);
        var selected = $selectElement.find("option[selected]");
        var $listElement = $('<dl class="{0} dropdown"></dl>'.replace('{0}', className + '-list')).appendTo($selectElement.parent());
        $listElement.append('<dt><a href="#">' + selected.text() + '<span class="value">' + selected.val() + '</span></a></dt>');
        $listElement.append('<dd><ul class="dateListItem" ></ul></dd>');
        $selectElement.children('option').each(function () {
            var $listItem = $listElement.find(".dateListItem").append('<li><a href="#">' + $(this).text() + '<span class="value">' + $(this).val() + '</span></a></li>');
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
        var self = this;
        setTimeout(function () {
          inst.dpDiv.addClass('datePickerWithLists');
          appendList(inst, 'ui-datepicker-month');
          appendList(inst, 'ui-datepicker-year');
        }, 0);
    };
    if($( ".jq-spec-datepicker" ).length > 0){
		$('.jq-spec-datepicker').datepicker({
			dateFormat:'dd.mm.yy',
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
            beforeShowDay: DisableSpecificDates,
			beforeShow: function(input, inst) {
        convertToLists(inst);
				$('#ui-datepicker-div').removeClass(function() {
					return $('input').get(0).id;
				});
				$('#ui-datepicker-div').removeClass('datepicker__show');
				$('#ui-datepicker-div').addClass($(this).attr('class'));
			},
      onChangeMonthYear: function (year, month, inst) {
        convertToLists(inst);
      }
		});
	}

    function DisableSpecificDates(date) {

      var disableddates = ["6-6-2017", "6-9-2017", "6-15-2017", "6-23-2017"];
      var m = date.getMonth();
      var d = date.getDate();
      var y = date.getFullYear();
      var day = date.getDay();

      // First convert the date in to the mm-dd-yyyy format
      // Take note that we will increment the month count by 1
      var currentdate = (m + 1) + '-' + d + '-' + y ;

       // We will now check if the date belongs to disableddates array
      for (var i = 0; i < disableddates.length; i++) {

        // Now check if the current date is in disabled dates array.
        if ($.inArray(currentdate, disableddates) != -1 ) {
          return [false];
        } else if (day == 1 || day == 0) {
          return [false] ;
        } else {
          return [true];
        }
      }

    }

    $(document).on('click', function () {
      $('.jq-spec-datepicker').blur().removeClass('hasDatepicker');
    });

  });

}
