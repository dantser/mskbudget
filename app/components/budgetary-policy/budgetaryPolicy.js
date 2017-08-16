import $ from 'jquery';
import 'jquery.scrollbar';

export default () => {

  $(document).ready(function(){
    
    if ($('.d-slide__body-wrapper').length) {
      checkListHeight();
    }
    
    // Custom scrollbar
    if ($(window).width() > 640) {
      $('.d-slide__body-wrapper').scrollbar();
    }
    
  });
  
  // Кнопка "Читать далее"
  $(document).on('click', '.d-slide__more', function(e){
    e.preventDefault();
    $(this).prev().addClass('active');
    $(this).addClass('active');
  });
  
  function checkListHeight() {
    $('.d-slide__body-wrapper').each(function(){
      var wrapperHeight = $(this).outerHeight();
      var listHeight = $(this).children().outerHeight();
      if (listHeight <= wrapperHeight) {
        $(this).next().addClass('active');
      }
    });
  }

  // Добавляем стрелочки для IE
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if ( msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
    var ieVersion = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    if (ieVersion === 9) {
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
  }

}
