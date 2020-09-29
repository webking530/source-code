/*-- MOBILE_MENU_START --*/
$(".mobile-menu-btn-hp > a").click(function() {
    $(".navigation-hp").addClass("mobile-menu-box-hp");
    $(".mobile-menu-overlay-hp").fadeIn();
    $("body").addClass("hide-scroll");
});

$("#close_mob_menu_hp, .mobile-menu-overlay-hp").click(function() {
    $(".navigation-hp").removeClass("mobile-menu-box-hp");
    $(".mobile-menu-overlay-hp").fadeOut();
    $("body").removeClass("hide-scroll");
});
/*-- MOBILE_MENU_END --*/

AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});