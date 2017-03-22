<?php
include("config.php");

include("functions.php");


 $courseid = $_GET['courseid'];
 $sem = $_GET['sem'];
 $araFinal = array();
 $araPaid = array();
 $allPending = getSidOfPendingStudents($con,$courseid,$sem,$academicYear);
$araPhone = array();
$size = sizeof($allPending);

$ara = array();
for ($i = 0; $i < $size ;$i++){

$a = $allPending[$i];
    $value = mysqli_query($con,"SELECT * FROM student  where `sid` like '".$a."'  ")or die(mysqli_error($con));
    $ar = array();
    array_push($ara,mysqli_fetch_assoc($value));



}
foreach($ara as $value){
  $value['paid_fees'] = getPaidFeesBySid($con,$value['sid']);
  array_push($araPaid,$value);

}
foreach($araPaid as $value){
  $value['pending_fees'] = getPendingFeesBySid($con,$value['sid'],$sem);
  array_push($araFinal,$value);

}
foreach($araFinal as $value){
  $value['phone'] = getStudentContactDetailsFromSid($con,$value['sid']);
  array_push($araPhone,$value);

}


echo json_encode($araPhone);
 ?>
