<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1

  include("config.php");
  include("functions.php");
  $data = file_get_contents("php://input");
  $data = json_decode($data,true);
  $sid = $_GET['sid'];
   $courseid = getCourseFromSid($con,$sid);
$imgData1 = $data['imageData'];

//$output_file = '../../studentPhoto/'.$courseid.'/'.$academicYear;
//$img = base64_to_jpeg($imagedata, $output_file);
// print_r($img);
  // print_r($_FILES);




  $sid = $_GET['sid'];

  $courseid = getCourseFromSid($con,$sid);
  $name = getNameFromSid($con,$sid);
  $dob = getDobFromSid($con,$sid);
  $fullname = explode(" ", $name);
  $lname = $fullname[0];
  $fname = $fullname[1];

  if (!file_exists('../../studentPhoto/'.$courseid.'/'.$academicYear)) {
    exec(mkdir('../../studentPhoto/'.$courseid.'/'.$academicYear,766, true));
}
  $upath='../../studentPhoto/'.$courseid.'/'.$academicYear.'/';
  $photoPath = 'studentPhoto/'.$courseid.'/'.$academicYear.'/';
  $name = $_FILES['file']['name'];
  $newName = $lname.'_'.$fname.'_'.$dob.'.jpg';
  $target = $upath.$name;
  echo $target;
  if($imgData1 != ''){
    $imgData1 = substr($imgData1, strrpos($imgData1, ','));
      file_put_contents($upath.$newName, base64_decode($imgData1));
      echo "webcame image";
      mysqli_query($con,"UPDATE `student` set path='$photoPath$newName' where sid = '$sid'") or die(mysqli_error($con));


  }
  if(move_uploaded_file($_FILES['file']['tmp_name'],$target)){
    rename($upath.$name,$upath.$newName);
   echo $_FILES['file']['name']." Uploaded.";
   mysqli_query($con,"UPDATE `student` set path='$photoPath$newName' where sid = '$sid'") or die(mysqli_error($con));
  }
  else{
   echo "Failed to upload.";
  }

?>
