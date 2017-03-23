<?php
	include('config.php');
	include('function.php');

	$ara = array();
	
	$result = mysqli_query($con,"SELECT * FROM `studentInquiry` Where `status` like '1' AND `academicYear` like '$academicYear' ORDER BY `id`")or die(mysqli_error($con));


	while($x = mysqli_fetch_assoc($result)){
		$x['studentRecord'] = json_encode($x['studentRecord']);
		array_push($ara , $x);
		// echo $x['studentRecord'];
	}
	echo json_encode($ara);
?>