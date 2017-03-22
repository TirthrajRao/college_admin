<?php
include("config.php");
$courseid = $_GET['courseid'];
$sem = $_GET['sem'];

$result = mysqli_query($con,"INSERT INTO passout (sid,name,motherName,address,city,taluka,
  dist,pincode,sphone,rphone,fphone,ophone,gender,dob,category,last_inst,courseid,
  yearOfAdmission,sem,seat_nub,stream,uni,mop,yop,attempt,total_marks,obtain_marks,
  percent,path,grno,enrollment,adharCard,bankName,ifscCode)
 SELECT sid,name,motherName,address,city,taluka,dist,pincode,sphone,rphone,fphone,
 ophone,gender,dob,category,last_inst,courseid,yearOfAdmission,sem,seat_nub,stream,
 uni,mop,yop,attempt,total_marks,obtain_marks,percent,path,grno,enrollment,adharCard,
 bankName,ifscCode from student WHERE `courseid` = '$courseid' and `sem` = '$sem' ")or die(mysqli_error($con));

if($result > 0){
  mysqli_query($con,"DELETE  from student where `courseid` = '$courseid' AND
    `sem` = '$sem' ")or die(mysqli_error($con));
}
 ?>
