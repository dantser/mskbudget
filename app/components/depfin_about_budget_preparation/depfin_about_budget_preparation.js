export default function aboutBudgetPreparation() {

  //Загружаем таблицу на середине (на 2017)

  var tableHolder = $(".graphic-table__holder"),
      table = $(".graphic-table__table"),
      tableFrame = $(".graphic-table__frame"),
      tableHolderWidth = tableHolder.outerWidth(),
      tableWidth = table.outerWidth();

  if ( tableHolder.length > 0 ) {
    tableHolder.scrollLeft( (tableWidth - tableHolderWidth) / 2 );
  }

  //
  // Скрыть скроллбар для таблицы
  //
  function prepationTableResize() {
    var tHeight = table.height();
    tableFrame.height(tHeight);
  }

  $(document).ready(function(){
    prepationTableResize();
  });

  $(window).resize(function(){
    prepationTableResize();
  });

  // выделение текущего месяца
  $(document).ready(function(){
    if ($('.graphic-table').length) {
      var budgetDate = new Date();
      var budgetYear = budgetDate.getFullYear();
      var budgetMonth = budgetDate.getMonth();
      var tableHeight = $('.graphic-table__table tbody').outerHeight();
      var currentMonth = $('.graphic-table__table-th[data-year="'+budgetYear+'"]').find('.graphic-table__month').eq(budgetMonth);
      currentMonth.addClass('current');
      currentMonth.append('<span class="month-line"></span>');
      currentMonth.find('.month-line').height(tableHeight);
    }
  });

  // переключение таба бюджет мск/федеральный
  const TABLINK = $('.button-light');

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
      $('.js-steps-detail-close').click();
    })
  })


  // раскрытие из "синего списка" и переход по якорю
  $('.steps-details__participants-list a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('data-target');
    var DEST = $('.section-tabs__head').offset().top;
    $('body').animate( {scrollTop: DEST}, 800 );
    $('.steps-details__participants-list a').removeClass('participant_active')
    $(this).addClass('participant_active');
    switch (target) {
      case 'budgetCom':
        $('[data-target-for = budgetCom]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 9);
        break;
      case 'depFin':
        $('[data-target-for="depFin"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 1);
        break;
      case 'depEc':
        $('[data-target-for="depEc"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 2);
        break;
      case 'depPlan':
        $('[data-target-for="depPlan"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 4);
        break;
      case 'depProp':
        $('[data-target-for="depProp"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 4);
        break;
      case 'stewardBud':
        $('[data-target-for="stewardBud"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 7);
        break;
      case 'adminIncome':
        $('[data-target-for="adminIncome"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 8);
        break;
      case 'adminSources':
        $('[data-target-for="adminSources"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 1);
        break;
      case 'coordGP':
        $('[data-target-for="coordGP"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 10);
        break;
    }
  });
}
