<?php
include("config.php");
include ("functions.php");
mysqli_set_charset($con,"utf8");

$data = file_get_contents("php://input");
$data = json_decode($data,true);

foreach ($data as $key=>$value)
{
		${$key}=$value;
}
$date = date("Y/m/d");



$month = date("m");
	if($month < 6){
		$academicYear = (date('Y')-1).'-'.date('Y');
	}
	else {
		$academicYear = date('Y').'-'.(date('Y')+1);
}

$ara = array();
$certificate = mysqli_query($con,"SELECT * from certificatedetails where `sid` = '$sid'")or die(mysqli_error($con));
$result = mysqli_query($con,"SELECT * FROM payment_details WHERE `sid` = '$sid' AND `academicYear` = '$academicYear' ")or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
  array_push($ara,$x);
}

$ara2= array();
while($x = mysqli_fetch_assoc($certificate)){
  array_push($ara2,$x);
}
$ara1 = array();
$ara1['receipt'] = $ara;
$ara1['certificates'] = $ara2;

echo json_encode($ara1);




?>
