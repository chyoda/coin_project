<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../library/conector.php';
require_once '../api_php/verificador.php';

echo "Código PHP executado";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);

    $nomeProduto = $data->nomeProduto;
    $valorProduto = $data->valorProduto;
    $nomeEmpresa = $data->nomeEmpresa;

    $FK_PRODUCT_ENTEPRISE = capturarIdEmpresa($nomeEmpresa);

    $adicionar_produto = mysqli_query($conexao, "INSERT INTO product(`name`, `value`, `FK_PRODUCT_ENTERPRISE`) VALUES ('$nomeProduto', '$valorProduto', '$FK_PRODUCT_ENTEPRISE')");

    if ($adicionar_produto) {
        echo "Produto adicionado com sucesso";
        header('HTTP/1.1 201 CREATED');
    } else {
        echo "Erro ao inserir a empresa: " . mysqli_error($conexao);
    }
}
