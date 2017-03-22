<?php

	include("config.php");
	$courseid = $_GET['courseid'];

	$result = mysqli_query($con,"SELECT * FROM courses where courseid like '".$courseid."'  ") or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
		return;

    
	}
