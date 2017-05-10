<?php
	require('config.php');
    include("functions.php");
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }
    $data['cancelDate'] = date("Y-m-d");
    $student = json_encode($data);
    
    // $que = "INSERT INTO `cancelStudent`(`student`) VALUES ('$student')";
    // echo $que;
    mysqli_query($con,"INSERT INTO `cancelStudent`(`student`,`academicYear`) VALUES ('$student','$academicYear')")or die(mysqli_error($con));
	
     $last_id = mysqli_insert_id($con);
     echo $sid;
    	mysqli_query($con,"DELETE FROM `student` WHERE `sid` like '$sid'")or die(mysqli_error($con));
    
?>