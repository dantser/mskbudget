import $ from 'jquery';

export default () => {
  var winW = $(window).width(),
  winH = $(window).height();

  /*Menu*/
  $('.header__open-menu').click(function() {

      var _ = $(this);

      if ( !_.hasClass('act') ) {

          $('.header__drop').fadeIn(321);
          _.addClass('act');
          $('.header').addClass('header_opened');
          $('.sections, .guide').addClass('filter_blur');

      } else {

          $('.header__drop').fadeOut(321);
          _.removeClass('act');
          $('.header').removeClass('header_opened');
          $('.sections, .guide').removeClass('filter_blur');

      }

      return false;
  });

  if (winW > 700 && !$('.sections').hasClass('sections_fs')) {
      $(window).scroll(function() {
          var scr = $(this).scrollTop();
          if (scr > 21) {
              $('.header').addClass('header_short');
          } else {
              $('.header').removeClass('header_short');
          }
      });
  }

  $('.menu__sub-menu').each(function() {
      var offset = $(this).parent().offset().left;
      $(this).css({width: winW, marginLeft: -offset});
      $(this).find('.menu__sub-menu-ul').width($('.menu').width());
  });


  if (winW > 1101) {

      $('.menu__item').mouseenter(function() {
          if( $(this).find('.menu__sub-menu').length > 0 ){
              var offsetY = $(this).closest('.menu').position().top;
              var heightM = $(this).find('.menu__sub-menu').innerHeight();
              $('.header').css('height', offsetY+heightM+30);
              console.log(offsetY);
          }
      });

      $('.menu__item').mouseleave(function() {
          $('.header').css('height', '');
      });
  }
}
