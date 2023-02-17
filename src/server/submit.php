<?php
header('Access-Control-Allow-Origin: *');    
header("Access-Control-Allow-Headers:*");
header('Access-Control-Allow-Methods: *');

$host = 'localhost';
$user = 'root';
$DB_NAME =  'CANDIDATS';
$password = 'taha02';
$dsn = "mysql:host=$host;dbname=$DB_NAME";

// Get the request method
$method = $_SERVER['REQUEST_METHOD'];

// If the method is POST, continue
if ($method == 'POST') {
    // Get the form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone =  $_POST['phone'];
    $id = $_POST['id'];
    echo "its ok $fullName";

    // TODO: Do something with the form data, like save it to a database

    $conn = new PDO($dsn, $user, $password);
    $sql = 'INSERT INTO per_info (FULL_NAME, IDP, EMAIL, PHONE_NUM) VALUES (:FULL_NAME, :IDP, :EMAIL, :PHONE_NUM)';
    $res = $conn->prepare($sql);
    $res->execute(['FULL_NAME'=> $fullName, 'IDP' => $id, 'EMAIL' => $email,'PHONE_NUM' => $phone]);


}
?>
