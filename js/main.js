$(document).ready(function(){
    $(this).click(function(){
        console.log("hello"); 
    });
    $(".playground").mousedown(function(e){
        $(this).append("<div class='circle' style='border-color: black'></div>");
        
        $(".circle:last-child").css("top", e.pageY-5);
        $(".circle:last-child").css("left", e.pageX-5);
        
        //now increase in size
        $(".circle:last-child").animate({
            height: 140,
            width: 140,
            left: e.pageX-70,
            top: e.pageY-70
        }, 3000, function() {
        // Animation complete.
        
        });
        
    });
    
    $(".playground").mouseup(function(){
        $(".circle:last-child").stop();   
    });
    
});