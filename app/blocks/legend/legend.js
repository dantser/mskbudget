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
  
  $(document).on('change', '.legend-icon-a .checkbox__control', function(){
    if (this.checked) {
      $(this).parents('.checkbox').addClass('checkbox_active');
    } else {
      $(this).parents('.checkbox').removeClass('checkbox_active');
    }
  });
}
