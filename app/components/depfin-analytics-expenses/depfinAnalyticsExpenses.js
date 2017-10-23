import $ from 'jquery';

export default () => {
  
  if ($('.analitycs-expenses').length) {
    
    // переключение по селектам
    $('.analitycs-expenses .analityc-widgethead select[name="comparison"]').on('change', function () {
      changeContent('select');
    });
    
    $('.analitycs-expenses .analityc-control-switcher a').on('click', function () {
      changeContent('switcher', $(this));
    });
    
    function changeContent(typeofchange, el) {
      
      var graphics = $('.analityc-graphics'),
          controls = $('.analitycs-expenses .analityc-widgethead [data-control]'),
          comparVal = $('.analitycs-expenses .analityc-widgethead select[name="comparison"]').val(),
          typeVal;
      
      if (typeofchange == 'select') {
        typeVal = $('.analitycs-expenses .analityc-control-switcher a.active').data('type');
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
