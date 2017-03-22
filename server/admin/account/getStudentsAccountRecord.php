<?php
include("config.php");

include ("functions.php");

mysqli_set_charset($con,"utf8");
$courseid = $_GET['courseid'];
$sem = $_GET['sem'];
$ara = array();

$allNew =  getSidOfAllNewPending($con,$courseid,$sem);

$size = sizeof($allNew);

	for ($i = 0; $i < $size ;$i++){
 		$a = $allNew[$i];
    $value = mysqli_query($con,"SELECT * FROM student  where `sid` like '".$a."'  ")or die(mysqli_error($con));
  	array_push($ara,mysqli_fetch_assoc($value));

}
echo json_encode($ara);

?>
