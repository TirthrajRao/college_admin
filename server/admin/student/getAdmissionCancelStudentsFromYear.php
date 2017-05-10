<?php
	include('config.php');
	include('functions.php');
	$academicYear1 = $_GET['academicYear'];
	if($academicYear1 == undefined){
		$academicYear1 = $academicYear;
 	}

	$ara = array();
	// echo $academicYear1;
	$result = mysqli_query($con,"SELECT `student` FROM `cancelStudent` WHERE `academicYear` like '$academicYear1' ORDER BY `id` DESC")or die(mysqli_error($con));

	while($x = mysqli_fetch_assoc($result)){
		array_push($ara,json_decode($x['student']));
	}

	echo json_encode($ara);
?>