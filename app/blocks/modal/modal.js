import vex from 'vex-js/dist/js/vex.combined.js';

// модальные окна на базе vex
// https://github.com/HubSpot/vex
export default function() {
  const modals = Array.from(document.querySelectorAll('[data-show-vex-modal]'));

  if (typeof(vex) && modals.length) {
    vex.defaultOptions.className = "vex-theme-default";

    modals.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        vex.dialog.confirm({
          message: 'Are you absolutely sure you want to destroy the alien planet?',
          callback: function (value) {
            if (value) {
              console.log('Successfully destroyed the planet.')
            } else {
              console.log('Chicken.')
            }
          }
        });
      });
    });
  }
}
