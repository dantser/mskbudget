import $ from 'jquery';

export default () => {
	$(document).ready(function(){
    // стрелочки внутри таблицы
    $('.table__arrow').each( function () { // eslint-disable-line
      const EL = $(this);
      EL.on('click', (e) => {
        e.preventDefault();
        // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
        EL.parents('.table__row').toggleClass('table__row_opened');
        EL.parents('.table__row').nextAll('.table__row').each(function () {
          if ( !$(this).hasClass('table__row_hassub') ) {
            $(this).toggle();
//            $('.table__row_subrow_tax').toggle();
          } else {
            return false;
          }
        })
      });
    })
    
	});

}