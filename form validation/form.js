$(document).ready(function(){
    $("#submit").click(function(event){
        if($("#name").val()=="" && $("#email").val()==""){
            $("#Error").text("inputs fields are mandatory....").show().fadeOut(2000);
            event.preventDefault();
        }else{
            $("#Success").text("Form Submited...").show().fadeOut(2000);
            event.preventDefault();
        }
    });
});

    
