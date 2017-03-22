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

$date = date("y/m/d");

$result = mysqli_query($con,"SELECT MAX(rid) as `newid`  from `payment_details` where courseid = '$courseid'")or die(mysqli_error($con));
$oldrid = mysqli_fetch_assoc($result);
$rid = $oldrid['newid'] + 1;

addPendingFees($con,$sid,$rid,$paid_fees,$tution_fees,$su_exam_fees,$su_sports_fees,$su_enlistment_fees,$misc_fees,$lib_fees,$su_exam_project_fees,$su_degree_fees,$viva_project_fees,$su_enrollment_fees,$discount,$courseid,$sem,$payMode,$ddOrC_Nub,$bankName,$date,$academicYear);


 mysqli_query($con,"INSERT INTO `paid_fees` (`sid`,`paid_fees`,`discount`,`date`,`sem`,`academicYear`) VALUES('".$sid."','".$paid_fees."','".$discount."','".$date."','".$sem."','".$academicYear."')") or die(mysqli_error($con));

?>
