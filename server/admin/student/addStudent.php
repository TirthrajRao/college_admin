<?php
    require('config.php');
    include("functions.php");
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }


    if($grno == 0){
      
      $grno = getLastGrNoByCourseid($con ,$courseid);
    }
    $pincode = (int)$pincode;
    
    mysqli_query($con,"INSERT INTO `student`(
      `name`,
      `motherName`,
      `adharCard`,
      `accountNub`,
      `bankName`,
      `ifscCode`,
      `address`,
      `city`,
      `taluka`,
      `dist`,
      `pincode`,
      `sphone`,
      `rphone`,
      `fphone`,
      `ophone`,
      `gender`,
      `dob`,
      `category`,
      `last_inst`,
      `courseid`,
      `yearOfAdmission`,
      `seat_nub`,
      `stream`,
      `uni`,
      `mop`,
      `yop`,
      `attempt`,
      `total_marks`,
      `obtain_marks`,
      `percent`,
      `grno`,
      `sem`,
      `path`,
      `year`,
      `adharImg`) VALUES ('".$name."',
      '".$motherName."',
      '".$adharCard."',
      '".$accountNub."',
      '".$bankName."',
      '".$ifscCode."',
      '".$address."',
      '".$city."',
      '".$taluka."',
      '".$dist."',
      '".$pincode."',
      '".$sphone."',
      '".$rphone."',
      '".$fphone."',
      '".$ophone."',
      '".$gender."',
      '".$dob."',
      '".$category."',
      '".$last_inst."',
      '".$courseid."',
      '".$academicYear."',
      '".$seat_nub."',
      '".$stream."',
      '".$uni."',
      '".$mop."',
      '".$yop."',
      '".$attempt."',
      '".$total_marks."',
      '".$obtain_marks."',
      '".$percent."',
      '".$grno."',
      '".$sem."',
      '".$path."',
      '".$year."',
      '".$adhar."')" )or die(mysqli_error($con));
      $last_id = mysqli_insert_id($con);

      echo $last_id;
      ?>
