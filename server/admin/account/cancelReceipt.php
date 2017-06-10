<?php
require 'config.php';
include 'functions.php';
$id = $_GET['id'];
$data = mysqli_query($con,"select * from payment_details where id = '$id'  ")or die(mysqli_error($con));
$data = mysqli_fetch_assoc($data);
foreach ($data as $key=>$value)
{
    ${$key}=$value;
}
$total_fees = getTotalFeesBySem($con,$courseid,$sem);
$total_fees = $total_fees['total_fees'];
$result = mysqli_query($con,"select * from pending_fees where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
if(mysqli_num_rows($result) == 0){
    echo "no pending";
    mysqli_query($con," INSERT INTO `pending_fees`(`pending_fees`,`sid`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,`sem`,`courseid`,`academicYear`,`total_fees`)
 			VALUES ('$paid_fees','$sid',$tution_fees,'$su_exam_fees','$su_sports_fees','$su_enlistment_fees','$misc_fees','$lib_fees','$su_degree_fees','$su_exam_project_fees','$su_enrollment_fees','$viva_project_fees','$sem','$courseid','$academicYear','$total_fees')") or die(mysqli_error($con));
    mysqli_query($con,"delete from payment_details where id = $id and rid = $rid")or die(mysqli_error($con));
    mysqli_query($con,"delete from full_paid where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
    $checklastReceipt =   mysqli_query($con,"SELECT MAX(id) as id  FROM `payment_details` WHERE courseid = '$courseid' and sem = '$sem' and sid = '$sid'")or die(mysqli_error($con));
    $lastid = mysqli_fetch_assoc($checklastReceipt);
    $lastid = $lastid['id'];
    if(mysqli_num_rows($checklastReceipt) >0){
        $lastReceipt = mysqli_query($con,"select * from payment_details where id = '$lastid'")or die(mysqli_error($con));
        $lastReceipt = mysqli_fetch_assoc($lastReceipt);
        $lastPending = $lastReceipt['pending_fees'] + $paid_fees;
         mysqli_query($con,"update payment_details set pending_fees = '$lastPending' where id = '$lastid'")or die(mysqli_error($con));
    };
 $paid_result =   mysqli_query($con,"select * from paid_fees where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
    if(mysqli_num_rows($paid_result)>0){
        while($x = mysqli_fetch_assoc($paid_result)){
            $paid_paidfees = $x['paid_fees'];
            $paid_paidfees = $paid_paidfees - $paid_fees;
            if($paid_paidfees > 0){
                mysqli_query($con,"update `paid_fees` set paid_fees = '$paid_paidfees' where sid = '$sid' and sem = '$sem' ")or die(mysqli_error($con));
            }
            else if($paid_paidfees < 1){
                mysqlli_query($con,"delete from paid_fees where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
            }
        }
    }
}
else if(mysqli_num_rows($result) > 0){
    $result = mysqli_fetch_assoc($result);
    foreach ($result as $key=>$value)
    {
        ${$key.'1'}=$value;
    }
    $pending_fees = $paid_fees + $pending_fees1;
    $tution_fees = $tution_fees + $tution_fees1;
    $su_exam_fees = $su_exam_fees + $su_exam_fees1;
    $su_sports_fees = $su_sports_fees + $su_sports_fees1;
    $su_enlistment_fees = $su_enlistment_fees + $su_enlistment_fees1;
    $misc_fees = $misc_fees + $misc_fees1;
    $lib_fees = $lib_fees + $lib_fees1;
    $su_exam_project_fees = $su_exam_project_fees + $su_exam_project_fees1;
    $su_degree_fees = $su_degree_fees + $su_degree_fees1;
    $su_enrollment_fees = $su_enrollment_fees + $su_enrollment_fees1;
    $viva_project_fees = $viva_project_fees + $viva_project_fees1;

    mysqli_query($con,"UPDATE `pending_fees` SET `pending_fees`='$pending_fees',
      	`tution_fees`='$tution_fees',`su_exam_fees`='$su_exam_fees',
      	`su_sports_fees`='$su_sports_fees',`su_enlistment_fees`='$su_enlistment_fees'
      	,`misc_fees`='$misc_fees',`lib_fees`='$lib_fees',`su_degree_fees`='$su_degree_fees',
      	`su_exam_project_fees`='$su_exam_project_fees',`su_enrollment_fees`='$su_enrollment_fees',
      	`viva_project_fees`='$viva_project_fees',`courseid`='$courseid',`academicYear`='$academicYear' WHERE `sid` like '$sid' And `sem` like '$sem'") or die(mysqli_error($con));
    mysqli_query($con,"delete from payment_details where id = $id and rid = $rid")or die(mysqli_error($con));
    mysqli_query($con,"delete from full_paid where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
    $paid_result =   mysqli_query($con,"select * from paid_fees where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
    if(mysqli_num_rows($paid_result)>0){
        while($x = mysqli_fetch_assoc($paid_result)){
            $paid_paidfees = $x['paid_fees'];
            $paid_paidfees = $paid_paidfees - $paid_fees;
            if($paid_paidfees > 0){
               mysqli_query($con,"update `paid_fees` set paid_fees = '$paid_paidfees' where sid = '$sid' and sem = '$sem' ")or die(mysqli_error($con));
            }
            else if($paid_paidfees < 1){
                mysqlli_query($con,"delete from paid_fees where sid = '$sid' and sem = '$sem'")or die(mysqli_error($con));
            }
        }
    }

    $checklastReceipt =   mysqli_query($con,"SELECT MAX(id) as id  FROM `payment_details` WHERE courseid = '$courseid' and sem = '$sem' and sid = '$sid'")or die(mysqli_error($con));
    $lastid = mysqli_fetch_assoc($checklastReceipt);
    $lastid = $lastid['id'];
    if(mysqli_num_rows($checklastReceipt) >0){
        $lastReceipt = mysqli_query($con,"select * from payment_details where id = '$lastid'")or die(mysqli_error($con));
        $lastReceipt = mysqli_fetch_assoc($lastReceipt);
        $lastPending = $lastReceipt['pending_fees'] + $paid_fees;
        mysqli_query($con,"update payment_details set pending_fees = '$lastPending' where id = '$lastid'")or die(mysqli_error($con));
    };
}
