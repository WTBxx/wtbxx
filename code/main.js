
//!--ローディング

        // ローダー終了
        function end_loader() {
            $('.loader').fadeOut(800);
        }
        // テキスト表示
        function show_txt() {
            $('.loader .txt').fadeIn(400);
        }
        // テキスト非表示
        function hide_txt() {
            $('.loader .txt').fadeOut(400);
        }

        // タイマー処理
        $(window).on('load', function () {
            // 処理①
            setTimeout(function () {
                show_txt();
            }, 1000)
            // 処理②
            setTimeout(function () {
                hide_txt();
            }, 3500)
            // 処理③
            setTimeout(function () {
                end_loader();
            }, 4500)
        })

    //ハンバーガーメニュー

    $(function () {
        $('.hamburger').on('click', function () {
            $('.sp-nav').fadeToggle();
            $('.hamburger').toggleClass('open');
        });
    });

    //スライダー

        $(function () {
            function sliderSetting() {

                var width = $(window).width();

                if (width <= 750) {
                    $('.slider').not('.slick-initialized').slick({
                        autoplay: true,
                        infinite: true,
                        speed: 500,
                        fade: true,
                        dots: true,
                        cssEase: 'linear',
                        arrows: false
                    });
                } else {
                    $('.slider.slick-initialized').slick('unslick');
                }
            }
            sliderSetting();
            $(window).resize(function () {
                sliderSetting();
            });
        });
    $(function () {
        $(window).scroll(function () {
            scroll_effect();
        });
    });

    //ふわっとスクロール(サービス)
    function scroll_effect() {
        var tt = $(window).scrollTop();
        var hh = $(window).height();
        $('.flame').each(function () {
            var yy = $(this).offset().top + 400;//効果発生開始タイミングを操作したい場合は数値を変更する
            if (tt > yy - hh) {
                $(this).addClass('done');
            }
        });
    }

    //

    $(function () {
        function sliderSetting() {

            var width = $(window).width();

            if (width <= 1024) {
                $('.skill').not('.slick-initialized').slick({
                    autoplay: true,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    dots: true,
                    cssEase: 'linear',
                    arrows: false
                });
            } else {
                $('.skill.slick-initialized').slick('unslick');
            }
        }
        sliderSetting();
        $(window).resize(function () {
            sliderSetting();
        });
    });

    $(function () {
        $(window).on('load scroll', function () {
            $('.still-date,.still-text,.feature-date,.feature-text').each(function () {
                //ターゲットの位置を取得
                var target = $(this).offset().top;
                //スクロール量を取得
                var scroll = $(window).scrollTop();
                //ウィンドウの高さを取得
                var height = $(window).height();
                //ターゲットまでスクロールするとフェードインする
                if (scroll > target - height) {
                    //クラスを付与
                    $(this).addClass('active');
                }
            });
        });
    });

            /*--送信用--*/
            $("#my-form").submit(function (event) {
                event.preventDefault();
    
                let baseUrl = "https://docs.google.com/forms/u/0/d/e/xxxxxxxxx/formResponse";
                let name = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
                let mail = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
                let content = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
                let radio = jQuery("[name=\"entry.xxxxxxxxx\"]:checked").val();
                /* チェックボックスは数分だけ作る */
                let checks = ["", "", "", ""];
                let count = 0;
                jQuery("[name=\"entry.xxxxxxxxx\"]:checked").each(function () {
                    checks[count] = jQuery(this).val();
                    count++;
                });
                let select = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
    
                jQuery.ajax({
                    url: baseUrl,
                    data: {
                        "entry.xxxxxxxxx": name,
                        "entry.xxxxxxxxx": mail,
                        "entry.xxxxxxxxx": content,
                        "entry.xxxxxxxxx": radio,
                        "entry.xxxxxxxxx": checks[0],
                        "entry.xxxxxxxxx": checks[1],
                        "entry.xxxxxxxxx": checks[2],
                        "entry.xxxxxxxxx": checks[3],
                        "entry.xxxxxxxxx": select,
                    },
                    type: "POST",
                    dataType: "xml",
                }).always((jqXHR, textStatus, errorThrown) => {
                    window.location.href = "thanks.html";
                });
                return false;
            });