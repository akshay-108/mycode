
$(document).ready(function(){
    $("#tog").click(function(){
        $("div.d1").toggle();
    });
    $(".accordion").click(function(){
        $(".accordion-content").toggle();
    });
});