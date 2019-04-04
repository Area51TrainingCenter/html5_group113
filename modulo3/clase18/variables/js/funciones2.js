var dni = "42890190";
var nombre = "Alonso Perez";
var edad = 34;
var talla = 1.72;
var donarorganos = true;
var lista = ["42890190","Alonso Perez",34,1.72,true];
var lista_optima = [dni,nombre,edad,talla,donarorganos,lista];

console.log(nombre);
console.log(edad);
console.log(talla);
console.log(donarorganos);
console.log(lista);
console.log(lista[0]);
console.log(lista_optima);
console.log(lista_optima[5][0]);

var numero1 = 1;
var numero2 = 3;
/*suma*/
//var resultado = numero1 + numero2;
//alert(resultado);
/*resta*/
//resultado = numero1 - numero2;
//alert(resultado);
/*multiplicacion*/
//resultado = numero1 * numero2;
//alert(resultado);
/*division*/
//resultado = numero1 / numero2;
//alert(resultado);
/*residuo*/
//resultado = numero1 % numero2;
//alert(resultado);
/*prueba*/
//resultado = numero1 / 0;
//alert(resultado);

nombre = nombre + " " + "Lupu";
console.log(nombre);

var prueba_texto = "Hola 'Tito' ";
prueba_texto = 'Hola "Tito" ';
prueba_texto = "Hola \"Tito2\" ";
console.log(prueba_texto);


/*********Parseo de numeros************/

var p1 = "10";
var p2 = "20";
console.log(parseInt(p1) + parseInt(p2));

var n1 = parseInt(prompt("ingresa un numero1"));  // = "10"
var n2 = parseInt(prompt("ingresa un numero2"));  // = "30"
alert(n1 + n2);