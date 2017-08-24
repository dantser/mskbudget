import $ from 'jquery';

export default () => {
  const AIP = $('.analityc-widget_aip');

  // стрелочки для госпрограмм
  const ARROW_NEXT = $('.govProgram__arr_next');
  const ARROW_PREV = $('.govProgram__arr_prev');
  const selectGP = $('.analityc-widgethead_aip .analityc-control-group_gp .analityc-select');
  ARROW_NEXT.on('click', function (e) {
    e.preventDefault();
    const govProgram = $('.govProgram');
    const govProgramActive = $('.govProgram.active');
    const option = selectGP.find('option');
    const optionSelected = selectGP.find('option:selected');

    govProgramActive.removeClass('active').next().addClass('active');
    optionSelected.removeAttr('selected').next().attr('selected', 'selected');
    if (!govProgram.is('.active')) {
      $('.govProgram:first-child').addClass('active');
    }
    if ($('.analityc-control-group_gp .analityc-select option[selected]').length === 0) {
      selectGP.find('option:first-child').attr('selected', 'selected');
    }
  });
  ARROW_PREV.on('click', function (e) {
    e.preventDefault();
    const govProgram = $('.govProgram');
    const govProgramActive = $('.govProgram.active');
    const option = selectGP.find('option');
    const optionSelected = selectGP.find('option:selected');

    govProgramActive.removeClass('active').prev().addClass('active');
    optionSelected.removeAttr('selected').prev().attr('selected', 'selected');
    if (!govProgram.is('.active')) {
      $('.govProgram:last-child').addClass('active');
    }
    if ($('.analityc-control-group_gp .analityc-select option[selected]').length === 0) {
      selectGP.find('option:last-child').attr('selected', 'selected');
    }
  });

  // изменение селекта "гос программа"
  selectGP.on('change', function () {
    const $this = $(this);
    const option = $this.find('option');
    const govProgram = $('.govProgram');
    govProgram.removeClass('active');
    option.removeAttr('selected');

    if($this.val() ===  "Развитие транспортной системы") {
      govProgram.eq(0).addClass('active');
      option.eq(0).attr('selected', 'selected');
    } else if ($this.val() ===  "Столичное здравоохранение") {
      govProgram.eq(1).addClass('active');
      option.eq(1).attr('selected', 'selected');
    } else if ($this.val() ===  "Социальная поддержка жителей Москвы") {
      govProgram.eq(2).addClass('active');
      option.eq(2).attr('selected', 'selected');
    } else if ($this.val() ===  "Столичное образование") {
      govProgram.eq(3).addClass('active');
      option.eq(3).attr('selected', 'selected');
    }
  });


  //переключение таблица-график
  $(".analityc-widgethead_aip .analityc-control-button").on("click", function (e) {
   e.preventDefault();
   var $this = $(this);
   var aip = $(".analityc-widget_aip"),
       aipGraphics = aip.find($('.analityc-graphics')),
       aipTable = aip.find($('.analityc-table')),
       aipGovPrograms = aip.find('.govPrograms'),
       aipGraphicsActive = aip.find($('.analityc-graphics.active')),
       aipTableActive = aip.find($('.analityc-table.active'));

   if ($this.hasClass('analityc-control-button_graphics') && !$this.hasClass('active')) {
     $this.siblings().removeClass('active');
     $this.addClass('active');
     if (aipTableActive.hasClass('analityc-table')) {
       aipTable.removeClass('active');
       aipGraphics.addClass('active');
       aipGovPrograms.addClass('active');
     }
   } else if ($this.hasClass('analityc-control-button_table') && !$this.hasClass('active')) {
     $this.siblings().removeClass('active');
     $this.addClass('active');
     if (aipGraphicsActive.hasClass('analityc-graphics')) {
       aipGraphics.removeClass('active');
       aipTable.addClass('active');
       aipGovPrograms.removeClass('active');
     }
   }
 });
}
