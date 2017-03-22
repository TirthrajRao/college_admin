<?php
include("config.php");
mysqli_set_charset($con,"utf8");
$courseid = $_GET['courseid'];
$sem = $_GET['sem'];
$name = $_GET['name'];
$ara = array();
$result = mysqli_query($con,"SELECT * FROM `student` where `sem` = '$sem' AND `courseid` = '$courseid' AND `name` = '$name'  ") or die(mysqli_error($con));

while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x);
	}
	echo json_encode($ara);


?>
