import noUiSlider from 'nouislider';

export default function range() {
  var slider = document.getElementById('slider');

  if (slider) {
    noUiSlider.create(slider, {
      start: [ 30 ],
      range: {
        'min': 20,
        'max': 80
      },
      // connect: [false, true],
      tooltips: [true],
      pips: {
        mode: 'values',
        values: [20, 80],
        density: 4
      }
    });
  }
}
