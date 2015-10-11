<?php
<button>Login</button>
$dbhost = $_SERVER["gotdb.cl5k3tw2xzvq.us-west-2.rds.amazonaws.com:3307"];
$dbuser = $_SERVER["Teamflex"];
$dbpass = $_SERVER["flexin4u"];
$conn = mysql_connect($dbhost,$dbuser,$dbpass);

   if(! $conn )
   {
      die('Could not connect: ' . mysql_error());
   }
   
   echo 'Connected successfully';
   
   mysql_select_db( 'users' );


$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM Login WHERE Username=$username AND password = $password";

$result = mysql_query($sql);

if(!$result){
    header("Location: buy.html");
}
    mysql_close($conn);
?>