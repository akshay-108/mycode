//jQuery form modal
$(document).ready(function(){
	$("#modalBtn").click(function(){
		$("#myModal").show();
	});

	$(".close").click(function(){
		$("#myModal").hide();
	});
});

//form valiation in jquery
$(document).ready(function(){

    $("#submit").click(function(event){

    	event.preventDefault();
       
        $("#nameErr").val("");
        $("#emailErr").val("");
        $("#mobileErr").val("");
        $("#passErr").val("");
        $("#passErr2").val("");
        $("#radioErr").val("");
        $("#msgErr").val("");
        
        var numRegex= /^[0-9]+$/;
        var contact = $("#mob").val();

        if($("#name").val()==""){
            $("#nameErr").html("Name is required");
        }

        if($("#email").val()==""){
            $("#emailErr").html("Email is required");  	
	    }

	    if($("#mob").val()=="")
	    {
	    	$("#mobileErr").html("Number is required");
	    }else{
	    	if((contact.length !=10)){	

	        	$("#mobileErr").html("Number should be 10 digits");
    		}else if(!(contact.match(numRegex))){
    			$("#mobileErr").html("Input only numbers");
    		}
	    }
    	
        if($("#pass1").val()==""){
            $("#passErr").html("Password is required");
        }
        if($("#pass2").val()==""){

            $("#passErr2").html("Password is required");
        }else{

             if(($("#pass1").val() != ($("#pass2").val())))
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

        

        // event.preventDefault();
    });
    
});

    
