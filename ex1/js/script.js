$(function(){
    $('nav>ul>li').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    })
    $('nav>ul>li').mouseleave(function(){
        $(this).children('ul').stop().slideUp();
    })

    let i = 0;
    
    function r(){
        if(i < 2) {
            i++;
        }
        else{
            i = 0
        }
        $('.r').animate({"marginTop": -300*i}, 1000);
    }

    setInterval(r,3000);


    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
})
