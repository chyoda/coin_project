<?php

    require_once '..\library\conector.php';
    require_once '..\library\verificador.php';

    // $name = $_POST['name'];
    // $cadastro = $_POST['login'];
    // $pass = $_POST['password'];
    // $occupation = $_POST['occupation'];
    // $observation = $_POST['observation'];
    // $empresa = $_POST['enterprise'];

    $name = "Jorge Augusto";
    $cadastro = "Pedrinh";
    $pass = "12345";
    $occupation = "worker";
    $observation = "Nenhuma";
    $nomeEmpresa = "ABC Inc.";

    global $conexao;

    $idEmpresa = capturarIdEmpresa($nomeEmpresa);

    $tabelaOrigem = "user";

    if (AutenticadorCadastro($cadastro) == 1)
    {
        header('HTTP/1.1 401 Unauthorized');
        echo "O login: $login que foi solicitado para ser cadastrado na tabela: $tabelaOrigem já existe.";
    }
    else
    {
        mysqli_query($conexao, "INSERT INTO (`name`, `occupation`, `login`, `password`, `observation`, `FK_user_enterprise`) 
        VALUES ('$name', '$occupation', '$login', '$pass', '$observation', '$idEmpresa')");

    }
    