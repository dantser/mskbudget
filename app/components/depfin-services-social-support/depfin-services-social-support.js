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
  
  
  
  if ($('.depfin-services-social-support').length) {
    var mainContainer = '.depfin-services-social-support__main',
        startList = '.depfin-services-social-support__list_simple-container',
        startListItem = '.depfin-services-social-support__list_simple-container .depfin-services-social-support__item',
        startLink = '.depfin-services-social-support__list_simple-container .depfin-services-social-support__item-link',
        startSublink = '.depfin-services-social-support__list_simple-container .depfin-services-social-support__subitem-link',
        navSlider = '.depfin-services-social-support__cards-slider-container',
        navLink = '.depfin-services-social-support__cards-slider .depfin-services-social-support__item-link',
        navSublink = '.depfin-services-social-support__cards-slider .depfin-services-social-support__subitem-link',
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
    function moveToCategory(cat, subcat) {
      $(startList).removeClass('active');
      
      $(navSlider).addClass('load-anim-fade active');
      $(navSlider).find('[data-category="'+cat+'"]').addClass('active');
      var itemOffset = $(navSlider).find('[data-category="'+cat+'"]').offset().left - $(navSlider).offset().left;
      $(navSlider).find('.scroll-content').scrollLeft(itemOffset);
      animFadeOn(navSlider);
      
      $(cardsHeading).addClass('load-anim-fade active');
      if (subcat) {
        $(cardsHeading).find('[data-category="'+cat+'"][data-subcategory="'+subcat+'"]').addClass('active');
      } else {
        $(cardsHeading).find('[data-category="'+cat+'"]').addClass('active');
      }
      animFadeOn(cardsHeading);
      
      $(cardsList).addClass('load-anim-fade active');
      if (subcat) {
        $(cardsList).find('[data-category="'+cat+'"][data-subcategory="'+subcat+'"]').addClass('active');
      } else {
        $(cardsList).find('[data-category="'+cat+'"]').addClass('active');
      }
      animFadeOn(cardsList);
      
      var pageHeaderOffset = $('.page-header').offset().top;
      $('html, body').scrollTop(pageHeaderOffset);
    }
    
    // Переключение подкатегорий
    function changeCategory(cat, subcat) {
      $(navSlider).find('[data-category]').removeClass('active');
      $(navSlider).find('[data-category="'+cat+'"]').addClass('active');
      
      $(cardsHeading).find('[data-category]').removeClass('active');
      $(cardsHeading).find('[data-subcategory]').removeClass('active');
      if (subcat) {
        $(cardsHeading).find('[data-category="'+cat+'"][data-subcategory="'+subcat+'"]').addClass('active');
      } else {
        $(cardsHeading).find('[data-category="'+cat+'"]').addClass('active');
      }
      
      if (!$(cardsList).hasClass('active')) {
        $(cardsList).addClass('load-anim-fade active');
        animFadeOn(cardsList);
      }
      $(cardsList).find('[data-category]').removeClass('active');
      if (subcat) {
        $(cardsList).find('[data-category="'+cat+'"][data-subcategory="'+subcat+'"]').addClass('active');
      } else {
        $(cardsList).find('[data-category="'+cat+'"]').addClass('active');
      }
      
      $(article).removeClass('load-anim-fade_on active');
      $(articleContent).removeClass('active');
      $(burgerList).find('[data-category]').removeClass('active');
      if ($(burgerMenu).hasClass('active')) {
        $(burgerCol).removeClass(activeClass);
        $(burgerMenu).fadeOut('321').removeClass(activeClass);
      }
      
      $(mainContainer).css('padding-bottom', '');
    }
    
    // Сброс класса для перехода в подкатегории
    $(document).on('click', 'html, body', function(e){
      $(startLink).removeClass('mobile-active');
    });
    
    // Переход со стартовой в подкатегории
    $(document).on('click', startLink, function(e){
      e.preventDefault();
      e.stopPropagation();
      
      if (isMobile.any()) {
        if ($(this).hasClass('mobile-active')) {
          var category = $(this).parent().data('category');
          if ($(this).next()) {
            var subcategory = $(this).next().children().first().data('subcategory');
            moveToCategory(category, subcategory);
          } else {
            moveToCategory(category);
          }
        } else {
          $(startLink).removeClass('mobile-active');
          $(this).addClass('mobile-active');
        }
      } else {
        var category = $(this).parent().data('category');
        if ($(this).next()) {
          var subcategory = $(this).next().children().first().data('subcategory');
          moveToCategory(category, subcategory);
        } else {
          moveToCategory(category);
        }
      }
    });
    
    $(document).on('click', startSublink, function(e){
      e.preventDefault();
      var category = $(this).parent().parent().parent().data('category');
      var subcategory = $(this).parent().data('subcategory');
      moveToCategory(category, subcategory);
    });
    
    // Переключение подкатегорий
    $(document).on('click', navLink, function(e){
      e.preventDefault();
      var category = $(this).parent().data('category');
      if ($(this).next()) {
        var subcategory = $(this).next().children().first().data('subcategory');
        changeCategory(category, subcategory);
      } else {
        changeCategory(category);
      }
    });
    
    $(document).on('click', navSublink, function(e){
      e.preventDefault();
      var category = $(this).parent().parent().parent().data('category');
      var subcategory = $(this).parent().data('subcategory');
      changeCategory(category, subcategory);
    });
    
    // Переход по карточке
    $(document).on('click', cardLink, function(e){
      e.preventDefault();
      var category = $(this).parent().data('category');
      var type = $(this).parent().data('type');
      if ($(cardsHeading).find('[data-subcategory]').hasClass('active')) {
        var subcategory = $(cardsHeading).find('[data-subcategory].active').data('subcategory');
      }
      
      $(cardsList).removeClass('load-anim-fade_on active');
      
      $(article).addClass('load-anim-fade active');
      animFadeOn(article);
      
      if (subcategory) {
        $(articleContent+'[data-category="'+category+'"][data-type="'+type+'"][data-subcategory="'+subcategory+'"]').addClass('active');
        $(burgerList).find('[data-category="'+category+'"][data-subcategory="'+subcategory+'"]').addClass('active');
        $(burgerList).find('[data-category="'+category+'"][data-type="'+type+'"][data-subcategory="'+subcategory+'"] '+burgerLink).addClass('active');
      } else {
        $(articleContent+'[data-category="'+category+'"][data-type="'+type+'"]').addClass('active');
        $(burgerList).find('[data-category="'+category+'"]').addClass('active');
        $(burgerList).find('[data-category="'+category+'"][data-type="'+type+'"] '+burgerLink).addClass('active');
      }
      
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
      var type = $(this).parent().data('type');
      if ($(this).parent().data('subcategory')) {
        var subcategory = $(this).parent().data('subcategory');
      }
      
      $(burgerList).find(burgerLink).removeClass('active');
      $(this).addClass('active');
      $(burgerCol).removeClass(activeClass);
      $(burgerMenu).fadeOut('321').removeClass(activeClass);
      
      $(articleContent).removeClass('active');
      if (subcategory) {
        $(articleContent+'[data-category="'+category+'"][data-type="'+type+'"][data-subcategory="'+subcategory+'"]').addClass('active');
      } else {
        $(articleContent+'[data-category="'+category+'"][data-type="'+type+'"]').addClass('active'); 
      }
      
      var articleHeight = $(article).outerHeight();
      var menuHeight = $(burgerMenu).outerHeight();
      if (menuHeight > articleHeight) {
        var heightDiff = menuHeight - articleHeight;
        $(mainContainer).css('padding-bottom', heightDiff+'px');
      }
    });
  }
}
