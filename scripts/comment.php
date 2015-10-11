<?php

if(isset($_POST['email'])){
    $email_to = "keheirah@gmail.com";
    $email_subject = "STX contact form";
    
    $name = $_POST['name'];
    $email_from = $_POST['email'];
    $comments = $_POST['comment'];
    
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comment: ".clean_string($comment)."\n";
    
    $headers = "Form: ".$email_from."\r\n".
        "Reply-To: ".$email_from."\r\n".
        "X-Mailer: PHP/".phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);

?>

Thanks for the message!!!!!
<?php
}
?>