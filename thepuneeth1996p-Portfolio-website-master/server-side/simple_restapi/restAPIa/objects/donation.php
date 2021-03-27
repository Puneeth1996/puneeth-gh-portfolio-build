<?php

class Donation{

    // database connection and table name
    private $conn;
    private $table_name = "donation";
    // object properties
    public $id;
    public $userName;
    public $Amount;
    public $dated;


    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }



    // read all blogs
    function read(){
        
        $query = "SELECT * FROM (
            SELECT * FROM ".$this->table_name."  ORDER BY id DESC LIMIT 16
        ) as r ORDER BY id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }


}

?>