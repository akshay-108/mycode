$(document).ready(function()
{
    $("#add").click(function(event){
        var n1=parseInt($("#num1").val());
        var n2=parseInt($("#num2").val());
        var res=n1+n2;
        $("#result").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#sub").click(function(event){
        var n1=parseInt($("#num1").val());
        var n2=parseInt($("#num2").val());
        var res=n1-n2;
        $("#result").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#mul").click(function(event){
        var n1=parseInt($("#num1").val());
        var n2=parseInt($("#num2").val());
        var res=n1*n2;
        $("#result").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#div").click(function(event){
        var n1=parseInt($("#num1").val());
        var n2=parseInt($("#num2").val());
        var res=n1/n2;
        $("#result").text("Result is: " + res).show();
        event.preventDefault();
    });
    $("#mod").click(function(event){
        var n1=parseInt($("#num1").val());
        var n2=parseInt($("#num2").val());
        var res=n1%n2;
        $("#result").text("Result is: " + res).show();
        event.preventDefault();
    });
});