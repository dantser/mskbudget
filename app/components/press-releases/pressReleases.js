import $ from 'jquery';

export default () => {
  var page = $('.press-releases');

  const moreBtn = page.find('.press-releases__more button');
  const contentWrapper = page.find('.press-releases__wrapper');

  moreBtn.on('click', function(e) {
    e.preventDefault();
    contentWrapper.animate({
      height: contentWrapper.find('.press-releases__content').height()
    }, 1000, function(){
      contentWrapper.height('auto');
    });
  })
}
