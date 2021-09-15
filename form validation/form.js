$(document).ready(function(){
    $("#submit").click(function(event){

        $(".error").remove();
        
        if($("#name").val()==""){
            $("#nameErr").html("Name is required");
        }

        if($("#email").val()==""){
            $("#emailErr").html("Email is required");
        }
         if($("#mob").val()==""){
            $("#mobileErr").html("Mobile no. is required");
        }
         if($("#pass1").val()==""){
            $("#passErr").html("Password is required");
        }
         if($("#pass2").val()==""){

            $("#passErr2").html("Password is required");
        }else{

             if($("#pass1").val().length!==$("#pass2").val().length)
            {
                $("#passErr2").text("Both Password range should be same");
            }
        }
        
        if ((!($('#r1').prop('checked'))) && (!($('#r2').prop('checked'))) && (!($('#r3').prop('checked')))) {
            $("#radioErr").text("Select gender is required");
        } 

        if($("#message").val()==""){
            $("#msgErr").html("Message is required");
        }

        event.preventDefault();
    });
});

    
