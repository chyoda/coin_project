<?php

require_once '..\library\conector.php';
require_once '..\api_php\verificador.php';

$nomeCliente = $_POST['nomeCliente'];
$dataNascimento = $_POST['dataCliente'];

$dataIntermediaria = strtotime($dataDoFrontend);
$dataFormatadaParaDB = date('Y-m-d', $dataIntermediaria);

