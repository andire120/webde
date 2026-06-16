$(function(){
    $('nav>ul>li').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    })
    $('nav>ul>li').mouseleave(function(){
        $(this).children('ul').stop().slideUp();
    })


    let i = 0;

    function a(){
        if(i < 2) {
            i++;
        }
        else{
            i=0;
        }
            
        $('.gall').animate({"marginTop": -300 * i}, 1000);
    }

    setInterval(a, 3000);

    $('.t').click(function(){
        $('.po').show();
    })
    $('.po button').click(function(){
        $('.po').hide();
    })
})