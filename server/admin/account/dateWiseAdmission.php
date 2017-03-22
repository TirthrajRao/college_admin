<?php
include("config.php");
include("functions.php");

$date = $_GET['date'];

$result = mysqli_query($con,"SELECT Distinct `sid` from `payment_details` where `date` = '$date'")or die(mysqli_error($con));
$ara= array();
while($x = mysqli_fetch_assoc($result)){
  array_push($ara,$x['sid']);

}
$result = mysqli_query($con,"SELECT Distinct `sid` from `payment_details` where `date` < '$date'")or die(mysqli_error($con));
$ara1= array();
while($x = mysqli_fetch_assoc($result)){
  array_push($ara1,$x['sid']);

}
$ara2 = array();
foreach($ara as $x){
  if(!in_array($x,$ara1))
  array_push($ara2,$x);
}
$ara3 = array();
foreach($ara2 as $value){

  $value = getStudentBySid($con,$value);
  array_push($ara3,$value);

}

echo json_encode($ara3);


 ?>
