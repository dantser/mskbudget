budget.init();

$document.on("ready", function() {

    utils.getOrientation();

});

$window.on("load", function() {

});

$window.on("orientationchange", function() {

    utils.getOrientation();
    
});