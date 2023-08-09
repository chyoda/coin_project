<?php

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber os dados da requisição
    $requestData = file_get_contents('php://input');
    $data = json_decode($requestData);
    
    if ($data) {
        // Processar e manipular os dados recebidos
        // Aqui você pode realizar as operações desejadas com os dados
        // Por exemplo, inserir os dados em um banco de dados
        // E então criar uma resposta de sucesso
        $response = array('success' => true, 'message' => 'Dados recebidos e processados com sucesso.');
    } else {
        $response = array('success' => false, 'message' => 'Erro ao decodificar JSON.');
    }
} else {
    $response = array('success' => false, 'message' => 'Método não suportado.');
}

echo json_encode($response);
?>
