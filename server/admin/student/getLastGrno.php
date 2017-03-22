<?php
include("config.php");
include("functions.php");
$courseid = $_GET['courseid'];

	
      $result = mysqli_query($con,"SELECT `sid` FROM student where `courseid` = '$courseid'
      ORDER BY sid DESC LIMIT 1 ")or die(mysqli_error($con));

    $x = mysqli_fetch_assoc($result);
    $last_id = $x['sid'];

    $res = mysqli_query($con,"SELECT `grno`  FROM student where `sid` = '$last_id'")or die(mysqli_error($con));
    $y = mysqli_fetch_assoc($res);
    $z['grno']= $y['grno'] + 1;

    echo json_encode($z);


 ?>
