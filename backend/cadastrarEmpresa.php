<?php

require_once '../library/conector.php';

echo "aqui";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nomeEmpresa = $_POST["nomeEmpresa"];
    $descricao = $_POST["descricao"];
    $saldo = $_POST["saldo"];

    mysqli_query($conexao, "INSERT INTO enterprise(`name`, `balance`, `description`) VALUES ('$nomeEmpresa', '$saldo', '$descricao')");
    echo "A empresa foi inserida com sucesso.";
}