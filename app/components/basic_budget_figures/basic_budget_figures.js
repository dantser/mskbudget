import $ from 'jquery';

export default () => {


  $(document).ready(function(){



  // $('.jq-spec-datepicker, .ui-icon').on('click', function () {
  //   $('select').selectmenu();
  //
  // });



  $(document).on('click', function () {
    $('.jq-spec-datepicker-alt').blur().removeClass('hasDatepicker');
    $('.dateListItem').blur();
  });

    if ($('.basic_budget_figures').length) {
      var diagramIndex = 1;

      $('.basic_budget_figures .comp-diagram_dash-1').each(function(){
        var diagram = $(this);
        var diagramFilter = diagram.find('filter');
        var diagramFilterG = diagram.find('g[filter]');
        diagramFilter.attr('id', 'f'+diagramIndex);
        diagramFilterG.attr('filter', 'url(#f'+diagramIndex+')');
        diagramIndex ++;
      });
    }
  });


  function changeSelect()
  {
    var rounds = $(".analityc-widget-rounds"),
        dp = $('.analityc-control-group._dp'),
        stageSelect = $('.analityc-control-group._stage select'),
        levelSelect = $('.analityc-control-group._level select'),
        stageVal = stageSelect.val(),
        levelVal = levelSelect.val();
    
    rounds.removeClass("_active");
    dp.hide();
    
    changeRounds(rounds, stageVal);
    changeDP(dp, stageVal, levelVal);
  }

  $(".basic-budget .analityc-widget_figures .analityc-control-group select").on("change", changeSelect);
  
  function changeRounds(el, stageVal) {
    el.each(function(){
      var stage = $(this).data('stage');
      if (stage.match(stageVal)) {
        $(this).addClass('_active');
      }
    });
  }
  
  function changeDP(el, stageVal, levelVal) {
    el.each(function(){
      var stage = $(this).data('stage'),
          level = $(this).data('level');
      if (stage.match(stageVal) && level.match(levelVal)) {
        $(this).show();
      }
    });
  }
  
  changeSelect();
}
