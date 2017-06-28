"use strict";
$(document).ready(function() {
  var preloader = $('#preloader');
  var sections = $('.sections_main-page');
  var msie = ua.indexOf("MSIE ");
  var edge = ua.indexOf('Edge/');
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || edge > 0 )   {
    setTimeout(function() {
      preloader.fadeOut('slow', function() {});
      $('.sections').removeClass('sections_main-page');
    }, 1000);
    // $('.sections').removeClass('sections_main-page');
  };

  window.onload = function () {
    if(!preloader || !sections) {
      return
    };
    setTimeout(function() {
      preloader.fadeOut('slow', function() {});
      $('.sections').removeClass('sections_main-page');
    }, 1000);
  }
});
