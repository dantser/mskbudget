import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const MORE_BTN = $('.button-more');
  const EXTRA_EVENTS = $('.search-page__contests .article-preview:nth-child(4)');
  MORE_BTN.on('click', function (e) {
    e.preventDefault();
    EXTRA_EVENTS.slideDown();
  })

}
