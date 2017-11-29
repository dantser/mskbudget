import $ from 'jquery';

export default function docCards() {
  const DIR = $('.section-tabs__content .documents-cards__directory').parents('.tile__item');
  const TOP_BUTTON = $('.js-button-top');
  const NAV = $('.section-tabs__navigation');
  const FAVOR = $('.section-tabs__is-added');

  DIR.each( function () { // eslint-disable-line
    const EL = $(this);
    // const ACTIVE_CLASS = 'graphic__data_active';
    EL.on('click', (e) => {
      e.preventDefault();
      // EL.parent().siblings().removeClass(ACTIVE_CLASS);
      const DIRNAME = $(this).find('.documents-cards__directory').data('directory');
      const DIRNAMETEXT = $(this).find('.directory__title').text();
      $('.section-tabs__current-dir').text(DIRNAMETEXT);
      $('.tile__item').addClass('hidden');
      $('.documents-cards__document[data-directory="'+DIRNAME+'"]').each(function(){
        $(this).parents('.tile__item').removeClass('hidden');
      });
      slider('.section-tabs_documents');
      NAV.show();
    })
  });


  TOP_BUTTON.on('click', function(e) {
    e.preventDefault();
    NAV.hide();
    $('.tile__item').removeClass('hidden');
    $('.documents-cards__document[data-directory]').each(function(){
      $(this).parents('.tile__item').addClass('hidden');
    });
    slider('.section-tabs_documents');
  })

  FAVOR.each( function() {
    const EL = $(this);
    EL.on('click', (e)=> {
      e.preventDefault();
      EL.find('.favor').toggleClass('favor_added favor_stroke-color-blue');
    })
  })

  $('.document__star').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('document__star_cur');
  });

  function slider(item) {
    const parent = $(item);
    const slideCnt = parent.find('.tile__item').length - parent.find('.tile__item.hidden').length;
    const slideWidth = parent.find('.tile__item').outerWidth(true);
    const wrapperWidth = slideCnt * slideWidth;

    parent.find('.section-tabs__content').css('width', wrapperWidth+'px');
    
    var holderWidth = parent.find('.dd-holder').width();
    
    if (wrapperWidth <= holderWidth) {
      parent.find($('.owl-nav')).hide();
    } else {
      parent.find($('.owl-nav')).show();
    }
  };

  $('.section-tabs__card[data-directory]').each(function(){
    if (!$(this).hasClass('section-tabs__card_dir')) {
      $(this).parents('.tile__item').addClass('hidden');
      slider('.section-tabs_documents');
    }
  });

  // добавляем три точки при переполнении заголовков

  function overflowDotts(size, element) {
    const CONTENT = $(element);
    CONTENT.each(function () {
      const SIZE = size;
      const CONTENTTEXT = $(this).text();
        if(CONTENTTEXT.length > SIZE){
          $(this).text((CONTENTTEXT.slice(0, SIZE)).trim() + '...');
        }
    });
  };

  overflowDotts(60, '.section-tabs__title');
  overflowDotts(400, '.section-tabs__text');


  if ($(window).width() < 650) {
    overflowDotts(310, '.news__title');
  } else {
    overflowDotts(179, '.news__title');
  }

  // шрифт Fira
  if ($('.budget-income-fira').length) {
    overflowDotts(165, '.news__title');
  }
}
