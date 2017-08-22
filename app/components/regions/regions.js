import $ from 'jquery';
import 'jquery.scrollbar';

export default () => {
  const ARR_RIGHT = $('.ar-right');
  const ARR_LEFT = $('.ar-left');
  const HIDE_COL = $('.js-hide-col');
  const SORT = $('.sort_desc');

  //ARR_RIGHT.on('click', (e) => {
  //  e.preventDefault();
  //  if ($('.d-smr__chart-col[data-char = death-rate]').is(':visible')) {
  //    return;
  //  }
  //  $('.d-smr__chart-col:visible[data-char]').css('display', 'none').next().css('display', 'table-cell');
  //});
  //ARR_LEFT.on('click', (e) => {
  //  e.preventDefault();
  //  if ($('.d-smr__chart-col:visible[data-char = revenue]').is(':visible')) {
  //    return;
  //  }
  //  $('.d-smr__chart-col:visible[data-char]').css('display', 'none').prev().css('display', 'table-cell');
  //});
  $('.d-smr__add-char-item').click(function(){
  var inputCount = $(this).parent().find('.d-smr__add-char-item input:checked').length,
      checkboxCount = $(this).siblings('.d-smr__add-char-item').length + 1;

  // console.log(inputCount + " " + checkboxCount);

  if (inputCount != checkboxCount) {
    $(this).parents('.d-smr__add-char-item').find('>input').prop('checked', false);
  } else {
    $(this).parents('.d-smr__add-char-item').find('>input').prop('checked', true);
  }
});
  SORT.each(function () {
    const EL = $(this);
    EL.on('click', (e) => {
      e.preventDefault();
      if ($(this).hasClass('alph')) {
        EL.toggleClass('sort_desc').toggleClass('sort_desc-top');
      } else {
        const ELTEXT = EL.text();
        EL.text(ELTEXT === 'По убыванию' ? 'По возрастанию' : 'По убыванию');
        EL.toggleClass('sort_desc').toggleClass('sort_desc-top');
      }
    })
  })

  $('#a').on('click', function() {
    const checkBoxes = $("input[name=a\\[\\]]");
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  })

  $(document).ready(function(){

    if ($('._regions').length) {

      const regionSlider = new Swiper('.d-smr__chart-wrapper', {
        slidesPerView: 3,
        nextButton: '._regions__ar-right',
        prevButton: '._regions__ar-left',
        wrapperClass: 'd-smr__chart',
        slideClass: 'd-smr__chart-col',
        resistanceRatio: 0.1,
        onSetTranslate: function(swiper, translate) {
          swiper.container.find('.d-smr__chart').css('transform', 'translate(' + translate + 'px, 0)');
        },
        onInit: function(swiper) {
          checkSlidesAmount(swiper);
        },
        onSlideChangeStart: function(swiper) {
          var firstActiveSlide = swiper.activeIndex + 1;
          var lastActiveSlide = swiper.activeIndex + swiper.params.slidesPerView;
          var slidesAmount = swiper.wrapper.find('.d-smr__chart-col.active').length;
          if (lastActiveSlide >= slidesAmount) {
            $('.d-smr__chart-rightlg').fadeOut(250);
            $('.d-smr__chart-leftlg').fadeIn(250);
          } else if (firstActiveSlide == 1) {
            $('.d-smr__chart-leftlg').fadeOut(250);
            $('.d-smr__chart-rightlg').fadeIn(250);
          } else {
            $('.d-smr__chart-rightlg').fadeIn(250);
            $('.d-smr__chart-leftlg').fadeIn(250);
          }
        },
        breakpoints: {
          1140: {
            slidesPerView: 2
          },
          880: {
            slidesPerView: 1
          }
        }
       });

      function checkSlidesAmount(swiper) {
        var slidesAmount = swiper.wrapper.find('.d-smr__chart-col.active').length;
        var visibleSlidesAmount = swiper.params.slidesPerView;
        if (slidesAmount > visibleSlidesAmount) {
          $('.d-smr__chart-rightlg').show();
        } else {
          $('.d-smr__chart-leftlg').hide();
          $('.d-smr__chart-rightlg').hide();
          $('._regions__ar-left, ._regions__ar-right').hide();
        }
        if (swiper.progress == 1) {
          $('.d-smr__chart-rightlg').hide();
        }
      }

      function checkChartHeaderHeight() {
        var largestHeight = 0;
        var chartHeaderHeight = 0;
        $('._regions .d-smr__chart-header').each(function(){
          chartHeaderHeight = $(this).outerHeight();
          if (chartHeaderHeight > largestHeight) {
            largestHeight = chartHeaderHeight;
          }
        });
        $('._regions .d-smr__chart-header').outerHeight(largestHeight);
        $('.d-smr__chart-col, .d-smr__chart-subjects').css('padding-top', largestHeight+'px');
      }

      checkChartHeaderHeight();

      $(window).on('scroll', function(){
        if ($('._regions').length) {
          var regionsScroll = $(window).scrollTop();
          var arrowTopDistance = $('._regions .d-smr__container_body').offset().top - $(window).height() / 4;
          var arrowBottomDistance = $('.footer').offset().top - $(window).height() / 1.3;
          var headerHeight = $('.header').height();
          var colHeadTopDistance = $('._regions .d-smr__chart-container').offset().top - headerHeight;
          var colHeadBottomDistance = $('.footer').offset().top - $(window).height() - 100;

          if (regionsScroll >= arrowTopDistance && regionsScroll <= arrowBottomDistance) {
            $('._regions__ar-left, ._regions__ar-right').addClass('active');
            $('.arrow-hide').addClass('active');
          } else {
            $('._regions__ar-left, ._regions__ar-right').removeClass('active');
            $('.arrow-hide').removeClass('active');
          }

          //if (regionsScroll >= colHeadTopDistance && regionsScroll <= colHeadBottomDistance) {
          //  $('._regions .d-smr__chart-header').css('top', (regionsScroll - colHeadTopDistance)+'px');
          //  $('._regions .d-smr__chart-header').addClass('active');
          //} else if (regionsScroll < colHeadTopDistance) {
          //  $('._regions .d-smr__chart-header').css('top', '0');
          //  $('._regions .d-smr__chart-header').removeClass('active');
          //}
        }
      });

      $(document).on('click', '.js-hide-col', function(e){
        e.preventDefault();
        $(this).parents('._regions .d-smr__chart-col').removeClass('active');
        regionSlider.update(true);
        checkSlidesAmount(regionSlider);
      });

      $(document).on('change', '.d-smr__add-char-item input', function(){
        if (this.checked) {
          $(this).next().next().find('input').prop('checked', true);
        } else {
          $(this).next().next().find('input').prop('checked', false);
        }
      });

      $('.d-smr__add-char-list-wrapper').scrollbar();

    }

  });

};
