<?php

// Esse código é responsavel por entregar o nome do cliente ao LerQr baseando-se no ID 

require_once '../../library/conector.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);
    $guidJson = $data->idCliente;

    $consulta = mysqli_query($conexao,"SELECT `name` FROM client WHERE `guid` = '$guidJson'");

    if (!$consulta) {
        die("Erro na consulta: " . mysqli_error($conn));
    }else{
        header('OK', true, 200);
        $response = array("nomeDoCliente" => $consulta);
        echo json_encode($response);
    }

}
?>