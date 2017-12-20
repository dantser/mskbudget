import $ from 'jquery';

export default () => {
  
  if ($('._analitycs-income').length) {
    
    // переключение по селектам
    $('._analitycs-income .analityc-widgethead select[name="comparison"]').on('change', function () {
      changeContent('select');
    });
    
    $('._analitycs-income .analityc-widgethead .analityc-control-switcher a').on('click', function () {
      changeContent('switcher', $(this));
    });
    
    function changeContent(typeofchange, el) {
      
      var graphics = $('.analityc-widget-income'),
		  table = $('.analityc-table'),
          controls = $('._analitycs-income [data-control]'),
          comparVal = $('._analitycs-income .analityc-widgethead select[name="comparison"]').val(),
          typeVal;
      
      if (typeofchange == 'select') {
        typeVal = $('._analitycs-income .analityc-widgethead .analityc-control-switcher a.active').data('type');
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
