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

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
  {
      //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
  }

  //alert(msie);

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
