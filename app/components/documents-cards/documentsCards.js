import $ from 'jquery';

export default function documentsCards() {
  
  if ($('.document').length || $('.directory').length) {
    
    var isAdded = '.document__is-added';
    
    // Добавить в избранное
    $(document).on('click', isAdded, function(e){
      e.preventDefault();
      $(this).find('.favor').toggleClass('favor_added favor_stroke-color-blue');
    });    
    
    
    // Мобильные устройства
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };
    
    if (isMobile.any()) {
      
      $(document).on('click', '.document__dwnl-wrapper', function(e){
        
        e.stopPropagation();
        $('.document__dwnl-list').removeClass('opened').css('height', '');
        var dwnList = $(this).find('.document__dwnl-list');
        
        dwnList.each(function(){
          var itemLength = $(this).children().length;
          $(this).addClass('opened').css('height', (itemLength * 100) + '%');
        });
        
      });
      
      $(document).on('click', '.document__dwnl', function(e){
        if (!$(this).parents('.document__dwnl-wrapper').find('.document__dwnl-list.opened').length) {
          e.preventDefault();
        }
      });
      
      $(document).on('click', function(){
        $('.document__dwnl-list').removeClass('opened').css('height', '');
      });
      
    } else {
      
      $(document).on('mouseenter', '.document__dwnl-wrapper', function(){
        var dwnList = $(this).find('.document__dwnl-list');
        
        dwnList.each(function(){
          var itemLength = $(this).children().length;
          $(this).css('height', (itemLength * 100) + '%');
        });
        
      });
      
      $(document).on('mouseleave', '.document__dwnl-wrapper', function(){
        var dwnList = $(this).find('.document__dwnl-list');
        dwnList.css('height', '');
      });
    }
    
  }
  
}
