//import $ from 'jquery';
//import 'jquery-ui-bundle';
// @DEBUG
//import 'jquery-ui-touch-punch';

const $ = window.$;
const slider = window.slider;

export default () => {
  $('.range-ui').each(function() {
    const $this = $(this);
    const $slider = $this.find('.range-ui__slider');
    const $line = $this.find('.range-ui__line');
    const $input = $this.find('.range-ui__input');
    const $tooltip = $this.find('.range-ui__tooltip');
    const data = $.parseJSON($slider.attr('data-slider'));
    const optimal = parseFloat(data.optimal);
    const changeTo = parseFloat(data.changeTo) || optimal; // сдвинуть бегунок
    const min = parseFloat(data.min);
    const max = parseFloat(data.max);
    const step = parseFloat(data.step);
    const factor = 1 / (max - min) * 100;
    const type = data.type;
    const $minCell = $this.find('.range-ui__min-value');
    const $maxCell = $this.find('.range-ui__max-value');
    const $refresh = $this.find('.range-ui__refresh');
    const value = parseFloat($input.val());

    function setValue(event, ui) {
      let value = 0;

      if (!$.isNumeric(ui.value)) {
        value = optimal;
      } else {
        value = ui.value;
      }

      const isOptimal = ui.value >= optimal;

      if (isOptimal) {
        $this.addClass('positive').removeClass('negative');

        $line.css({
          'right': 'auto',
          'left': (optimal - min) * factor + '%',
          'width': (value - optimal) * factor + '%'
        });
      } else {
        $this.addClass('negative').removeClass('positive');

        $line.css({
          'left': 'auto',
          'right': (max - optimal) * factor + '%',
          'width': (optimal - value) * factor + '%'
        });
      };

      $input.val(value.toLocaleString('ru-RU', { maximumFractionDigits: 4, minimumFractionDigits: 1 }));
    };

    $slider.slider({
      min: min,
      max: max,
      step: step || 0.1,
      value: optimal || 0,
      create: function(event, ui) {
        const $handle = $this.find('.ui-slider-handle');
        $tooltip.appendTo($handle);
        $input.val(optimal);
        $minCell.text(min.toLocaleString('ru-RU') + ' ' + type).attr('title', min.toLocaleString('ru-RU') + ' ' + type);
        $maxCell.text(max.toLocaleString('ru-RU') + ' ' + type).attr('title', max.toLocaleString('ru-RU') + ' ' + type);

        // @DEBUG
        //$handle.draggable();
      },
      slide: function(event, ui) {
        setValue(event, ui);
      },
      change: function(event, ui) {
        setValue(event, ui);
      },
    });

    // сдвинуть бегунок
    $slider.slider('value', changeTo);

    $refresh.on('click', e => {
      e.preventDefault();
      $slider.slider('value', optimal);
      $this.removeClass('positive', 'negative');
    });

    $input.on('change', () => {
      const currentValue = $slider.slider('value');
      const valueWithCorrectFloat = $input.val().replace(',','.');
      const newValue = parseFloat(valueWithCorrectFloat);

      if (newValue >= min && newValue <= max) {
        $slider.slider('value', newValue);
      } else {
        $slider.slider('value', currentValue);
      }
      
      $input.blur();
    });
  });

  //$('.range-ui .ui-slider-handle').draggable();
}
