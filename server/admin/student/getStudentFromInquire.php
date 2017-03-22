<?php
	include('config.php');
	include('function.php');

	$ara = array();
	$result = mysqli_query($con,"SELECT `student` FROM `studentInquiry` ORDER BY `id` DESC")or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x);
	}
	echo json_encode($ara);
?>
