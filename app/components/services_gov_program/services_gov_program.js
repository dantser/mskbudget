import $ from 'jquery';

export default () => {
  const DROPDOWN = $('.dropdown');
  const DROPDOWN_C = '.dropdown';
  const DROPDOWN_BTN = $('.dropdown__btn');
  
  if (DROPDOWN.length > 0) {
    DROPDOWN_BTN.each( function() { // eslint-disable-line
      const EL = $(this);
      const DROPDOWN_ACTIVE_CLASS = 'dropdown_active';
  
      EL.on('click', (e) => {
        e.preventDefault();
        EL.parent().siblings(DROPDOWN_C).removeClass(DROPDOWN_ACTIVE_CLASS);
        EL.parent(DROPDOWN_C).toggleClass(DROPDOWN_ACTIVE_CLASS);
      });
    });
  }

  $(document).on('click', '.gov-program .js-govprogram-showhide', function(e) {
    e.preventDefault();

    if ( !$(this).hasClass('is-active') ) {
      $(this).addClass('is-active').prev('.gov-program__list').find('li:hidden').slideDown('321').addClass('is-active');
      $(this).attr('data-text', $(this).text() ).text('Скрыть задачи');
    } else {
      $(this).removeClass('is-active').prev('.gov-program__list').find('li.is-active').slideUp('321').removeClass('is-active');
      $(this).text( $(this).data('text') );
    }
  });
}
