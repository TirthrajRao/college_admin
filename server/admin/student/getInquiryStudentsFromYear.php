<?php
	include('config.php');
	include('function.php');
	$academicYear = $_GET['academicYear'];

	$pending = getPendingInquiry($con,$academicYear);
	$admission = getAdmissionInquiry($con,$academicYear);
	$result = array();
    $result['pending'] = $pending;
    $result['admission'] = $admission;
    echo json_encode($result);

?>