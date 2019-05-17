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
    $('.menu_button').click(function(event){
        event.preventDefault();
        // $('#overlay').toggleClass('dbbl');
        $('.menu_block').css({'top': '0px', 'opacity': '1'})
        // $('body').css('overflow', 'hidden')
        // $('html').css('overflow', 'hidden')
    });
    $('.menu_close-btn').click(function(event){
        event.preventDefault();
        $('.menu_block').css({'top': '-5000px', 'opacity': '0'})
        $('body').css('overflow', 'auto')
        $('html').css('overflow', 'auto')
    });
    $("nav ul li").on("click","a", function (event) {
        console.log(this)
        if($(this).hasClass('parent_li')){
            $(this).siblings('ul').toggleClass('dbbl');
        }
        else{
            $('.menu_block').removeClass('dbbl');
        }
    });

    $('.slick_spec').on('beforeChange', function(event, slick, currentSlide, nextSlide){
// здесь навешиваете разные анимации для своих элементов, группируете их по времени выполнения и в свою очередь делаете скорость анимации в слике с учетом всех ваших временных выполнений
//         $(currentSlide).addClass('bounce')

    });

    $('.slick_spec').slick({
        useTransform: true,
        speed: 300  // скорость анимации будет зависить от времени анимирования всех ваших блоков
});

});



