import $ from 'jquery';

export default () => {
  const TABLINK = $('.open-con .button-light');

  TABLINK.each( function () {
    const EL = $(this);
    const ACTIVE_CLASS = 'button-light--fill';
    EL.on('click', (e) => {
      e.preventDefault();
      TABLINK.removeClass(ACTIVE_CLASS);
      EL.addClass(ACTIVE_CLASS);
    })
  })

  $('.button-light').on('click', function(){
    $('.analityc-control-switcher_con a').removeClass('active');
    $('.analityc-control-switcher_con a:first-child').addClass('active');
    $('.tabs__tab').hide();
    $('.tabs__tab:first-child').show();
  })

  const PROPOSAL = $('.open-con .js-button-proposal');

  PROPOSAL.click(function(e) {
    e.preventDefault();
    $('.open-con__con').hide();
    $('.open-con__popup').show();
  })

}
