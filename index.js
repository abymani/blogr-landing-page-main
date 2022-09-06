
$(document).ready(function(){

    // toggle sub menus
    $(".pages").children().click(function(){
        //closing any prviously opened submenu
        $(".pages >li").siblings().not($(this)).find(".submenu").hide();
        //reseting arrow position of previoulsy opened submenu
        $(".pages >li").siblings().not($(this)).removeClass("active");
        //displaying submenu on click
        $(this).find(".submenu").toggle();
        //setting arrow position of active menu
        $(this).toggleClass("active");
    });

    //mobile menu toggle
    $(".mobile-menu").click (function(){
        $(".menu").toggle();
    });

});