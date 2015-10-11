<?php

$dbhost = $_SERVER['mydbinstance.cl5k3tw2xzvq.us-west-2.rds.amazonaws.com:3306'];
$dbname = $_SERVER[''];

$conn = new mysqli($servername, $username, $password);

//check connection
if($conn->connect_error){
    die("COnnection failed: ".$conn->connection_error);
}

?>