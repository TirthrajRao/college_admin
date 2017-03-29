<?php
	require('config.php');
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }
    if(isset($id)){
        $res = mysqli_query($con,"SELECT `password` FROM `logindetails` WHERE `id` like '".$id."'")or die(mysqli_error($con));
        $password = mysqli_fetch_assoc($res);
       if ($password['password'] == $current){
            // mysqli_query($con, "UPDATE `teacher` SET `password`='".$newPassword."' WHERE `tid` = '".$tid."'")or die(mysqli_error($con));
            echo "true";
        }
        else
        {
            echo "false";
        }
    }
	?>