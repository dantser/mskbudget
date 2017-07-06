export default function aboutBudgetPreparation() {
  //
  // Загружаем таблицу на середине (на 2017)
  //
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

  // переключение таба бюджет мск/федеральный
  const TABLINK = $('.button-light');

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
    })
  })
}
