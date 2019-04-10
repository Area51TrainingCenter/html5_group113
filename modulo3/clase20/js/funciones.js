jQuery(document).ready(function(){
	var elemento = jQuery("#home");
	var nombre = jQuery("#nombre");
	var texto = elemento.text();
	/*
	Obteniendo valor del atributo
	alert(elemento.attr("id"));*/
	//alert(nombre.val());
	nombre.val("1000");
	elemento.attr("id","casa");

	jQuery("#btnenviar").click(function(){
		
	});

	jQuery(".abrir").click(function(){
		jQuery(".trama").fadeIn("slow",function(){

		});
	jQuery(".contenedorimg").fadeIn(800);
	});

	jQuery(".cerrar").click(function(){
		jQuery(".trama").fadeOut();
	jQuery(".contenedorimg").fadeOut();
	});

});




