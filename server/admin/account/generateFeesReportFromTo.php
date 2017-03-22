<?php
include("config.php");
include("functions.php");
$fromdate = $_GET['fromdate'];
$todate = $_GET['todate'];
$course = array();
$courses = mysqli_query($con,"SELECT * from courses")or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($courses)){
  array_push($course,$x);
}

$record = array();
foreach($course as $value){
  for($i = 1 ; $i <= $value['sem']; $i++){

 $record[$value['courseid'].' '.Sem.$i] = intval(getTotolPaymentCourseWiseFromTo($con,$value['courseid'],$i,$fromdate,$todate));
  }
}
$total = mysqli_query($con,"SELECT `paid_fees` FROM `payment_details` WHERE date BETWEEN '$fromdate' AND '$todate'")or die(mysqli_error($con));
$ara1 = array();
while($x = mysqli_fetch_assoc($total)){
  array_push($ara1,$x);
}
foreach($ara1 as $value){
  $totalFees += $value['paid_fees'];
}
$record['Total'] = $totalFees;
echo json_encode($record);

?>
