<?php

include("config.php");
$data = file_get_contents('php://input');
$data = json_decode($data,true);

$username = $data['username'];
$password = $data['password'];

$result = mysqli_query($con," SELECT `username`,`id`,`type` FROM logindetails where BINARY `username` = '$username' AND BINARY `password`= '$password' ") or die(mysqli_error($con));
if(mysqli_num_rows($result) == 1){
	session_start();


	 while($x = mysqli_fetch_assoc($result)){
         $_SESSION['username'] = $x['username'];
	 	echo json_encode($x);
	 }
}
else{
	 header("HTTP/1.0 401 Unauthorized");
}
?>
