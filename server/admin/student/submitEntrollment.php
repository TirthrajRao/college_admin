<?php
include("config.php");
$sid = $_GET['sid'];
$enrollment = $_GET['enrollment'];
mysqli_query($con,"UPDATE  `student` set `enrollment` = '".$enrollment."' where `sid` = '".$sid."' ")or die(mysqli_error($con));

 ?>
