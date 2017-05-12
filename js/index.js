$(document).ready(function(){
    
    //inverted arrow animation
    var indicator=$(".nav-indicator");
    var indicatorBar=$(".nav-indicator-bar");
         
    $("#navList").on('click', 'li.hasArrow', function(){
                
        $('.nav-indicator').css({"display": "block", "transition": "1s"});
            
        var itemWith=$(this).innerWidth();
        var itemLeft = $(this).offset().left;
            
        var itemPositon = itemLeft + itemWith/2 -15;
        var linePositon = itemLeft - 2400 +"px 0"; 

        // if($(this).hasClass("search-nav-item")) {
        // 	itemPositon = itemPositon + 30;
        	
        // }
            
        indicator.css({"left": itemPositon});
        indicatorBar.css({"backgroundPosition": linePositon});  
        

    });
         
});