$(document).ready(function () {
    //作答效果
    $('.test-content-area-answer a').click(function (e) {
        //啟動答案狀態
        $('.test-content-area-answer a').removeClass('test-answers-active');
        $('.test-content-area-answer a').attr('data-status', 'off');
        $('.test-content-area-answer a span').removeClass('test-circle-active');
        $(this).addClass('test-answers-active');
        $(this).attr('data-status', 'on');
        $(this).children('span').addClass('test-circle-active');
        //啟動下一題按鈕
        $('.test-content-area-submit').fadeIn(500);
        return false;
    });
    $('body').on('click', '.test-content-area-answer a', function () {
        //啟動答案狀態
        $('.test-content-area-answer a').removeClass('test-answers-active');
        $('.test-content-area-answer a').attr('data-status', 'off');
        $('.test-content-area-answer a span').removeClass('img-active');
        $(this).addClass('test-answers-active');
        $(this).attr('data-status', 'on');
        $(this).children('span').addClass('test-circle-active');
        //啟動下一題按鈕
        $('.test-content-area-submit').fadeIn(500);
        return false;
    });

    //題庫
    //第一題
    var Question1 = 'いよいよ今日は入社<span class="question-bold">面接</span>だ、緊張するわ。';
    var Answer1A = '<span class="question-list"></span>のんせつ';
    var Answer1B = '<span class="question-list"></span>めんせい';
    var Answer1C = '<span class="question-list"></span>けんせつ';
    var Answer1D = '<span class="question-list"></span>めんせつ';
    //第二題
    var Question2 = '先日発表されたiPadは性能もデザインも<span class="question-bold">すぐれている</span>から好き。';
    var Answer2A = '<span class="question-list"></span>秀れている';
    var Answer2B = '<span class="question-list"></span>便利ている';
    var Answer2C = '<span class="question-list"></span>勝れている';
    var Answer2D = '<span class="question-list"></span>優れている';
    //第三題
    var Question3 = '実は大和田さんは<span class="question-bold">医学</span>部出身ですよ。';
    var Answer3A = '<span class="question-list"></span>いがく';
    var Answer3B = '<span class="question-list"></span>いやく';
    var Answer3C = '<span class="question-list"></span>いかく';
    var Answer3D = '<span class="question-list"></span>いいがく';
    //第四題
    var Question4 = 'まさか銀行が政府相手に<span class="question-bold">訴訟</span>を起こしたとは予想外でしたね。';
    var Answer4A = '<span class="question-list"></span>そしょう';
    var Answer4B = '<span class="question-list"></span>せしょう';
    var Answer4C = '<span class="question-list"></span>しゅうしょう';
    var Answer4D = '<span class="question-list"></span>そんしょう';
    //第五題
    var Question5 = '半沢くん、これを<span class="question-bold">簡潔</span>に説明して貰おうかな。';
    var Answer5A = '<span class="question-list"></span>かんせつ';
    var Answer5B = '<span class="question-list"></span>かんたん';
    var Answer5C = '<span class="question-list"></span>かんけつ';
    var Answer5D = '<span class="question-list"></span>けんけつ';
    //第六題
    var Question6 = 'はい、私が伊勢島<span class="question-bold">ほてる</span>の社長です。';
    var Answer6A = '<span class="question-list"></span>ハテル';
    var Answer6B = '<span class="question-list"></span>ホテロ';
    var Answer6C = '<span class="question-list"></span>ホテル';
    var Answer6D = '<span class="question-list"></span>モテル';
    //第七題
    var Question7 = '勘違いするな、渡真利君は<span class="question-bold">単なる</span>友人です。。';
    var Answer7A = '<span class="question-list"></span>唯一の';
    var Answer7B = '<span class="question-list"></span>大切な';
    var Answer7C = '<span class="question-list"></span>ただの';
    var Answer7D = '<span class="question-list"></span>数少ない';
    //第八題
    var Question8 = '<span class="question-bold">（　　）</span>寝てたので、何も聞こえませんでした。';
    var Answer8A = '<span class="question-list"></span>ぐっすり';
    var Answer8B = '<span class="question-list"></span>はっきり';
    var Answer8C = '<span class="question-list"></span>ゆっくり';
    var Answer8D = '<span class="question-list"></span>すみやかに';
    //第九題
    var Question9 = '木本常務はいつも電車で会社に<span class="question-bold">通っている</span>そうだ。';
    var Answer9A = '<span class="question-list"></span>いっている';
    var Answer9B = '<span class="question-list"></span>かよっている';
    var Answer9C = '<span class="question-list"></span>むかっている';
    var Answer9D = '<span class="question-list"></span>とおっている';
    //第十題
    var Question10 = '今回もハナちゃんに<span class="question-bold">たすけて</span>もらったよ。';
    var Answer10A = '<span class="question-list"></span>援て';
    var Answer10B = '<span class="question-list"></span>救けて';
    var Answer10C = '<span class="question-list"></span>守けて';
    var Answer10D = '<span class="question-list"></span>助けて';
    //作答函式
    function Test(Question, Answer1, Answer2, Answer3, Answer4, BtnNum) {
        $('.test-content-area-question').children('p').remove();
        $('.test-content-area-answer').children('a').remove();
        $('.test-content-area-submit').children('a').remove();
        //新增下一題
        $('.test-content-area-question').append('<p>' + Question + '</p>');
        $('.test-content-area-answer').append('<a href="" data-status="off">' + Answer1 + '</a>');
        $('.test-content-area-answer').append('<a href="" data-status="off">' + Answer2 + '</a>');
        $('.test-content-area-answer').append('<a href="" data-status="off">' + Answer3 + '</a>');
        $('.test-content-area-answer').append('<a href="" data-status="off">' + Answer4 + '</a>');
        //新增下一題按鈕
        $('.test-content-area-submit').append('<a href="" class="' + BtnNum + '">下一題</a>').fadeOut(250);;
    };
    //結果函式
    function Final(Level, Content, ContentList1, ContentList2, ContentList3, ImgSrc, BuyLink) {
        $('.test-content-area-question').remove();
        $('.test-content-area-answer').remove();
        $('.test-content-area-submit').remove();
        //顯示結果
        $('.test-content-area').append('<div class="final-result"></div>');
        $('.final-result').append('<h2>評估結果<span> ' + Level +' </span></h2>');
        $('.final-result').append('<p>' + Content + '</p>');
        $('.final-result').append('<span>這個等級的你具有...</span>');
        $('.final-result').append('<ul></ul>');
        $('.final-result ul').append(ContentList1);
        $('.final-result ul').append(ContentList2);
        $('.final-result ul').append(ContentList3);
        $('.test-content-area').append('<div class="final-content"></div>');
        $('.final-content').append('<div class="final-content-img"></div>');
        $('.final-content-img').append('<img src=' + ImgSrc + '>');
        $('.final-content').append('<div class="final-content-level"></div>');
        $('.final-content-level').append('<div><a href=' + BuyLink + '>立刻採購</a></div>');
        $('.final-content-level').append('<div></div>');
        $('.final-content-level div').eq(1).append('<p>或是你也可以看看</p>');
        $('.final-content-level div').eq(1).append('<a href="#">其他等級</a>')
    };
    //Q1
    $('.test-content-area-submit a').on('click', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus4 == 'on') {
            //正確
            Test(Question2, Answer2A, Answer2B, Answer2C, Answer2D, 'Q2');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus3 == 'on') {
            //錯誤
            Test(Question3, Answer3A, Answer3B, Answer3C, Answer3D, 'Q3');
        }
        return false;
    });
    //Q2
    $('body').on('click', '.Q2', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus4 == 'on') {
            //正確
            Test(Question4, Answer4A, Answer4B, Answer4C, Answer4D, 'Q4');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus3 == 'on') {
            //錯誤
            Test(Question8, Answer8A, Answer8B, Answer8C, Answer8D, 'Q8');
        }
        return false;
    });
    //Q3
    $('body').on('click', '.Q3', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus1 == 'on') {
            //正確
            Test(Question10, Answer10A, Answer10B, Answer10C, Answer10D, 'Q10');
        } else if (AnswersStatus2 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Test(Question6, Answer6A, Answer6B, Answer6C, Answer6D, 'Q6');
        }
        return false;
    });
    //Q4
    $('body').on('click', '.Q4', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus1 == 'on') {
            //正確
            Test(Question5, Answer5A, Answer5B, Answer5C, Answer5D, 'Q5');
        } else if (AnswersStatus2 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Test(Question7, Answer7A, Answer7B, Answer7C, Answer7D, 'Q7');
        }
        return false;
    });
    //Q5
    $('body').on('click', '.Q5', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus3 == 'on') {
            //正確N1
            Final('N1', '評語:快跟你旁邊的人說你會日文', '<li>與日本人溝通的能力</li>', '<li>看日劇根本不需要翻譯(有時還是需要日文字幕)</li>', '<li>複雜的文章也可以了解重點</li>', 'images/question/N1-A.jpg', '#');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus4 == 'on') {
            //錯誤N2
            Final('N2', '評語:騙人!?你根本日文系啊', '<li>大專院校日文系畢業門檻</li>', '<li>說實話這樣就可以在日本生活了</li>', '<li>能從事些與日文相關的簡單工作</li>', 'images/question/N2-A.jpg', '#');
        }
        return false;
    });
    //Q6
    $('body').on('click', '.Q6', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus3 == 'on') {
            //正確
            Test(Question9, Answer9A, Answer9B, Answer9C, Answer9D, 'Q9');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus4 == 'on') {
            //錯誤N5
            Final('N5', '評語:相信你再來會深深感受到自己的成長', '<li>可以分辨日文50音、平假名及片假名</li>', '<li>看到日文文章時可念出些許單字</li>', '', 'images/question/N5-A.jpg', '#');
        }
        return false;
    });
    //Q7
    $('body').on('click', '.Q7', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus3 == 'on') {
            //正確
            Test(Question5, Answer5A, Answer5B, Answer5C, Answer5D, 'Q5');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus4 == 'on') {
            //錯誤N2
            Final('N2', '評語:騙人!?你根本日文系啊', '<li>大專院校日文系畢業門檻</li>', '<li>說實話這樣就可以在日本生活了</li>', '<li>能從事些與日文相關的簡單工作</li>', 'images/question/N2-A.jpg', '#');
        }
        return false;
    });
    //Q8
    $('body').on('click', '.Q8', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus1 == 'on') {
            //正確N3
            Final('N3', '評語:非常好，我們最愛這個等級的求學者', '<li>可以理解多數日文單字的意思</li>', '<li>能夠書寫簡單的日文文章</li>', '<li>對於日常生活所需的單字、會話有初步認知</li>', 'images/question/N3-A.jpg', '#');
        } else if (AnswersStatus2 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Test(Question3, Answer3A, Answer3B, Answer3C, Answer3D, 'Q3');
        }
        return false;
    });
    //Q9
    $('body').on('click', '.Q9', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus2 == 'on') {
            //正確N4
            Final('N4', '評語:知道日本發音為にほん', '<li>可以自負的說你看得懂50音</li>', '<li>能夠了解日常生活中常見的日文單字</li>', '<li>能夠聽懂日文單字並拼出其寫法</li>', 'images/question/N4-A.jpg', '#');
        } else if (AnswersStatus1 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤N5
            Final('N5', '評語:相信你再來會深深感受到自己的成長', '<li>可以分辨日文50音、平假名及片假名</li>', '<li>看到日文文章時可念出些許單字</li>', '', 'images/question/N5-A.jpg', '#');
        }
        return false;
    });
    //Q10
    $('body').on('click', '.Q10', function () {
        var AnswersStatus1 = $('.test-content-area-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-content-area-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-content-area-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-content-area-answer a').eq(3).attr('data-status');
        if (AnswersStatus4 == 'on') {
            //正確N3
            Final('N3', '評語:非常好，我們最愛這個等級的求學者', '<li>可以理解多數日文單字的意思</li>', '<li>能夠書寫簡單的日文文章</li>', '<li>對於日常生活所需的單字、會話有初步認知</li>', 'images/question/N3-A.jpg', '#');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus3 == 'on') {
            //錯誤
            Test(Question9, Answer9A, Answer9B, Answer9C, Answer9D, 'Q9');
        }
        return false;
    });
});
