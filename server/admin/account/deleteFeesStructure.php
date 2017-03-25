<?php
	include('config.php');

	$id = $_GET['id'];

	mysqli_query($con, "DELETE FROM `course_fees` WHERE `id` like '$id'")or die(mysqli_error($con));

?>