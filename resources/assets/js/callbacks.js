$(document).ready(function() {
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$("html").css('min-width', window.innerWidth);

	if (treasure.client.type == 'desktop') {
		if (window.innerWidth > 955) {
			$("#app").css('min-width', window.innerWidth);
			$(".navbar-desktop").css('min-width', window.innerWidth);
		} else {
			$("#app").css('min-width', 955);
			$(".navbar-desktop").css('min-width', 955);
		}
	}
});
