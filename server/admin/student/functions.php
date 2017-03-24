<?php
include("config.php");
$month = date("m");
		if($month < 6){
			$academicYear = (date('Y')-1).'-'.date('Y');
		}
		else {
			$academicYear = date('Y').'-'.(date('Y')+1);
	}


function getTotalStudentCountOfOpen($con,$courseid,$i){
  $j = $i + 1;
  $result = mysqli_query($con,"SELECT 'Male' as Label, count(gender) as value from student
  where gender= 'Male' and courseid = '$courseid' and category = 'open' and sem in('$i','$j') union
  ( select 'Female' as Label, count(gender) as value from student
  where gender= 'Female' and courseid = '$courseid' and category = 'open' and sem in('$i','$j'))
  union ( select 'Total' as Label, count(gender) as value from student
  where courseid = '$courseid' and category = 'open' and sem in('$i','$j') )")or die(mysqli_error($con));
  $count = array();
  while($x = mysqli_fetch_assoc($result)){
    array_push($count,$x['value']);
  }
  return $count;

}

function getTotalStudentCountOfSebc($con,$courseid,$i){
  $j = $i + 1;
  $result = mysqli_query($con,"SELECT 'Male' as Label, count(gender) as value from student
  where gender= 'Male' and courseid = '$courseid' and category = 'sebc' and sem in('$i','$j') union
  ( select 'Female' as Label, count(gender) as value from student
  where gender= 'Female' and courseid = '$courseid' and category = 'sebc' and sem in('$i','$j'))
  union ( select 'Total' as Label, count(gender) as value from student
  where courseid = '$courseid' and category = 'sebc' and sem in('$i','$j') )")or die(mysqli_error($con));
  $count = array();
  while($x = mysqli_fetch_assoc($result)){
    array_push($count,$x['value']);
  }
  return $count;

}

function getTotalStudentCountOfSc($con,$courseid,$i){
  $j = $i + 1;
  $result = mysqli_query($con,"SELECT 'Male' as Label, count(gender) as value from student
  where gender= 'Male' and courseid = '$courseid' and category = 'sc' and sem in('$i','$j') union
  ( select 'Female' as Label, count(gender) as value from student
  where gender= 'Female' and courseid = '$courseid' and category = 'sc' and sem in('$i','$j'))
  union ( select 'Total' as Label, count(gender) as value from student
  where courseid = '$courseid' and category = 'sc' and sem in('$i','$j') )")or die(mysqli_error($con));
  $count = array();
  while($x = mysqli_fetch_assoc($result)){
    array_push($count,$x['value']);

  }
  return $count;


}

function getTotalStudentCountOfSt($con,$courseid,$i){
  $j = $i + 1;
  $result = mysqli_query($con,"SELECT 'Male' as Label, count(gender) as value from student
  where gender= 'Male' and courseid = '$courseid' and category = 'st' and sem in('$i','$j') union
  ( select 'Female' as Label, count(gender) as value from student
  where gender= 'Female' and courseid = '$courseid' and category = 'st' and sem in('$i','$j'))
  union ( select 'Total' as Label, count(gender) as value from student
  where courseid = '$courseid' and category = 'st' and sem in('$i','$j') )")or die(mysqli_error($con));
  $count = array();
  while($x = mysqli_fetch_assoc($result)){
    array_push($count,$x['value']);
  }
  return $count;

}
function getTotalStudents($con,$courseid){
  $result = mysqli_query($con,"SELECT 'Male' as Label, count(gender) as value from student
  where gender= 'Male' and courseid = '$courseid'  union
  ( select 'Female' as Label, count(gender) as value from student
  where gender= 'Female' and courseid = '$courseid' )
  union ( select 'Total' as Label, count(gender) as value from student
  where courseid = '$courseid'  )")or die(mysqli_error($con));
  $count = array();
  while($x = mysqli_fetch_assoc($result)){
    array_push($count,$x['value']);
  }
  return $count;

}
function getCourseFromSid($con,$sid){
  $result = mysqli_query($con,"SELECT `courseid` FROM student WHERE `sid` = '$sid' ") or die(mysqli_error($con));
  while($x = mysqli_fetch_assoc($result)){
    return $x['courseid'];
  }

}
function getNameFromSid($con,$sid){
  $result = mysqli_query($con,"SELECT `name` FROM student WHERE `sid` = '$sid' ") or die(mysqli_error($con));
  while($x = mysqli_fetch_assoc($result)){
    return $x['name'];
  }

}
function getDobFromSid($con,$sid){
  $result = mysqli_query($con,"SELECT `dob` FROM student WHERE `sid` = '$sid' ") or die(mysqli_error($con));
  while($x = mysqli_fetch_assoc($result)){
    return $x['dob'];
  }

}
function base64_to_jpeg($imagedata, $output_file) {
    $ifp = fopen($output_file, "wb");

    $data = explode('/', $imagedata);

    fwrite($ifp, base64_decode($data[1]));
    fclose($ifp);

    return $output_file;
}
function getLastGrNoByCourseid($con,$courseid){


      $result = mysqli_query($con,"SELECT `sid` FROM student where `courseid` = '$courseid'
      ORDER BY sid DESC LIMIT 1 ")or die(mysqli_error($con));

    $x = mysqli_fetch_assoc($result);
    $last_id = $x['sid'];

    $res = mysqli_query($con,"SELECT `grno`  FROM student where `sid` = '$last_id'")or die(mysqli_error($con));
    $y = mysqli_fetch_assoc($res);
    $z['grno']= $y['grno'] + 1;

    return $z['grno'];

}

function getPendingInquiry($con,$academicYear){
    $ara = array();
    $result = mysqli_query($con, "SELECT `studentRecord` FROM `studentInquiry` WHERE `status` like '0' AND `academicYear` like '$academicYear' ORDER BY `id` DESC")or die(mysqli_error($con));
    
    while($x = mysqli_fetch_assoc($result)){
      array_push($ara , json_decode($x['studentRecord']));
    }
    return $ara;
  }

  function getAdmissionInquiry($con,$academicYear){
    $ara = array();
    $result = mysqli_query($con, "SELECT `studentRecord` FROM `studentInquiry` WHERE `status` like '1' AND `academicYear` like '$academicYear' ORDER BY `id` DESC")or die(mysqli_error($con));
    
    while($x = mysqli_fetch_assoc($result)){
      array_push($ara , json_decode($x['studentRecord']));
    }
    return $ara;
  }


?>
