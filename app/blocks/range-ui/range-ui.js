import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  $('.range-ui').each(function() {
    const $this = $(this);
    const $slider = $this.find('.range-ui__slider');
    const $line = $this.find('.range-ui__line');
    const $input = $this.find('.range-ui__input');
    const data = $.parseJSON($slider.attr('data-slider'));
    const optimal = parseFloat(data.optimal);
    const min = parseFloat(data.min);
    const max = parseFloat(data.max);
    const step = parseFloat(data.step);
    const factor = 1 / (max - min) * 100;
    const type = data.type;
    const $minCell = $this.find('.range-ui__min-value');
    const $maxCell = $this.find('.range-ui__max-value');
    const $refresh = $this.find('.range-ui__refresh');
    const value = parseFloat($input.val());
    const $handle = $this.find('.ui-slider-handle');
    const $was = $this.find('.range-ui__before-value-input');
    const $was_old_value = $input.val();
    const $innerMark = $('<input class="range-ui__input"></input>').appendTo($handle);

    function setValue(event, ui) {
      let value = 0;
      if (!$.isNumeric(ui.value)) {
        value = optimal;
      } else {
        value = ui.value;
      }

      const isOptimal = ui.value >= optimal;

      if (isOptimal) {
        $this
          .addClass('.range-ui__slider_pos')
          .removeClass('.range-ui__slider_neg');

        $line.css({
          'right': 'auto',
          'left': (optimal - min) * factor + '%',
          'width': (value - optimal) * factor + '%'
        });
      } else {
        $this
          .addClass('.range-ui__slider_neg')
          .removeClass('.range-ui__slider_pos');

        $line.css({
          'left': 'auto',
          'right': (max - optimal) * factor + '%',
          'width': (optimal - value) * factor + '%'
        });
      };

      $innerMark.val(value.toLocaleString('ru-RU', { maximumFractionDigits: 4, minimumFractionDigits: 1 }) /*+ ' ' + type*/ );
      $innerMark.css('margin-left', -$innerMark.width() / 2);
    };

    $slider.slider({
      min: min,
      max: max,
      step: step || 0.1,
      value: optimal || 0,
      create: function(event, ui) {
        $minCell.text(min.toLocaleString('ru-RU') + ' ' + type);
        $maxCell.text(max.toLocaleString('ru-RU') + ' ' + type);
      },
      change: function(event, ui) {
        setValue(event, ui);
      }
    });
  });
}


// $(this).slider({
//   create: function(event, ui) {
//     const $e = $(this);
//     const $refresh = $e.closest('.range-ui').find('.range-ui__refresh');
//     const $input = $e.closest('.range-ui').find('.range-ui__input');
//     const value = parseFloat($input.val());
//     const $line = $e.find('.range-ui__line');
//     const $handle = $e.find('.ui-slider-handle');
//     const $was = $e.closest('.range-ui').find('.range-ui__before-value-input');
//     const $was_old_value = $input.val();

//     $e.slider('value', value);

//     $was.hide();

//     $input.attr('data-old-value', $was_old_value);

//     $refresh.click(event => {
//       event.preventDefault();
//       $e.slider('value', 0);
//     });

//     $input.keyup(function() {
//       const value = parseFloat($input.val());

//       if (value <= $e.slider('option', 'max') && value >= $e.slider('option', 'min')) {
//         $e.slider('value', value);
//       }
//     });
//   },
//   change: function(event, ui) {
//     const $e = $(this)
//     const $line = $e.find('.range-ui__line')
//     const $handle = $e.find('.ui-slider-handle')
//     const positionLeft = $handle.position().left
//     const $input = $e.closest('.range-ui').find('range-ui__input')
//     const $was = $e.closest('.range-ui').find('.range-ui__before-value-input')
//     const $was_value = $was.find('.bvi_text');

//     if (positionLeft >= $e.innerWidth() / 2 + $handle.outerWidth() / 2) {
//       $line.addClass('good').removeClass('bad').css({
//         'width': positionLeft - $e.innerWidth() / 2
//       });
//     } else {
//       $line.removeClass('good').addClass('bad').css({
//         'width': $e.innerWidth() / 2 - positionLeft
//       });
//     }

//     $was.fadeIn();
//     $was_value.text($input.attr('data-old-value'));

//     $input.val(ui.value)
//   },
//   slide: function(event, ui) {
//     const $e = $(this);
//     const $line = $e.find('.range-ui__line');
//     const $handle = $e.find('.ui-slider-handle');
//     const positionLeft = $handle.position().left;

//     $(this).closest('.range-ui').find('range-ui__input').val(ui.value);
//     if (positionLeft >= $e.innerWidth() / 2 + $handle.outerWidth() / 2) {
//       $line.addClass('good').removeClass('bad').css({ 'width': positionLeft - $e.innerWidth() / 2 });
//     } else {
//       $line.removeClass('good').addClass('bad').css({ 'width': $e.innerWidth() / 2 - positionLeft });
//     }
//   }
// });
