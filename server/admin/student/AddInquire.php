<?php
require('config.php');
    include("functions.php");
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }
    $date = date("Y-m-d");
    $data['date'] = $date;
    $status = 0;
    $student = json_encode($data);

    mysqli_query($con,"INSERT INTO `studentInquiry`(`studentRecord`,`status`,`academicYear`) VALUES ('$student','$status','$academicYear')")or die(mysqli_error($con));