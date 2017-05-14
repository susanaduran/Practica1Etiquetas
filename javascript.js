function sumar()
{
	var n1= document.getElementById('N1').value;
	var n2= document.getElementById('N2').value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	var sum = n1 + n2;
	document.getElementById('Resultado').innerHTML='TU RESULTADO ES =' + sum;
}

function restar ()
{
	var n1= document.getElementById('N1').value;
	var n2= document.getElementById('N2').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var res= n1-n2;
	document.getElementById('Resultado').innerHTML='TU RESULTADO ES =' + res;
}

function multiplicar ()
{
	var n1= document.getElementById('N1').value;
	var n2= document.getElementById('N2').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var mul=n1*n2;
	document.getElementById('Resultado').innerHTML='TU RESULTADO ES =' + mul;
}

function dividir ()
{
	var n1= document.getElementById('N1').value;
	var n2= document.getElementById('N2').value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var divi=n1/n2;
	document.getElementById('Resultado').innerHTML='TU RESULTADO ES =' + divi;
}