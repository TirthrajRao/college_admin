<?php

include("config.php");

require("functions.php");
$data = file_get_contents("php://input");
$data = json_decode($data,true);

foreach ($data as $key=>$value)
{
		${$key}=$value;
}
$date = date("d/m/y");

addDiscountFees($con,$sid,$paid_fees,$discount,$courseid,$sem);
// $pending_fees =	getPendingFees($con,$paid_fees,$courseid,$sem);

		mysqli_query($con,"INSERT INTO `paid_fees` (`sid`,`paid_fees`,`date`,`discount`) VALUES('".$sid."','".$paid_fees."','".$date."','".$discount."')") or die(mysqli_error($con));

?>
