<?php
include("config.php");
include ("functions.php");
mysqli_set_charset($con,"utf8");
 $courseid = $_GET['courseid'];
 $sem = $_GET['sem'];
$month = date("m");
	if($month < 6){
		$academicYear = (date('Y')-1).'-'.date('Y');
	}
	else {
		$academicYear = date('Y').'-'.(date('Y')+1);
}
$ara = array();
$result = mysqli_query($con,"SELECT * FROM payment_details WHERE `sem` = '$sem' AND `courseid` = '$courseid' AND `academicYear` = '$academicYear'")or die(mysqli_error($con));
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

echo json_encode($ara2);

?>
