<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);

$courseId=$data['course_id'];
$sem=$data['sem'];
$sDate=$data['s_date'];
$eDate=$data['e_date'];
$fees=$data['fees'];
if(isset($courseId)){

	mysqli_query($con,"UPDATE `course`
		SET
		`sem`     ='".$sem."'
    `s_date`  ='".$sDate."',
    `e_date   =   '".$eDate."'
    `fees`    =   '".$fees."',
		where course_id  = '$courseId'")
    or die(mysqli_error($con));

}
