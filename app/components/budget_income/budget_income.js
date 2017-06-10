import $ from 'jquery';

export default () => {
  
  $('.analityc-widget_income [data-select="stage"]').change(function(){
    var currentTab = $('.analityc-widget_income.active');
    var stage = $(this).val();
    var type = currentTab.find($('[data-type].active')).attr('data-type');
    var newTab = $('.analityc-widget_income[data-stage="'+stage+'"][data-type="'+type+'"]');
    if ( newTab.length > 0 ) {
      currentTab.removeClass('active');
      newTab.addClass('active');
      newTab.find($('[data-select="stage"] option[value="'+stage+'"]')).attr('selected', 'selected');
    }
  });
  
  $('.analityc-widget_income [data-type]').click(function(e){
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      const currentTab = $('.analityc-widget_income.active');
      const stage = currentTab.find($('[data-select="stage"]')).val();
      const type = $(this).attr('data-type');
      const newTab = $('.analityc-widget_income[data-stage="'+stage+'"][data-type="'+type+'"]');
      if ( newTab.length > 0 ) {
        currentTab.removeClass('active');
        newTab.addClass('active');
        newTab.find($('[data-type]')).toggleClass('active');
      }
    }
  });
  
  $('.analityc-widget_income [data-select="date"]').change(function(){
    const currentTab = $('.analityc-widget_income.active');
    const stage = currentTab.find($('[data-select="stage"]')).val();
    const type = currentTab.find($('[data-type].active')).attr('data-type');
    const date = $(this).val();
    const newTab = $('.analityc-widget_income[data-stage="'+stage+'"][data-type="'+type+'"][data-date="'+date+'"]');
    if ( newTab.length > 0 ) {
      currentTab.removeClass('active');
      newTab.addClass('active');
    }
  });
  
}
