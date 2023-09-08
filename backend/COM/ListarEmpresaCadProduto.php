<?php

require_once '../../library/conector.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");


$consulta = mysqli_query($conexao,"SELECT `id`, `name` FROM enterprise");

if (!$consulta) {
    die("Erro na consulta: " . mysqli_error($conn));
}
$empresas = array();

while ($linha = mysqli_fetch_assoc($consulta)) {
    $empresas[] = $linha;
}

echo json_encode($empresas);

?>
