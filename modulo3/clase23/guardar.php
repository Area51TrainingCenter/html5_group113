<?php
/*print_r($_POST);
die();*/
$username = $_POST["usuario"];
$password = $_POST["xixa"];

$objeto = array();

if($username == 'chiquititas' and $password == '123456')
{
	$objeto["tipo"] = 1;
	$objeto["mensaje"] = "Logueado satisfactoriamente";
	//echo "<p class='ok'>Logueado satisfactoriamente</p>";
}else{
	$objeto["tipo"] = 2;
	$objeto["mensaje"] = "Intente de nuevo";
	//echo "<p class='error'>Intente de nuevo</p>";
}

echo json_encode($objeto);
?>