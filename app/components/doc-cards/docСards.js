import $ from 'jquery';

export default function docCards() {
  const DIR = $('.section-tabs__card_dir').parents('.tile__item');
  const TOP_BUTTON = $('.js-button-top');
  const NAV = $('.section-tabs__navigation');
  const FAVOR = $('.section-tabs__is-added');

  DIR.each( function () { // eslint-disable-line
    const EL = $(this);
    // const ACTIVE_CLASS = 'graphic__data_active';
    EL.on('click', (e) => {
      e.preventDefault();
      // EL.parent().siblings().removeClass(ACTIVE_CLASS);
      const DIRNAME = $(this).find('.section-tabs__card').data('directory');
      const DIRNAMETEXT = $(this).find('.section-tabs__title').text();
      $('.section-tabs__current-dir').text(DIRNAMETEXT);
      $('.tile__item').addClass('hidden');
      $('.section-tabs__card[data-directory="'+DIRNAME+'"]').each(function(){
        if (!$(this).hasClass('section-tabs__card_dir')) {
          $(this).parents('.tile__item').removeClass('hidden');
          slider('.section-tabs_documents');
        }
      });
      NAV.show();
    })
  })

  TOP_BUTTON.on('click', function(e) {
    e.preventDefault();
    NAV.hide();
    $('.tile__item').removeClass('hidden');
    $('.section-tabs__card[data-directory]').each(function(){
      if (!$(this).hasClass('section-tabs__card_dir')) {
        $(this).parents('.tile__item').addClass('hidden');
        slider('.section-tabs_documents');
      }
    });
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

    parent.find('.section-tabs__content').css('width', wrapperWidth+'px')
  }

  $('.section-tabs__card[data-directory]').each(function(){
    if (!$(this).hasClass('section-tabs__card_dir')) {
      $(this).parents('.tile__item').addClass('hidden');
      slider('.section-tabs_documents');
    }
  });

}
