import $ from 'jquery';

export default () => {
	//$(document).ready(function(){
    // стрелочки внутри таблицы
    //$('.table__arrow').each( function () { // eslint-disable-line
    //  const EL = $(this);
      //EL.on('click', (e) => {
      $(document).on('click', '.table__arrow', function(e) {
        e.preventDefault();
        // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
        $(this).parents('.table__row').toggleClass('table__row_opened');
        $(this).parents('.table__row').nextAll('.table__row').each(function () {
          if ( !$(this).hasClass('table__row_hassub') ) {
            $(this).toggle();
//            $('.table__row_subrow_tax').toggle();
          } else {
            return false;
          }
        })
      });
    //})
    
	//});

}