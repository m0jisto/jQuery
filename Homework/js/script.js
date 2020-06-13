$(document).ready(function () {
        
    function showModal(elem) {
        elem.on('click', function () {
            $('.overlay').slideDown("slow");
            $('.modal').slideDown("slow");
        });
        $('.close').on('click', function () {
            $('.overlay').slideUp(300);
            $('.modal').slideUp(300);
        });
    }  
    
    showModal($('.main_btn'));
    showModal($('.main_btna'));
    showModal($(' a[href="#sheldure"]'));

});