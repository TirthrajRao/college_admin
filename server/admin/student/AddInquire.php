<?php
require('config.php');
    include("functions.php");
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }

    $student = json_encode($data);

    mysqli_query($con,"INSERT INTO `studentInquiry`(`studentRecord`) VALUES ('$student')")or die(mysqli_error($con));