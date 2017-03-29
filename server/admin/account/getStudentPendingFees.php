<?php
include("config.php");
include("functions.php");

$sid = $_GET['sid'];
$sem = $_GET['sem'];
$ara = array();
$value = mysqli_query($con,"SELECT * FROM student  where `sid` like '".$sid."'  ")or die(mysqli_error($con));
  array_push($ara,mysqli_fetch_assoc($value));

  $ara[0]['paid_fees'] = getPaidFeesBySid($con,$ara[0]['sid'],$sem);
  $ara[0]['pending_fees'] = getPendingFeesBySid($con,$ara[0]['sid'],$sem);
  $ara[0]['discount'] = getDiscountFeesBySid($con,$ara[0]['sid'],$sem);
  $ara[0]['total_fees'] = getTotalFeesOfPending($con,$ara[0]['sid'],$ara[0]['pending_fees']['sem']);

  echo json_encode($ara);

 ?>
