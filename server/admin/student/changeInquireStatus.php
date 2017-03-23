<?php
	include('config.php');
	include('function.php');
	$id = $_GET['id'];

	mysqli_query($con, "UPDATE `studentInquiry` SET `status`= '1' WHERE `id` = `$id`")or die(mysqli_error(error));
?>