$(document).ready(function(){
    $("#tog").click(function(){
        $("div#d1").toggle();
    });
    $("#accordion").click(function(){
        $("#accordion-content").toggle();
    });
});

$(document).ready(function(){
    $("#tog2").click(function(){
        $("div#d2").toggle();
    });
    $("#accordion2").click(function(){
        $("#accordion-content2").toggle();
    });
});