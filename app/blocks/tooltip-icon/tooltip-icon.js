import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  // Подсказки/Tooltips для знаков вопроса
  const $tooltips = $('.js-tooltip');
  const screenWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
  const position = (screenWidth() > 1024) ? 'left+40 center-8' : 'center bottom-40';

  if ($tooltips) {
    $tooltips.on({
      "click": function(e) {
        e.preventDefault();

        $(this).tooltip({
          show: {
            duration: 150
          },
          position: {
            my: position,
            using: function(position, feedback) {
              $(this).css(position);
              $("<div>")
                .addClass("arrow-left")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
            }
          },
        });
        $(this).tooltip("open");
      }
    });
  }
}
