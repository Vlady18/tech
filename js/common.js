$(document).ready(function () {
    var show = true;
    var countbox = ".wrap_second";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1500
            });
            show = false;
        }
    });
    $('.ourPartners__bottom__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 600,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<div class="ourPartners__top-left__arrows-item ourPartners__top-left__arrows-left"><img src="img/arrow_left.png" alt=""></div>',
        nextArrow: '<div class="ourPartners__top-left__arrows-item ourPartners__top-left__arrows-right"><img src="img/arrow_right.png" alt=""></div>',
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
        });
        $('.companyNews__bottom__wrapper').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 600,
            // cssEase: 'linear',
            arrows: true,
            prevArrow: '<div class="news__arrow news__prev"><img src="img/arrow_left.png" alt=""></div>',
            nextArrow: '<div class="news__arrow news__next"><img src="img/arrow_right.png" alt=""></div>',
            responsive: [
                {
                    breakpoint: 1150,
                    settings:{
                        slidesToShow: 1
                    }
                }
            ]
            });
});

