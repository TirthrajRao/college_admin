<?php
include("config.php");
include("functions.php");
$course = $_GET['course'];
$sem = $_GET['sem'];
$fromDate = $_GET['fromdate'];
$toDate = $_GET['todate'];
$ara= array();
$result = mysqli_query($con,"SELECT * from `payment_details` where courseid = '".$course."' AND sem = '".$sem."' AND date BETWEEN '$fromDate' AND '$toDate'")or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
  array_push($ara,$x);
}
$ara1 = array();
$ara2 = array();
foreach($ara as $value){
  $value['name'] = getStudentNameFromSid($con,$value['sid']);
  array_push($ara1,$value);

}
foreach($ara1 as $value){
  $value['grno'] = getStudentGrnoFromSid($con,$value['sid']);
  array_push($ara2,$value);

}
// echo "functions";

echo json_encode($ara2);
 ?>
