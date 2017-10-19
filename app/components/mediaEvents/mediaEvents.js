import $ from 'jquery';

export default () => {
  var page = $('.mediaEvents');

  const moreBtn = page.find('.mediaEvents__show-more');
  const content = page.find('.mediaEvents__announcement, .mediaEvents__previous');

  content.each(function() {
    var $this = $(this);
    $this.find('.mediaEvents__show-more').on('click', function(e) {
      var contentWrapper = $this.find('.mediaEvents__outer');
      e.preventDefault();
      contentWrapper.animate({
        height: contentWrapper.find('.mediaEvents__card-wrapper').height()
      }, 1000, function(){
        contentWrapper.height('auto');
      });
    })
  })

}
