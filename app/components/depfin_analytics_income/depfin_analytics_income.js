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
          controls = $('._analitycs-income .analityc-widgethead [data-control]'),
          comparVal = $('._analitycs-income .analityc-widgethead select[name="comparison"]').val(),
          typeVal;
      
      if (typeofchange == 'select') {
        typeVal = $('._analitycs-income .analityc-widgethead .analityc-control-switcher a.active').data('type');
      } else {
        typeVal = el.data('type');
      }
      
      graphics.removeClass('active');
      controls.removeClass('active');
	 
      changeBlock(graphics, comparVal, typeVal);
      changeControl(controls, comparVal);
      graphicBars();
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
    
    function changeControl(el, comparVal) {
      el.each(function(){
        var comparison = $(this).data('comparison');
        if (comparison == 'all' || comparison.match(comparVal)) {
          $(this).addClass('active');
        }
      });
    }
    
    changeContent('select');
    
  }
  
}
