var expandMenu;
(function($) {
    "use strict";
    if ($('.scroll-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll-top').addClass('show');

                } else {
                    $('.scroll-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
            
        });
        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
    $(".nav-toggle").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".header .menus").removeClass("open");    
            $(".overlay-common").removeClass("show"); 
        }else{
            $(this).addClass("active");
            $(".header .menus").addClass("open");    
            $(".overlay-common").addClass("show"); 
        }
        

    });
    $(".overlay-common").click(function(){
        $(".header .menus").removeClass("open");
        $(".nav-toggle").removeClass("active");
        $(this).removeClass("show");
    });
    $(".header .down").click(function(){
        $(this).toggleClass("active");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
    });
    

})(jQuery);

        
