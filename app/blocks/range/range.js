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
  function sliderForWidgets(id, start, min, max) {
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
    }
  }

  sliderForWidgets('widget_card_calc1', 200.4, 0, 400.8);
  sliderForWidgets('widget_card_calc2', 195.4, 20, 500);
  sliderForWidgets('widget_card_calc3', 150, 300, 600);
  sliderForWidgets('widget_card_calc4', 100, 2, 200);
  // для страницы Сервисы - сводная

}
