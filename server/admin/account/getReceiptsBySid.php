<?php
include("config.php");
include("functions.php");

$sid = $_GET['sid'];
$ara = array();
$result = mysqli_query($con,"SELECT * FROM payment_details WHERE `sid` = '$sid' AND `academicYear` = '$academicYear' ")or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
  array_push($ara,$x);
}
 echo json_encode($ara);


 ?>
