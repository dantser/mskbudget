import $ from 'jquery';

export default () => {
  
  if ($('.analitycs-gp').length) {
    
    // переключение по селектам
    $('.analitycs-gp .analityc-widgethead select[name="comparison"]').on('change', function () {
      changeContent('select');
    });
    
    $('.analitycs-gp .analityc-widgethead .analityc-control-switcher a').on('click', function () {
      changeContent('switcher', $(this));
    });
    
    function changeContent(typeofchange, el) {
      
      var graphics = $('.analityc-graphics'),
          controls = $('.analitycs-gp [data-control]'),
          comparVal = $('.analitycs-gp .analityc-widgethead select[name="comparison"]').val(),
          typeVal;
      
      if (typeofchange == 'select') {
        typeVal = $('.analitycs-gp .analityc-widgethead .analityc-control-switcher a.active').data('type');
      } else {
        typeVal = el.data('type');
      }
      
      graphics.removeClass('active');
      controls.hide();
	 
      changeBlock(graphics, comparVal, typeVal);
      changeControl(controls, comparVal, typeVal);
      graphicBars();
      graphicLineVertAlt();
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
