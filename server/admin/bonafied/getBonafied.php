<?php
include("config.php");
mysqli_set_charset($con,"utf8");

$ara = array();
$result = mysqli_query($con,"SELECT * FROM `student` where 'name','course_id', ") or die(mysqli_error($con));

while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x);
	}
	echo json_encode($ara);


?>
