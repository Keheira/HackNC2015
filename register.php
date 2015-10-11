<?php

$name = $_POST['name'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

$check = "SELECT ".$username." FROM Users";
$result = $conn->query($sql);
if($result->num_rows >0){
    //say username taken
}else{
    $sql = "INSERT INTO Users (Username, Password, Email)
VALUES($username, $password, $email)";
$conn->close();
    if($done){
        header("pages/buy.html");
        exit;
    }
}
?>