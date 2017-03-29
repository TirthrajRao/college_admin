<?php
include("config.php");
include("functions.php");
$data = file_get_contents("php://input");
$data = json_decode($data,true);

foreach ($data as $key=>$value)
{
    ${$key}=$value;
}

$date = date('y-m-d');
mysqli_query($con,"INSERT INTO `certificatedetails`(`cid`, `sid`, `type`, `purpose`, `issuer`, `date`) VALUES ('$cid','$sid','$type','$purpose','$issuer','$date') ")or die(mysqli_error($con));


?>
