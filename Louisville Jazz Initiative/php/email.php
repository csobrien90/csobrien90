<?php

$email = $_POST['visitor_email'];
mail('louisvillejazzinitiative@gmail.com', 'New Email Subscriber!', $email);
header("Location: ../connect.html");

?>

