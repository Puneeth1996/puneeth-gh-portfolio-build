<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }

  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
    $name = $_POST['name'];
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    // $emailBody = "
    // <html>
    // <head>
    // <title>$name $email is contacting you</title>
    // </head>
    // <body style=\"background-color:#fafafa;\">
    // <div style=\"padding:20px;\">
    // Date: <span style=\"color:#888\">$date</span>
    // <br>
    // Email: <span style=\"color:#888\">$email</span>
    // <br>
    // Message: <div style=\"color:#888\">$message</div>
    // </div>
    // </body>
    // </html>
    // ";

    $email = $_POST['email'];
    $emailBody = $name . "   " . $email . " \n\n" . $message;
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers

    $to = 'puneeth123npn@gmail.com';
    $subject = 'Contact Page| From '.$name.' '.$email;
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
  }
}
?>

  <?php if (!empty($errors)) : ?> 
            {
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 
{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>