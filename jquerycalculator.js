$(document).ready(function()
{
    $("#add").click(function(event){
        var n3=parseInt($("#num3").val());
        var n4=parseInt($("#num4").val());
        var res=n3+n4;
        $("#jqresult").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#sub").click(function(event){
        var n3=parseInt($("#num3").val());
        var n4=parseInt($("#num4").val());
        var res=n3-n4;
        $("#jqresult").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#mul").click(function(event){
        var n3=parseInt($("#num3").val());
        var n4=parseInt($("#num4").val());
        var res=n3*n4;
        $("#jqresult").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#div").click(function(event){
        var n3=parseInt($("#num3").val());
        var n4=parseInt($("#num4").val());
          var res=n3/n4;
        $("#jqresult").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#mod").click(function(event){
        var n3=parseInt($("#num3").val());
        var n4=parseInt($("#num4").val());
        var res=n3%n4;
        $("#jqresult").text("Result is: " + res).show();
        event.preventDefault();
    });
});