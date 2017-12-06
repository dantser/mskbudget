import $ from 'jquery';

var table_subscribed = false;
export default () => {
    if (table_subscribed) return;
    table_subscribed = true;
	//$(document).ready(function(){
    // стрелочки внутри таблицы
    //$('.table__arrow').each( function () { // eslint-disable-line
    //  const EL = $(this);
      //EL.on('click', (e) => {
      $(document).on('click', '.table__arrow', function(e) {
        if (!$(this).parents('.table_multilevel').length) {
          console.log("Click table__arrow");
          e.preventDefault();
          // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
          $(this).parents('.table__row').toggleClass('table__row_opened');
          $(this).parents('.table__row').nextAll('.table__row').each(function () {
            if ( !$(this).hasClass('table__row_hassub') && !$(this).hasClass('table__row_rootsub')) {
              $(this).toggle();
//              $('.table__row_subrow_tax').toggle();
            } else {
              return false;
            }
          })
        }
      });

      $(document).on('click', '.table__subarrow', function(e) {
        if (!$(this).parents('.table_multilevel').length) {
          console.log("Click table__subarrow");
          e.preventDefault();
          $(this).parents('.table__subrow').toggleClass('table__subrow_opened');
          $(this).parents('.table__subrow').nextAll('.table__subrow').each(function () {
            if ( !$(this).hasClass('table__subrow_hassub') ) {
              $(this).toggle();
            } else {
              return false;
            }
          })
        }
      });

      $(document).on('click', '.table__arrow_root', function(e) {
        if (!$(this).parents('.table_multilevel').length) {
          console.log("Click table__arrow_root");
          e.preventDefault();
          // EL.closest('.table__row').nextAll('.table__row_subrow').slideToggle();
          $(this).parents('.table__row').toggleClass('table__row_opened');
          var isOpened = $(this).parents('.table__row').hasClass('table__row_opened');
          $(this).parents('.table__row').nextAll('.table__row').each(function () {
            if ( !$(this).hasClass('table__row_rootsub') ) {
              if (isOpened)
              {
                $(this).show();
                if ($(this).hasClass('table__row_hassub'))
                {
                  $(this).addClass('table__row_opened');
                }
              }
              else
              {
                $(this).hide();
                if ($(this).hasClass('table__row_hassub'))
                {
                  $(this).removeClass('table__row_opened');
                }
              }
            } else {
              return false;
            }
          });
          return false;
        }
      });

    //})
    
	//});
  
  function checkOpenedRows() {
    $('.table_multilevel .table__row').each(function(){
      
      var parentRow = $(this),
          parentLevel = parentRow.attr('data-level');
      
      parentRow.nextAll('.table__row').each(function () {
        
        var level = $(this).attr('data-level');
        if (level > parentLevel) {
          if (parentRow.hasClass('table__row_opened') && parentRow.hasClass('active')) {
            $(this).show().addClass('active');
          } else {
            $(this).hide().removeClass('active');
          }
        } else {
          return false;
        }
        
      });
    });
  }
  
  if ($('.table_multilevel').length) {      
    checkOpenedRows();
  }
  
  $(document).on('click', '.table_multilevel .table__arrow', function(e) {
    e.preventDefault();
    var row = $(this).parents('.table__row');
    row.toggleClass('table__row_opened');
    checkOpenedRows();
  });

}