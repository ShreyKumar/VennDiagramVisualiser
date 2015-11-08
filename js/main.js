//EVENTS
$(document).ready(function(){
    $("input#expression").hide();
    $("#startover").hide();
    var circle = "<div class='circle' style='border-color: black'></div>";
    var shaded = "<div class='shaded'></div>";


    $("button#draw").click(function(){
        //set guide
        $(".guide").text("Click anywhere to make circles and form a venn diagram.");


        $(".playground:not(#expression)").mousedown(function(e){
            $(this).append(circle);

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
                add_sound();
            });

        });
    });

    $("button#enter").click(function(){
        //set guide
        $(".guide").text("Enter your expression below, and we will do everything for you!");
    });

    $("div#buttons > button").click(function(){
        $("button#startover").hide();
    });

    $("button#startover").click(function(){
        $("button#draw").show();
        $("button#enter").show();
        $("input#expression").hide();
        $("div#expguide").empty();

        $(".circle:last-child").stop();
    });


    $(".playground").mouseup(function(){
        $(".circle:last-child").stop();
    });

    $("#expression").click(function(){
        $(".circle:last-child").stop();
    });
    $("#enter").click(function(){
        $("button#draw").hide();
        $("button#enter").hide();
        $("button#startover").show();
        $("input#expression").show();

        $("div#expguide").append("Guide: n - intersection, u - union, ' - complement");

        $("#expression").keyup(function (e) {
            if (e.keyCode == 13) {
                if(check_exp($("#expguide").val())){
                    $("div#expguide").css("color", "red");
                    $("div#expguide").text("Oops! You entered the expression in an incorrect format");
                } else {
                    $("p.guide").empty();
                    $("div#buttons").empty();

                    //add a circle
                    $(".playground").append(circle);


                    $(".circle:last-child").css("left", "400px");
                    $(".circle:last-child").addClass("first");

                    $(".circle:last-child").animate({
                        height: 140,
                        width: 140,
                        left: e.pageX-200,
                        top: e.pageY-70
                    }, 2000, function() {
                        // Animation complete.
                        add_sound();
                    });

                    //add another circle
                    $(".playground").append(circle);

                    $(".circle:last-child").css("right", "263px");
                    $(".circle:last-child").addClass("second");

                    $(".circle:last-child").animate({
                        height: 140,
                        width: 140,
                        left: e.pageX-200,
                        top: e.pageY-70
                    }, 2000, function() {
                        // Animation complete.
                        add_sound();
                        $("div.playground").append(shaded);
                        $(".circle.first").addClass("shaded-active");
                    });


                }
            }
        });


    });



});


function add_sound(){
    $("audio").remove();
    $("body").prepend("<audio autoplay><source src='mp3/blop.mp3' type='audio/mpeg'></audio>");
}


//EXPRESSION CHECKER
function check_exp(exp){
    return /^[A-Z]'? (u|n) [A-Z]$/.test(exp);
}
