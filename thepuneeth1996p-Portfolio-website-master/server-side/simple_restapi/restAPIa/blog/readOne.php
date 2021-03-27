
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
include_once '../objects/blog.php';
$database = new Database();
$db = $database->getConnection();

$blog = new Blog($db);


$blog_id = $_POST['blog_id'];

$row = $blog->readOne($blog_id);


if($row){
    $single_blog_arr=array(
        "blog_id" => $row["blog_id"],
        "card_image" => $row["card_image"],
        "card_heading" => $row["card_heading"],
        "blog_type" => $row["blog_type"],
        "card_description" => $row["card_description"],
        "blog_info" => $row["blog_info"],
        "date_added" => $row["date_added"],
    );

    http_response_code(200);
    $token = array(
        "iss"       => $config['issuer'],
        "aud"       => $config['audience'],
        "iat"       => $config['issued-time'],
        "nbf"       => $config['not-before'],
        "data"      => $single_blog_arr
    );


    $jwt = JWT::encode($token, $config['secret-key']);
    if($jwt){
        try {
            $decoded = JWT::decode($jwt, $config['secret-key'], array('HS256'));
            http_response_code(200);
            echo json_encode(array(
                "Blog_data_single" => $decoded->data
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
        array("message" => "Blog With " . $_POST['Blog_unique_id'] ." Not Found!" )
    );
}




?>


