<?php
    include('config.php');
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);

    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
    }
mysqli_query($con," INSERT INTO `course_fees`(`courseid`,
`sem`,
`sdate`,
`edate`,
 `tution_fees`,
`su_exam_fees`,
`su_sports_fees`,
`su_enlistment_fees`,
`su_exam_project_fees`,
`su_degree_fees`,
`viva_project_fees`,
`su_enrollment_fees`,
`misc_fees`,
`lib_fees`,
 `total_fees`)
VALUES
 ('".$courseid."',
   '".$sem."',
   '".$sdate."',
   '".$edate."',
   '".$tution_fees."',
   '".$su_exam_fees."',
   '".$su_sports_fees."',
   '".$su_enlistment_fees."',
   '".$su_exam_project_fees."',
   '".$su_degree_fees."',
   '".$viva_project_fees."',
   '".$su_enrollment_fees."',
   '".$misc_fees."',
   '".$lib_fees."',
   '".$total_fees."')") or die(mysqli_error($con));
?>
