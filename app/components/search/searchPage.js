import $ from 'jquery';

export default () => {
  const TABS_LINK = $('.filter-link');

  TABS_LINK.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'active';
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
}
