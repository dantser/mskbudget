import $ from 'jquery';

export default () => {


  $(document).ready(function(){

    if($( ".jq-spec-datepicker-alt" ).length > 0){
		$('.jq-spec-datepicker-alt').datepicker({
			dateFormat:'на dd M',
			changeMonth: true,
			changeYear: true,
			showOtherMonths: true,
			selectOtherMonths: false,
			firstDay: 1,
			monthNames: ['январь','февраль','март','апрель','май','июнь',
			'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
			monthNamesShort: ['января','февраля','марта','апреля','мая','июня',
			'июля','августа','сентября','октября','ноября','декабря'],
			dayNamesMin: ['вс', 'пн','вт','ср','чт','пт','сб'],
			beforeShow: function(input, inst) {
				$('#ui-datepicker-div').removeClass(function() {
					return $('input').get(0).id;
				});
				$('#ui-datepicker-div').removeClass('datepicker__show');
				$('#ui-datepicker-div').addClass($(this).attr('class'));
			}
		});
	}


    $(document).on('click', function () {
      $('.jq-spec-datepicker-alt').blur().removeClass('hasDatepicker');
    });

  });

}
