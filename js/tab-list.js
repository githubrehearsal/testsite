$(document).ready(function () {
    $('.test').click(function (e) {
        $(this).parent('li').next('li').children('.language').removeClass('tab-btn-active'); 
        $(this).addClass('tab-btn-active');
        $(this).parent('li').parent('ul').siblings('.tab-test').css('display', 'flex');
        $(this).parent('li').parent('ul').siblings('.tab-language').css('display', 'none');
        return false;
    });
    $('.language').click(function (e) { 
        $(this).parent('li').prev('li').children('.test').removeClass('tab-btn-active'); 
        $(this).addClass('tab-btn-active');
        $(this).parent('li').parent('ul').siblings('.tab-language').css('display', 'flex');
        $(this).parent('li').parent('ul').siblings('.tab-test').css('display', 'none');
        return false;
    });
});