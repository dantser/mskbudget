import $ from 'jquery';

export default () => {

  $(document).ready(function(){

    checkListHeight();

    $('.mobile-carousel .d-slide__more').each(function(){
      $(this).on('click', function(){
        $(this).prev().addClass('active');
        $(this).addClass('active');
      });
    });
  });

  // Добавляем стрелочки для IE
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if ( msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
    $(document).ready(function(){
      setTimeout(function(){
        var arrows = '<div class="ie-arrows"><span class="ie-arrow ie-arrow_left"></span><span class="ie-arrow ie-arrow_right"></span></div>';
        $(document).find('.carousel-3d-container').append(arrows);
        $(document).find('.ie-arrows').width( $(document).find('.carousel-3d-slider').outerWidth() );

        $(document).on('click', '.ie-arrow_right', function(){
          if ( $(document).find('.carousel-3d-slide.current + .carousel-3d-slide').length > 0 ) {
            $(document).find('.carousel-3d-slide.current + .carousel-3d-slide')[0].click();
          } else {
            $(document).find('.carousel-3d-slide:eq(0)')[0].click();
          }
        });

        $(document).on('click', '.ie-arrow_left', function(){
          if ( $(document).find('.carousel-3d-slide.current').prev('.carousel-3d-slide').length > 0 ) {
            $(document).find('.carousel-3d-slide.current').prev('.carousel-3d-slide')[0].click();
          } else {
            $(document).find('.carousel-3d-slide:last')[0].click();
          }
        });
      }, 1000);
    });
  }

  function checkListHeight() {
    $('.mobile-carousel .d-slide__body_list').each(function(){
      var listHeight = 0;
      var heightRule = $(this).outerHeight();
      $(this).children().each(function(){
        var elHeight = $(this).outerHeight();
        listHeight += elHeight;
      });
      if (listHeight < heightRule) {
        $(this).next().addClass('active');
      }
    });
  }
}
