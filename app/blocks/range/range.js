import noUiSlider from 'nouislider';

export default function range() {
  const sliders = Array.from(document.querySelectorAll('.js-range-slider'));

  if (sliders) {
    sliders.forEach(function(slider) {
      noUiSlider.create(document.getElementById(slider.getAttribute('id')), {
        start: [ 33 ],
        range: {
          'min': 0,
          'max': 100
        },
        // connect: [false, true],
        // tooltips: [true],
        // pips: {
        //   mode: 'values',
        //   values: [20, 80],
        //   density: 4
        // }
      });
    });
  }
  function sliderForWidgets(id, valueid, start, min, max) {
    const sliderForWidgets = document.getElementById(id);
    if(sliderForWidgets) {
      noUiSlider.create(sliderForWidgets, {
        start: start,
        tooltips: true,
        // format: wNumb({ decimals: 1 }),
        range: {
          'min': min,
          'max': max
        }
      });

      var rangeSliderValueElement = document.getElementById(valueid);

    sliderForWidgets.noUiSlider.on('update', function( values, handle ) {
    	rangeSliderValueElement.innerHTML = values[handle];
    });
    }
  }

  sliderForWidgets('widget_card_calc1', 'opt1Value', 200.4, 0, 400.8);
  sliderForWidgets('widget_card_calc2', 'opt2Value', 195.4, 20, 500);
  sliderForWidgets('widget_card_calc3', 'opt3Value', 150, 300, 600);
  sliderForWidgets('widget_card_calc4', 'opt4Value', 100, 2, 200);
  // для страницы Сервисы - сводная

}
