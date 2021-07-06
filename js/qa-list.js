$(document).ready(function () {
    //頁籤
    $('.qa-tab-link').click(function (e) {
        var QATabListName = $(this).data('name');
        var QATabNumber = $('.qa-content').length;
        //頁籤點擊替換 
        $('.qa-tab-link').children('div').children('p').removeClass('qa-tab-link-content-text-active');
        $(this).children('div').children('p').addClass('qa-tab-link-content-text-active');
        $('.qa-tab-link').children('div').children('span').removeClass('qa-tab-link-content-line-active');
        $(this).children('div').children('span').addClass('qa-tab-link-content-line-active');
        //頁籤內容替換
        for (let i = 0; i < QATabNumber; i++) {
            var QAContentName = $('.qa-content').eq(i).data('name');
            if (QATabListName == QAContentName ) {
                $('.qa-content').eq(i).show();
            } else {
                $('.qa-content').eq(i).hide();
            }
        }
        return false;
    });
    //頁籤的內容
    $('.qa-content-area-title').click(function (e) { 
        $('.qa-content-area-title').children('img').attr('src','images/qa/plus.svg');
        $(this).children('img').attr('src','images/qa/minus.svg');
        
        $('.qa-content-area-title').next('p').hide();
        $(this).next('p').show();
    });
});