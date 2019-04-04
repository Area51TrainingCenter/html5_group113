/*var numero1 = 10;
var numero2 = 9;

var resultado = numero1 + numero2;

if(resultado > 18)
{
	alert("Eres mayor de edad");
}else
{
	alert("Eres menor de edad");
}*/

var numero1 = parseInt(prompt("Ingresa edad1"));
var numero2 = parseInt(prompt("Ingresa edad2"));

var resultado = numero1 + numero2;
/*
if(resultado > 18)
{
	alert("Eres mayor de edad");
}else
{
	alert("Eres menor de edad");
}*/

if(resultado == 18)
{
	alert("Eres mayor de edad");
}else if(resultado == 19)
{
	alert("Eres un poquito mayor de edad");
}else if(resultado <= 17)
{
	alert("eres menor de edad");
}else{
	alert("eres viejo");
}

/*
switch (resultado) {
  case 17:
	alert("eres menor de edad");
	break
  case 18:
    alert("Eres mayor de edad");
	break    
  case 19:
    alert("Eres un poquito mayor de edad");
	break    
  default:
	alert("eres viejo");
}*/