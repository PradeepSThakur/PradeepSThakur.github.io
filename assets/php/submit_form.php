<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "pradeepthakur.niper@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mailBody = "Full Name: $fullname\n";
    $mailBody .= "Email Address: $email\n";
    $mailBody .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $mailBody, $headers);

    // You can customize the response message as needed
    echo "Thank you for your message. We will get back to you soon.";
} else {
    // If the form is not submitted via POST, redirect to the form page
    header("Location: your_contact_form_page.html");
    exit;
}

?>
