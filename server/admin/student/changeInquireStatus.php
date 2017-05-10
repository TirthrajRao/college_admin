<?php
	include('config.php');
	include('function.php');
	$id = $_GET['id'];

	mysqli_query($con, "UPDATE `studentInquiry` SET `status`= '1' WHERE `id` like '$id'")or die(mysqli_error(error));
?>