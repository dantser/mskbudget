import $ from 'jquery';

export default () => {

  if ($('.wrapper_main').length) {
    $(window).resize(function(){
      location.reload();
    });
  }

}
