<?php

class Student{

    // database connection and table name
    private $conn;
    private $table_name = "students";
    // object properties
    public $id;
    public $userName;


    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }



    // read all blogs
    function read(){
        
        $query = "SELECT * FROM ".$this->table_name." ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }


}

?>