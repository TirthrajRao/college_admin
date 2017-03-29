<?php
include("config.php");
include("functions.php");
$courseid = $_GET['courseid'];
$sem = $_GET['sem'];
$newSem = $sem+1;
$notpaidSid = getSidOfAllNewPending($con,$courseid,$sem); 
$result = paidFeesAtPromote($con,$notpaidSid,$courseid,$sem,$academicYear);

$result = mysqli_query($con,"UPDATE student set `sem` = '$newSem' where `courseid` = '$courseid' and `sem` = '$sem' ")or die(mysqli_error($con));

function paidFeesAtPromote($con,$notpaidSid,$courseid,$sem,$academicYear){
	$feesStructure = getFeesDetailsBySem($con,$courseid,$sem);
	foreach ($feesStructure as $key=>$value)
    {
        ${$key}=$value;
    }
    // $su_sport_fees = (int)$su_sport_fees;
    $date = date("y/m/d");
    $paid_fees = 0;
    $discount = 0;
   	foreach($notpaidSid as $sid){
    
    mysqli_query($con,"INSERT INTO `pending_fees`(`pending_fees`,`sid`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,`sem`,`courseid`,`academicYear`,`total_fees`)
		VALUES ('$total_fees','$sid','$tution_fees','$su_exam_fees','$su_sports_fees','$su_enlistment_fees','$misc_fees','$lib_fees','$su_degree_fees','$su_exam_project_fees','$su_enrollment_fees','$viva_project_fees','$sem','$courseid','$academicYear','$total_fees')")or die(mysqli_error($con));
    

    mysqli_query($con,"INSERT INTO `paid_fees`(`sid`, `paid_fees`, `discount`, `date`, `sem`, `academicYear`) 
    	VALUES ('$sid','$paid_fees','$discount','$date','$sem','$academicYear')")or die(mysql_error($con));
	}

}


 ?>
