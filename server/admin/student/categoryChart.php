<?php
include("config.php");
include("functions.php");
$courseid = $_GET['courseid'];
$result = mysqli_query($con," SELECT `sem` from courses where `courseid` = '".$courseid."'")or die(mysqli_error($con));
$sem = mysqli_fetch_assoc($result);
$sem = $sem['sem'];

$ara = array();

for($i = 1; $i <= $sem; $i+=2 ){
  if ($i == 1){
    $year = First;
  } else if($i == 3){
    $year = Second;
  }else {
    $year = Third;
  }
  $ara[$year.' '.'year'.' '.'open'] = getTotalStudentCountOfOpen($con,$courseid,$i);
  $ara[$year.' '.'year'.' '.'sebc'] = getTotalStudentCountOfSebc($con,$courseid,$i);
  $ara[$year.' '.'year'.' '.'st'] = getTotalStudentCountOfSt($con,$courseid,$i);
  $ara[$year.' '.'year'.' '.'sc'] = getTotalStudentCountOfSc($con,$courseid,$i);
}
$ara['Total'.' '.'Students'] = getTotalStudents($con,$courseid);
echo json_encode($ara);
?>
