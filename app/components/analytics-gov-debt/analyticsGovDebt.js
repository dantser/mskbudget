import $ from 'jquery';

export default () => {
  
  if ($('.analytics-gov-debt').length) {
    var leftFrame = $('.analityc-control-frame_left'),
        frameStage = leftFrame.find('.analityc-control-group'),
        firstFrameStage = frameStage.first(),
        addGroup = leftFrame.find('.analityc-add-group');
    
    addGroup.on('click', function(e) {
      e.preventDefault();
      firstFrameStage.clone().insertBefore(addGroup);
	});
    
    leftFrame.on('click', '.analityc-remove-group', function(e) {
      e.preventDefault();
      if (frameStage.length > 1) {
        $(this).parent('.analityc-control-group').remove();
      }
    });
  }
  
}