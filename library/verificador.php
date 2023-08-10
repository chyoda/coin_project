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

function capturarIdEmpresa($nomeEmpresa)
{
    global $conexao;

    if (verificarExistenciaEmpresa($nomeEmpresa) == 1)
    {
    }
    else
    {
        HEADER('HTTP/1.1 404 NOT FOUND');
        echo "Empresa não encontrada.";
    }

    $quantiEmpresa = mysqli_query($conexao, "SELECT `id` FROM `enterprise` WHERE `name` = '$nomeEmpresa'");
    if (mysqli_num_rows($quantiEmpresa) == 1) 
    {
        $row = mysqli_fetch_assoc($quantiEmpresa);
        $id = $row["id"];
        return $id;
    }
}

function verificarExistenciaEmpresa($nomeEmpresa)
{
    global $conexao;

    $quantiEmpresa = mysqli_query($conexao, "SELECT * FROM `enterprise` WHERE `name` = $nomeEmpresa");
    if ($quantiEmpresa->num_rows == 1) {
        return 1;
    } else {
        header('HTTP/1.1 404 NOT FOUND');  
        return 0;
    }
}

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

