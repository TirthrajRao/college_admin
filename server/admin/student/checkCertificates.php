<?php
include("config.php");

// $sid = $_GET['sid'];
// $type = $_GET['type'];
$sid=1;
$type = 'bonafide';
$result = mysqli_query($con,"SELECT * from certificatedetails where `sid` = '$sid' and `type` = '$type'")or die(mysqli_error($con));

if (mysqli_num_rows($result) > 0){
  $ara = array();
    while($x = mysqli_fetch_assoc($result)){
        array_push($ara,$x);
    }
echo json_encode($ara);

}
 ?>
