<?php
include("config.php");
include("functions.php");

$date = $_GET['date'];

$result = mysqli_query($con,"select * from payment_details where `date` =  '".$date."' ")or die(mysqli_error($con));

$ara= array();
while($x  = mysqli_fetch_assoc($result)){
  array_push($ara,$x);
}
$ara1 = array();
foreach($ara as $value){
  $value['name'] = getStudentNameFromSid($con,$value['sid']);
  array_push($ara1,$value);

}
$ara2 = array();
foreach($ara1 as $value){
  $value['grno'] = getStudentGrnoFromSid($con,$value['sid']);
  array_push($ara2,$value);

}
echo json_encode($ara2);
 ?>
