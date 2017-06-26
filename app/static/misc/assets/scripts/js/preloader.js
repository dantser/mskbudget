"use strict";
$(document).ready(function() {
  var preloader = $('#preloader');
  var sections = $('.sections_main-page');
  window.onload = function () {
    if(!preloader || !sections) {
      return
    }
    setTimeout(function() {
      preloader.fadeOut('slow', function() {});
      $('.sections').removeClass('sections_main-page');
    }, 2000);
  }

});
