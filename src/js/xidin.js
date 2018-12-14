$(function(){
    var flag = false;
    $(window).scroll(function(){
        var scrollTop = $("html,body").scrollTop();
        if(scrollTop >= 90){
            if(flag) {return 0};
            flag = true;
            $(".nav-container").stop().animate({
                top:0
            },function(){
                flag = false;
            })
            $("#line").css({
                display:"block"
            })
            $(".nav-container-shop").css({
                display : "block"
            })
            // $(".nav-wrap").css({
            //     color :"red"
            // })
        }
        else{
            $(".nav-container").stop(true,true);
            $(".nav-container").css({
                top:120
            })
            $("#line").css({
                display:"none"
            })
            $(".nav-container-shop").css({
                display : "none"
            })
        }
    })
})