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

  // для страницы Сервисы - сводная
  const sliderForWidgets = document.getElementById('widget_card_calc');

  if(sliderForWidgets) {
    noUiSlider.create(sliderForWidgets, {
      start: 200.4,
      tooltips: true,
      // format: wNumb({ decimals: 1 }),
      range: {
        'min': 0,
        'max': 400.8
      }
    });
  }
}
