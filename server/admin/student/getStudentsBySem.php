<?php
include("config.php");
include ("functions.php");
mysqli_set_charset($con,"utf8");
 $courseid = $_GET['courseid'];
 $sem = $_GET['sem'];

 $ara = array();
 $result = mysqli_query($con,"SELECT * FROM student where `courseid` = '$courseid' AND `sem` = '$sem' ORDER BY `grno` ") or die(mysqli_error($con));

while($x = mysqli_fetch_assoc($result)){
 		array_push($ara,$x);
	}
 	echo json_encode($ara);


?>
