<?php

	include("config.php");
	$id = $_GET["x"];
if(isset($id)){
	mysqli_query($con,"DELETE from student where `sid` = '".$id."'") or die(mysqli_error($con));
}
else{
		header("HTTP/1.0 500 Student couldn't be deleted.");
}
?>
