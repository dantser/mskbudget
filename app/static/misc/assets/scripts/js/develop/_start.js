const $window   = $(window),
      $document = $(document),
      $html     = $("html"),
      $body     = $("body");

(function (window, Modernizr) {
'use strict';
var md = new MobileDetect(navigator.userAgent),
    grade = md.mobileGrade();
Modernizr.addTest({
    mobile: !!md.mobile(),
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobilegradea: grade === 'A'
});
window.mobileDetect = md;
})(window, Modernizr);

const utils = {};

utils.delegate = function createDelegate(object, method){
    var shim =  function(){
         method.apply(object, arguments);
    }
    return shim;
}

utils.getOrientation = function getOrientation() {

    switch (window.orientation) {

        case  90:
        case -90: $html.attr("data-orientation","landscape"); break;

        case 180:
        case   0: $html.attr("data-orientation","portrait");  break;

        default:  $html.attr("data-orientation","no-orientation");

    }

}

const budget = {modules : []};
budget.extend = function(moduleName, moduleData){
    if(!moduleName){
        console.log("Error creating module")
        return;
    }
    if(!moduleData){
        var moduleData = {elements: {}, init: function(){console.log("Empty init for module")}};
    }
    this[moduleName] = moduleData;
    this.modules.push( moduleData );
    return moduleData;
}
budget.init = function(){
    var totalModules = budget.modules.length;
    for(var k = 0; k < totalModules; k++){
        budget.modules[k].init();
    }
}