$(document).ready(function(){
    let wheelDown = false;
    let isScrolled = false;
    
    // console.log(distance);
    
    window.addEventListener('wheel', function(e){
        let distance = 0;
        let scrollTop = $(window).scrollTop(),
        elemOffset = $('header').offset().top;
        distance = (elemOffset - scrollTop);
        if ( $(window).width() >= 780 & distance === 0 & e.deltaY > 0){
            isScrolled = true;
            $("html, body").animate({ scrollTop: $('#second').offset().top }, 500);
        }
    })
    $('header').on('wheel', function(event){
        
        
    })
})