import $ from 'jquery';

export default () => {
  const TABS_LINK = $('.filter-link');
  const CLOSE_MODAL = $('.js-close-modal');
  const ACTIVE_CLASS = 'active';

  TABS_LINK.each( function () { // eslint-disable-line
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      TABS_LINK.removeClass(ACTIVE_CLASS);
      EL.toggleClass(ACTIVE_CLASS);
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest(".search__filter").length) {
        TABS_LINK.removeClass(ACTIVE_CLASS);
      }
      e.stopPropagation();
    });
  });

  CLOSE_MODAL.each( function () { // eslint-disable-line
    const EL = $(this);

    EL.on('click', (e) => {
      e.preventDefault();
      $('.link').removeClass(ACTIVE_CLASS);
    });
  });
}
