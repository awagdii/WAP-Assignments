$(document).ready(function(){

    $("#start").click(function(){
        $(".boundary").removeClass("youlose");
        $("#status").text("started.....");

        $(".boundary").on("mouseenter",function(){
            $(".boundary").addClass("youlose");
            $("#status").text("You Lose :(");
        });
    
        $("#maze").on("mouseleave",function(){
            $(".boundary").addClass("youlose");
            $("#status").text("You Lose :(");
        });

        $("#end").on("mouseenter",function(){
            $("#status").text("You Win :)");
            $(".boundary").off("mouseenter");
            $("#maze").off("mouseleave");
        });

        // $(".boundary").mouseenter(function(){
        //     $(".boundary").addClass("youlose");
        //     $("#status").text("You Lose :(");
        // });
    
        // $("#maze").mouseleave(function(){
        //     $(".boundary").addClass("youlose");
        //     $("#status").text("You Lose :(");
        // });

        // $("#end").mouseenter(function(){
        //     $("#status").text("You Win :)");
        //     $("#maze").off("mouseleave");
        //     $(".boundary").off("mouseover");
        // });
    });

});
