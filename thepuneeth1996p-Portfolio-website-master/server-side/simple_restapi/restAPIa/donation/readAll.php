<?php
$config = require __DIR__ . '/config.php';
require __DIR__ . '/php-jwt-master/src/BeforeValidException.php';
require __DIR__ . '/php-jwt-master/src/ExpiredException.php';
require __DIR__ . '/php-jwt-master/src/SignatureInvalidException.php';
require __DIR__ . '/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include_once '../config/database.php';
include_once '../objects/donation.php';
$database = new Database();
$db = $database->getConnection();

$donation = new Donation($db);
$stmt = $donation->read();
$num = $stmt->rowCount();

if($num>0){
    $donation_arr=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $donation_itmes=array(
            "id" => $id,
            "userName" => $userName,
            "Amount" => $Amount,
            "dated" => $dated
        );
        array_push($donation_arr, $donation_itmes);
    }
    http_response_code(200);
    $token = array(
        "iss"       => $config['issuer'],
        "aud"       => $config['audience'],
        "iat"       => $config['issued-time'],
        "nbf"       => $config['not-before'],
        "data"      => $donation_arr
    );


    $jwt = JWT::encode($token, $config['secret-key']);
    if($jwt){
        try {
            $decoded = JWT::decode($jwt, $config['secret-key'], array('HS256'));
            http_response_code(200);
            echo json_encode(array(
                "Donations" => $decoded->data
            ));
        }
        catch (\Exception $e) {
            echo 'error' . $e;
        }
    }
}

else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No Items.")
    );
}

?>