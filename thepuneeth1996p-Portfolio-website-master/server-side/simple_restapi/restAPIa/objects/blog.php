<?php

class Blog{

    // database connection and table name
    private $conn;
    private $table_name = "blogs";
    // object properties
    public $blog_id;
    public $card_image;
    public $card_heading;
    public $blog_type;
    public $card_description;
    public $blog_info;
    public $date_added;


    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }



    // read all blogs
    function read(){
        
        $query = "SELECT 
                        *
                    FROM 
                        ".$this->table_name."
                ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }







    // read one-blog
    function readOne($blog_id){

        // echo($blog_id);

        $query = "SELECT 
                        *
                    
                    FROM 
                        ".$this->table_name."
                    WHERE blog_id LIKE ?
                ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$blog_id]);


        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $row = $stmt->fetch();

        return $row;
    }


}

?>