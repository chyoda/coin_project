<?php

require_once 'conector.php';

function verificarExistencia($tabelaOrigem, $idAlvo)
{
    global $conexao;

    $escapedLogin = mysqli_real_escape_string($conexao, $idAlvo);
    $quantidade = mysqli_query($conexao, "SELECT * FROM `$tabelaOrigem` WHERE `id` = $escapedLogin");

    if ($quantidade->num_rows >= 0) {
        return 1;
    } else {
        header('HTTP/1.1 404 NOT FOUND');  
        return 0;
    }
}

function verificarExistenciaEmpresa($nomeEmpresa)
{
    global $conexao;

    $quantiEmpresa = mysqli_query($conexao, "SELECT * FROM `enterprise` WHERE `name` = $nomeEmpresa");
    var_dump(mysqli_fetch_assoc($quantiEmpresa));

    if ($quantiEmpresa->num_rows == 1) {
        return 1;
    } else {
        header('HTTP/1.1 404 NOT FOUND');  
        echo "Empresa não encontrada";
        return 0;
    }
}

verificarExistenciaEmpresa("ABC Inc.");

function Autenticador($tabelaOrigem, $login)
{
    global $conexao;

    $escapedLogin = mysqli_real_escape_string($conexao, $login);
    $quantidade = mysqli_query($conexao, "SELECT * FROM `$tabelaOrigem` WHERE `id` = $escapedLogin");

    if ($quantidade->num_rows >= 0) {
        return 1;
    } else {
        header('HTTP/1.1 404 NOT FOUND');  
        return 0;
    }
}