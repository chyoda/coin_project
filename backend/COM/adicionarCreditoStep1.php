<?php

// Esse código é responsavel por verificar se o cliente existe no banco de dados

require_once '../../library/conector.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);
    $guidJson = $data->idCliente;

    $query = mysqli_query($conexao, "SELECT * FROM `client` WHERE `guid` = '$guidJson'");

    if (mysqli_num_rows($query) == 1) {
        // header('OK', true, 200);
        header('OK', true, 200);
        $response = array("message" => "Cliente localizado.");
        echo json_encode($response);
    }

    if (mysqli_num_rows($query) == 0) {
        header('NOT FOUND', true, 404);
        $response = array("message" => "Cliente não localizado.");
        echo json_encode($response);
    }
}