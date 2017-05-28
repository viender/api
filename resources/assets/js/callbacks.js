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

let c = 0;
let currentScrollTop = 0;
const navbar = $('.navbar-mobile');

$(window).scroll(() => {
    const a = $(window).scrollTop();
    const b = navbar.height() + $('header').height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
        $('.navbar-mobile').addClass('minimize');
    } else if (c > currentScrollTop && !(a <= b)) {
        $('.navbar-mobile').removeClass('minimize');
    } else {
        $('.navbar-mobile').removeClass('minimize');
    }

    c = currentScrollTop;
});
