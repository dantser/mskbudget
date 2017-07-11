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