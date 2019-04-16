jQuery(document).ready(function(){
	jQuery(".btn").click(function(){
		var username = jQuery("#username").val();
		var password = jQuery("#password").val();

		jQuery.ajax({
			method : "post",
			url:"guardar.php",
			/*
			COmentamos esta parte pára que lña resuesta sea no un json, sino html
			dataType:"json",*/
			dataType:"json",
			data:{
				"usuario" : username,
				"xixa" : password
			},
			beforeSend: function() {
				alert("Cargando...");
  			}
		}).done(function(data){
			var mensaje = data.mensaje;
			var xixa2 = "";
			if(data.tipo == 1)
			{
				xixa2 = "<p class='ok'>"+mensaje+"</p>";
			}else{
				xixa2 = "<p class='error'>"+mensaje+"</p>";
			}

			jQuery(".rpta").html(xixa2);
			//jQuery(".rpta").html(data);
		})
	});


	jQuery(".btnbuscar").click(function(){
		jQuery.ajax({
			method : "post",
			url:"lista.php",
			dataType:"json",
			data: jQuery("#frmbusqueda").serialize(),
			beforeSend: function() {
				alert("Cargando...");
  			}
		}).done(function(data){
			
			var mensaje = data.mensaje;
			var xixa2 = "";
			if(data.tipo == 1)
			{
				xixa2 = "<p class='ok'>"+mensaje+"</p>";
				xixa2 = xixa2 + "<table><tr><td>DNI</td><td>NOMBRE</td><td>APELLIDO</td></tr>";
				
				jQuery.each(data.lista, function( indice, valor ) {
					xixa2 +="<tr>";
					xixa2 +="<td>"+valor.dni+"</td>";
					xixa2 +="<td>"+valor.nombre+"</td>";
					xixa2 +="<td>"+valor.apellido+"</td>";
					xixa2 +="</tr>";
				});

				xixa2+="</table>";
			}else{
				xixa2 = "<p class='error'>"+mensaje+"</p>";
			}
			jQuery(".rpta").html(xixa2);
		})
	});
});