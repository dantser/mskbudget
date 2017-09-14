import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-placeholder';

export default () => {
  const TABS_LINK = $('.filter-link');
  const CLOSE_MODAL = $('.js-close-modal');
  const OPEN_ICON = $('.js-icon');
  const ACTIVE_CLASS = 'active';

  //плэйсходер для ie
  $('input').placeholder();



  TABS_LINK.each( function () { // eslint-disable-line
    const EL = $(this);

    EL.on('click', (e) => {
      e.preventDefault();
      EL.siblings('.filter-link').removeClass(ACTIVE_CLASS);
      EL.toggleClass(ACTIVE_CLASS);
    });

  });

  // тултип
  //$('.search_widget .d-si__search').each(function () {
  //  $(this).on('focus', function () {
  //    $(this).siblings('.search__tooltip').fadeIn(321);
  //    $(this).removeAttr("value");
  //  });
  //  $(this).on('blur', function () {
  //    $(this).siblings('.search__tooltip').fadeOut(321);
  //  });
  //});
  
  $(document).on('focus', '.search_widget .d-si__search', function(){
    $(this).siblings('.search__tooltip').fadeIn(321);
    //$(this).removeAttr("value");
    $(this).val("");
    $('.search_widget .d-si__search').not($(this)).blur();
  });
  $(document).on('blur keyup change', '.search_widget .d-si__search', function(){
    $(this).siblings('.search__tooltip').fadeOut(321);
  });
  $(document).on('click', '.search_widget .d-si__search', function(e){
    e.stopPropagation();
    $('.search_widget .d-si__search').not($(this)).blur();
  });
  $(document).on('click', function(){
    $('.search_widget .d-si__search').blur();
  });


  $(document).on('click', function(e) {
    if (!$(e.target).closest('.search__filter').length && $('.range-datepicker').is(':hidden')) {
      TABS_LINK.removeClass(ACTIVE_CLASS);
    }
    e.stopPropagation();
  });

  $('input[name="all"]').change(function(){
    if (this.checked) {
      $(this).parents('.checkbox').siblings('.extra-search__checkbox-group').find('input').prop('checked', true);
    } else {
      $(this).parents('.checkbox').siblings('.extra-search__checkbox-group').find('input').prop('checked', false);
    }
  });
  //чекбоксы
  $('.extra-search__checkbox-group').click(function(){
  var inputCount = $(this).find('.checkbox__control:checked').length,
      checkboxCount = $(this).find('.checkbox').length;


  if (inputCount != checkboxCount) {
    $(this).siblings('.checkbox').find('.checkbox__control[name="all"]').prop('checked', false);
  } else {
    $(this).siblings('.checkbox').find('.checkbox__control[name="all"]').prop('checked', true);
  }
});



  CLOSE_MODAL.each( function () { // eslint-disable-line
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      $('.link').removeClass(ACTIVE_CLASS);
    });
  });

  //закрыть выпадающие окна фильтра по клику в любом месте
  // $(document).mouseup(function(e) {
  //   var modal = $('.modal');
  //   if (modal.has(e.target).length === 0){
  //     if ($('.link').hasClass('active') && !$('.form__date-range').hasClass('form__date-range_focus'))
  //       $('.link').removeClass(ACTIVE_CLASS);
  //   }
  // })

  OPEN_ICON.each( function () { // eslint-disable-line
    const EL = $(this);
    const OPEN_GROUP = '.extra-search__checkbox-group';
    EL.on('click', (e) => {
      e.preventDefault();
      EL.next(OPEN_GROUP).slideToggle();
    });
  });


  // //выделяем все чекбоксы в группе
  // $('input[name="all"]').on('change', function () {
  //   $(this).parents('.extra-search__checkbox').find('.checkbox__control').prop('checked', this.checked);
  // });

  //сбрасываем чекбоксы
  const el = $('.extra-search__reset');

  if (!el) {
    return;
  }

  el.on('click', () => {
    el.parents('form').find('.checkbox__control').removeAttr('checked');
  });

  // $('.form__date-range').each(function() {
  //     $(this).find('input').keypress(function(e) {
  //         // Enter pressed?
  //         e.preventDefault();
  //         if(e.which == 10 || e.which == 13) {
  //           if ( $('.input-min').hasClass('focused')) {
  //             $('.input-min.focused').removeClass('focused');
  //             $('.input-max').addClass('focused').focus();
  //           } else {
  //             $('.form__date-range').removeClass('form__date-range_focus');
  //             $('.range-datepicker').hide();
  //           }
  //         }
  //     });
  // });
  var position = $(".ui-datepicker-year").on('change', function (e) {
    e.preventDefault();
    position.find('option:selected').prependTo(position);
  });

}
