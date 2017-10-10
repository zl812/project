<?php



    $path = "/dashboard/index";


    if(array_key_exists('PATH_INFO', $_SERVER)){
        $path = $_SERVER['PATH_INFO'];
    }



    if(file_exists("views/".$path.".html")){
        include "views/".$path.".html";
    }else{
        header("HTTP/1.1 404 NotFound");
        echo "404";
    }


?>