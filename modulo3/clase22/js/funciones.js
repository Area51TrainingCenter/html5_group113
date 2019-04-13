var bandera = false;
var xixaImagen = "";
var contador = 0;
jQuery(document).ready(function(){
	jQuery(".reemplazo").click(function(e){
		e.preventDefault();
		/*var xixa = jQuery("img").attr("src");
		jQuery("img").attr("src","google.com");

		var xixa = jQuery(".banner").text();
		jQuery(".banner").text("nuevo texto");

		var xixa = jQuery(".banner").val();
		jQuery(".banner").val("nuevo valor");*/
		if(bandera == false)
		{
			xixaImagen = jQuery(".banner").html();
			var xixahtml = "<p>jdsajadddas 'hola'";
			xixahtml = xixahtml + "hola'";
			xixahtml+="</p>";
			jQuery(".banner").html(xixahtml);
			bandera = true;
		}else{
			jQuery(".banner").html(xixaImagen);
			bandera = false;
		}
	});

	jQuery(".agregar").click(function(e){
		e.preventDefault();
		contador++;
		var cuadrado = "<div class='cuadrado'>"+contador+"</div>";
		jQuery(".banner").append(cuadrado);
	});

	jQuery(".agregarreves").click(function(e){
		e.preventDefault();
		contador++;
		var cuadrado = "<div class='cuadrado'>"+contador+"</div>";
		jQuery(".banner").prepend(cuadrado);
	});
	//solo funcionara este evento si el cuadrado existe en el momentod  e la carga de la web
	/*jQuery(".cuadrado").click(function(){
		var texto = jQuery(this).text();
		alert(texto);
	});	*/

	jQuery(".imagenx").click(function(){
		/*
		Clsest selecciona al elemento padre de algun elemento ya seleccionado
		
		var padre = jQuery(this).closest("section");
		padre.find(".enlace2").remove();*/
		/*
		Netx selecciona el siguiente elemenmto del elemento previamente seleccionado
		jQuery(this).next("a").remove();
		NextAll selecciona todos los siguientes elementos del elementos previamente selecionado
		jQuery(this).nextAll("a").remove();*/

		/*
		Prev selecciona el anterior elemenmto del elemento previamente seleccionado
		jQuery(this).prev("a").remove();
		PrevAll selecciona todos los anteriores elementos del elementos previamente selecionado
		jQuery(this).prevAll("a").remove();*/
	})

	jQuery(".animar").click(function(e){
		e.preventDefault();
		jQuery(".cuadrado").animate({
			"width":"+=50",
			"height" : "+=50",
			"color" : "blue",
			"font-size":"+=20",
			"background-color" : "green"
		},1200,function(){
			//alert("se acabo la animacion");
		});
	});
});

jQuery(document).on("click",".cuadrado",function(){
	var texto = jQuery(this).text();
	alert(texto);
	jQuery(document).off("click",".cuadrado");
});