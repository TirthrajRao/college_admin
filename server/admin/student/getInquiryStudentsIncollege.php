<?php
	include('config.php');
	include('functions.php');
	$academicYear1 = $_GET['academicYear'];
	if($academicYear1 == undefined){
		$academicYear1 = $academicYear;
 	}
	
	$pending = getPendingInquiry($con,$academicYear1);
	$admission = getAdmissionInquiry($con,$academicYear1);
	$result = array();
    $result['pending'] = $pending;
    $result['admission'] = $admission;
    echo json_encode($result);



	
?>