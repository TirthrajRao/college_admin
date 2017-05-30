<?php
require 'config.php';
$sid = $_GET['sid'];

$ara = array();

$ara = getPendingFees($con,$sid);
echo json_encode($ara);




function getPendingFees($con,$sid){
  		$result = mysqli_query($con,"SELECT * FROM pending_fees where `sid` = '$sid'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
  		return $x;
  		}
  		return $x;
  	}