import $ from 'jquery';

export default () => {

  $('select.js-change-table1-col').change(function(){
    var value = $(this).val();

    $(document).find('.table1').find('.table1__col.active').removeClass('active');
    $(document).find('.table1').find('.table1__col[data-period="' + value  + '"]').addClass('active')
  });

  $('select.js-change-table2-col').change(function(){
    var value = $(this).val();

    $(document).find('.table2').find('.table2__col.active').removeClass('active');
    $(document).find('.table2').find('.table2__col[data-period="' + value  + '"]').addClass('active')
  });

  /*
  $('.table1__col').click(function(){
    var ind = $(this).index();
    $(this).parents('.table1').find('.table1__col.active').removeClass('active');
    $(this).parents('.table1').find('.table1__col:nth-child('+(ind + 1)+')').addClass('active');
  });
  */

}
