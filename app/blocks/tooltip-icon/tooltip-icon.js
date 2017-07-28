// Версия тултипов на jUqery UI. Неаккуратно работает на айпаде, да и вообще.
import tippy from 'tippy.js';

export default () => {
  // Подсказки/Tooltips для знаков вопроса
  // const tooltips = document.querySelectorAll('.js-tooltip');
  const tooltips = document.querySelectorAll('.js-tooltip');
  const screenWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
  const tooltipPosition = (screenWidth() > 559) ? 'right' : 'top';

  console.log(screenWidth(), tooltipPosition);

  if (tooltips) {
    tippy('.js-tooltip', {
      position: tooltipPosition,
      offset: 20,
      animation: 'perspective',
      duration: 200,
      arrow: true,
      distance: 20,
      theme: 'light',
      size: 'big',
      arrowSize: 'big',
      inertia: true,
      // delay: [0, 0],
      popperOptions: {
        modifiers: {
          flip: {
            behavior: ['right', 'bottom']
          }
        }
      }
    });
  }
}


// Версия тултипов на jUqery UI. Неаккуратно работает на айпаде, да и вообще.
// import $ from 'jquery';
// import 'jquery-ui-bundle';

// export default () => {
//   // Подсказки/Tooltips для знаков вопроса
//   const $tooltips = $('.js-tooltip');
//   const screenWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
//   const position = (screenWidth() > 1024) ? 'left+40 center-8' : 'center bottom-40';

//   if ($tooltips) {
//     $tooltips.on({
//       "click": function(e) {
//         e.preventDefault();

//         $(this).tooltip({
//           show: {
//             duration: 150
//           },
//           position: {
//             my: position,
//             using: function(position, feedback) {
//               $(this).css(position);
//               $("<div>")
//                 .addClass("arrow-left")
//                 .addClass(feedback.vertical)
//                 .addClass(feedback.horizontal)
//                 .appendTo(this);
//             }
//           },
//         });
//         $(this).tooltip("open");
//       }
//     });
//   }
// }
