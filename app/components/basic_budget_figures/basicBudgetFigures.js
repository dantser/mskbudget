import $ from 'jquery';

export default () => {
  
  $(document).ready(function(){
  
    if($( ".jq-basic-datepicker" ).length > 0){
		$('.jq-basic-datepicker').datepicker({
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
            beforeShowDay: EnableSpecificDates,
			beforeShow: function(input, inst) {
				$('#ui-datepicker-div').removeClass(function() {
					return $('input').get(0).id; 
				});
				$('#ui-datepicker-div').removeClass('datepicker__show');
				$('#ui-datepicker-div').addClass($(this).attr('class'));
			}
		});
	}
    
    function EnableSpecificDates(date) {
      
      var enableddates = ["6-6-2017", "6-9-2017", "6-15-2017", "6-23-2017"];
      var m = date.getMonth();
      var d = date.getDate();
      var y = date.getFullYear();
      
      // First convert the date in to the mm-dd-yyyy format 
      // Take note that we will increment the month count by 1 
      var currentdate = (m + 1) + '-' + d + '-' + y ;
      
       // We will now check if the date belongs to disableddates array 
      for (var i = 0; i < enableddates.length; i++) {
      
        // Now check if the current date is in disabled dates array. 
        if ($.inArray(currentdate, enableddates) != -1 ) {
          return [true];
        }
        return [false];
      }
      
    }
    
  });
  
}
