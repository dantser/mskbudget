import $ from 'jquery';

export default () => {
  var page = $('.media-infographic');

  const moreBtn = page.find('.media-infographic__show-more');
  const contentWrapper = page.find('.media-infographic__card-wrapper');

  moreBtn.on('click', function(e) {
    e.preventDefault();
    contentWrapper.animate({
      height: contentWrapper.find('.media-infographic__content').height()
    }, 1000, function(){
      contentWrapper.height('auto');
    });
  })
}
