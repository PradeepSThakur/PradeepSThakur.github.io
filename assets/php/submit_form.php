<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user input
    $fullname = htmlspecialchars($_POST["fullname"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle invalid email address
        echo "Invalid email address.";
        exit;
    }

    $to = "pradeepthakur.niper@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mailBody = "Full Name: $fullname\n";
    $mailBody .= "Email Address: $email\n";
    $mailBody .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        echo "Failed to send the message. Please try again later.";
    }
} else {
    // If the form is not submitted via POST, redirect to the form page
    header("Location: your_contact_form_page.html");
    exit;
}
?>

