$(document).ready(function() {
  // Диаграммы на главной
  diagram('#diagram-1', {
    stroke: 30,
    kind: 'triple',
    data: [1446.2, 1597.2],
    animate: true,
    maxValue: 2070,
  });
  diagram('#diagram-2', {
    stroke: 30,
    kind: 'triple',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050,
  });
  diagram('#diagram-3', {
    stroke: 30,
    kind: 'triple',
    data: [1446.2, 1598.9],
    animate: true,
    maxValue: 2050,
  });
  diagram('#diagram-4', {
    viewBox: 390,
    stroke: 60,
    kind: 'ifinite',
    data: [1921.7],
    gradient: ['#008ADF', '#00E6F9'],
    valClass: ['large-diagram__value-lightblue', 'large-diagram__value-blue'],
    maxValue: 1665.5,
    animate: true,
  });
  diagram('#diagram-5', {
    viewBox: 390,
    stroke: 60,
    kind: 'ifinite',
    data: [1364.5],
    gradient: ['#9D308A', '#ED5F64'],
    valClass: ['large-diagram__value-pink', 'large-diagram__value-violet'],
    maxValue: 1865.5,
    animate: true,
  });


  // $('.slider').slick('unslick');
  // $('.slider').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   dots: false,
  //   draggable: false,
  //   swipe: false,
  //   sliderId: 'one-section',
  // });

  // $('.slick-cloned .diagram-value').each(function() {
  //   $(this).html($(this).attr('data-value'));
  // });
  // $('.slick-cloned .anim-diagram').attr('stroke-dashoffset', 0);

  // /*change diagrams Ahead*/
  // if ($(window).width() < 900) {
  //   $('.cube').on('cubeChanged', function(cube, id, currentSlide) {
  //     if (id == 'diagrams') {
  //       switch (currentSlide) {
  //         case '0':
  //         case '1':
  //         case '2':
  //           $('#diagrams-ahead-1').slideDown(321);
  //           $('#diagrams-ahead-2').slideUp(321);
  //           break;
  //         case '3':
  //         case '4':
  //           $('#diagrams-ahead-2').slideDown(321);
  //           $('#diagrams-ahead-1').slideUp(321);
  //           break;
  //       }
  //     }
  //   });
  // }
});
