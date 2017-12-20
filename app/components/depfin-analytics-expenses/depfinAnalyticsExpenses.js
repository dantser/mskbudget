import $ from 'jquery';

export default () => {
  
  if ($('.analitycs-expenses').length) {
    
    // переключение по селектам
    $('.analitycs-expenses .analityc-widgethead select[name="comparison"]').on('change', function () {
      changeContent('select');
    });
    
    $('.analitycs-expenses .analityc-widgethead .analityc-control-switcher a').on('click', function () {
      changeContent('switcher', $(this));
    });
    
    function changeContent(typeofchange, el) {
      
      var graphics = $('.analityc-graphics'),
          table = $('.analityc-table'),
          controls = $('.analitycs-expenses [data-control]'),
          comparVal = $('.analitycs-expenses .analityc-widgethead select[name="comparison"]').val(),
          typeVal;
      
      if (typeofchange == 'select') {
        typeVal = $('.analitycs-expenses .analityc-widgethead .analityc-control-switcher a.active').data('type');
      } else {
        typeVal = el.data('type');
      }
      
      graphics.removeClass('active');
      table.removeClass('active');
      controls.hide();
	 
      changeBlock(graphics, comparVal, typeVal);
      changeBlock(table, comparVal, typeVal);
      changeControl(controls, comparVal, typeVal);
      graphicBars();
      graphicLineVertAlt();
      hideTableSubcol();
      changeTableWidth();
    }
    
    function changeBlock(el, comparVal, typeVal) {
      el.each(function(){
        var comparison = $(this).data('comparison');
        var type = $(this).data('type');
        if ((type == 'all' || type.match(typeVal)) && (comparison == 'all' || comparison.match(comparVal))) {
          $(this).addClass('active');
        }
      });
    }
    
    function changeControl(el, comparVal, typeVal) {
      el.each(function(){
        var comparison = $(this).data('comparison');
        var type = $(this).data('type');
        if ((type == 'all' || type.match(typeVal)) && (comparison == 'all' || comparison.match(comparVal))) {
          $(this).show();
        }
      });
    }
    
    changeContent('select');
    
  }
  
}
