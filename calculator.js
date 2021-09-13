function show_hide()
{
    var click=document.getElementById('dropdown-content');
    if(click.style.display==="none")
    {
        click.style.display="block";
    }else{
        click.style.display="none";
    }
}
function addition()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('result').innerHTML="Result is: " + (n1+n2);
}
function subtraction()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('result').innerHTML="Result is: " + (n1-n2);
}
function multiplication()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('result').innerHTML="Result is: " + n1*n2;
}
function division()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('result').innerHTML="Result is: " + n1/n2;
}
function modulus()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('result').innerHTML="Result is: " + n1%n2;
}