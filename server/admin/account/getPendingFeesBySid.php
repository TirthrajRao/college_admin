<?php
	include('config.php');
	include('functions.php');
	// echo $sid;
	$sid = $_GET['sid'];
	$ara = array();
	$result = mysqli_query($con,"SELECT * FROM `pending_fees` WHERE `sid` = '$sid'")or die(mysqli_error($con));
	while ($x = mysqli_fetch_assoc($result)) {
		$ara[] = array('sem' => $x['sem'] , 'pending_fees' => $x['pending_fees']);
	}
	echo json_encode($ara);
?>