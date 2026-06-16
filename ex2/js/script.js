$(function(){
    $('nav>ul>li').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    })
    $('nav>ul>li').mouseleave(function(){
        $(this).children('ul').stop().slideUp();
    })

    let i = 0;

    function silde(){
        if(i < 2){
            i++;
        }
        else {
            i=0;
        }
        $('#silder').stop().animate({"marginTop": -300 * i}, 1000);
    }
    setInterval(silde, 3000);

    $(document).ready(function(){
        $('.te h2').first().addClass('on');
        $('.js>div').first().fadeIn(0);

        $('.te h2').click(function(){

            var i = $(this).index();

            $('.te h2').removeClass('on');
            $(this).addClass('on')

            $('.js>div').fadeOut(0);
            $('.js>div').eq(i).fadeIn();
        })
    })

    $('.pop').click(function(){
        $('.warm').fadeIn();
    })
    $('.warm>button').click(function(){
        $('.warm').fadeOut();
    })

})