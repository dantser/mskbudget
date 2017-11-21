import $ from 'jquery';

export default () => {
  const TABLINK = $('.open-con .button-light');
  if (!TABLINK) {
    return
  }

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      EL.parent().siblings().find('.button-light').removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);

        var filter = EL.data('tab-target'),
            tabs = '.analityc-widget_conform .tabs__tab';
        $(tabs).removeClass('active');
        $(tabs+'[data-tab="'+filter+'"]').addClass('active');
        
    })
  })

  $(document).on('click', '.open-con__con .button-light', function(){
    $('.analityc-control-switcher_con a').removeClass('active');
    $('.analityc-control-switcher_con a:first-child').addClass('active');
    $('.tabs__tab').hide();
    $('.tabs__tab:first-child').show();
  })

  $(document).on('click', '.open-con .js-button-proposal', function(e) {
    e.preventDefault();
    $('.open-con__con').hide();
    $('.open-con__popup').show().find('.tabs .tabs__tab:first-child').show().addClass('active').siblings().removeClass('active');

    $('.open-con__popup').find('.buttons-set__item .button-light').removeClass('button-light--fill');
    $('.open-con__popup').find('.buttons-set__item:first-child .button-light').addClass('button-light--fill');
  })

}
