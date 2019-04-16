<?php
/*print_r($_POST);
die();*/
$busqueda = $_POST["busqueda"];

$listado = array();

if(!empty($busqueda) and isset($busqueda))
{
	$listado["tipo"] = 1;
	$usuario = array();
	$usuario[0]["dni"] = "42890190";
	$usuario[0]["nombre"] = "Alonso";
	$usuario[0]["apellido"] = "Perez";
	$usuario[1]["dni"] = "46568730";
	$usuario[1]["nombre"] = "Ingrid";
	$usuario[1]["apellido"] = "Valdera";
	$usuario[2]["dni"] = "70862074";
	$usuario[2]["nombre"] = "Manuel";
	$usuario[2]["apellido"] = "Collazos";
	$usuario[3]["dni"] = "12345678";
	$usuario[3]["nombre"] = "Daniela";
	$usuario[3]["apellido"] = "No habida";	

	$listado["lista"] = $usuario;
	$listado["mensaje"] = "Busqueda exitosa.";
}else{
	$listado["tipo"] = 2;
	$listado["mensaje"] = "Error de busqueda.";
}

echo json_encode($listado);
?>