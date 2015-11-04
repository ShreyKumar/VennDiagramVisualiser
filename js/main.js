//EVENTS
$(document).ready(function(){

    $("button#draw").click(function(){
        //set guide
        $(".guide").text("Click anywhere to make circles and form a venn diagram.");


        $(".playground:not(#expression)").mousedown(function(e){
            $(this).append("<div class='circle' style='border-color: black'></div>");

            $(".circle:last-child").css("top", e.pageY);
            $(".circle:last-child").css("left", e.pageX-140);

            //now increase in size
            // DO NOT CHANGE THIS.
            $(".circle:last-child").animate({
                height: 140,
                width: 140,
                left: e.pageX-200,
                top: e.pageY-70
            }, 3000, function() {
            // Animation complete.

            });

        });
    });

    $("button#enter").click(function(){
        //set guide
        $(".guide").text("Enter your expression below, and we will do everything for you!");
    });

    $("div#buttons > button").click(function(){
        $("div#buttons").html("<button id='startover'>Start over</button>");
    });

    $("button#startover").click(function(){
        $("div#buttons").html("<button id='draw'>Draw</button><button id='enter'>Enter Expression</button>");
        $(".circle:last-child").stop();
    });


    $(".playground").mouseup(function(){
        $(".circle:last-child").stop();
    });

    $("#expression").click(function(){
        $(".circle:last-child").stop();
    });
    $("#enter").click(function(){
        $("#buttons").append("<br /><input type='text' name='exp' id='expression'/>");
        $("div#buttons").append("<div id='expguide'>Guide: n - intersection, u - union, ' - complement</div>");
    });
});

//EXPRESSION CHECKER
function check_exp(exp){
    return /^[A-Z] (u|n) [A-Z]$/.test(exp);
}
