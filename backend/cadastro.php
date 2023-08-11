<?php

require_once '..\library\conector.php';
require_once '..\api_php\verificador.php';

// $name = $_POST['name'];
// $cadastro = $_POST['login'];
// $pass = $_POST['password'];
// $occupation = $_POST['occupation'];
// $observation = $_POST['observation'];
// $empresa = $_POST['enterprise'];

$name = "Jhon";
$cadastro = "Picona";
$pass = "654321";
$occupation = "adm";
$observation = "Aleijado";
$nomeEmpresa = "Sapien Gravida LLC";

global $conexao;

$idEmpresa = capturarIdEmpresa($nomeEmpresa);

if (AutenticadorCadastro($cadastro) == 1) {

   $result =  mysqli_query($conexao, "INSERT INTO `user` (`name`, `occupation`, `login`, `password`, `observation`, `FK_user_enterprise`) 
   VALUES ('$name', '$occupation', '$cadastro', '$pass', '$observation', '$idEmpresa');");
    header('HTTP/1.1 201 Created');
    echo "Usuário cadastrado com sucesso.";
    exit();

} else {
    header('HTTP/1.1 401 Unauthorized');
    echo "O login: $cadastro que foi solicitado a ser cadastrado já existe.";
    exit();

}