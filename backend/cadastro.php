<?php

    require_once __DIR__.'..\library\conector.php';
    require_once __DIR__.'..\library\verificador.php';

    $name = $_POST['name'];
    $login = $_POST['login'];
    $pass = $_POST['password'];
    $occupation = $_POST['occupation'];
    $observation = $_POST['observation'];
    $empresa = $_POST['enterprise'];
    $admin_pass = $_POST['admin_pass'];

    global $conexao;

    
    function buscarIdEmpresa($nomeEmpresa)
    {
        global $empresa;
        verificarExistenciaEmpresa($empresa);
    }
    
    if (verificarExistencia($tabelaOrigem, $login) == 1)
    {
        header('HTTP/1.1 401 Unauthorized');
        echo "O login: $login que foi solicitado para ser cadastrado na tabela: $tabelaOrigem já existe.";
    }
    else
    {
        // mysqli_query($conexao, 'INSERT INTO (`name`, `occupation`, `login`, `password`, `observation`, )')
    }
    