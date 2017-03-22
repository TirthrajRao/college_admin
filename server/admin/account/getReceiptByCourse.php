<?php
include("config.php");
include("functions.php");
$courseid = $_GET['courseid'];
$rid = $_GET['rid'];
$ara = array();
$result = mysqli_query($con," select * from `payment_details` WHERE `courseid` = '".$courseid."' AND `rid` = '".$rid."' ")or die(mysqli_error($con));
  while($x = mysqli_fetch_assoc($result)){
   array_push($ara,$x);
  }

  $ara[0]['name'] = getStudentNameFromSid($con,$ara[0]['sid']);

  echo json_encode($ara);
 ?>
