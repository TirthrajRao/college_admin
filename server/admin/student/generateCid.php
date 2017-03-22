<?php
include("config.php");
$type = $_GET['type'];
$result = mysqli_query($con,"SELECT MAX(cid) as `newid`  from `certificatedetails` where type = '$type'")or die(mysqli_error($con));
$oldcid = mysqli_fetch_assoc($result);
$cid = $oldcid['newid'] + 1;
echo $cid;
 ?>
