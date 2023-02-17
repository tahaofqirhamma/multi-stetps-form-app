<?php
header('Access-Control-Allow-Origin: *');    
header("Access-Control-Allow-Headers:*");
header('Access-Control-Allow-Methods: *');

$host = 'localhost';
$user = 'root';
$DB_NAME =  'candidats';
$password = 'taha02';
$dsn = "mysql:host=$host;dbname=$DB_NAME";

$method = $_SERVER['REQUEST_METHOD'];


if ($method == 'POST') {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone =  $_POST['phone'];
    $id = $_POST['id'];
    $diploma = $_POST['diploma'];
    $about = $_POST['about'];
    $specialty = $_POST['specialty'];
     $yoex= $_POST['yoex'];
  
  
    // TODO: Do something with the form data, like save it to a database

    $conn = new PDO($dsn, $user, $password);
    $sql = 'INSERT INTO per_info (FULL_NAME, IDP, EMAIL, PHONE_NUM, ABOUT, DIPLOMA, YEAR_OF_EXP, SPECIALTY) VALUES (:FULL_NAME, :IDP, :EMAIL, :PHONE_NUM, :ABOUT,:DIPLOMA, :YEAR_OF_EXP, :SPECIALTY)';
    $res = $conn->prepare($sql);
    $res->execute(['FULL_NAME'=> $fullName, 'IDP' => $id, 'EMAIL' => $email,'PHONE_NUM' => $phone, 'DIPLOMA' => $diploma, 'YEAR_OF_EXP' => $yoex, 'SPECIALTY' => $specialty, 'ABOUT' => $about]);

   if ($res->rowCount() > 0) {
        echo "Data inserted successfully. $yoex";
    } else {
        echo "Error inserting data.";
    }
}
?>
