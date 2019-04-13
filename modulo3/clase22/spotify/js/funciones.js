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

	jQuery(".flechita-abajo").click(function(e){
		e.preventDefault();
		/*var xixh = jQuery(this).attr("href");
		jQuery("html,body").animate({
			"scrollTop": jQuery(xixh).offset().top
		},1200);*/

		var seccion = jQuery(this).closest("section").next();
		jQuery("html,body").animate({
			"scrollTop": jQuery(seccion).offset().top
		},1200);
	})

});