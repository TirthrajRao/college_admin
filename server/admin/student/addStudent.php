<?php
    include('config.php');
    include("functions.php");
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);
      var_dump($data);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }


    if($grno == 0){
      
      $grno = getLastGrNoByCourseid($con ,$courseid);
    }
    $pincode = (int)$pincode;
    $attempt = (int)$attempt;
    mysqli_query($con,"INSERT INTO `student`(
      `name`,
      `motherName`,
      `adharCard`,
      `int`,
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
      '".$int."',
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
