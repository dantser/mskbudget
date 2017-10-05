import $ from 'jquery';

export default () => {
  
  const LABEL = $('.legend_checkbox .checkbox');
  const REMOVE_LINK = $('.legend__remove');
  
  if (!LABEL || !REMOVE_LINK) {
    return
  }
  
  LABEL.each( function (e) {
    const EL = $(this);
    const ACTIVECLASS = 'checkbox_active';
    EL.find('.checkbox__control').on('change', function() {
      if (this.checked) {
        EL.addClass(ACTIVECLASS);
      } else {
        EL.removeClass(ACTIVECLASS);
      }
    });
  });
  
  REMOVE_LINK.each( function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      EL.parent('.legend__item').hide();
    });
  });
  
  
  // Отображение графиков по чекбоксам
  function checkLegendBoxes() {
    $('.legend_checkbox .checkbox').each(function(){
      var checkBox = $(this).find('.checkbox__control'),
          checkStatus = checkBox.is(':checked'),
          name = checkBox.attr('name'),
          graphic = $(this).parent().siblings('.analityc-graphics-container');
      
      if (checkStatus == true) {
        graphic.find('[data-checkbox="'+name+'"]').show();
      } else {
        graphic.find('[data-checkbox="'+name+'"]').hide();
      }
      
    });
  }
  
  if ($('.legend_checkbox').length) {
    checkLegendBoxes();
    $(document).on('change', '.legend_checkbox .checkbox__control', function(){
      checkLegendBoxes();
    });
  }
}
