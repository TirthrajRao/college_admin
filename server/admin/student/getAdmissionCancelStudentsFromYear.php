<?php
	include('config.php');

	$academicYear = $_GET['academicYear'];

	$ara = array();

	$result = mysqli_query($con,"SELECT `student` FROM `cancelStudent` WHERE `academicYear` like '$academicYear' ORDER BY `id` DESC")or die(mysqli_error($con));

	while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x);
	}

	echo json_encode($ara);
?>