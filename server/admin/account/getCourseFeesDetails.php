<?php

	include("config.php");
	$courseid = $_GET['courseid'];
  $sem = $_GET['sem'];

	$result = mysqli_query($con,"SELECT * FROM course_fees where `courseid` = '".$courseid."' AND `sem` = '".$sem."'  ") or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
		return;


	}
