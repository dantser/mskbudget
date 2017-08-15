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

    if($( ".jq-spec-datepicker-alt" ).length > 0){
		$('.jq-spec-datepicker-alt').datepicker({
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
      beforeShowDay: function (date) {

        if (date.getDate() == 1) {
            return [true, ''];
        }
        return [false, ''];
      },
			beforeShow: function(input, inst) {
				$('#ui-datepicker-div').removeClass(function() {
					return $('input').get(0).id;
				});
				$('#ui-datepicker-div').removeClass('datepicker__show');
				$('#ui-datepicker-div').addClass($(this).attr('class'));
			}
		});
	}

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
      $('#ui-datepicker-div').removeClass(function() {
        return $('input').get(0).id;
      });
      $('#ui-datepicker-div').removeClass('datepicker__show');
      $('#ui-datepicker-div').addClass($(this).attr('class'));
    }
  });
}

    function DisableSpecificDates(date) {

      var disableddates = ["6-6-2017", "6-9-2017", "6-15-2017", "6-23-2017", "10-26-2017", "10-4-2017", "10-12-2017", "1-28-2017"];
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
