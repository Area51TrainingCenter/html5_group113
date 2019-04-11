jQuery(document).ready(function(){
	jQuery(".abrirlg").click(function(){
		jQuery(".trama").addClass("abrir");
		jQuery(".contenedorimg").addClass("abrir");
	});

	jQuery(".cerrar").click(function(){
		jQuery(".trama").removeClass("abrir");
		jQuery(".contenedorimg").removeClass("abrir");
	});

	jQuery(".mostrarabajo").click(function(e){
		e.preventDefault();
		jQuery(".documento").slideDown("slow",function(){
			//alert("termino de mostrar");
		});
	});

	jQuery(".mostrararriba").click(function(e){
		e.preventDefault();
		jQuery(".documento").slideUp("slow",function(){
			//alert("termino de mostrar");
		});
	});

	jQuery(".abrircerrar").click(function(e){
		e.preventDefault();
		jQuery(".documento").slideToggle("slow");
		jQuery(".documento").find(".negrita").toggleClass("xixa");
		jQuery(".documento").find(".negrita").eq(1).toggleClass("xixa2");
		jQuery(".documento .negrita:nth-child(3)").toggleClass("xixa3");
	});

	jQuery(".boton").click(function(e){
		e.preventDefault();
		//obtener indices de elmentos que estan juntos

		var indice = jQuery(this).index();
		//obtener indices segun su posicion dentro del body

		//var indice = jQuery(".boton").index(this);
		alert(indice);
	});
});




