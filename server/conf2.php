<?php
$reqfile = $_SERVER['SCRIPT_NAME'];
$reqfile =  explode('/',$reqfile);

echo ($_SERVER['REQUEST_METHOD']);
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    echo "true";
    echo $name;
}
else{
    echo "false";
}
//$file = end($reqfile);$_SERVER['REQUEST_METHOD'
//if($file == 'login.php'){
//    $host = "localhost";
//    $username = "root";
//    $password = "password";
//    $con = mysqli_connect($host,$username,$password,"tnrao1") or die ("Could not connect");
//    mysqli_set_charset($con,"utf8");
//
//}
//else{
//    session_start();
//
//    if(isset($_SESSION['username'])){
//        $host = "localhost";
//        $username = "root";
//        $password = "password";
//        $con = mysqli_connect($host,$username,$password,"tnrao1") or die ("Could not connect");
//        mysqli_set_charset($con,"utf8");
//    }
//    else {
//        header("HTTP/1.1 401 Unauthorized");
//    }
//}


    ?>