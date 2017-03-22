<?php
    include('config.php');
    $data = file_get_contents("php://input");
    $data = json_decode($data,true);
    print_r($data);
    foreach ($data as $key=>$value)
    {
        ${$key}=$value;
   }
   if(isset($id)){

   mysqli_query($con," UPDATE `course_fees` SET

`sdate`= '".$sdate."',
`edate`= '".$edate."',
`tution_fees`= '".$tution_fees."',
`su_exam_fees`= '".$su_exam_fees."',
`su_sports_fees`= '".$su_sports_fees."',
`su_enlistment_fees`= '".$su_enlistment_fees."',
`su_exam_project_fees` = '".$su_exam_project_fees."',
`su_degree_fees` = '".$su_degree_fees."',
`viva_project_fees` = '".$viva_project_fees."',
`su_enrollment_fees` = '".$su_enrollment_fees."',
`misc_fees`= '".$misc_fees."',
`lib_fees`= '".$lib_fees."',
`total_fees`= '".$total_fees."'
 WHERE id = '".$id."' ")

  or die(mysqli_error($con));
}

?>
