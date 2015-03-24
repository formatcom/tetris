<?php
	require_once("funciones.php");
	if (isset($_GET["id"])){
		$select = $_GET["id"];
		if ($select == 1){
			
			//Guardar
			$A = _clean($_GET["nickname"]);
			guardarP($A, $_GET["pts"]);
		
		}else if ($select == 2){
			
			//Mostrar
			echo record();

		}
	}
?>