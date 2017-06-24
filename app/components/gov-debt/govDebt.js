import $ from 'jquery';

export default () => {

  $(document).ready(function(){
    $(".gov-debt__analityc-widget .analityc-control-group._stage select.analityc-select").on("change", function () {
      var $this = $(this);
      var govdebt = $(".gov-debt__analityc-widget"),
          govdebtGraphics = govdebt.find($('.gov-debt__analityc-tab_govdebt .gov-debt__analityc-graphics')),
          govdebtGraphicsApproved = govdebt.find($('.analityc-graphics_approved')),
          govdebtGraphicsChanges = govdebt.find($('.analityc-graphics_changes')),
          govdebtGraphicsDate = govdebt.find($('.analityc-graphics_date'));
      
      govdebtGraphics.removeClass('active');
      
      if ($this.val() ===  "Закон о бюджете утвержденный") {
        govdebtGraphicsApproved.addClass('active');
        govdebtHead(1);
      } else if ($this.val() ===  "Закон о внесении изменений") {
        govdebtGraphicsChanges.addClass('active');
        govdebtHead(1);
      } else if ($this.val() ===  "Исполнение на дату") {
        govdebtGraphicsDate.addClass('active');
        govdebtHead(2);
      }
      
    });
    
    function govdebtHead(type) {
      var govdebtSwitcher = $('.gov-debt__analityc-widgethead .analityc-control-switcher'),
          govdebtDatepicker = $('.gov-debt__analityc-widget .analityc-control-group._dp');
      
      if (type === 1) {
        govdebtSwitcher.removeClass('active');
        govdebtDatepicker.removeClass('active');
      } else if (type === 2) {
        govdebtSwitcher.addClass('active');
        govdebtDatepicker.addClass('active');
      }
    }
    
    $('.gov-debt__analityc-tab-link').click(function(e){
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var govdebtTab = $(this).data('govdebt-tab');
      $('.gov-debt__analityc-tab').removeClass('active');
      $('.gov-debt__analityc-tab_'+govdebtTab+'').addClass('active');
    });
    
  });

}
