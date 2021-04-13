<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

$results = [
    'test_key1'=>'test_value_1',
    'test_key2'=>'test_value_2',
];
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';
$visitor_goal = '';


if (isset($_POST['firsttname'])) {
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['lastname'])) {
    $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])) {
    $visitor_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
}

if (isset($_POST['message'])) {
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
}
if (isset($_POST['goal'])) {
    $visitor_goal = filter_var($_POST['goal'], FILTER_SANITIZE_EMAIL);
}

$results['name'] = $visitor_name;
$results['message'] = $visitor_message;


$email_subject = 'Inquiry from Portfolio Site';
$email_recipient = 'test@junhwa1207@gmail.com';
$email_message = sprintf('Name: %s, Email: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message, $visitor_goal);


$email_headers = array(

    'From'=>$visitor_email
);



$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);
if ($email_result) {
    $results['message'] = sprintf('Thank you for contacting us, %s. You will get a reply within 24 hours.', $visitor_name);
}
if (empty($_POST['firstname'])) {
    $results['message'] = sprintf('First Name is Required');
}
if (empty($_POST['lastname'])) {
    $results['message'] = sprintf('Last Name is Required');
}
if (empty($_POST['email'])) {
    $results['message'] = sprintf('Email is Required');
}

echo json_encode($results);
