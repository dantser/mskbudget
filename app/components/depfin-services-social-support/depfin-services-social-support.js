import $ from 'jquery';
import 'jquery.scrollbar';

export default () => {

  // //////////////////
  // Задаем отступы для блока с категориями
  function socialPageCenter() {
    var container = ".depfin-services-social-support_main",
        elem = ".depfin-services-social-support__list",
        topPos, bottomPos, padding;

    if ( $(container).length > 0 && $(elem).length > 0 ) {
      topPos = $(elem).position(container).top;
      bottomPos = $(container).outerHeight() - 60 - $(elem).height() - topPos;
      padding = (bottomPos / 2);

      $(elem).css({
        paddingTop: padding,
        paddingBottom: padding
      });
    }
  }

  socialPageCenter();

  // //////////////////
  // Кастомный скроллбар
  var cardsSlider = '.nav-cards-slider';

  if ( $(cardsSlider).length > 0 ) {
    $(cardsSlider).scrollbar();

    setTimeout(function(){
      $(document).find(cardsSlider).not('.scroll-content').removeClass('js-drag-scroll-element');
    }, 1000);
  }

  // //////////////////
  // Кнопка бургер-меню
  var burgerButton = '.depfin-services-social-support__burger-button',
      burgerCol = '.depfin-services-social-support__burger',
      activeClass = 'active',
      burgerMenu = '.depfin-services-social-support__burger-menu';

  if ( $(burgerButton).length > 0 ) {

    function showBurger() {
      $(burgerCol).addClass(activeClass);
      $(burgerMenu).fadeIn('321').addClass(activeClass);
    }

    function hideBurger() {
      $(burgerCol).removeClass(activeClass);
      $(burgerMenu).fadeOut('321').removeClass(activeClass);
    }

    function toggleBurger() {
      if ( !$(burgerMenu).hasClass(activeClass) ) {
        showBurger();
      } else {
        hideBurger();
      }
    }

    $(document).on('click', burgerButton, toggleBurger);
  }

  //
  // Аккордеон
  var accordeonButton = '.depfin-services-social-support__type-label .link',
      accordeonBlock = '.depfin-services-social-support__type',
      accordeonActiveClass = 'depfin-services-social-support__type_active',
      accordeonClose = '.depfin-services-social-support__type-label-close',
      accordeonContent = '.depfin-services-social-support__type-description',
      accordeonOnlyClass = 'depfin-services-social-support__type_only';

  $(document).on('click', accordeonButton, function(e){
    e.preventDefault();
    if ( !$(this).parents(accordeonBlock).hasClass(accordeonOnlyClass) ) {
      $(this).parents(accordeonBlock).addClass(accordeonActiveClass).find(accordeonContent).slideDown();
      $(this).parents(accordeonBlock).siblings(accordeonBlock + "." + accordeonActiveClass).removeClass(accordeonActiveClass).find(accordeonContent).slideUp();
    }
  });

  $(document).on('click', accordeonClose, function(e){
    e.preventDefault();
    $(this).parents(accordeonBlock).removeClass(accordeonActiveClass).find(accordeonContent).slideUp();
  });

  if ( $(accordeonBlock).length > 0 ) {
    if ( $(accordeonBlock).length === 1 ) {
      $(accordeonBlock).addClass(accordeonOnlyClass);
    } else {
      $('.' + accordeonActiveClass).find(accordeonContent).css('display', 'block');
    }
  }
}
