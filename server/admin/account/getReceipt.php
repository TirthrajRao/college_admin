<?php
include("config.php");
include("functions.php");

$id = $_GET['id'];
$ara = array();
$result = mysqli_query($con," select * from `payment_details` WHERE `id` = '".$id."' ")or die(mysqli_error($con));
  while($x = mysqli_fetch_assoc($result)){
   array_push($ara,$x);
  }

  $ara[0]['name'] = getStudentNameFromSid($con,$ara[0]['sid']);

  echo json_encode($ara);
 ?>
