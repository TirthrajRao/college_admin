<?php
header('Access-Control-Allow-Origin: *');

// header('Access-Control-Allow-Methods: GET,POST');
// header("Access-Control-Allow-Headers: X-Requested-With");
// header('content-type: application/json; charset=utf-8');
// header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
// header("Cache-Control: *");
// header("Content-Type : text/plain");
error_reporting(E_ALL);
ini_set('display_errors', 'On');
error_reporting(1);
$reqfile = $_SERVER['SCRIPT_NAME'];
$reqfile =  explode('/',$reqfile);

$file = end($reqfile);

if($file == 'login.php'){
    $host = "localhost";
    $username = "root";
    $password = "";
    $con = mysqli_connect($host,$username,$password,"tnrao1") or die ("Could not connect");
    mysqli_set_charset($con,"utf8");

}
else{
    session_start();

    if(isset($_SESSION['username'])){
        $host = "localhost";
        $username = "root";
        $password = "";
        $con = mysqli_connect($host,$username,$password,"tnrao1") or die ("Could not connect");
        mysqli_set_charset($con,"utf8");
          if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = file_get_contents("php://input");
            $data = json_decode($data,true);
            $data = json_encode($data);
            if(isset($data)){
             $date = date("Y-m-d");
             mysqli_query($con,"INSERT INTO `log`(`data`, `user`, `date`,`file`) VALUES ('".$data."','".$_SESSION['username']."','".$date."','".$file."')")or die(mysqli_error($con));
            }
        }   
 
    }
    else {
        header("HTTP/1.1 401 Unauthorized");
    }
}

?>
