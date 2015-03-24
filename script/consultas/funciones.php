<?php

	function conexion(){
		return mysqli_connect("localhost","root","","formatcom");
	}

	function guardarP($A, $B){
		if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		    $ip = $_SERVER['HTTP_CLIENT_IP'];
		} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
		    $ip = $_SERVER['REMOTE_ADDR'];
		}
		mysqli_query(conexion(),"INSERT INTO record (nickname, puntos, ip) VALUES ('$A','$B','$ip')");
	}

	function record(){
		$result = mysqli_query(conexion(),"SELECT nickname, MAX(puntos) AS record FROM record");   
		$row = mysqli_fetch_array($result, MYSQL_ASSOC);
		$envio = array('nickname' => $row["nickname"], 'puntos' => $row["record"]);
		return json_encode($envio);
	}

	function _clean($str) {
	return is_array($str) ? array_map('_clean', $str) : str_replace('\\', '', htmlspecialchars((get_magic_quotes_gpc() ? stripslashes($str) : $str), ENT_QUOTES));
}

?>