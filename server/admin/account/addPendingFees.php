<?php
include("config.php");
require("functions.php");
$month = date("m");
	if($month < 6){
		$academicYear = (date('Y')-1).'-'.date('Y');
	}
	else {
		$academicYear = date('Y').'-'.(date('Y')+1);
}

$data = file_get_contents("php://input");
$data = json_decode($data,true);

foreach ($data as $key=>$value)
{
		${$key}=$value;
}
$name = getStudentNameFromSid($con,$sid);
$date = date("y/m/d");

$result = mysqli_query($con,"SELECT MAX(rid) as `newid`  from `payment_details` where courseid = '$courseid'")or die(mysqli_error($con));
$oldrid = mysqli_fetch_assoc($result);
$rid = $oldrid['newid'] + 1;

updatePendingFees($con,$name,$sid,$rid,$pending_fees,$paid_fees,$tution_fees,$su_exam_fees,$su_sports_fees,$su_enlistment_fees,$misc_fees,$lib_fees,$su_degree_fees,$su_enrollment_fees,$su_exam_project_fees,$viva_project_fees,$paid,$discount,$courseid,$sem,$payMode,$ddOrC_Nub,$bankName,$date,$academicYear);

	mysqli_query($con,"UPDATE paid_fees set
	`paid_fees` = '".$paid_fees."',
	`discount` = '".$discount."',
	`date` = '".$date."'
	WHERE `sid` = '".$sid."' ") or die(mysqli_error($con));
?>
