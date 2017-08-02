$(document).ready(function() {
	
	// New message balloon

	if($("li.icon-pm strong.private-message-count").text() === "0") {
		$("li.icon-pm .private-message-count").hide();
	};
	if($("li.icon-notification strong.notification-count").text() === "0") {
		$("li.icon-notification .notification-count").hide();
	};

});