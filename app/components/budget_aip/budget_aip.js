import $ from 'jquery';

export default () => {
  
  const AIP = $('.analityc-widget_aip');

  // стрелочки для госпрограмм
  const selectGP = $('.budget_aip .analityc-widgethead_aip .analityc-control-group_gp select');
  
  $('.govProgram__arr').on('click', function(e){  
    e.preventDefault();
    var gp = $('.govProgram'),
        currentgp = $('.govProgram.active'),
        newgp;
    
    if ($(this).hasClass('govProgram__arr_next')) {
      if (currentgp.next().length) {
        newgp = currentgp.next();
      } else {
        newgp = gp.first();
      }
    } else {
      if (currentgp.prev().length) {
        newgp = currentgp.prev();
      } else {
        newgp = gp.last();
      }
    }
    
    var program = newgp.data('program');
    selectGP.next().find('[data-val="'+program+'"]').click();
  });


  // изменение селекта "гос программа"
  selectGP.on('change', function () {
    var programVal = $(this).val(),
        gpblock = $('.govProgram');
    gpblock.removeClass('active');
    gpblock.each(function(){
      var program = $(this).data('program');
      if (program.match(programVal)) {
        $(this).addClass('active');
      }
    });
  });


  //переключение таблица-график
  $(".budget_aip .analityc-widgethead_aip .analityc-control-button").on("click", function (e) {
    e.preventDefault();
    
    var $this = $(this);
    var aip = $(".analityc-widget_aip"),
        aipGraphics = aip.find('.analityc-graphics, .govProgram__content'),
        aipTable = aip.find('.analityc-table'),
        typeVal = $this.data('type');
    
    $this.siblings().removeClass('active');
    $this.addClass('active');
    aipGraphics.removeClass('active');
    aipTable.removeClass('active');
    
    if (typeVal == 'graphics') {
      aipGraphics.addClass('active');
    } else {
      aipTable.addClass('active');
    }
     
 });
}
