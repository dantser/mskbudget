import $ from 'jquery';
// import slimScroll from 'slimscroll';

export default () => {
  const TABLINK = $('.grid__nav__item');

  TABLINK.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'grid__nav__item_active';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.toggleClass(ACTIVE_CLASS);
    });
  });


//   const scroll = $('#scroll');
//   if (!scroll) {
//     return;
//   }
// // eslint-disable-next-line no-unused-vars
//   scroll.slimScroll({
//     height: '546px',
//     color: '#0d46a1',
//   });
};
