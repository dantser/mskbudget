import $ from 'jquery';

export default () => {
  
  if ($('.analytics-gov-debt').length) {
    var leftFrame = $('.analityc-control-frame_left'),
        frameStage = leftFrame.find('.analityc-control-group'),
        firstFrameStage = frameStage.first(),
        addGroup = leftFrame.find('.analityc-add-group');
  }
  
}