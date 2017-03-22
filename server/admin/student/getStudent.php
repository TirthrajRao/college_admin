<?php

	include("config.php");
	$id = $_GET['id'];

	$result = mysqli_query($con,"SELECT * FROM student where sid like '".$id."'  ") or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
		return;


	}
	?>
