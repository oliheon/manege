<?php

  if (isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $tel = $_POST['tel'];

    $mailTo = "oli@nmd.agency";
    $headers = "From:".$mailFrom".";
    $text = "Vous avez reçu ce message de la part de ".$firstname" ".$lastname".\n\n";

    mail($mailTo, $subject, $text, $header);
  }
