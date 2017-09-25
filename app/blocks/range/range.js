import noUiSlider from 'nouislider';

export default () => {
  function sliderForWidgets(id, valueid, start, min, max) {
    const sliderForWidgets = document.getElementById(id);

    if (sliderForWidgets) {
      noUiSlider.create(sliderForWidgets, {
        start: start,
        tooltips: true,
        behaviour: 'drag',
        // format: wNumb({ decimals: 1 }),
        range: {
          'min': min,
          'max': max
        }
      });

      var rangeSliderValueElement = document.getElementById(valueid);

      sliderForWidgets.noUiSlider.on('update', function(values, handle) {
        rangeSliderValueElement.innerHTML = values[handle];
      });
    }
  }

  // Для виджетов
  if ($('.wrapper_main').length) {
    setTimeout(function(){
      sliderForWidgets('widget_card_calc1', 'opt1Value', 200.4, 0, 400.8);
      sliderForWidgets('widget_card_calc2', 'opt2Value', 195.4, 20, 500);
      sliderForWidgets('widget_card_calc3', 'opt3Value', 150, 300, 600);
      sliderForWidgets('widget_card_calc4', 'opt4Value', 100, 2, 200);
    }, 1000);
  } else {
    sliderForWidgets('widget_card_calc1', 'opt1Value', 200.4, 0, 400.8);
    sliderForWidgets('widget_card_calc2', 'opt2Value', 195.4, 20, 500);
    sliderForWidgets('widget_card_calc3', 'opt3Value', 150, 300, 600);
    sliderForWidgets('widget_card_calc4', 'opt4Value', 100, 2, 200);
  }
}
