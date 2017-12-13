import $ from 'jquery';

export default () => {
  
  if ($('.analytics-gov-debt').length) {
    
    $('.analytics-gov-debt__analityc-widgethead .analityc-control-switcher a').on('click', function () {
      changeContent('switcher', $(this));
    });
    
    function changeContent(typeofchange, el) {
      
      var graphics = $('.analytics-gov-debt__graphics'),
          controls = $('.analytics-gov-debt [data-control]'),
          typeVal;
      
      if (typeofchange == 'select') {
        typeVal = $('.analytics-gov-debt__analityc-widgethead .analityc-control-switcher a.active').data('type');
      } else {
        typeVal = el.data('type');
      }
      
      graphics.removeClass('active');
      controls.hide();
	 
      changeBlock(graphics, typeVal);
      changeControl(controls, typeVal);
      graphicBars();
      rateLine();
    }
    
    function changeBlock(el, typeVal) {
      el.each(function(){
        var type = $(this).data('type');
        if (type == 'all' || type.match(typeVal)) {
          $(this).addClass('active');
        }
      });
    }
    
    function changeControl(el, typeVal) {
      el.each(function(){
        var type = $(this).data('type');
        if (type == 'all' || type.match(typeVal)) {
          $(this).show();
        }
      });
    }
    
    changeContent('select');
  }
  
}
