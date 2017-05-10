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


$name = getNameFromSid($con,$sid);
$dob = getDobFromSid($con,$sid);

$fullname = explode(" ", $name);
$lname = $fullname[0];
$fname = $fullname[1];

if (!file_exists('../../studentPhoto2/'.$courseid.'/'.$academicYear)) {
  var_dump(mkdir('../../studentPhoto2/'.$courseid.'/'.$academicYear,0777, true));
  exec(chmod("('../../studentPhoto2/'.$courseid.'/'.$academicYear)", 0777,true));

}
$upath='../../studentPhoto2/'.$courseid.'/'.$academicYear.'/';
$photoPath = 'studentPhoto2/'.$courseid.'/'.$academicYear.'/';
$name = $_FILES['file']['name'];
$newName = $lname.'_'.$fname.'_'.$sid.'.jpg';
$target = $upath.$name;
if($imgData1 != ''){
  $imgData1 = substr($imgData1, strrpos($imgData1, ','));
  file_put_contents($upath.$newName, base64_decode($imgData1));
  echo "webcame image";
  mysqli_query($con,"UPDATE `student` set `path`='$photoPath$newName' where sid = '$sid'") or die(mysqli_error($con));


}
print_r($_FILES['file']['tmp_name']);
print_r($_FILES['file']);

if(move_uploaded_file($_FILES['file']['tmp_name'],$target)){
  $result = exec(rename($upath.$name,$upath.$newName));
  chmod($target, 0777);

  mysqli_query($con,"UPDATE `student` set `path` = '$photoPath$newName' where sid = '$sid'") or die(mysqli_error($con));
  echo "Success";
}
else{
 echo "Failed to upload.";
}

?>
