export default function aboutBudgetPreparation() {

  // Обновляем высоту блока при переключении дат
  $(".steps-details__date-list li").click(function(){
    if ($(window).width() > 800) {
      $('.steps').outerHeight( $(document).find('.steps-details.active').height() + $('.steps-details').position().top );
    }
  });

  //Загружаем таблицу на середине (на 2017)

  var tableHolder = $(".graphic-table__holder"),
      table = $(".graphic-table__table"),
      tableFrame = $(".graphic-table__frame"),
      tableHolderWidth = tableHolder.outerWidth(),
      tableWidth = table.outerWidth();


  function loadTableToMiddle() {
    if ( tableHolder.length > 0 ) {
      tableHolder.scrollLeft( (tableWidth - tableHolderWidth) / 2 );
    }
  };
  //
  // Скрыть скроллбар для таблицы
  //
  function prepationTableResize() {
    var tHeight = table.height();
    tableFrame.height(tHeight);
  }

  $(window).resize(function(){
    prepationTableResize();
  });

  // выделение текущего месяца
  function markCurrentMonth() {
    if ($('.graphic-table').length) {
        var budgetDate = new Date();
        var budgetYear = budgetDate.getFullYear();
        var budgetMonth = budgetDate.getMonth();
        var tableHeight = $('.graphic-table__table:visible tbody').outerHeight();
        var currentMonth = $('.graphic-table__table-th[data-year="'+budgetYear+'"]:visible').find('.graphic-table__month').eq(budgetMonth);
        currentMonth.addClass('current');
        currentMonth.append('<span class="month-line"></span>');
        currentMonth.find('.month-line').height(tableHeight);
    }
  };

  $(document).ready(function(){
    prepationTableResize();
    loadTableToMiddle();
    markCurrentMonth();
  });
  // закрытие дропдаунов внизу

  function closeDropdowns() {
    var sectionTabs = $('.section-tabs');
    sectionTabs.find(".whitescreen1").fadeIn(100);
    sectionTabs.find($('.section-tabs__nav')).slideUp();
    sectionTabs.find($('.owl-nav')).hide();

    $('.js-label-button').addClass('js-label-button-closed');
    sectionTabs.removeClass('active');
    sectionTabs.find($('.section-tabs__head')).addClass('section-tabs__head_closed');
    return false
  }
  // переключение таба бюджет мск/федеральный
  /*
  const TABLINK = $('.d-abs__foot-content .button-light');

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      $('.js-steps-detail-close').click();
      setTimeout(function () {
        loadTableToMiddle();
        markCurrentMonth();
      },1);
      closeDropdowns();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
    })
  })
  */


  // раскрытие из "синего списка" и переход по якорю
  $('.steps-details__participants-list a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('data-target');
    var DEST = $('.section-tabs__head').offset().top;
    $('html, body').animate( {scrollTop: DEST}, 800 );
    $('.steps-details__participants-list a').removeClass('participant_active')
    $(this).addClass('participant_active');
    $('.section-tabs_members .js-label-button-closed').click();
    /*switch (target) {
      case 'budgetCom':
        $('[data-target-for = budgetCom]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 9);
        break;
      case 'depFin':
        $('[data-target-for="depFin"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 2);
        break;
      case 'depEc':
        $('[data-target-for="depEc"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 3);
        break;
      case 'depPlan':
        $('[data-target-for="depPlan"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 4);
        break;
      case 'depProp':
        $('[data-target-for="depProp"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 5);
        break;
      case 'stewardBud':
        $('[data-target-for="stewardBud"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 6);
        break;
      case 'adminIncome':
        $('[data-target-for="adminIncome"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 7);
        break;
      case 'adminSources':
        $('[data-target-for="adminSources"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 1);
        break;
      case 'coordGP':
        $('[data-target-for="coordGP"]').click();
        $('.owl-carousel.sections').trigger('to.owl.carousel', 10);
        break;
    }*/
    var targetMember = $('[data-target-for = '+target+']');
    var targetMemberIndex = targetMember.parents('.owl-item').index();
    targetMember.click();
    $('.owl-carousel.sections').trigger('to.owl.carousel', targetMemberIndex);
  });
}
