<?php
	include('config.php');
	include('function.php');

	$ara = array();
	$result = mysqli_query($con,"SELECT * FROM `studentInquiry` WHERE `status` like '0' ORDER BY `id` DESC")or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		$x['studentRecord'] = json_encode($x['studentRecord']);
		array_push($ara,$x);
	}
	echo json_encode($ara);
?>
