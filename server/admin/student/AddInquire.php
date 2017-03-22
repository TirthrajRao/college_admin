<?php
require('config.php');
    include("functions.php");
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }
    
    $date = date("Y");
    $currentYear = (int)$date;
    $lastYear = $currentYear - 1;
    $data['academicYear'] = $lastYear."-".$date;
    $status = 0;
    $student = json_encode($data);

    mysqli_query($con,"INSERT INTO `studentInquiry`(`studentRecord`,`status`) VALUES ('$student','$status')")or die(mysqli_error($con));