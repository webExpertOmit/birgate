



//============Fixed Menu====================== 

   $(document).ready(function(){
       $(window).scroll(function(){
           var menuFixed = $(this).scrollTop();
           if(menuFixed>40){
               $('body').addClass('fixed');
           }
           else{
               $('body').removeClass('fixed');
           }
       })
   })



//============Scroll Top======================
   $(document).ready(function(){
       
     $('.top').click(function(){
            $('html, body').animate({
                scrollTop:0
            },2000)
        });
       
       
       $('.top').hide();
       
       $(window).scroll(function(){
           var topButton = $(this).scrollTop();
           
           if(topButton<400){
               $('.top').fadeOut();
           }
           else{
               $('.top').fadeIn();
           }
       });
       
});


//============Scroll Top======================

$(document).ready(function(){
    new WOW().init();
});





