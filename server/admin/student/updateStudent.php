<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);

foreach ($data as $key=>$value)
{
		${$key}=$value;
}


if(isset($sid)){

	mysqli_query($con,"UPDATE `student`
		SET
		`name` 				=		'".$name."',
        `motherName` = '".$motherName."'
    `address`     =   '".$address."',
    `city`        =   '".$city."',
    `taluka`      =   '".$taluka."',
    `dist`        =   '".$dist."',
    `pincode`     =   '".$pincode."',
    `sphone`      =   '".$sphone."',
    `rphone`      =   '".$rphone."',
    `fphone`      =   '".$fphone."',
    `ophone`      =   '".$ophone."',
    `gender`      =   '".$gender."',
    `dob`         =   '".$dob."',
    `category`    =   '".$category."',
    `last_inst`   =   '".$last_inst."',
    `courseid`  	=   '".$courseid."',
    `path`        =   '".$path."',
    `seat_nub`    =   '".$seat_nub."',
    `stream`      =   '".$stream."',
    `uni`         =   '".$uni."',
    `mop`         =   '".$mop."',
    `yop`         =   '".$yop."',
    `attempt`     =   '".$attempt."',
    `total_marks` =   '".$total_marks."',
    `obtain_marks`=   '".$obtain_marks."',
    `percent`     =   '".$percent."',
		`sem`					=		'".$sem."',
		`grno`			=		'".$grno."',
        `bankName` = '".$bankName."',
        `accountNub` = '".$accountNub."',
        `ifscCode` = '".$ifscCode."'
		where sid = '$sid'")
    or die(mysqli_error($con));

}
