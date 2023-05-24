$(document).ready(function () {
    $('.menu-burger').click(function () {
        $('.menu1').toggle(500);
        $(this).toggleClass('close');
    });
});