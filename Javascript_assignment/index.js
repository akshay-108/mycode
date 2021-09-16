
// javascript dropdown
function dropdownjs()
{
	if(document.getElementById('dropdown-content').style.display==="none")
	{
		document.getElementById('dropdown-content').style.display="block";
	}else{
		document.getElementById('dropdown-content').style.display="none";
	}
}


//javascript calculator
function addition()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('jsresult').innerHTML="Result is: " + (n1+n2);
}
function subtraction()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('jsresult').innerHTML="Result is: " + (n1-n2);
}
function multiplication()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('jsresult').innerHTML="Result is: " + n1*n2;
}
function division()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('jsresult').innerHTML="Result is: " + n1/n2;
}
function modulus()
{
	let n1=parseInt(document.getElementById('num1').value);
	let n2=parseInt(document.getElementById('num2').value);

	let res=document.getElementById('jsresult').innerHTML="Result is: " + n1%n2;
}