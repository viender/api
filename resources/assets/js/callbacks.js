$(document).ready(() => {
    console.log('document ready');
	$('.button-collapse').sideNav();
	$('.dropdown-button').dropdown();

    $('.form-control').focus(() => {
        $('.navbar-mobile-menus').hide();
    });

    $('.form-control').blur(() => {
        $('.navbar-mobile-menus').show();
    });
});
