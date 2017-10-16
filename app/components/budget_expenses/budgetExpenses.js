import $ from 'jquery';

export default () => {
  
  // переключение по селектам
  $('.budget-expenses .analityc-widget_expenses .analityc-control-group select').on('change', function () {
    changeContent('select');
  });
  
  // переключение по кнопкам график/таблица
  $(".budget-expenses .analityc-widget_expenses .analityc-control-button").on("click", function(e) {
    e.preventDefault();
    //$(this).siblings().removeClass('active');
    //$(this).addClass('active');
    changeContent('button', $(this));
  });
  
  // переключение ко второму графику в исполнении на дату
  $(".budget-expenses .analityc-widget_expenses .analityc-control-group._dp input").on("change", function() {
    var graphics = $('.analityc-graphics'),
        activeButton = $('.analityc-control-button.active'),
        typeVal = activeButton.data('type');
    
    if (typeVal == 'graphics') {
      graphics.removeClass('active');
      //graphics.has('[data-stage="dtwo"]').addClass('active');
    }
  });
  
  
  
  function changeContent(typeofchange, el) {
    var graphics = $('.analityc-graphics'),
        table = $('.analityc-table'),
        controls = $('.analityc-widgethead [data-control]'),
        //stageSelect = $('.analityc-control-group._stage select'),
        //levelSelect = $('.analityc-control-group._level select'),
        //classSelect = $('.analityc-control-group._classify select'),
        //stageVal = stageSelect.val(),
        //levelVal = levelSelect.val(),
        //classVal = classSelect.val(),
        block;
    
    if (typeofchange == 'select') {
      var activeButton = $('.analityc-control-button.active'),
          typeVal = activeButton.data('type');
    } else {
      var typeVal = el.data('type');
    }
    
    //graphics.removeClass('active');
    //table.removeClass('active');
    //controls.removeClass('active');
    
    if (typeVal == 'graphics') {
      block = graphics;
    } else {
      block = table;
    }
    
    //changeBlock(block, stageVal, classVal);
    //changeControl(controls, stageVal, levelVal, typeVal);
    
    //positionValues();
    //$(document).trigger('contentChanged');
  }
  
  function changeBlock(el, stageVal, classVal) {
    /*el.each(function(){
      var stage = $(this).data('stage'),
          dclass = $(this).data('class');
      if ((stage == 'all' || stage.match(stageVal)) && (dclass == 'all' || dclass.match(classVal))) {
        $(this).addClass('active');
      }
    });*/
  }
  
  function changeControl(el, stageVal, levelVal, typeVal) {
    /*el.each(function(){
      var stage = $(this).data('stage'),
          level = $(this).data('level'),
          type = $(this).data('type');
      if ((stage == 'all' || stage.match(stageVal)) && (level == 'all' || level.match(levelVal)) && (type == 'all' || type.match(typeVal))) {
        $(this).addClass('active');
      }
    });*/
  }

}