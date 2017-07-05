import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const TABS_LINK = $('.filter-link');
  const CLOSE_MODAL = $('.js-close-modal');
  const OPEN_ICON = $('.js-icon');
  const ACTIVE_CLASS = 'active';

  TABS_LINK.each( function () { // eslint-disable-line
    const EL = $(this);

    EL.on('click', (e) => {
      e.preventDefault();
      TABS_LINK.removeClass(ACTIVE_CLASS);
      EL.toggleClass(ACTIVE_CLASS);
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest('.search__filter').length) {
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

  OPEN_ICON.each( function () { // eslint-disable-line
    const EL = $(this);
    const OPEN_GROUP = '.extra-search__checkbox-group';
    EL.on('click', (e) => {
      console.log('1');
      e.preventDefault();
      EL.next(OPEN_GROUP).slideToggle();
    });
  });
}