<?php
include("config.php");
$courseid = $_GET['courseid'];
$sem = $_GET['sem'];
$newSem = $sem+1;
$result = mysqli_query($con,"UPDATE student set `sem` = '$newSem' where `courseid` = '$courseid' and `sem` = '$sem' ")or die(mysqli_error($con));




 ?>
