import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  // Подсказки/Tooltips для знаков вопроса
  const $tooltips = $('.js-tooltip');

  if ($tooltips) {
    $tooltips.on({
      "click": function(e) {
        e.preventDefault();

        $(this).tooltip({
          show: {
            // effect: "transfer",
            duration: 150
          },
          position: {
            my: "left+40 center-8",
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
      ,"mouseout": function() {
        $(this).tooltip("close");
      }
    });
  }
}
