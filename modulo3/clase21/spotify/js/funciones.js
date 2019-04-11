jQuery(document).ready(function(){
	jQuery(".burguer").click(function(e){
		e.preventDefault();
		/*
		version con addClass y removeClass

		if(jQuery(this).hasClass("abrir"))
		{
			jQuery(this).removeClass("abrir");
			jQuery(".cabeceraprincipal .menu").removeClass("abrir");
		}else{
			jQuery(this).addClass("abrir");
			jQuery(".cabeceraprincipal .menu").addClass("abrir");
		}*/
		jQuery(this).toggleClass("abrir");
		jQuery(".cabeceraprincipal .menu").toggleClass("abrir");

	});

});