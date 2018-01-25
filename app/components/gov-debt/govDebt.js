import $ from 'jquery';

export default () => {

  $(document).ready(function(){

    $('.gov-debt__analityc-tab-link').click(function(e){
      e.preventDefault();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      var govdebtTab = $(this).data('govdebt-tab');
      $('.gov-debt__analityc-tab').removeClass('active');
      $('.gov-debt__analityc-tab_'+govdebtTab+'').addClass('active');
    });

  });

  if ($( ".gov-debt__datepicker" ).length) {
    $( ".gov-debt__datepicker" ).datepicker();
    $.datepicker.regional['ru'] = {
    changeMonth: true,
    changeYear: true,
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    bbeforeShowDay: function (date) {

      if (date.getDate() == 1) {
          return [true, ''];
      }
      return [false, ''];
    }
    // beforeShow: function(input, inst) {
    //   convertToLists(inst);
    // },
    // onChangeMonthYear: function (year, month, inst) {
    //   convertToLists(inst);
    // }
    };
  }
  
  
  // переключение по селектам
  $('.gov-debt .gov-debt__analityc-widget .analityc-control-group select').on('change', function () {
    changeContent('select');
  });
  
  function changeContent(typeofchange, el) {
    var stageBlock = $('.analityc-graphics[data-stage], .analityc-table[data-stage]'),
        controls = $('.analityc-widgethead [data-control]'),
        stageSelect = $('.analityc-control-group._stage select'),
        stageVal = stageSelect.val(),
        block;
    
    stageBlock.removeClass('active');
    controls.removeClass('active');
    
    changeBlock(stageBlock, stageVal);
    changeControl(controls, stageVal);
    
    positionValues();
  }
  
  function changeBlock(el, stageVal) {
    el.each(function(){
      var stage = $(this).data('stage');
      if (stage == 'all' || stage.match(stageVal)) {
        $(this).addClass('active');
      }
    });
  }
  
  function changeControl(el, stageVal) {
    el.each(function(){
      var stage = $(this).data('stage');
      if (stage == 'all' || stage.match(stageVal)) {
        $(this).addClass('active');
      }
    });
  }

    // вывод даты в заголовке Исполнение на дату
  /*function graphicsDate() {
    const DP_OUTPUT = $(document).find('.js-dp-output_cons');
    const DP = $(document).find('[data-level="consolidated"]');
    var val = '1 ' + DP.find('.analityc-widget__selectbox_month .selectbox__val').text() + ' ' + DP.find('.analityc-widget__selectbox_year .selectbox__val').text();
    DP_OUTPUT.text(val);
  }*/

  /*$(document).on('click', '.analityc-control-group._stage li', function() {
    graphicsDate();
  })*/
  
  // График погашения государственного долга
  $('.gov-debt .analityc-graphics__graphic_multicolumn').each(function(){
    
    var column = $(this).find('.analityc-graphics__graphic-column'),
        columnFill = $(this).find('.analityc-graphics__graphic-column-fill'),
        maxValue = 0;
    
    column.each(function(){
      var value = $(this).find('.analityc-graphics__graphic-column-val').text();
      value = parseFloat(value.replace(',', '.'));
      if (value > maxValue) maxValue = value;
    });
    
    columnFill.each(function(){
      var value = $(this).find('.analityc-graphics__graphic-column-val').text();
      value = parseFloat(value.replace(',', '.'));
      var columnHeight = value / maxValue * 100;
      $(this).css('height', columnHeight+'%');
      if (columnHeight < 8) {
        $(this).parent().addClass('analityc-graphics__graphic-column_zero');
      }
    });
    
  })

  
}
