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
  
  
  
  if ($('.depfin-services-social-support').length) {
    var mainContainer = '.depfin-services-social-support__main',
        startList = '.depfin-services-social-support__list_simple-container',
        startLink = '.depfin-services-social-support__list_simple-container .depfin-services-social-support__item-link',
        navSlider = '.depfin-services-social-support__cards-slider-container',
        navLink = '.depfin-services-social-support__cards-slider .depfin-services-social-support__item-link',
        cardsHeading = '.depfin-services-social-support__tab',
        cardsList = '.depfin-services-social-support__submenu-wrapper',
        cardLink = '.depfin-services-social-support__submenu-link',
        article = '.depfin-services-social-support__article',
        articleContent = '.depfin-services-social-support__content',
        burgerList = '.depfin-services-social-support__burger-list',
        burgerLink = '.depfin-services-social-support__burger-link';
    
    // Анимация появления
    function animFadeOn(el) {
      setTimeout(function(){
        $(el).addClass('load-anim-fade_on');
      }, $(el).data('delay'));
    }
    
    // Переход со стартовой в подкатегории
    $(document).on('click', startLink, function(e){
      e.preventDefault();
      var category = $(this).parent().data('category');
      
      $(startList).removeClass('active');
      
      $(navSlider).addClass('load-anim-fade active');
      $(navSlider).find('[data-category="'+category+'"]').addClass('active');
      var itemOffset = $(navSlider).find('[data-category].active').offset().left - $(navSlider).offset().left;
      $(navSlider).find('.scroll-content').scrollLeft(itemOffset);
      animFadeOn(navSlider);
      
      $(cardsHeading).addClass('load-anim-fade active');
      $(cardsHeading).find('[data-category="'+category+'"]').addClass('active');
      animFadeOn(cardsHeading);
      
      $(cardsList).addClass('load-anim-fade active');
      $(cardsList).find('[data-category="'+category+'"]').addClass('active');
      animFadeOn(cardsList);
      
      var pageHeaderOffset = $('.page-header').offset().top;
      $('html, body').scrollTop(pageHeaderOffset);
    });
    
    // Переключение подкатегорий
    $(document).on('click', navLink, function(e){
      e.preventDefault();
      var category = $(this).parent().data('category');
      
      $(navSlider).find('[data-category]').removeClass('active');
      $(navSlider).find('[data-category="'+category+'"]').addClass('active');
      
      $(cardsHeading).find('[data-category]').removeClass('active');
      $(cardsHeading).find('[data-category="'+category+'"]').addClass('active');
      
      if (!$(cardsList).hasClass('active')) {
        $(cardsList).addClass('load-anim-fade active');
        animFadeOn(cardsList);
      }
      $(cardsList).find('[data-category]').removeClass('active');
      $(cardsList).find('[data-category="'+category+'"]').addClass('active');
      
      $(article).removeClass('load-anim-fade_on active');
      $(articleContent).removeClass('active');
      $(burgerList).find('[data-category]').removeClass('active');
      if ($(burgerMenu).hasClass('active')) {
        $(burgerCol).removeClass(activeClass);
        $(burgerMenu).fadeOut('321').removeClass(activeClass);
      }
      
      $(mainContainer).css('padding-bottom', '');
    });
    
    // Переход по карточке
    $(document).on('click', cardLink, function(e){
      e.preventDefault();
      var category = $(this).parent().data('category');
      var subcategory = $(this).parent().data('subcategory');
      
      $(cardsList).removeClass('load-anim-fade_on active');
      
      $(article).addClass('load-anim-fade active');
      animFadeOn(article);
      
      $(articleContent+'[data-category="'+category+'"][data-subcategory="'+subcategory+'"]').addClass('active');
      $(burgerList).find('[data-category="'+category+'"]').addClass('active');
      $(burgerList).find('[data-category="'+category+'"][data-subcategory="'+subcategory+'"] '+burgerLink).addClass('active');
      
      var articleHeight = $(article).outerHeight();
      var menuHeight = $(burgerMenu).outerHeight();
      if (menuHeight > articleHeight) {
        var heightDiff = menuHeight - articleHeight;
        $(mainContainer).css('padding-bottom', heightDiff+'px');
      }
      
      var sliderOffset = $(navSlider).offset().top;
      $('html, body').scrollTop(sliderOffset);
    });
    
    // Переключение раскрытых карточек
    $(document).on('click', burgerLink, function(e){
      e.preventDefault();
      var category = $(this).parent().data('category');
      var subcategory = $(this).parent().data('subcategory');
      
      $(burgerList).find(burgerLink).removeClass('active');
      $(this).addClass('active');
      $(burgerCol).removeClass(activeClass);
      $(burgerMenu).fadeOut('321').removeClass(activeClass);
      
      $(articleContent).removeClass('active');
      $(articleContent+'[data-category="'+category+'"][data-subcategory="'+subcategory+'"]').addClass('active');
      
      var articleHeight = $(article).outerHeight();
      var menuHeight = $(burgerMenu).outerHeight();
      if (menuHeight > articleHeight) {
        var heightDiff = menuHeight - articleHeight;
        $(mainContainer).css('padding-bottom', heightDiff+'px');
      }
    });
  }
}
