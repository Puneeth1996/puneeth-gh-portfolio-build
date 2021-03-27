<?php
$db_host        = "localhost";
$db_user        = "root";
$db_pass        = "";
$db_name        = "thepuneeth1996p";

$connection     = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if(!$connection) {
    die("Couldn't connect to DB, " . mysqli_error($connection) );
}



?>