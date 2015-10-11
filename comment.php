<?php

if(isset($_POST['email'])){
    $email_to = "keheirah@gmail.com";
    $email_subject = "STX contact form";
    
    $name = $_POST['name'];
    $email_from = $_POST['email'];
    $comments = $_POST['comment'];
    
    $email_message = "Form details below.\n\n";
 
     $body = <<<EOD
<br /><hr><br />
Name: $name<br />
Email: $email_from<br />
Comment: $comment<br />
EOD;
    
    $headers = "Form: ".$email_from."\r\n";
    $headers .= "Coontent-type: text/html\r\n";
    $success = mail($email_to, $email_subject, $body, $headers);
    
    $theResults = <<EOD
<div>
<div align="left">Thank you for you comment.</div>
<a href="index.html">Go Home</a>
EOD;
        
    echo "$theResults";

?>