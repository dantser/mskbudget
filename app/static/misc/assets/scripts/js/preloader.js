"use strict";
$(document).ready(function() {
  var preloader = $('#preloader');
  window.onload = function () {
    if(!preloader) {
      return
    }
    setTimeout(function() {
      preloader.fadeOut('slow', function() {});
    }, 2000);
  }
});
