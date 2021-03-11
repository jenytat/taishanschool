$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.m-menu').toggleClass('mm-wrapper_opening');
    });
});

