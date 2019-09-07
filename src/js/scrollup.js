
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>1600){
            $('.pageup').fadeIn();

        }else{
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        let _href = $(this).attr("href");
        $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    })
});


